import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import {
  Search,
  Printer,
  Download,
  Mail,
  Plus,
  Eye,
  Tag,
  Check,
  X,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  Group,
  ChevronLeft,
  ChevronRight,
  Menu,
  Filter,
  MoreHorizontal,
  Edit,
  User,
  Ban,
  RefreshCw,
  MoreVertical,
  Upload,
  Grid,
  List,
  Calendar,
  Clock,
  MapPin,
  Columns,
  Recycle,
  PlusIcon,
  Cog,
  FilterIcon,
  Settings,
  Loader2,
  LayoutGrid,
  Image,
  GanttChartSquare,
  MapIcon,
} from "lucide-react";
import CardView from "../CardView";
import TableView from "../TableView";
import KanbanView from "../KanbanView";
import CalendarView from "../CalendarView";
import "./../../index.css";
import axios from "axios";
import SettingPopup from "../SettingPopup";
import mergeConfig from "../../helpers/mergeConfig";
import formatCellValue from "../../helpers/formatCellValue";
import updateLocalOverride from "../../helpers/updateLocalOverride";
import { exportTable } from "../../helpers/exports";
import CONSTANTS from "../../constants";
import getPathKey from "../../helpers/getPathKey";
import GalleryView from "../GalleryView";
import GanttView from "../GanttView";
import GmapView from "../GmapView";
import { ModalProvider, useModal } from "../../helpers/ModalContext";
const getRowValue = (row, key) => {
  if (key in row) return row[key];
  console.log({ key });
  const lastKey = key?.split(".").pop();
  if (lastKey in row) return row[lastKey];
  const match = Object.keys(row).find((k) => k.split(".").pop() === lastKey);

  return match ? row[match] : undefined;
};
const DATE_OPERATORS = [
  { label: "Is", value: "eq" },
  { label: "Between", value: "between" },
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "This Week", value: "this_week" },
  { label: "Last Week", value: "last_week" },
  { label: "This Month", value: "this_month" },
  { label: "Last Month", value: "last_month" },
  { label: "This Year", value: "this_year" },
];

