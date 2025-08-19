import { MoreVertical } from 'lucide-react';
import React from 'react'

const TableView = ({ 
  config, 
  paginatedGroupedData, 
  visibleColumns, 
  hasButtons, 
  visibleButtons, 
  moreButtons, 
  sortConfig, 
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
  style
}) => {
  const { datagrid, groupBy } = config;

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        {Object.keys(paginatedGroupedData).map(groupKey => (
          <div key={groupKey}>
            {groupBy && (
              <div className="bg-gray-100 px-4 sm:px-6 py-2 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">
                  {datagrid[groupBy].label}: {groupKey} ({paginatedGroupedData[groupKey].length} records)
                </h3>
              </div>
            )}
            
            <div className="min-w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={style?.thead || "bg-gray-50" }>
                  <tr>
                    {hasButtons && (
                      <th className={style?.th || "px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32"}>
                        Actions
                      </th>
                    )}
                    {showExtraColumn === 'checkbox' && (
                      <th className={style?.th || "px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}>
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </th>
                    )}
                    {visibleColumns.map(([key, col]) => (
                      <th
                        key={key}
                        className={style?.th || `px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                          col.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                        }`}
                        style={col.style ? parseStyle(col.style) : {}}
                        onClick={() => handleSort(key)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate">{col.label}</span>
                          {renderSortIcon(key)}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={style?.tbody || "bg-white divide-y divide-gray-200"}>
                  {paginatedGroupedData[groupKey] && paginatedGroupedData[groupKey].length > 0 ? (
                    paginatedGroupedData[groupKey].map((row, rowIndex) => (
                      <tr key={rowIndex} className={style?.tr || "hover:bg-gray-50"}>
                        {hasButtons && (
                          <td className={style?.td || "px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900"}>
                            <div className="flex items-center gap-2">
                              {visibleButtons.map(([buttonKey, button]) => (
                                <button
                                  key={buttonKey}
                                  onClick={() => handleButtonClick(buttonKey, button, row)}
                                  className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  title={button.label}
                                >
                                  {getIconComponent(button.icon)}
                                </button>
                              ))}
                              
                              {moreButtons.length > 0 && (
                                <div className="relative">
                                  <button
                                    onClick={() => toggleDropdown(row.id)}
                                    className="inline-flex items-center px-1 py-1 text-xs font-medium text-gray-700 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    title='More'
                                  >
                                    <MoreVertical className="w-4 h-4" />
                                  </button>
                                  
                                  {openDropdown === row.id && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                      <div className="py-1">
                                        {moreButtons.map(([buttonKey, button]) => (
                                          <button
                                            key={buttonKey}
                                            onClick={() => {
                                              handleButtonClick(buttonKey, button, row);
                                              setOpenDropdown(null);
                                            }}
                                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                            title={button.label}
                                          >
                                            <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
                                            <span className="truncate block w-full text-left">{button.label}</span>
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </td>
                        )}
                        
                        {showExtraColumn === 'checkbox' && (
                          <td className={style?.td || "px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900"}>
                            <input
                              type="checkbox"
                              checked={selectedRows.has(row.id)}
                              onChange={() => handleSelectRow(row.id)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </td>
                        )}
                        {visibleColumns.map(([key, col]) => (
                          <td
                            key={key}
                            className={style?.td || "px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900"}
                          >
                            <div className="truncate max-w-xs sm:max-w-none">
                              {formatCellValue(row[key], col.formatter)}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={visibleColumns.length + (showExtraColumn === 'checkbox' ? 1 : 0) + (hasButtons ? 1 : 0)}
                        className="px-4 sm:px-6 py-4 text-center text-sm text-gray-500"
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

export default TableView