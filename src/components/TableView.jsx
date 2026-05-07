import { Copy, MoreVertical } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ShimmerTableRow from "./loadings/ShimmerTableRow";
import copyToClipboard from "../helpers/copyToClipboard";
const ROW_HEIGHT = 42;

const TableView = ({
  config,
  paginatedGroupedData,
  visibleColumns,
  hasButtons,
  visibleButtons,
  moreButtons,
  showExtraColumn,
  selectAll,
  selectedRows,
  openDropdown,
  handleSort,
  handleSelectAll,
  handleSelectRow,
  handleButtonClick,
  toggleDropdown,
  setOpenDropdown,
  parseStyle,
  formatCellValue,
  renderSortIcon,
  getIconComponent,
  style,
  loading,
  getRowValue,
  showTableFilters,
  selectOptions,
  filters,
  setFilters,
  resolvePlaceholders,
  methods,
  groupBy,
  errorMsg,
  getLocalRefData
}) => {
  const { datagrid } = config;
  const {
    wrapLines,
    rowClickSelection,
    stripedRows,
    fixFirstColumn,
    fixFirstTwoColumns,
    fixLastColumn,
    compactMode,
  } = config;
  const parent_column_name =
  typeof config?.tree_type === "string"
    ? config.tree_type
    : config?.tree_type?.parent_column_name;

  const { open_icon, close_icon } =
    typeof config?.tree_type === "object" ? config.tree_type : {};
    
  

  const [copiedCell, setCopiedCell] = useState(null);
  const dropdownRef = useRef(null);
  const reportTitle = config?.title?.toLowerCase().trim().replace(/\s+/g, "_");
  const [openGroups, setOpenGroups] = useState(() => {
    if (!groupBy) return {};
    return Object.keys(paginatedGroupedData || {}).reduce((acc, key) => {
      acc[key] = true; // default open (change to false if you want collapsed)
      return acc;
    }, {});
  });
  const containerRefs = useRef({});
const [visibleRange, setVisibleRange] = useState({});
const [expandedRows, setExpandedRows] = useState(new Set());
  const activeLocalRef =
  config?.module_refid

const getStoredRowId = (data) => {
  if (!data || typeof data !== "object") return null;

  // direct id
  if (data.id !== undefined && data.id !== null) {
    return data.id;
  }

  // support tblname.id
  const dynamicIdKey = Object.keys(data).find((key) =>
    key.toLowerCase().endsWith(".id")
  );

  if (dynamicIdKey) {
    return data[dynamicIdKey];
  }

  return null;
};


const highlightedRowId = activeLocalRef
  ? getStoredRowId(
      getLocalRefData(
        typeof activeLocalRef === "string"
          ? activeLocalRef
          : Object.keys(activeLocalRef)[0]
      )
    )
  : null;
const [activeHighlightedRowId, setActiveHighlightedRowId] =
  useState(highlightedRowId);
 
const BUFFER = 10;
const VIEWPORT_HEIGHT = 800;

  const toggleGroup = (groupKey) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const toggleTreeRow = (id) => {
  setExpandedRows((prev) => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });
};
const childrenMap = useMemo(() => {
  if (!config?.tree_type || !parent_column_name) return new Map();

  const map = new Map();

  Object.values(paginatedGroupedData).flat().forEach((row) => {
    const parentId = getRowValue(row, parent_column_name);
    if (!parentId) return;

    if (!map.has(parentId)) map.set(parentId, []);
    map.get(parentId).push(row);
  });

  return map;
}, [paginatedGroupedData, parent_column_name, config?.tree_type]);
const getTreeVisibleRows = (rows) => {
  if (!config?.tree_type || !parent_column_name) return rows;

  const rowMap = new Map();
  const childrenMap = new Map();

  rows.forEach((row) => {
    const id = getRowValue(row, "id");
    const parentId = getRowValue(row, parent_column_name);

    rowMap.set(id, row);

    if (parentId) {
      if (!childrenMap.has(parentId)) childrenMap.set(parentId, []);
      childrenMap.get(parentId).push(row);
    }
  });

  const result = [];

  const traverse = (row, level = 0) => {
  const id = getRowValue(row, "id");

  result.push({ ...row, level });

  if (!expandedRows.has(id)) return;

  const children = childrenMap.get(id) || [];
  children.forEach((child) => traverse(child, level + 1));
};

  rows.forEach((row) => {
    if (!getRowValue(row, parent_column_name)) {
      traverse(row, 0);
    }
  });

  return result;
};

  useEffect(() => {
    setVisibleRange({ start: 0, end: 30 });
  }, [paginatedGroupedData, visibleColumns]);


  useEffect(() => {
    if (!openDropdown) return;

    const handleOutsideClick = (e) => {
      if (dropdownRef.current?.contains(e.target)) return;
      setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openDropdown]);

useEffect(() => {
  Object.entries(containerRefs.current).forEach(([groupKey, el]) => {
    if (!el) return;

    const onScroll = () => {
      const scrollTop = el.scrollTop;

      const rows = getTreeVisibleRows(paginatedGroupedData[groupKey] || []);

      const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - BUFFER);
      const end = Math.min(
        rows.length,
        Math.ceil((scrollTop + VIEWPORT_HEIGHT) / ROW_HEIGHT) + BUFFER
      );

      setVisibleRange((prev) => ({
        ...prev,
        [groupKey]: { start, end },
      }));
    };

    el.addEventListener("scroll", onScroll);
  });

  return () => {
    Object.values(containerRefs.current).forEach((el) => {
      if (!el) return;
      el.removeEventListener("scroll", () => {});
    });
  };
}, [paginatedGroupedData, expandedRows]);  

  const buildGroupedHeaders = () => {
    const groups = [];
    let current = null;

    visibleColumns.forEach(([key, col]) => {
      const group = col.group || null;

      if (!current || current.label !== group) {
        current = { label: group, span: 1 };
        groups.push(current);
      } else {
        current.span += 1;
      }
    });

    return groups;
  };
  const getMethod = (type) => {
  const key = Object.keys(methods).find(
    (k) => k.toLowerCase() === String(type).toLowerCase()
  );
  return key ? methods[key] : undefined;
};
  const getAggregateValue = (key, col, rows = []) => {
    if (!col?.aggregate?.type || !Array.isArray(rows)) return null;

    const rawType = col.aggregate.type;
    console.log({rawType})
    console.log({methods})
    const getNumericValues = (columnKey) =>
      rows
        .map((row) => {
          const val = getRowValue(row, columnKey);
          return typeof val === "number" ? val : Number(val);
        })
        .filter((val) => !isNaN(val));

 const calculateBase = (type, columnKey) => {
  const values = getNumericValues(columnKey);

  switch (type.toUpperCase()) {
    case "SUM":
      return values.reduce((a, b) => a + b, 0);

    case "AVG":
      return values.length
        ? values.reduce((a, b) => a + b, 0) / values.length
        : 0;

    case "MIN":
      return values.length ? Math.min(...values) : 0;

    case "MAX":
      return values.length ? Math.max(...values) : 0;

    case "COUNT":
      return rows.length;

    default: {
      const fn = getMethod(type); // 🔥 case-insensitive
      const result = fn?.(values, rows);

      if (result !== undefined) return result;

      return 0;
    }
  }
};

if (typeof rawType === "string" && /^[a-z0-9_]+$/i.test(rawType)) {
        const result = calculateBase(rawType.toUpperCase(), key);
        console.log({result})

        return typeof result === "number"
          ? Number(result.toFixed(2))
          : result; 
      }

    if (typeof rawType === "string") {
      let expression = rawType;

    const fnRegex = new RegExp(
  `(${[
    "sum",
    "avg",
    "min",
    "max",
    "count",
    ...Object.keys(methods).map((k) => k.toLowerCase()),
  ].join("|")})\\((.*?)\\)`,
  "gi"
);

expression = expression.replace(fnRegex, (_, fn, columnKey) => {
  const value = calculateBase(fn.toUpperCase(), columnKey.trim());
  return Number(value);
});

      try {
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) return 0;

        return Number(
              Function(`"use strict"; return (${expression})`)().toFixed(2)
            );
      } catch {
        return 0;
      }
    }

    return null;
  };