// Main Reports Component
function Reports({
  report: reportJSON,
  style,
  methods,
  data: reportdata,
  onButtonClick,
  components,
}) {
  const [config, setConfig] = useState(null);
  const [currentView, setCurrentView] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [groupBy, setGroupBy] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [kanbanGroupBy, setKanbanGroupBy] = useState(null);
  const [data, setData] = useState([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const newDropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [debuggerEnable, setDebuggerEnable] = useState(false);
  const [debuggData, setDebuggData] = useState(null);
  const [totalData, setTotalData] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [searchColumn, setSearchColumn] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [activeDateCol, setActiveDateCol] = useState(null);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchColumnLabel, setSearchColumnLabel] = useState();
  const [dateOperator, setDateOperator] = useState("eq");
  const [filterTabs, setFilterTabs] = useState({});
  const [showTableFilters, setShowTableFilters] = useState(false);
  const debounceRef = useRef(null);
  const [filters, setFilters] = useState({});
  const [selectOptions, setSelectOptions] = useState({});
  const { openConfirm, openPrompt, openAlert } = useModal();

  useEffect(() => {
    setCurrentPage(0);
    setRowsPerPage(config?.rowsPerPage);
  }, [config?.rowsPerPage]);

  useEffect(() => {
    setCurrentData(data || []);
  }, [data]);

  useEffect(() => {
    if (!currentView) return;
    updateLocalOverride("template", currentView, reportJSON);
  }, [currentView]);

  useEffect(() => {
    if (config?.DEBUG === true) {
      // debugg_URL
      (async () => {
        const axiosObject = {
          method: "POST",
          url: config?.endPoints?.debuggUrl,
          headers: config?.endPoints?.headers,
          data: {
            ...config?.source,
          },
        };
        const { data } = await axios(axiosObject);
        // console.log({ data });
        setDebuggData(data);
      })();
      setDebuggerEnable(true);
    } else {
      setDebuggerEnable(false);
    }
  }, [config]);

  useEffect(() => {
    if (currentView === "kanban") {
      const entries = Object.entries(config?.kanban?.colkeys || {});
      if (entries.length > 0 && !kanbanGroupBy) {
        setKanbanGroupBy(entries[0][0]);
      }
    }
  }, [currentView, config, kanbanGroupBy]);
  const fetchSelectOptions = async (filterConfig) => {
    const payload = {};

    if (filterConfig.queryid) payload.queryid = filterConfig.queryid;
    if (filterConfig.groupid) payload.groupid = filterConfig.groupid;

    const res = await fetch("/api/common/select-options", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data || {};
  };
  const visibleColumns = useMemo(
    () =>
      Object.entries(config?.datagrid || {}).filter(([, col]) => !col.hidden),
    [config?.datagrid],
  );

  useEffect(() => {
    console.log({ filters });
  }, [filters]);

  // useEffect(() => {
  //   if (!showTableFilters || !visibleColumns) return;

  //   visibleColumns?.forEach(async ([key, col]) => {
  //     const filter = col.filter;
  //     if (filter?.type === "select" && !filter.options) {
  //       const options = await fetchSelectOptions(filter);
  //       setSelectOptions((prev) => ({ ...prev, [key]: options }));
  //     }
  //   });
  // }, [showTableFilters, visibleColumns]);
  function setViewHistory(view) {
    const STORAGE_KEY = getPathKey();
    const localOverrides =
      JSON.parse(
        localStorage.getItem(
          `${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`,
        ),
      ) || {};
    let history = localOverrides.template_history
      ? JSON.parse(localOverrides.template_history)
      : [];
    // remove duplicates + add latest on top
    history = [view, ...history.filter((v) => v !== view)].slice(0, 3);

    const updated = {
      ...localOverrides,
      template: view,
      template_history: JSON.stringify(history),
    };

    localStorage.setItem(
      `${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`,
      JSON.stringify(updated),
    );
    setCurrentView(view);
  }

  const allViews = [
    { key: "table", icon: <List className="w-4 h-4" />, title: "Table" },
    { key: "cards", icon: <LayoutGrid className="w-4 h-4" />, title: "Cards" },
    { key: "kanban", icon: <Columns className="w-4 h-4" />, title: "Kanban" },
    {
      key: "calendar",
      icon: <Calendar className="w-4 h-4" />,
      title: "Calendar",
    },
    { key: "gallery", icon: <Image className="w-4 h-4" />, title: "Gallery" },
    {
      key: "gantt",
      icon: <GanttChartSquare className="w-4 h-4" />,
      title: "Gantt",
    },
    { key: "gmap", icon: <MapIcon className="w-4 h-4" />, title: "Gmap" },
  ];

  const availableViews = allViews.filter(
    (v) => v.key === "table" || (reportJSON && reportJSON[v.key]),
  );

  const STORAGE_KEY = getPathKey();
  const localOverrides =
    JSON.parse(
      localStorage.getItem(
        `${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`,
      ),
    ) || {};
  const history = localOverrides.template_history
    ? JSON.parse(localOverrides.template_history)
    : [];

  const validHistory = history.filter((k) =>
    availableViews.some((v) => v.key === k),
  );

  const activeViewKeys = [
    ...new Set([...validHistory, ...availableViews.map((v) => v.key)]),
  ].slice(0, 3);

  const activeViews = availableViews.filter((v) =>
    activeViewKeys.includes(v.key),
  );
  const otherViews = availableViews.filter(
    (v) => !activeViewKeys.includes(v.key),
  );

  // const activeKeys = history.length > 0 ? history : [currentView];
  useEffect(() => {
    const STORAGE_KEY = getPathKey();
    const localOverrides =
      JSON.parse(
        localStorage.getItem(
          `${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`,
        ),
      ) || {};

    const report = mergeConfig(reportJSON, localOverrides);
    setConfig(report);

    let initialView;

    if (localOverrides.template) {
      initialView = localOverrides.template;
    } else if (report?.template) {
      initialView = report.template;
    } else {
      initialView = "table";
    }

    setCurrentView(initialView);
  }, [reportJSON]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }

      if (
        newDropdownRef.current &&
        !newDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const getValueByPath = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };
  const fetchAPI = async () => {
    setDataLoading(true);
    try {
      if (config?.source?.type === "API") {
        const axiosObject = {
          method: config?.source?.method,
          url: config?.source?.url,
          headers: config?.source?.headers,
        };
        const { data } = await axios(axiosObject);
        // console.log({ data });
        setData(data?.data || []);
        setCurrentPage(data.page || 0);
        setTotalData(data.max || 0);
      } else if (config?.source?.type === "sql") {
        if (!config?.source?.queryid) {
          const payload = {
            query: {
              table: config?.source?.table,
              cols: config?.source?.cols,
              where: config?.source?.where,
              join: config?.source?.join,
            },
            srcid: config?.module_refid,
            dbkey: config?.source?.dbkey,
          };
          const axiosObject = {
            method: "POST",
            url: config?.endPoints.saveQuery,
            headers: config?.endPoints?.headers,
            data: payload,
          };
          const { data } = await axios(axiosObject);
          // console.log({ data });
          config.source.queryid = data?.queryid;
          config.source.url = `${config?.endPoints?.baseURL}${config?.endPoints.runQuery}`;
        }
        const refid = config?.endPoints?.refid;

        const axiosObject = {
          method: config?.source?.method || "post",
          url:
            config?.source?.url ||
            `${config?.endPoints?.baseURL}${config?.endPoints.runQuery}`,
          headers: config?.source?.headers || config?.endPoints?.headers,
          data: {
            queryid: config?.source?.queryid,
            filter: config?.source?.filter || {},
            limit: rowsPerPage,
            page: 0,
            ...(refid ? { refid } : {}),
          },
        };
        const { data } = await axios(axiosObject);

        const responsePath = config?.source?.response || "data";
        // // console.log({config?.source?.response})
        setCurrentPage(data?.page || 0);
        setTotalData(data.max || 0);
        // console.log({ data });
        // console.log({ responsePath });
        // setData(data?.data || []);
        const result = getValueByPath(data, responsePath);
        // console.log({ result });
        setData(result || []);
      } else if (reportdata) {
        setData(reportdata);
      } else if (config?.rows) {
        setData(config?.rows || []);
      }
    } catch (error) {
      // console.log({ error });
    } finally {
      setDataLoading(false);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setSortConfig({ key: null, direction: "asc" });
    setGroupBy(null);
    setCurrentPage(0);
    setSelectedRows(new Set());
    setSelectAll(false);
    fetchAPI();
    setSearchColumn("");
    setDateRange({ start: "", end: "" });
    setActiveDateCol(null);
    setDateOperator("eq");
    setFilterTabs({});
    setShowDatePicker(false);
    setFilters({});
    setShowTableFilters(false);
  };

  useEffect(() => {
    handleReset();
    setRowsPerPage(config?.rowsPerPage);
    setCurrentPage(0);
  }, [config]);

  const buildSearchFilter = (datagrid, searchString) => {
    if (!searchString?.trim()) return {};

    return Object.fromEntries(
      Object.entries(datagrid)
        .filter(([, col]) => col?.searchable === true)
        .map(([key]) => [key, [searchString, "LIKE"]]),
    );
  };

  const filteredAndSortedData = useCallback(() => {
    if (!data) return [];

    let filtered = data;
    // const searchFilter = buildSearchFilter(config?.datagrid, searchTerm);
    const dateFilter =
      activeDateCol && dateOperator
        ? {
            [activeDateCol]:
              dateOperator === "between"
                ? [[dateRange.start, dateRange.end], "range"]
                : dateOperator === "eq"
                  ? [dateRange.start, "like"]
                  : [[dateRange.start, dateRange.end], "range"],
          }
        : {};

    if (searchTerm || currentPage || dateFilter) {
      if (config?.source?.type === "sql") {
        (async () => {
          if (!config?.source?.queryid) {
            const { table, cols, join, where } = config.source;

            const payload = {
              query: { table, cols, join, where },
              dbkey: config?.source?.dbkey,
            };
            const axiosObjectForSaveQuery = {
              method: "POST",
              url: config?.endPoints.saveQuery,
              headers: config?.endPoints?.headers,
              data: payload,
              srcid: config?.module_refid,
            };
            const { data: saveQuerydata } = await axios(
              axiosObjectForSaveQuery,
            );
            // console.log({ saveQuerydata });
            config.source.queryid = saveQuerydata?.queryid;
          }
          const refid = config?.endPoints?.refid;

          const axiosObject = {
            method: config?.source?.method || "post",
            url:
              config?.source?.url ||
              `${config?.endPoints?.baseURL}${config?.endPoints.runQuery}`,
            headers: config?.source?.headers || config?.endPoints?.headers,
            data: {
              queryid: config?.source?.queryid,
              filter: {
                ...Object.fromEntries(
                  Object.entries(filterTabs || {}).map(([key, { value }]) => [
                    key,
                    [value, "LIKE"],
                  ]),
                ),
                ...Object.fromEntries(
                  Object.entries(filters || {}).map(
                    ([key, { type, value }]) => {
                      if (type == "text") {
                        return [key, [value, "LIKE"]];
                      }
                      return [key, value];
                    },
                  ),
                ),
                ...dateFilter,
              },
              ...(groupBy && { group_by: groupBy }),
              ...(refid ? { refid } : {}),
              limit: rowsPerPage,
              page: currentPage,
              ...(sortConfig?.key
                ? { orderby: `${sortConfig?.key} ${sortConfig?.direction}` }
                : {}),
            },
          };
          // console.log({ axiosObject });
          const { data } = await axios(axiosObject);
          const responsePath = config?.source?.response || "data";
          // // console.log({config?.source?.response})

          // console.log({ data });
          // console.log({ responsePath });
          // setData(data?.data || []);
          const result = getValueByPath(data, responsePath);
          // console.log({ result });
          setData(result || []);
          setCurrentPage(data?.page || 0);
          setTotalData(data.max || 0);
        })();
      }
      // const advancedSearch = searchTerm.includes(":");
      // if (advancedSearch) {
      //   const conditions = searchTerm.split(",").map((cond) => {
      //     let [rawKey, value] = cond
      //       .split(":")
      //       .map((s) => s.trim().toLowerCase());
      //     let key = rawKey;
      //     let colConfig = config?.datagrid[key];
      //     if (!colConfig) {
      //       const match = Object.entries(config?.datagrid).find(
      //         ([colKey, col]) => col.label.toLowerCase() === rawKey
      //       );
      //       if (match) key = match[0];
      //     }
      //     return { key, value };
      //   });
      //   // console.log({ conditions });
      //   filtered = filtered.filter((row) => {
      //     return conditions.every(({ key, value }) => {
      //       const colConfig = config?.datagrid[key];
      //       if (!colConfig || !colConfig?.searchable) return false;
      //       const cellVal = String(row[key] || "").toLowerCase();
      //       return cellVal.includes(value);
      //     });
      //   });
      // } else {
      //   filtered = filtered.filter((row) => {
      //     return Object.entries(config?.datagrid).some(([key, col]) => {
      //       if (!col.searchable) return false;
      //       const value = String(row[key] || "").toLowerCase();
      //       return value.includes(searchTerm.toLowerCase());
      //     });
      //   });
      // }
    }

    // if (sortConfig?.key) {
    //   filtered = [...filtered].sort((a, b) => {
    //     const aVal = a[sortConfig?.key];
    //     const bVal = b[sortConfig?.key];

    //     if (aVal < bVal) return sortConfig?.direction === "asc" ? -1 : 1;
    //     if (aVal > bVal) return sortConfig?.direction === "asc" ? 1 : -1;
    //     return 0;
    //   });
    // }

    // console.log({ filtered });
    return filtered;
  }, [
    config,
    searchTerm,
    sortConfig,
    data,
    currentPage,
    dateRange.start,
    dateRange.end,
    dateOperator,
    sortConfig,
    filters,
  ]);

  useEffect(() => {
    setCurrentData(filteredAndSortedData);
  }, [
    searchTerm,
    currentPage,
    dateRange.start,
    dateRange.end,
    sortConfig,
    filters,
  ]);

  useEffect(() => {
    if (!dateOperator) return;

    const today = new Date();
    const ymd = (d) => d.toISOString().slice(0, 10);

    const startOfWeek = (d) => {
      const x = new Date(d);
      x.setDate(d.getDate() - d.getDay());
      return x;
    };

    const endOfWeek = (d) => {
      const x = startOfWeek(d);
      x.setDate(x.getDate() + 6);
      return x;
    };

    let start = "";
    let end = "";

    switch (dateOperator) {
      case "today":
        start = end = ymd(today);
        break;

      case "yesterday": {
        const d = new Date(today);
        d.setDate(d.getDate() - 1);
        start = end = ymd(d);
        break;
      }

      case "this_week":
        start = ymd(startOfWeek(today));
        end = ymd(endOfWeek(today));
        break;

      case "last_week": {
        const d = new Date(today);
        d.setDate(d.getDate() - 7);
        start = ymd(startOfWeek(d));
        end = ymd(endOfWeek(d));
        break;
      }

      case "this_month":
        start = ymd(new Date(today.getFullYear(), today.getMonth(), 1));
        end = ymd(new Date(today.getFullYear(), today.getMonth() + 1, 0));
        break;

      case "last_month":
        start = ymd(new Date(today.getFullYear(), today.getMonth() - 1, 1));
        end = ymd(new Date(today.getFullYear(), today.getMonth(), 0));
        break;

      case "this_year":
        start = ymd(new Date(today.getFullYear(), 0, 1));
        end = ymd(new Date(today.getFullYear(), 11, 31));
        break;

      case "eq":
      case "between":
        return;

      default:
        return;
    }
    console.log({ start, end });
    setDateRange({ start, end });
  }, [dateOperator]);

  // const rowsPerPage = config?.rowsPerPage || 5;
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  useEffect(() => {
    setTotalPages(Math.ceil(totalData / (rowsPerPage || 5)));
  }, [totalData, rowsPerPage]);

  const paginatedGroupedData = useMemo(() => {
    if (!groupBy) return { ungrouped: currentData };

    const grouped = currentData.reduce((acc, row) => {
      const groupValue = row[groupBy] || "Ungrouped";
      if (!acc[groupValue]) acc[groupValue] = [];
      acc[groupValue].push(row);
      return acc;
    }, {});

    return grouped;
  }, [currentData, groupBy]);

  if (!config) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const {
    title,
    toolbar,
    actions,
    buttons,
    datagrid,
    uiswitcher,
    compactMode,
  } = config;

  const searchableColumns = Object.entries(datagrid)
    .filter(([, col]) => col?.searchable === true)
    .map(([key, col]) => ({ key, ...col }));

  const dateRangeColumns = Object.entries(datagrid)
    .filter(([, col]) => col?.filter?.type === "daterange")
    .map(([key, col]) => ({ key, ...col }));

  const handleSort = (key) => {
    const column = datagrid[key];
    if (!column.sortable) return;
    setCurrentPage(0);
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      const allRowIds = currentData.map((row) => getRowValue(row, "id"));
      setSelectedRows(new Set(allRowIds));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (rowId) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(rowId)) {
      newSelection.delete(rowId);
    } else {
      newSelection.add(rowId);
    }
    setSelectedRows(newSelection);
    setSelectAll(newSelection.size === currentData.length);
  };

  const parseStyle = (styleStr) => {
    if (!styleStr) return {};
    return styleStr.split(";").reduce((acc, item) => {
      const [key, value] = item.split(":");
      if (key && value) {
        const camelKey = key
          .trim()
          .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        acc[camelKey] = value.trim();
      }
      return acc;
    }, {});
  };

  const dummyData = [
    { name: "Marker A", info: "Description A", geo: "19.0760,72.8777" },
    { name: "Marker B", info: "Description B", geo: "28.7041,77.1025" },
  ];
  const renderSortIcon = (key) => {
    if (!datagrid[key].sortable) return null;

    if (sortConfig?.key === key) {
      return sortConfig?.direction === "asc" ? (
        <ChevronUp className="w-4 h-4" />
      ) : (
        <ChevronDown className="w-4 h-4" />
      );
    }

    return (
      <div className="flex flex-col">
        <ChevronUp className="w-3 h-3 text-gray-400" />
        <ChevronDown className="w-3 h-3 text-gray-400 -mt-1" />
      </div>
    );
  };

  const getIconComponent = (iconStr) => {
    if (!iconStr) return null;
    return <i className={`${iconStr}`}></i>;
  };
  const getRowValue = (row, key) => {
    if (key in row) return row[key];
    const lastKey = key.split(".").pop();
    if (lastKey in row) return row[lastKey];
    const match = Object.keys(row).find((k) => k.split(".").pop() === lastKey);
    return match ? row[match] : undefined;
  };
  function resolvePlaceholders(template, rowData = {}) {
    return template.replace(/\{([^}]+)\}/g, (_, key) => {
      return getRowValue(rowData, key) !== undefined
        ? getRowValue(rowData, key)
        : `{${key}}`;
    });
  }

  const handleButtonClick = async (buttonKey, button, data, tr) => {
    // // console.log(methods[button?.event?.click]?.(data?.id))
    // const resolvedParams = Object.values(button?.params || {}).map(key => data?.[key]);
    // methods[button?.event?.click]?.(...resolvedParams);
    // // console.log('METHOD--',methods[button?.event?.click])
    // console.log("Button clicked:", buttonKey, button, data);

    let promptResponse = null;

    if (button.lgksConfirm) {
      const ok = await openConfirm(
        resolvePlaceholders(button.lgksConfirm, data),
      );
      if (!ok) return;
    }

    if (button.lgksPrompt) {
      promptResponse = await openPrompt(
        resolvePlaceholders(button.lgksPrompt, data),
      );
      if (promptResponse === null) return;
    }

    if (button.lgksAlert) {
      await openAlert(resolvePlaceholders(button.lgksAlert, data));
    }

    if (methods[buttonKey]) {
      methods[buttonKey]({ data, tr });
    } else {
      onButtonClick(
        { [buttonKey]: { ...button, prompt_response: promptResponse } },
        data,
      );
    }
  };

  const toggleDropdown = (rowId) => {
    setOpenDropdown(openDropdown === rowId ? null : rowId);
  };

  const groupableColumns = Object.entries(datagrid)
    .filter(([key, col]) => col.groupable && !col.hidden)
    .map(([key, col]) => ({ key, label: col.label }));

  const showExtraColumn = config?.showExtraColumn;

  const visibleButtons = buttons
    ? Object.entries(buttons).filter(([k]) => k !== "more")
    : [];
  const moreButtons = buttons?.more ? Object.entries(buttons.more) : [];
  const hasButtons = visibleButtons.length > 0 || moreButtons.length > 0;

  const handleExport = async (type) => {
    // console.log("Exporting as:", type);
    try {
      setLoading(type);
      await exportTable(type);
    } finally {
      setOpen(false);
      setLoading(null);
    }
  };
  if (debuggerEnable && debuggData?.QUERY) {
    return (
      <pre
        style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        className="p-4 debugg-query"
      >
        {typeof debuggData?.QUERY === "string"
          ? debuggData?.QUERY
          : JSON.stringify(debuggData?.QUERY, null, 2)}
      </pre>
    );
  }

  return (
    <div
      className={`bg-white report-root ${
        compactMode === undefined || compactMode === true ? "compact" : "wide"
      }`}
    >
      {" "}
      <div className="  py-2 report-header">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex space-x-2">
            <h1
              className={
                style?.title ||
                `text-xl font-semibold text-gray-900 flex-shrink-0`
              }
            >
              {title}{" "}
              {title && <span className="text-sm">({totalData})</span>}{" "}
            </h1>
            <div className="flex">
              {actions &&
                Object.entries(actions).map(([key, action]) => (
                  <button
                    onClick={() =>
                      handleButtonClick(key, action, {
                        ids: [...selectedRows],
                        count: selectedRows.length,
                      })
                    }
                    key={key}
                    className="inline-flex items-center px-2 py-1 text-sm font-medium cursor-pointer bg-action rounded-md"
                  >
                    {getIconComponent(action?.icon)}
                    {action?.label}
                  </button>
                ))}
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {toolbar?.print !== false && (
              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer"
              >
                <Printer className="w-4 h-4 mr-1" />
                Print
              </button>
            )}

            <div className="relative inline-block text-left" ref={dropdownRef}>
              {toolbar?.export !== false && (
                <button
                  onClick={() => setOpen(!open)}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <Upload className="w-4 h-4 mr-1" />
                  Export
                </button>
              )}
              {open && (
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white border border-gray-200 shadow-lg">
                  <ul className="py-1 text-sm text-action">
                    {CONSTANTS.EXPORT_ORDER.filter((key) =>
                      toolbar?.export === false
                        ? false
                        : Array.isArray(toolbar?.export)
                          ? toolbar.export.includes(key)
                          : CONSTANTS.DEFAULT_EXPORTS.includes(key),
                    ).map((key) => (
                      <li key={key}>
                        <button
                          onClick={() => handleExport(key)}
                          className="block w-full text-left px-4 py-1.5 cursor-pointer hover:bg-gray-100"
                        >
                          {CONSTANTS.EXPORT_LABELS[key]}
                          {loading == key && (
                            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                          )}
                        </button>
                      </li>
                    ))}

                    {loading && (
                      <li className="border-t border-gray-100 bg-gray-50 rounded-b-lg">
                        <div className="px-4 py-2 flex items-center justify-center">
                          <div className="flex items-center space-x-2">
                            <Loader2 className="w-3 h-3 animate-spin text-blue-500" />
                            <span className="text-xs font-medium text-gray-600">
                              Processing export...
                            </span>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            {toolbar?.email !== false && (
              <button className="inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </button>
            )}
          </div>

          {/* <button
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Menu className="w-5 h-5" />
          </button> */}
        </div>

        <div
          className={
            style?.searchBarContainer ||
            " report-search-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4"
          }
        >
          <div className="flex items-center gap-3 flex-1 items-start">
            {toolbar?.search !== false && (
              <div className="flex items-center  lg:max-w-sm flex-1 border border-gray-300 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-gray-300">
                {/* SEARCH */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                      const val = e.target.value;
                      handleSearch(val);

                      if (searchColumn && searchColumnLabel) {
                        setFilterTabs((prev) => ({
                          ...prev,
                          [searchColumn]: {
                            label: searchColumnLabel,
                            value: val,
                          },
                        }));
                      }
                    }}
                    className="w-full h-9 pl-9 pr-4 py-1 text-slate-600 outline-none border-none"
                  />
                </div>

                <select
                  style={{
                    width: `${Math.min((searchColumnLabel?.length || 8) + 6, 14)}ch`,
                  }}
                  className="h-9 px-3 text-sm bg-white text-slate-600 outline-none border-none border-l border-gray-300"
                  onChange={(e) => {
                    const label = e.target.options[e.target.selectedIndex].text;
                    if (searchColumn) {
                      handleSearch("");
                    }
                    setSearchColumn(e.target.value);
                    setSearchColumnLabel(label);
                  }}
                  value={searchColumn}
                >
                  <option value="">Search by</option>
                  {searchableColumns.map((col) => (
                    <option key={col.key} value={col.key}>
                      {col.label}
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleReset}
                  className="inline-flex h-9 cursor-pointer items-center px-3 text-sm font-medium bg-action rounded-md flex-shrink-0"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                </button>
              </div>
            )}
            <div className=" flex gap-2">
              {dateRangeColumns.length == 1 && (
                <button
                  onClick={() => {
                    setActiveDateCol(
                      dateRangeColumns.length === 1
                        ? dateRangeColumns[0].key
                        : null,
                    );
                    setShowDatePicker(true);
                  }}
                  className="h-9 border border-gray-200 rounded-md"
                >
                  {" "}
                  Date Range{" "}
                </button>
              )}{" "}
              {dateRangeColumns.length > 1 && (
                <select
                  value={activeDateCol ?? ""}
                  onChange={(e) => {
                    setActiveDateCol(e.target.value);
                    setShowDatePicker(true);
                  }}
                  className="h-9 border border-gray-200 rounded-md"
                >
                  {" "}
                  <option value=""> Select column </option>{" "}
                  {dateRangeColumns.map((c) => (
                    <option key={c.key} value={c.key}>
                      {" "}
                      {c.label}{" "}
                    </option>
                  ))}{" "}
                </select>
              )}
              {activeDateCol && (
                <select
                  className="h-9 border border-gray-200 rounded-md"
                  value={dateOperator}
                  onChange={(e) => {
                    setDateOperator(e.target.value);
                    setDateRange({ start: "", end: "" });
                  }}
                >
                  <option value="">Select condition</option>
                  {DATE_OPERATORS.map((op) => (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  ))}
                </select>
              )}
              {activeDateCol && dateOperator === "eq" && (
                <input
                  type="date"
                  className="h-9 border border-gray-200 rounded-md"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange({ start: e.target.value, end: "" })
                  }
                />
              )}
              {dateOperator === "between" && (
                <>
                  <input
                    type="date"
                    className="h-9 border border-gray-200 rounded-md"
                    value={dateRange.start}
                    max={dateRange.end || undefined}
                    onChange={(e) =>
                      setDateRange((p) => ({
                        ...p,
                        start: e.target.value,
                        end: p.end && e.target.value > p.end ? "" : p.end,
                      }))
                    }
                  />
                  <input
                    type="date"
                    className="h-9 border border-gray-200 rounded-md"
                    value={dateRange.end}
                    min={dateRange.start || undefined}
                    onChange={(e) =>
                      setDateRange((p) => ({ ...p, end: e.target.value }))
                    }
                  />
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col self-end sm:flex-row sm:items-center gap-3 lg:gap-4">
            {groupableColumns.length > 0 &&
              (currentView === "kanban" ||
                currentView === "table" ||
                !currentView) && (
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Group className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {currentView === "kanban" ? "Group by:" : "Group by:"}
                  </span>
                  <select
                    value={
                      currentView === "kanban"
                        ? kanbanGroupBy || ""
                        : groupBy || ""
                    }
                    onChange={(e) => {
                      if (currentView === "kanban") {
                        setKanbanGroupBy(e.target.value || null);
                      } else {
                        setGroupBy(e.target.value || null);
                      }
                    }}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">None</option>
                    {currentView === "kanban"
                      ? Object.entries(config?.kanban?.colkeys || {}).map(
                          ([key, col]) => (
                            <option key={key} value={key}>
                              {col.label}
                            </option>
                          ),
                        )
                      : groupableColumns.map((col) => (
                          <option key={col.key} value={col.key}>
                            {col.label}
                          </option>
                        ))}
                  </select>
                </div>
              )}

            <div className="flex flex-wrap gap-2">
              {uiswitcher !== false && (
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  {activeViews.map(({ key, icon, title }) => (
                    <button
                      key={key}
                      onClick={() => {
                        setCurrentView(key);
                        setViewHistory(key);
                      }}
                      title={title}
                      className={`inline-flex cursor-pointer items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        currentView === key
                          ? "bg-action shadow"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {icon}
                    </button>
                  ))}

                  {otherViews.length > 0 && (
                    <div className="relative z-50">
                      <button
                        className="px-3 cursor-pointer py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        •••
                      </button>
                      {dropdownOpen && (
                        <div
                          ref={newDropdownRef}
                          className="absolute right-0 mt-2 bg-white shadow-md text-action rounded z-10"
                        >
                          {otherViews.map(({ key, icon, title }) => (
                            <button
                              key={key}
                              onClick={() => {
                                setCurrentView(key);
                                setViewHistory(key);
                                setDropdownOpen(false);
                              }}
                              className="flex items-center cursor-pointer px-3 py-1.5 text-sm w-full hover:bg-gray-100"
                            >
                              {icon} <span className="ml-2">{title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {config?.settings != false && (
                <button
                  onClick={() => setSettingsOpen(true)}
                  className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors  bg-action cursor-pointer`}
                >
                  <Settings className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setShowTableFilters((prev) => !prev)}
                className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors  bg-action cursor-pointer`}
              >
                <FilterIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="search-filter-tabs flex gap-1 mt-1">
          {Object.entries(filterTabs).map(([key, { label, value }]) => (
            <span
              key={key}
              onClick={() => {
                setSearchColumn(key);
                setSearchColumnLabel(label);
                setSearchTerm(value);
                handleSearch(value);
              }}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
            >
              <span className="font-medium">{label}:</span>
              <span className="truncate max-w-[120px]">{value}</span>

              <button
                className="ml-1 cursor-pointer text-gray-600 hover:text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilterTabs((prev) => {
                    const next = { ...prev };
                    delete next[key];
                    return next;
                  });

                  if (searchColumn === key) {
                    setSearchTerm("");
                    handleSearch("");
                  }
                }}
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>
      {/* Pagination */}
      {(currentView === "table" || !currentView || currentView === "cards") &&
        totalPages > 1 && (
          <div className="px-2 md:px-6 py-1 sticky z-30 top-0 bg-white  border-y border-gray-200">
            <div className="flex flex-row items-center justify-between gap-3">
              <div className="hidden md:block text-sm text-gray-500">
                Showing {startIndex + 1} to {Math.min(endIndex, totalData)} of{" "}
                {totalData} records
              </div>
              <div className="block md:hidden text-sm text-gray-500">
                {startIndex + 1}–{Math.min(endIndex, totalData)} / {totalData}
              </div>
              <div className="flex items-center justify-center sm:justify-end md:gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 0))
                  }
                  disabled={currentPage === 0}
                  className="inline-flex cursor-pointer items-center px-1 py-0.5 text-sm font-medium text-action  rounded-md   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <span className="text-sm text-gray-700 ">
                  {currentPage + 1} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages - 1}
                  className="inline-flex cursor-pointer items-center px-1 py-0.5 text-sm font-medium text-action  rounded-md   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      {/* Selected rows info */}
      {showExtraColumn === "checkbox" && selectedRows.size > 0 && (
        <div className="px-4 sm:px-6 py-2 bg-blue-50 border-t border-blue-200">
          <div className="text-sm text-blue-700">
            {selectedRows.size} row{selectedRows.size !== 1 ? "s" : ""} selected
          </div>
        </div>
      )}
      {/* Render Current View */}
      {currentView === "cards" ? (
        <CardView
          style={style?.cards}
          config={config}
          getRowValue={getRowValue}
          paginatedGroupedData={paginatedGroupedData}
          hasButtons={hasButtons}
          visibleButtons={visibleButtons}
          moreButtons={moreButtons}
          showExtraColumn={showExtraColumn}
          selectedRows={selectedRows}
          openDropdown={openDropdown}
          handleSelectRow={handleSelectRow}
          handleButtonClick={handleButtonClick}
          toggleDropdown={toggleDropdown}
          setOpenDropdown={setOpenDropdown}
          getIconComponent={getIconComponent}
          loading={dataLoading}
          currentData={currentData}
        />
      ) : currentView === "gallery" ? (
        <GalleryView
          style={style?.cards}
          config={config}
          getRowValue={getRowValue}
          paginatedGroupedData={paginatedGroupedData}
          hasButtons={hasButtons}
          visibleButtons={visibleButtons}
          moreButtons={moreButtons}
          showExtraColumn={showExtraColumn}
          selectedRows={selectedRows}
          openDropdown={openDropdown}
          handleSelectRow={handleSelectRow}
          handleButtonClick={handleButtonClick}
          toggleDropdown={toggleDropdown}
          setOpenDropdown={setOpenDropdown}
          getIconComponent={getIconComponent}
          loading={dataLoading}
        />
      ) : currentView === "kanban" ? (
        <KanbanView
          config={config}
          getRowValue={getRowValue}
          filteredAndSortedData={filteredAndSortedData}
          hasButtons={hasButtons}
          visibleButtons={visibleButtons}
          moreButtons={moreButtons}
          showExtraColumn={showExtraColumn}
          selectedRows={selectedRows}
          openDropdown={openDropdown}
          handleSelectRow={handleSelectRow}
          handleButtonClick={handleButtonClick}
          toggleDropdown={toggleDropdown}
          setOpenDropdown={setOpenDropdown}
          getIconComponent={getIconComponent}
          kanbanGroupBy={kanbanGroupBy}
          loading={dataLoading}
          currentData={currentData}
        />
      ) : currentView === "gantt" ? (
        <GanttView
          paginatedGroupedData={paginatedGroupedData}
          config={config}
          getRowValue={getRowValue}
        />
      ) : currentView === "gmap" ? (
        <GmapView
          reportConfig={config}
          getRowValue={getRowValue}
          data={dummyData}
        />
      ) : currentView === "calendar" ? (
        <CalendarView
          config={config}
          getRowValue={getRowValue}
          filteredAndSortedData={filteredAndSortedData}
          hasButtons={hasButtons}
          visibleButtons={visibleButtons}
          moreButtons={moreButtons}
          showExtraColumn={showExtraColumn}
          selectedRows={selectedRows}
          openDropdown={openDropdown}
          handleSelectRow={handleSelectRow}
          handleButtonClick={handleButtonClick}
          toggleDropdown={toggleDropdown}
          setOpenDropdown={setOpenDropdown}
          getIconComponent={getIconComponent}
          kanbanGroupBy={kanbanGroupBy}
          loading={dataLoading}
        />
      ) : (
        <TableView
          style={style?.table}
          config={config}
          getRowValue={getRowValue}
          paginatedGroupedData={paginatedGroupedData}
          visibleColumns={visibleColumns}
          hasButtons={hasButtons}
          visibleButtons={visibleButtons}
          moreButtons={moreButtons}
          sortConfig={sortConfig}
          showExtraColumn={showExtraColumn}
          selectAll={selectAll}
          selectedRows={selectedRows}
          openDropdown={openDropdown}
          handleSort={handleSort}
          handleSelectAll={handleSelectAll}
          handleSelectRow={handleSelectRow}
          handleButtonClick={handleButtonClick}
          toggleDropdown={toggleDropdown}
          setOpenDropdown={setOpenDropdown}
          parseStyle={parseStyle}
          formatCellValue={formatCellValue}
          renderSortIcon={renderSortIcon}
          getIconComponent={getIconComponent}
          loading={dataLoading}
          showTableFilters={showTableFilters}
          selectOption={selectOptions}
          filters={filters}
          setFilters={setFilters}
          resolvePlaceholders={resolvePlaceholders}
        />
      )}
      {/* Click outside to close dropdown */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setOpenDropdown(null)}
        />
      )}
      {settingsOpen && (
        <SettingPopup
          setSettingsOpen={setSettingsOpen}
          config={config}
          getRowValue={getRowValue}
          setConfig={setConfig}
        />
      )}
    </div>
  );
}

export default function ReportsWithProviders(props) {
  return (
    <ModalProvider>
      <Reports {...props} />
    </ModalProvider>
  );
}
