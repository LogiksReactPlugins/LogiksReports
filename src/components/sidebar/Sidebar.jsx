import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Sidebar = ({ config, onChange,onSidebarChange,setSidebarDataCount}) => {
  const [dataMap, setDataMap] = useState({});
  const [loading, setLoading] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchText, setSearchText] = useState({});
  
  const endPoints = config.endPoints;

  const fetchSQLData = async (key, source) => {
    try {
      setLoading((prev) => ({ ...prev, [key]: true }));

      let queryid = source?.queryid;

      if (!queryid) {
        const payload = {
          query: {
            table: source?.table,
            cols: source?.cols,
            join: source?.join,
            where: source?.where,
            groupby: source?.groupby,
            orderby: source?.orderby,
          },
          dbkey: source?.dbkey,
          srcid: config?.module_refid,
        };

        const { data } = await axios({
          method: "POST",
          url: endPoints?.saveQuery,
          headers: endPoints?.headers,
          data: payload,
        });

        queryid = data?.queryid;
      }

      const { data } = await axios({
        method: source?.method || "POST",
        url:
          source?.url ||
          `${endPoints?.baseURL}${endPoints?.runQuery}`,
        headers: source?.headers || endPoints?.headers,
        data: {
          queryid,
          filter: {},
          ...(source?.groupby && { group_by: source.groupby }),
        },
      });

      const result =
        source?.response
          ? source.response.split(".").reduce((o, k) => o?.[k], data)
          : data?.data;

      setDataMap((prev) => ({ ...prev, [key]: result || [] }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading((prev) => ({ ...prev, [key]: false }));
    }
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    onChange?.({});
  };

  useEffect(() => {
    setSelectedFilters(onSidebarChange || {});
  }, [onSidebarChange]);

  useEffect(() => {
    if (!config?.sidebar?.source) return;

  setDataMap({})
    setSelectedFilters({})
    Object.entries(config.sidebar.source).forEach(([key, source]) => {
      if (source?.type === "sql") {
        fetchSQLData(key, source);
      }
    });
  }, [config]);

  const getItemValue = (item, key) => {
    if (key in item) return item[key];
    const lastKey = key?.split(".").pop();
    if (lastKey in item) return item[lastKey];
    const match = Object.keys(item).find(
      (k) => k.split(".").pop() === lastKey
    );
    return match ? item[match] : undefined;
  };

  const sidebarDataCount = useMemo(() => {
  return Object.values(dataMap).reduce((acc, curr) => {
    if (Array.isArray(curr) && curr.length > 0) {
      return acc + curr.length;
    }
    return acc;
  }, 0);
}, [dataMap]);


useEffect(() => {
  setSidebarDataCount?.(sidebarDataCount);
}, [sidebarDataCount]);


  const handleSearchChange = (key, value) => {
  setSearchText((prev) => ({
    ...prev,
    [key]: value,
  }));
};

  const handleFilterChange = (key, value) => {
    const updated = {
      ...selectedFilters,
      [key]: value,
    };

    setSelectedFilters(updated);
    onChange?.(updated); // send ALL selected filters
  };

const renderList = (key, source) => {
  const list = dataMap[key] || [];
  if (!Array.isArray(list) || list.length === 0) return null;

  const searchValue = searchText[key] || "";

  const filteredList = list.filter((item) => {
    const title = getItemValue(item, "title") || "";
    return title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div key={key} className={`mb-4 px-2 list-${key}`}>
      <div className={`text-md font-semibold mb-1 list-${key}-title`}>
        {source?.title}
      </div>

      <div className={`list-${key}-items`}>
        {filteredList.map((item, i) => {
          const value = getItemValue(item, "value");
          const isActive = selectedFilters[key] === value;

          return (
            <div
              key={i}
              className={`text-sm cursor-pointer px-2 py-1 rounded ${
                isActive ? "active" : "hover:bg-gray-100"
              }`}
              onClick={() => handleFilterChange(key, value)}
            >
              {getItemValue(item, "title")}
            </div>
          );
        })}

        {/* No results */}
        {filteredList.length === 0 && (
          <div className="text-xs text-gray-400 px-2 py-1">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

  const renderFilter = (key, source) => {
    const list = dataMap[key] || [];
    if (!Array.isArray(list) || list.length === 0) return null;

    return (
      <div key={key} className={`mb-4 px-2 filter-${key}`}>
        <div className={`text-md font-semibold mb-1 filter-${key}-title`}>
          {source?.title}
        </div>

        <select
          className="w-full border text-sm border-gray-200 p-2 rounded"
          value={selectedFilters[key] || ""}
          onChange={(e) => handleFilterChange(key, e.target.value)}
        >
          <option value="">
            {source?.["no-option"] || "Select"}
          </option>

          {list.map((item, i) => (
            <option key={i} value={getItemValue(item, "value")}>
              {getItemValue(item, "title")}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderComponent = (key, source) => {
  const list = dataMap[key] || [];

  const isSingleItem = Array.isArray(list) && list.length === 1;

  if (isSingleItem) {
    return renderList(key, source);
  }

  return config?.sidebar?.type === "filter"
    ? renderFilter(key, source)
    : renderList(key, source);
};

  return (
    <div>
     <div className="px-2 sidebar-title flex items-center justify-between">
  <span>{config?.sidebar?.title}</span>

  <button
    onClick={handleClearFilters}
    className="text-xs text-blue-600 hover:underline"
  >
    Clear
  </button>
</div>
      {Object.entries(config?.sidebar?.source || {}).map(
        ([key, source]) => (
          <div key={key}>
            {loading[key] ? (
              <div className="text-xs text-gray-400">Loading...</div>
            ) : (
              renderComponent(key, source)
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Sidebar;