const formatAggregateValue = (value, format = {}) => {
  if (value == null || isNaN(value)) return "";

  const {
    type = "number",
    decimals = 1, // default for compact
    compact,
    locale = "en-IN",
    currency = "INR",
  } = format;

  const formatWithDecimals = (num) =>
    Number(num).toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  if (compact) {
    const abs = Math.abs(value);

    if (locale === "en-IN") {
      if (abs >= 1e7) return formatWithDecimals(value / 1e7) + "Cr";
      if (abs >= 1e5) return formatWithDecimals(value / 1e5) + "L";
      if (abs >= 1e3) return formatWithDecimals(value / 1e3) + "K";
    } else {
      if (abs >= 1e9) return formatWithDecimals(value / 1e9) + "B";
      if (abs >= 1e6) return formatWithDecimals(value / 1e6) + "M";
      if (abs >= 1e3) return formatWithDecimals(value / 1e3) + "K";
    }

    // small numbers fallback
    return formatWithDecimals(value);
  }

  // currency
  if (type === "currency") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  // normal number
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};
  const renderAggregateRow = (rows) => {
    let aggrigateExist=false
  visibleColumns.forEach(([key, col], colIndex) => {
    if(col.aggregate){
      aggrigateExist=true
    }
  })
    return (
      <tr className="bg-gray-100 font-semibold sticky bottom-0 z-20 report-aggregate-row">
        {hasButtons && <td>  {aggrigateExist && "Total :"} </td>}
        {showExtraColumn === "checkbox" && <td />}

        {visibleColumns.map(([key, col], colIndex) => {
          const fixedClass =
            (fixFirstTwoColumns && colIndex < 2) ||
            (fixFirstColumn && colIndex === 0)
              ? "sticky left-0 bg-gray-100 z-20"
              : fixLastColumn && colIndex === visibleColumns.length - 1
                ? "sticky right-0 bg-gray-100 z-20"
                : "";

          if (!col.aggregate) {
            return <td key={key} className={fixedClass} />;
          }
          const rawValue = getAggregateValue(key, col, rows);
          console.log({rawValue})

          return (
            <td key={key} className={`px-2 py-2 text-sm ${fixedClass}`}>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">
                  {col.aggregate.label}
                </span>
            {typeof rawValue === "number"
                  ? formatAggregateValue(rawValue, col.aggregate?.format)
                  : rawValue}
                      </div>
            </td>
          );
        })}
      </tr>
    );
  };
