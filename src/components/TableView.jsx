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
  const reportTitle = config.title.toLowerCase().trim().replace(/\s+/g, "_");

  useEffect(() => {
    if (!openDropdown) return;

    const handleOutsideClick = (e) => {
      if (dropdownRef.current?.contains(e.target)) return;
      setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openDropdown]);

  const resolveTitle = (title, row) => {
    if (!title) return "";
    if (title.startsWith("{") && title.endsWith("}")) {
      const key = title.slice(1, -1);
      return row?.[key] ?? "";
    }
    return title;
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
                className="min-w-full divide-y divide-gray-200 border border-gray-200 bordr-t"
                id="printable"
              >
                <thead
                  className={`${
                    style?.thead || "bg-muted text-action"
                  } sticky top-0 bg-white z-30`}
                >
                  <tr>
                    {hasButtons && (
                      <th
                        className={
                          style?.th ||
                          "px-2  py-2 text-left text-xs font-bold uppercase tracking-wider w-32"
                        }
                      >
                        Actions
                      </th>
                    )}
                    {showExtraColumn === "checkbox" && (
                      <th
                        className={
                          style?.th ||
                          "px-2  py-2 text-left text-xs font-bold uppercase tracking-wider"
                        }
                      >
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                            "px-2  py-2 text-left text-xs font-bold uppercase tracking-wider"
                          } ${
                            col.sortable
                              ? "cursor-pointer hover:bg-gray-100"
                              : ""
                          } ${fixedClass} ${col?.classes}`}
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
                </thead>
                <tbody
                  className={
                    style?.tbody || "bg-white divide-y divide-gray-200"
                  }
                >
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
                        const fieldValue = row[field];
                        if (valueMap && fieldValue && valueMap[fieldValue]) {
                          dynamicRowClass += ` ${valueMap[fieldValue]}`;
                        }
                      });
                      return (
                        <tr
                          id={`${reportTitle}_tr_${row.id}`}
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
                            rowClickSelection && handleSelectRow(row.id)
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
                                      handleButtonClick(buttonKey, button, row);
                                    }}
                                    className="inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action"
                                    title={resolveTitle(button.label, row)}
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
                                          openDropdown === row.id
                                            ? null
                                            : row.id
                                        );
                                      }}
                                      className="inline-flex items-center px-1 py-1 text-xs font-medium text-gray-700 rounded hover:bg-gray-200"
                                      title="More"
                                    >
                                      <MoreVertical className="w-4 h-4" />
                                    </button>

                                    {openDropdown === row.id && (
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
                                                  row
                                                );
                                                setOpenDropdown(null);
                                              }}
                                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                              title={resolveTitle(
                                                button.label,
                                                row
                                              )}
                                            >
                                              <span className="flex-shrink-0">
                                                {getIconComponent(button.icon)}
                                              </span>
                                              <span className="truncate text-left w-full">
                                                {resolveTitle(
                                                  button.label,
                                                  row
                                                )}
                                              </span>
                                            </button>
                                          )
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
                                checked={selectedRows.has(row.id)}
                                onChange={() => handleSelectRow(row.id)}
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

                            if (valueMap && row[key] && valueMap[row[key]]) {
                              dynamicColClass = valueMap[row[key]];
                            }

                            return (
                              <td
                                id={`${reportTitle}_tr_${row.id}_${key}`}
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
                                    {formatCellValue(
                                      row[key],
                                      col.formatter,
                                      row,
                                      col
                                    )}
                                  </div>

                                  <button
                                    onClick={() =>
                                      copyToClipboard(
                                        row[key] || "",
                                        `${row.id}-${key}`,
                                        setCopiedCell
                                      )
                                    }
                                    className="absolute -right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded bg-gray-50 hover:bg-gray-100 cursor-pointer"
                                    title="Copy"
                                  >
                                    {copiedCell === `${row.id}-${key}` ? (
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
