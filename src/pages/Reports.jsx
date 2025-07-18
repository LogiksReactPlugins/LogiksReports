import React, { useEffect, useState, useMemo, useRef } from 'react';
import { report } from '../../data/report/example4';
import { Search, Printer, Download, Mail, Plus, Eye, Tag, Check, X, ChevronUp, ChevronDown, RotateCcw, Group, ChevronLeft, ChevronRight, Menu, Filter, MoreHorizontal, Edit, User, Ban, RefreshCw, MoreVertical, Upload } from 'lucide-react';

export default function Reports() {
  const [config, setConfig] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [groupBy, setGroupBy] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setConfig(report);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAndSortedData = useMemo(() => {
    if (!config?.rows) return [];

    let filtered = config.rows;

    if (searchTerm) {
      filtered = filtered.filter(row => {
        return Object.entries(config.datagrid).some(([key, col]) => {
          if (!col.searchable) return false;
          const value = String(row[key] || '').toLowerCase();
          return value.includes(searchTerm.toLowerCase());
        });
      });
    }

    if (sortConfig.key) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [config, searchTerm, sortConfig]);

  const rowsPerPage = config?.rowsPerPage || 5;
  const totalPages = Math.ceil(filteredAndSortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  const paginatedGroupedData = useMemo(() => {
    if (!groupBy) return { ungrouped: currentData };

    const grouped = currentData.reduce((acc, row) => {
      const groupValue = row[groupBy] || 'Ungrouped';
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

  const { title, toolbar, actions, buttons, datagrid, rows } = config;

  const handleSort = (key) => {
    const column = datagrid[key];
    if (!column.sortable) return;

    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSortConfig({ key: null, direction: 'asc' });
    setGroupBy(null);
    setCurrentPage(1);
    setSelectedRows(new Set());
    setSelectAll(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      const allRowIds = currentData.map(row => row.id);
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

  const formatCellValue = (value, formatter) => {
    if (formatter === 'checkbox') {
      return value ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-red-600" />;
    }
    if (formatter === 'date') {
      return new Date(value).toLocaleDateString();
    }
    if (formatter === 'time') {
      return new Date(value).toLocaleString();
    }
    return String(value || '');
  };

  const parseStyle = (styleStr) => {
    if (!styleStr) return {};
    return styleStr.split(';').reduce((acc, item) => {
      const [key, value] = item.split(':');
      if (key && value) {
        const camelKey = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        acc[camelKey] = value.trim();
      }
      return acc;
    }, {});
  };

  const renderSortIcon = (key) => {
    if (!datagrid[key].sortable) return null;
    
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? 
        <ChevronUp className="w-4 h-4" /> : 
        <ChevronDown className="w-4 h-4" />;
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
    
    if (iconStr.includes('eye')) return <Eye className="w-4 h-4" />;
    if (iconStr.includes('pencil') ||iconStr.includes('tag') || iconStr.includes('code') || iconStr.includes('edit')) return <Edit className="w-4 h-4" />;
    if (iconStr.includes('user')) return <User className="w-4 h-4" />;
    if (iconStr.includes('check')) return <Check className="w-4 h-4" />;
    if (iconStr.includes('close') || iconStr.includes('times')) return <X className="w-4 h-4" />;
    if (iconStr.includes('exchange')) return <RefreshCw className="w-4 h-4" />;
    if (iconStr.includes('ban')) return <Ban className="w-4 h-4" />;
    
    return null;
  };

  const handleButtonClick = (buttonKey, button, row) => {
    console.log('Button clicked:', buttonKey, button, row);
    // Handle button actions here
  };

  const toggleDropdown = (rowId) => {
    setOpenDropdown(openDropdown === rowId ? null : rowId);
  };

  const groupableColumns = Object.entries(datagrid)
    .filter(([key, col]) => col.groupable && !col.hidden)
    .map(([key, col]) => ({ key, label: col.label }));

  const showExtraColumn = config.showExtraColumn;
  const visibleColumns = Object.entries(datagrid).filter(([key, col]) => !col.hidden);
  const visibleButtons = buttons ? Object.entries(buttons).filter(([k]) => k !== "more") : [];
  const moreButtons = buttons?.more ? Object.entries(buttons.more) : [];

  // Check if we have any buttons to show
  const hasButtons = visibleButtons.length > 0 || moreButtons.length > 0;


  const handleExport = (type) => {
    setOpen(false);
    console.log('Exporting as:', type);
    // Call the appropriate export function here
  };
  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h1 className="text-xl font-semibold text-gray-900 flex-shrink-0">{title}</h1>
          
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {toolbar?.print && (
              <button
              onClick={()=>window.print()}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <Printer className="w-4 h-4 mr-1" />
                Print
              </button>
            )}
               {toolbar?.export && (
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Upload className="w-4 h-4 mr-1" />
            Export
          </button>

          {open && (
            <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white border border-gray-200 shadow-lg">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button
                    onClick={() => handleExport('print')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    🖨️ Print Report
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExport('csv')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    📄 Export CSV
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExport('xml')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    📂 Export XML
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExport('html')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    🌐 Export HTML
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExport('image')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    🖼️ Export Image
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExport('download')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    ⬇️ Download CSV
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
            {toolbar?.email && (
              <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </button>
            )}
          </div>

          <button
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-4">
          {toolbar?.search && (
            <div className="flex items-center gap-3 flex-1 lg:max-w-md">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4">
            {groupableColumns.length > 0 && (
              <div className="flex items-center gap-2 flex-shrink-0">
                <Group className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Group by:</span>
                <select
                  value={groupBy || ''}
                  onChange={(e) => setGroupBy(e.target.value || null)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">None</option>
                  {groupableColumns.map(col => (
                    <option key={col.key} value={col.key}>{col.label}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {actions && Object.entries(actions).map(([key, action]) => (
                <button
                  key={key}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Record
                </button>
              ))}
            </div>
          </div>
        </div>

        {showMobileFilters && (
          <div className="sm:hidden mt-4 flex flex-wrap gap-2">
            {toolbar?.print && (
              <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100">
                <Printer className="w-4 h-4 mr-1" />
                Print
              </button>
            )}
            {toolbar?.export?.csv && (
              <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100">
                <Download className="w-4 h-4 mr-1" />
                Export
              </button>
            )}
            {toolbar?.email && (
              <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100">
                <Mail className="w-4 h-4 mr-1" />
                Email
              </button>
            )}
          </div>
        )}
      </div>

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
                  <thead className="bg-gray-50">
                    <tr>
                      {/* Actions column header */}
                      {hasButtons && (
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                          Actions
                        </th>
                      )}
                      {showExtraColumn === 'checkbox' && (
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                          className={`px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
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
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedGroupedData[groupKey] && paginatedGroupedData[groupKey].length > 0 ? (
                      paginatedGroupedData[groupKey].map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                          {/* Actions column */}
                          {hasButtons && (
                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              <div className="flex items-center gap-2">
                                {/* Visible buttons */}
                                {visibleButtons.map(([buttonKey, button]) => (
                                  <button
                                    key={buttonKey}
                                    onClick={() => handleButtonClick(buttonKey, button, row)}
                                    className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    title={button.label}
                                  
                        >
                                    {getIconComponent(button.icon)}
                                    {/* <span className="ml-1 hidden sm:inline">{button.label}</span> */}
                                  </button>
                                ))}
                                
                                {/* More buttons or remaining visible buttons */}
                                {(moreButtons.length > 0) && (
                                  <div className="relative">
                                    <button
                                      onClick={() => toggleDropdown(row.id)}
                                      className="inline-flex items-center px-1 py-1 text-xs font-medium text-gray-700 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      title='More'
                                    >
                                      <MoreVertical className="w-4 h-4" />
                                    </button>
                                    
                                    {openDropdown === row.id && (
                                      <div className="absolute left-0 mt-2 w-46 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                          {/* More buttons */}
                                          {moreButtons.map(([buttonKey, button]) => (
                                            <button
                                              key={buttonKey}
                                              onClick={() => {
                                                handleButtonClick(buttonKey, button, row);
                                                setOpenDropdown(null);
                                              }}
                                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                              title={button.label}
                                            >
                                              {getIconComponent(button.icon)}
                                              <span className="ml-2">{button.label}</span>
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
                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                              className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900"
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
      
      {/* Click outside to close dropdown */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}
      
      {totalPages > 1 && (
        <div className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-sm text-gray-500">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedData.length)} of {filteredAndSortedData.length} records
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </button>
              <span className="text-sm text-gray-700 px-2">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {showExtraColumn === 'checkbox' && selectedRows.size > 0 && (
        <div className="px-4 sm:px-6 py-2 bg-blue-50 border-t border-blue-200">
          <div className="text-sm text-blue-700">
            {selectedRows.size} row{selectedRows.size !== 1 ? 's' : ''} selected
          </div>
        </div>
      )}
    </div>
  );
}