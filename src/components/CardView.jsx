import { User } from 'lucide-react';
import React from 'react'
const CardView = ({ 
  config, 
  paginatedGroupedData, 
  hasButtons, 
  visibleButtons, 
  moreButtons, 
  showExtraColumn, 
  selectedRows,
  openDropdown,
  handleSelectRow,
  handleButtonClick,
  toggleDropdown,
  setOpenDropdown,
  getIconComponent,
  style
}) => {
  const { cards, datagrid, groupBy } = config;
  
  const getCardColor = (row) => {
    if (!cards?.colormap || !cards?.colmap?.color) return 'bg-white';
    
    const colorKey = row[cards.colmap.color];
    const colorClass = cards.colormap[colorKey];
    
    const colorMap = {
      'card_green': 'bg-green-50 border-green-200',
      'card_red': 'bg-red-50 border-red-200',
      'card_blue': 'bg-blue-50 border-blue-200',
      'card_yellow': 'bg-yellow-50 border-yellow-200',
    };
    
    return colorMap[colorClass] || 'bg-white border-gray-200';
  };

  const getCardValue = (row, field) => {
    if (!cards?.colmap?.[field]) return '';
    return row[cards.colmap[field]] || '';
  };

  return (
    <div className="p-4">
      {Object.keys(paginatedGroupedData).map(groupKey => (
        <div key={groupKey}>
          {groupBy && (
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {datagrid[groupBy].label}: {groupKey} ({paginatedGroupedData[groupKey].length} records)
              </h3>
            </div>
          )}
          
          <div className={style?.cardContainer || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>
            {paginatedGroupedData[groupKey] && paginatedGroupedData[groupKey].length > 0 ? (
              paginatedGroupedData[groupKey].map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={
                    style?.card || `border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${getCardColor(row)}`
                  }
                >
                  {/* Card Header with Avatar and Actions */}
                  <div className="p-4 pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          {getCardValue(row, 'avatar') ? (
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={getCardValue(row, 'avatar')}
                              alt=""
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div 
                            className={`h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center ${
                              getCardValue(row, 'avatar') ? 'hidden' : 'flex'
                            }`}
                          >
                            <User className="h-5 w-5 text-gray-600" />
                          </div>
                        </div>
                        
                        {/* Title and Description */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {getCardValue(row, 'title') || row.name || row.userid || `Record ${rowIndex + 1}`}
                          </p>
                          {getCardValue(row, 'descs') && (
                            <p className="text-xs text-gray-500 truncate">
                              {getCardValue(row, 'descs')}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Checkbox */}
                      {showExtraColumn === 'checkbox' && (
                        <input
                          type="checkbox"
                          checked={selectedRows.has(row.id)}
                          onChange={() => handleSelectRow(row.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-4 pb-2">
                    {/* Category/Tags */}
                    {getCardValue(row, 'category') && (
                      <div className="mb-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {getCardValue(row, 'category')}
                        </span>
                      </div>
                    )}
                    
                    {/* Due Date */}
                    {getCardValue(row, 'due_date') && (
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(getCardValue(row, 'due_date')).toLocaleDateString()}
                      </div>
                    )}
                    
                    {/* Additional Info */}
                    <div className="space-y-1 text-xs text-gray-600">
                      {Object.entries(row).slice(0, 3).map(([key, value]) => {
                        if (!value || key === 'id' || getCardValue(row, 'title') === value) return null;
                        const column = datagrid[key];
                        if (!column || column.hidden) return null;
                        
                        return (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-500">{column.label}:</span>
                            <span className="font-medium truncate ml-2">
                              {column.formatter === 'checkbox' ? (
                                <Check className={`w-3 h-3 ${value ? 'text-green-600' : 'text-gray-400'}`} />
                              ) : column.formatter === 'date' ? (
                                new Date(value).toLocaleDateString()
                              ) : (
                                String(value)
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Actions */}
                  {hasButtons && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 rounded-b-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {visibleButtons.slice(0, 2).map(([buttonKey, button]) => (
                            <button
                              key={buttonKey}
                              onClick={() => handleButtonClick(buttonKey, button, row)}
                              className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              title={button.label}
                            >
                              {getIconComponent(button.icon)}
                            </button>
                          ))}
                        </div>
                        
                        {(visibleButtons.length > 2 || moreButtons.length > 0) && (
                          <div className="relative">
                            <button
                              onClick={() => toggleDropdown(row.id)}
                              className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <MoreHorizontal className="w-3 h-3" />
                            </button>
                            
                            {openDropdown === row.id && (
                              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                <div className="py-1">
                                  {visibleButtons.slice(2).map(([buttonKey, button]) => (
                                    <button
                                      key={buttonKey}
                                      onClick={() => {
                                        handleButtonClick(buttonKey, button, row);
                                        setOpenDropdown(null);
                                      }}
                                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      title={button.label}
                                    >
                                      <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
                                      <span className="truncate">{button.label}</span>
                                    </button>
                                  ))}
                                  {moreButtons.map(([buttonKey, button]) => (
                                    <button
                                      key={buttonKey}
                                      onClick={() => {
                                        handleButtonClick(buttonKey, button, row);
                                        setOpenDropdown(null);
                                      }}
                                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      title={button.label}
                                    >
                                      <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
                                      <span className="truncate">{button.label}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500">No data available</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


export default  CardView