const getEffectiveRows = (rows) => {
  if (!selectedRows || selectedRows.size === 0) return rows;

  return rows.filter((row) =>
    selectedRows.has(getRowValue(row, "id"))
  );
};

  useEffect(() => {
    if (!groupBy) return;

    const initialState = Object.keys(paginatedGroupedData || {}).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {},
    );

    setOpenGroups(initialState);
  }, [groupBy, paginatedGroupedData]);


  useEffect(() => {
  setVisibleRange((prev) => {
    const next = {};
    Object.keys(paginatedGroupedData || {}).forEach((key) => {
      next[key] = { start: 0, end: 30 };
    });
    return next;
  });
}, [expandedRows]);

 useEffect(() => {
  setActiveHighlightedRowId(highlightedRowId || null);
}, [highlightedRowId]);


const renderRow = (row, rowIndex,currentRows) => {
  const rowRules = config?.rules?.row_class || {};
  let dynamicRowClass = "";

  Object.entries(rowRules).forEach(([field, valueMap]) => {
    const fieldValue = getRowValue(row, field);
    if (valueMap && fieldValue && valueMap[fieldValue]) {
      dynamicRowClass += ` ${valueMap[fieldValue]}`;
    }
  });

  const level = row.level || 0;
const rowId = getRowValue(row, "id");

// detect children using currentRows (already scoped per group)
const hasChildren = childrenMap.has(rowId);
const isHighlighted =
  String(rowId) === String(activeHighlightedRowId);

const isExpanded = expandedRows.has(rowId);


  return (
    <tr
      id={`${reportTitle}_tr_${getRowValue(row, "id")}`}
key={getRowValue(row, "id") ?? `${rowIndex}-${groupBy}`}      className={`${style?.tr || "hover:bg-secondary"} 
        ${rowClickSelection ? "cursor-pointer" : ""} 
        ${compactMode ? "text-xs py-0.5" : ""} 
        ${stripedRows && rowIndex % 2 === 1 ? "bg-gray-50" : ""}
        ${dynamicRowClass.trim()}
            ${isHighlighted ? "highlight-row" : ""}
        `}
     onClick={() => { 
  rowClickSelection && handleSelectRow(getRowValue(row, "id"));
}}
    >
    
                              {hasButtons && (
                                <td
                                  className={
                                    style?.td ||
                                    "px-2 py-1 whitespace-nowrap text-sm text-gray-900"
                                  }
                                >
                                  <div className="flex items-center">
                                    {visibleButtons.map(
                                      ([buttonKey, button]) => (
                                        <button
                                          key={buttonKey}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleButtonClick(
                                              buttonKey,
                                              button,
                                              row,
                                              e.currentTarget.closest("tr"),
                                            );
                                          }}
                                          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action ${button?.class}`}
                                          title={resolvePlaceholders(
                                            button.label,
                                            row,
                                          )}
                                        >
                                          {getIconComponent(button.icon)}
                                        </button>
                                      ),
                                    )}

                                    {moreButtons.length > 0 && (
                                      <div className="relative">
                                        <button
                                          onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setOpenDropdown(
                                              openDropdown ===
                                                getRowValue(row, "id")
                                                ? null
                                                : getRowValue(row, "id"),
                                            );
                                          }}
                                          className="inline-flex items-center px-1 py-1 text-xs font-medium text-gray-700 rounded hover:bg-gray-200"
                                          title="More"
                                        >
                                          <MoreVertical className="w-4 h-4" />
                                        </button>

                                        {openDropdown ===
                                          getRowValue(row, "id") && (
                                          <div
                                            ref={dropdownRef}
                                            onMouseDown={(e) =>
                                              e.stopPropagation()
                                            }
                                            className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-999"
                                          >
                                            {moreButtons.map(
                                              ([buttonKey, button]) => (
                                                <button
                                                  key={buttonKey}
                                                  onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleButtonClick(
                                                      buttonKey,
                                                      button,
                                                      row,
                                                      e.currentTarget.closest(
                                                        "tr",
                                                      ),
                                                    );
                                                    setOpenDropdown(null);
                                                  }}
                                                  className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${button?.class}`}
                                                  title={resolvePlaceholders(
                                                    button.label,
                                                    row,
                                                  )}
                                                >
                                                  <span className="flex-shrink-0">
                                                    {getIconComponent(
                                                      button.icon,
                                                    )}
                                                  </span>
                                                  <span className="truncate text-left w-full">
                                                    {resolvePlaceholders(
                                                      button.label,
                                                      row,
                                                    )}
                                                  </span>
                                                </button>
                                              ),
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </td>
                              )}

                              {showExtraColumn === "checkbox" && (
                                <td
                                  className={
                                    style?.td ||
                                    "px-2  py-1 whitespace-nowrap text-sm text-gray-900"
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedRows.has(
                                      getRowValue(row, "id"),
                                    )}
                                    onChange={() =>
                                      handleSelectRow(getRowValue(row, "id"))
                                    }
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                </td>
                              )}
                              {visibleColumns.map(([key, col], colIndex) => {
                                const fixedClass =
                                  (fixFirstTwoColumns && colIndex < 2) ||
                                  (fixFirstColumn && colIndex === 0)
                                    ? "sticky left-0 bg-white z-10"
                                    : fixLastColumn &&
                                        colIndex === visibleColumns.length - 1
                                      ? "sticky right-0 bg-white z-10"
                                      : "";

                                const colRules = config?.rules?.col_class || {};
                                const valueMap = colRules[key];
                                let dynamicColClass = "";

                                if (
                                  valueMap &&
                                  getRowValue(row, key) &&
                                  valueMap[getRowValue(row, key)]
                                ) {
                                  dynamicColClass =
                                    valueMap[getRowValue(row, key)];
                                }

                               
                                return (
                                  <td
                                    id={`${reportTitle}_tr_${getRowValue(
                                      row,
                                      "id",
                                    )}_${key}`}
                                    key={key}
                                    className={`${
                                      style?.td ||
                                      "px-2  py-1 text-sm text-gray-900"
                                    } ${fixedClass} ${dynamicColClass.trim()}`}
                                  >
                                    <div className="relative group flex items-center"
                                     style={
  config?.tree_type && parent_column_name && colIndex === 0
                    ? { paddingLeft: `${level * 16}px` }
                    : {}
                }
                                    >
{config?.tree_type && parent_column_name && colIndex === 0 && hasChildren && (  <span
    className="mr-1 text-xs cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      toggleTreeRow(rowId);
    }}
  >
 <i
      className={
        isExpanded
          ? open_icon || "fa-solid fa-chevron-down"
          : close_icon || "fa-solid fa-chevron-right"
      }
    />
    
      </span>
)}
                                          
                                      <div
                                        className={
                                          wrapLines
                                            ? "whitespace-pre-wrap break-words max-w-none"
                                            : "truncate max-w-xs sm:max-w-none"
                                        }
                                      >
                                          
                             
                                        {col.unilink ? (
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                                setActiveHighlightedRowId(rowId);
                                              handleButtonClick(
                                                col.unilink,
                                                col,
                                                row,
                                                e.currentTarget.closest("tr"),
                                              );
                                            }}
                                            className="text-blue-600 hover:underline cursor-pointer text-left"
                                            title={String(
                                              getRowValue(row, key) ?? "",
                                            )}
                                          >
                                            {formatCellValue(
                                              getRowValue(row, key),
                                              col.formatter,
                                              row,
                                              col,
                                              config,
                                              methods,
                                            )}
                                          </button>
                                        ) : (
                                          formatCellValue(
                                            getRowValue(row, key),
                                            col.formatter,
                                            row,
                                            col,
                                            config,
                                            methods,
                                          )
                                        )}
                                      </div>

                                      <button
                                        onClick={() => {
                                          let copyValue = getRowValue(row, key);

                                          switch (
                                            (col.formatter || "").toLowerCase()
                                          ) {
                                            case "date": {
                                              const d = new Date(copyValue);
                                              copyValue = isNaN(d.getTime())
                                                ? ""
                                                : d.toLocaleDateString();
                                              break;
                                            }
                                            case "datetime": {
                                              const d = new Date(copyValue);
                                              copyValue = isNaN(d.getTime())
                                                ? ""
                                                : d.toLocaleString();
                                              break;
                                            }
                                            case "time": {
                                              const d = new Date(copyValue);
                                              copyValue = isNaN(d.getTime())
                                                ? ""
                                                : d.toLocaleTimeString();
                                              break;
                                            }
                                            case "month": {
                                              const m = Number(copyValue);
                                              copyValue =
                                                m >= 1 && m <= 12
                                                  ? new Date(
                                                      2000,
                                                      m - 1,
                                                    ).toLocaleString(
                                                      undefined,
                                                      {
                                                        month: "long",
                                                      },
                                                    )
                                                  : "";
                                              break;
                                            }
                                            case "checkbox":
                                              copyValue = copyValue
                                                ? "Yes"
                                                : "No";
                                              break;
                                            default:
                                              copyValue =
                                                copyValue != null
                                                  ? String(copyValue)
                                                  : "";
                                          }

                                          copyToClipboard(
                                            copyValue,
                                            `${getRowValue(row, "id")}-${key}`,
                                            setCopiedCell,
                                          );
                                        }}
                                        className="absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer"
                                        title="Copy"
                                      >
                                        {copiedCell ===
                                        `${getRowValue(row, "id")}-${key}` ? (
                                          <>
                                            <span className="text-xs text-gray-600">
                                              Copied!
                                            </span>
                                          </>
                                        ) : (
                                          <i class="fa-regular fa-copy"></i>
                                        )}
                                      </button>
                                    </div>
                                  </td>
                                );
                              })}
    </tr>
  );
};
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        {Object.keys(paginatedGroupedData).map((groupKey) => {

   


          const isOpen = openGroups[groupKey];
const currentRows = paginatedGroupedData[groupKey] || [];
const range = visibleRange[groupKey] || { start: 0, end: 30 };

const treeRows = getTreeVisibleRows(currentRows);

const safeStart = Math.min(range.start, treeRows.length);
const safeEnd = Math.min(range.end, treeRows.length);

const visibleRows = treeRows.slice(safeStart, safeEnd);

const totalRows = treeRows.length;

const topSpacerHeight = Math.max(0, safeStart * ROW_HEIGHT);
const bottomSpacerHeight = Math.max(0, (totalRows - safeEnd) * ROW_HEIGHT);

          return (
            <div key={groupKey} className="border-b border-gray-50">
              {groupBy && (
                <button
                  type="button"
                  onClick={() => toggleGroup(groupKey)}
                  className="w-full flex items-center justify-between bg-gray-100 px-3 py-2 hover:bg-gray-200 transition"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      <i class="fa-solid fa-caret-right"></i>
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {datagrid[groupBy].label}: {groupKey} (
                      {paginatedGroupedData[groupKey].length} records)
                    </span>
                  </div>
                </button>
              )}
              {(!groupBy || isOpen) && (
                <div
                ref={(el) => (containerRefs.current[groupKey] = el)}
                className="overflow-x-auto overflow-y-auto max-h-screen thin-scrollbar">
                  <table
                    className="min-w-full table-fixed border border-gray-200"
                    id="printable"
                  >
                    <thead
                      className={`${
                        style?.thead || "bg-muted text-action"
                      } sticky top-0 bg-white z-30`}
                    >
                      {visibleColumns.some(([, col]) => col.group) && (
                        <tr>
                          {hasButtons && <th />}
                          {showExtraColumn === "checkbox" && <th />}

                          {buildGroupedHeaders().map((group, idx) => (
                            <th
                              key={idx}
                              colSpan={group.span}
                              className="px-2 py-1 text-xs font-semibold text-center group-th border-b"
                            >
                              {group.label || ""}
                            </th>
                          ))}
                        </tr>
                      )}
                      <tr>
                        {hasButtons && (
                          <th
                            className={
                              style?.th ||
                              "px-2 py-2 text-xs font-bold uppercase"
                            }
                          >
                            Actions
                          </th>
                        )}
                        {showExtraColumn === "checkbox" && (
                          <th className={style?.th || "px-2 py-2"}>
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </th>
                        )}

                        {visibleColumns.map(([key, col], colIndex) => {
                          const fixedClass =
                            (fixFirstTwoColumns && colIndex < 2) ||
                            (fixFirstColumn && colIndex === 0)
                              ? "sticky left-0 bg-white z-10"
                              : fixLastColumn &&
                                  colIndex === visibleColumns.length - 1
                                ? "sticky right-0 bg-white z-10"
                                : "";

                          return (
                            <th
                              key={key}
                              className={`${
                                style?.th ||
                                "px-2 py-2 text-xs font-bold uppercase"
                              } 
                        ${
                          col.sortable ? "cursor-pointer hover:bg-gray-100" : ""
                        } 
                        ${fixedClass} ${col?.classes}`}
                              style={col.style ? parseStyle(col.style) : {}}
                              onClick={() => col.sortable && handleSort(key)}
                            >
                              <div className="flex items-center justify-between">
                                <span className="truncate">{col.label}</span>
                                {renderSortIcon(key)}
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                      {showTableFilters && (
                        <tr className="bg-gray-50">
                          {hasButtons && <th />}
                          {showExtraColumn === "checkbox" && <th />}

                          {visibleColumns.map(([key, col]) => { 
                            const filter = col.filter;
                            if (!filter) return <th key={key} />;

                            switch (filter.type) {
                              case "text":
                                return (
                                  <th key={key} className="px-2 py-1">
                                    <input
                                      type="text"
                                      value={filters[key]?.value || ""}
                                      onChange={(e) =>
                                        setFilters((p) => ({
                                          ...p,
                                          [key]: {
                                            type: col.filter.type,
                                            value: e.target.value,
                                          },
                                        }))
                                      }
                                      className="w-full border rounded px-2 py-1 text-xs"
                                    />
                                  </th>
                                );

                              case "date":
                                return (
                                  <th key={key} className="px-2 py-1">
                                    <input
                                      type="date"
                                      value={filters[key]?.value || ""}
                                      onChange={(e) =>
                                        setFilters((p) => ({
                                          ...p,
                                          [key]: {
                                            type: col.filter.type,
                                            value: e.target.value,
                                          },
                                        }))
                                      }
                                      className="w-full border rounded px-2 py-1 text-xs"
                                    />
                                  </th>
                                );
                                case "month":
                              return (
                                <th key={key} className="px-2 py-1">
                                  <input
                                    type="month"
                                    value={filters[key]?.value || ""}
                                    onChange={(e) =>
                                      setFilters((p) => ({
                                        ...p,
                                        [key]: {
                                          type: col.filter.type,
                                          value: e.target.value,
                                        },
                                      }))
                                    }
                                    className="w-full border rounded px-2 py-1 text-xs"
                                  />
                                </th>
                              );
                              case "select": {
                                const rawOptions = filter.options ?? {};

                                // normalize options to { [key]: label }
                                const options = Array.isArray(rawOptions)
                                  ? rawOptions.reduce((acc, item) => {
                                      const [key, value] =
                                        Object.entries(item)[0];
                                      acc[value] = value;
                                      return acc;
                                    }, {})
                                  : rawOptions;

                                return (
                                  <th key={key} className="px-2 py-1">
                                    <select
                                      value={filters[key]?.value ?? ""}
                                      onChange={(e) =>
                                        setFilters((p) => ({
                                          ...p,
                                          [key]: {
                                            type: col.filter.type,
                                            value: e.target.value,
                                          },
                                        }))
                                      }
                                      className="w-full border rounded px-2 py-1 text-xs"
                                    >
                                      <option value="">
                                        {filter.nofilter || "--"}
                                      </option>

                                      {Object.entries(options).map(
                                        ([val, label]) => (
                                          <option key={val} value={val}>
                                            {label}
                                          </option>
                                        ),
                                      )}
                                    </select>
                                  </th>
                                );
                              }

                              default:
                                return <th key={key} />;
                            }
                          })}
                        </tr>
                      )}
                    </thead>
<tbody className={style?.tbody || "bg-white divide-y divide-gray-200"}>
{ loading ? (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <ShimmerTableRow
          key={i}
          columns={[
            ...(hasButtons ? [["__actions"]] : []),
            ...(showExtraColumn === "checkbox" ? [["__checkbox"]] : []),
            ...visibleColumns,
          ]}
        />
      ))}
    </>
  ): (
    <>
      {(config.aggregatePosition === "top" ||
        config.aggregatePosition === "both") &&
        renderAggregateRow(getEffectiveRows(currentRows))}

      {topSpacerHeight > 0 && (
        <tr>
          <td
            colSpan={
              visibleColumns.length +
              (hasButtons ? 1 : 0) +
              (showExtraColumn === "checkbox" ? 1 : 0)
            }
            style={{ height: topSpacerHeight }}
          />
        </tr>
      )}

      {visibleRows.map((row, index) =>
  renderRow(row, visibleRange.start + index, treeRows)
)}

      {bottomSpacerHeight > 0 && (
        <tr>
          <td
            colSpan={
              visibleColumns.length +
              (hasButtons ? 1 : 0) +
              (showExtraColumn === "checkbox" ? 1 : 0)
            }
            style={{ height: bottomSpacerHeight }}
          />
        </tr>
      )}

      {config.aggregatePosition !== "top" &&
        renderAggregateRow(getEffectiveRows(currentRows))}
    </>
  )}
</tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableView;
