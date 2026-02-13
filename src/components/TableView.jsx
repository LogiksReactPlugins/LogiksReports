import { Copy, MoreVertical } from "lucide-react";
import React, { useEffect, useState } from "react";
import ShimmerTableRow from "./loadings/ShimmerTableRow";
import copyToClipboard from "../helpers/copyToClipboard";

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
}) => {
  const { datagrid, groupBy } = config;
  const {
    wrapLines,
    rowClickSelection,
    stripedRows,
    fixFirstColumn,
    fixFirstTwoColumns,
    fixLastColumn,
    compactMode,
  } = config;
  const [copiedCell, setCopiedCell] = useState(null);
  const dropdownRef = React.useRef(null);
  const reportTitle = config?.title?.toLowerCase().trim().replace(/\s+/g, "_");

  useEffect(() => {
    if (!openDropdown) return;

    const handleOutsideClick = (e) => {
      if (dropdownRef.current?.contains(e.target)) return;
      setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openDropdown]);

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
  const getAggregateValue = (key, col, rows = []) => {
    if (!col?.aggregate?.type || !Array.isArray(rows)) return null;

    const rawType = col.aggregate.type;

    const getNumericValues = (columnKey) =>
      rows
        .map((row) => {
          const val = getRowValue(row, columnKey);
          return typeof val === "number" ? val : Number(val);
        })
        .filter((val) => !isNaN(val));

    const calculateBase = (type, columnKey) => {
      const values = getNumericValues(columnKey);

      switch (type) {
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

        default:
          return 0;
      }
    };

    if (typeof rawType === "string" && /^[a-z]+$/i.test(rawType)) {
      return calculateBase(rawType.toUpperCase(), key);
    }

    if (typeof rawType === "string") {
      let expression = rawType;

      expression = expression.replace(
        /(sum|avg|min|max|count)\((.*?)\)/gi,
        (_, fn, columnKey) => {
          const value = calculateBase(fn.toUpperCase(), columnKey.trim());
          return Number(value);
        },
      );

      try {
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) return 0;

        return Function(`"use strict"; return (${expression})`)();
      } catch {
        return 0;
      }
    }

    return null;
  };

  const renderAggregateRow = (rows) => {
    return (
      <tr className="bg-gray-100 font-semibold sticky bottom-0 z-20 report-aggregate-row">
        {hasButtons && <td />}
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

          return (
            <td key={key} className={`px-2 py-2 text-sm ${fixedClass}`}>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">
                  {col.aggregate.label}
                </span>
                <span>{getAggregateValue(key, col, rows)}</span>
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
        {Object.keys(paginatedGroupedData).map((groupKey) => (
          <div key={groupKey}>
            {groupBy && (
              <div className="bg-gray-100 px-2  py-2 ">
                <h3 className="text-sm font-medium text-gray-700">
                  {datagrid[groupBy].label}: {groupKey} (
                  {paginatedGroupedData[groupKey].length} records)
                </h3>
              </div>
            )}

            <div className="overflow-x-auto overflow-y-auto max-h-screen thin-scrollbar">
              <table
                className="min-w-full divide-y divide-gray-200 border border-gray-200 "
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
                          style?.th || "px-2 py-2 text-xs font-bold uppercase"
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
                            style?.th || "px-2 py-2 text-xs font-bold uppercase"
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
                          case "select": {
                            const rawOptions = filter.options ?? {};

                            // normalize options to { [key]: label }
                            const options = Array.isArray(rawOptions)
                              ? rawOptions.reduce((acc, item) => {
                                  const [key, value] = Object.entries(item)[0];
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

                <tbody
                  className={
                    style?.tbody || "bg-white divide-y divide-gray-200"
                  }
                >
                  {(loading && config.aggregatePosition === "top") ||
                  config.aggregatePosition === "both"
                    ? renderAggregateRow(paginatedGroupedData[groupKey] || [])
                    : null}

                  {loading ? (
                    // Show shimmer while loading
                    <>
                      {Array.from({ length: 6 }).map((_, rowIndex) => (
                        <ShimmerTableRow
                          key={rowIndex}
                          columns={[
                            ...(hasButtons ? [["__actions", {}]] : []),
                            ...(showExtraColumn === "checkbox"
                              ? [["__checkbox", {}]]
                              : []),
                            ...visibleColumns,
                          ]}
                        />
                      ))}
                    </>
                  ) : paginatedGroupedData[groupKey] &&
                    paginatedGroupedData[groupKey].length > 0 ? (
                    paginatedGroupedData[groupKey].map((row, rowIndex) => {
                      const rowRules = config?.rules?.row_class || {};
                      let dynamicRowClass = "";

                      Object.entries(rowRules).forEach(([field, valueMap]) => {
                        const fieldValue = getRowValue(row, field);
                        if (valueMap && fieldValue && valueMap[fieldValue]) {
                          dynamicRowClass += ` ${valueMap[fieldValue]}`;
                        }
                      });
                      return (
                        <tr
                          id={`${reportTitle}_tr_${getRowValue(row, "id")}`}
                          key={rowIndex}
                          className={`${style?.tr || "hover:bg-secondary"} 
                            ${rowClickSelection ? "cursor-pointer" : ""} 
                            ${compactMode ? "text-xs py-0.5" : ""} 
                            ${
                              stripedRows && rowIndex % 2 === 1
                                ? "bg-gray-50"
                                : ""
                            }
                            ${dynamicRowClass.trim()}`}
                          onClick={() =>
                            rowClickSelection &&
                            handleSelectRow(getRowValue(row, "id"))
                          }
                        >
                          {hasButtons && (
                            <td
                              className={
                                style?.td ||
                                "px-2 py-1 whitespace-nowrap text-sm text-gray-900"
                              }
                            >
                              <div className="flex items-center">
                                {visibleButtons.map(([buttonKey, button]) => (
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
                                    className="inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action"
                                    title={resolvePlaceholders(
                                      button.label,
                                      row,
                                    )}
                                  >
                                    {getIconComponent(button.icon)}
                                  </button>
                                ))}

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
                                        onMouseDown={(e) => e.stopPropagation()}
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
                                                  e.currentTarget.closest("tr"),
                                                );
                                                setOpenDropdown(null);
                                              }}
                                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                              title={resolvePlaceholders(
                                                button.label,
                                                row,
                                              )}
                                            >
                                              <span className="flex-shrink-0">
                                                {getIconComponent(button.icon)}
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
                              dynamicColClass = valueMap[getRowValue(row, key)];
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
                                <div className="relative group flex items-center">
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
                                                ).toLocaleString(undefined, {
                                                  month: "long",
                                                })
                                              : "";
                                          break;
                                        }
                                        case "checkbox":
                                          copyValue = copyValue ? "Yes" : "No";
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
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan={
                          visibleColumns.length +
                          (hasButtons ? 1 : 0) +
                          (showExtraColumn === "checkbox" ? 1 : 0)
                        }
                        className="px-4 py-6 text-center text-sm text-gray-500"
                      >
                        No data available
                      </td>
                    </tr>
                  )}

                  {!loading && config.aggregatePosition !== "top"
                    ? renderAggregateRow(paginatedGroupedData[groupKey] || [])
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableView;
