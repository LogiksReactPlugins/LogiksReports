import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Search, Printer, Download, Mail, Plus, Eye, Tag, Check, X, ChevronUp, ChevronDown, RotateCcw, Group, ChevronLeft, ChevronRight, Menu, Filter, MoreHorizontal, Edit, User, Ban, RefreshCw, MoreVertical, Upload, Grid, List, Calendar, Clock, MapPin, Columns, Recycle, PlusIcon, Cog, FilterIcon, Settings, Loader2 } from 'lucide-react';
import CardView from '../CardView';
import TableView from '../TableView';
import KanbanView from '../KanbanView';
import CalendarView from '../CalendarView';
import './../../index.css'
import axios from 'axios';
import SettingPopup from '../SettingPopup';
import mergeConfig from '../../helpers/mergeConfig';
import formatCellValue from '../../helpers/formatCellValue';
import updateLocalOverride from '../../helpers/updateLocalOverride';
import { exportTable } from '../../helpers/exports';
import CONSTANTS from '../../constants';

// Main Reports Component
export default function Reports({ report: reportJSON, style, methods, data: reportdata, onButtonClick, components }) {
  const [config, setConfig] = useState(null);
  const [currentView, setCurrentView] = useState();
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
  const [kanbanGroupBy, setKanbanGroupBy] = useState(null);
  const [data, setData] = useState([])
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(null)
  useEffect(() => {
    if (!currentView) return;
    updateLocalOverride("template", currentView);
  }, [currentView]);

  useEffect(() => {
    const localOverrides = JSON.parse(localStorage.getItem("tableOverrides")) || {};

    const report = mergeConfig(reportJSON, localOverrides);
    setConfig(report);

    // 2. Restore template (view) priority:
    // first from localStorage, else from server
    if (localOverrides?.template) {
      console.log([localOverrides.template])
      setCurrentView((reportJSON[localOverrides?.template]) ? localOverrides.template : null);
    } else if (report?.template) {
      setCurrentView(report.template);
    }
  }, [reportJSON]);



  // useEffect(() => {
  //   const localOverrides = JSON.parse(localStorage.getItem("tableOverrides"));
  //   const report = mergeConfig(reportJSON, localOverrides);
  //   setConfig(report);
  //   // if (report?.template === 'card' && (report?.cards && Object.keys(report.cards).length > 0)) {
  //   //   setCurrentView('card');
  //   // } else if (report?.template === 'calendar' && (report?.calendar && Object.keys(report.calendar).length > 0)) {
  //   //   setCurrentView('calendar');
  //   // } else if (report?.template === 'kanban' && (report?.kanban && Object.keys(report.kanban).length > 0)) {
  //   //   setCurrentView('kanban');
  //   //   const kanbanKeys = Object.keys(report.kanban?.colkeys || {});
  //   //   if (kanbanKeys.length > 0) {
  //   //     setKanbanGroupBy(kanbanKeys[0]);
  //   //   }
  //   // }
  // }, [reportJSON]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      if (config?.source?.type === 'API') {
        const axiosObject = {
          method: config?.source?.method,
          url: config?.source?.url,
          headers: config?.source?.headers
        }
        const { data } = await axios(axiosObject)
        console.log({ data })
        setData(data?.data || [])
      } else if (reportdata) {
        setData(reportdata)
      }
      else if (config?.rows) {
        setData(config?.rows || [])
      }
    }
    fetchAPI()
  }, [config])
  useEffect(() => {

  })

  const filteredAndSortedData = useMemo(() => {
    if (!data) return [];

    let filtered = data;

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
    console.log({ filtered })
    return filtered;
  }, [config, searchTerm, sortConfig, data]);

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

  const { title, toolbar, actions, buttons, datagrid, uiswitcher } = config;

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
    if (!iconStr) return <i className='fa fa-star'></i>;

    // if (iconStr.includes('eye')) return <Eye className="w-4 h-4" />;
    // if (iconStr.includes('pencil') ||iconStr.includes('tag') || iconStr.includes('code') || iconStr.includes('edit')) return <Edit className="w-4 h-4" />;
    // if (iconStr.includes('user')) return <User className="w-4 h-4" />;
    // if (iconStr.includes('check')) return <Check className="w-4 h-4" />;
    // if (iconStr.includes('close') || iconStr.includes('times')) return <X className="w-4 h-4" />;
    // if (iconStr.includes('exchange')) return <RefreshCw className="w-4 h-4" />;
    // if (iconStr.includes('ban')) return <Ban className="w-4 h-4" />;
    // if (iconStr.includes('add')) return <PlusIcon className="w-4 h-4" />;
    // if (iconStr.includes('gear')) return <Cog className="w-4 h-4" />;

    return <i className={`${iconStr}`}></i>;
  };

  const handleButtonClick = (buttonKey, button, data) => {
    // console.log(methods[button?.event?.click]?.(data?.id))
    // const resolvedParams = Object.values(button?.params || {}).map(key => data?.[key]);
    // methods[button?.event?.click]?.(...resolvedParams);
    // console.log('METHOD--',methods[button?.event?.click])
    console.log('Button clicked:', buttonKey, button, data);
    onButtonClick(buttonKey, data)
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
  const hasButtons = visibleButtons.length > 0 || moreButtons.length > 0;

  const handleExport = async (type) => {
    console.log('Exporting as:', type);
    try {
      setLoading(type);
      await exportTable(type);
    } finally {
      setOpen(false);
      setLoading(null);
    }
  };

  // Sample data for demonstration
  // const sampleData = [
  //   { id: 1, userid: 'john_doe', gender: 'male', name: 'John Doe', blocked: false, dtoc: '2024-01-15', dtoe: '09:30:00' },
  //   { id: 2, userid: 'jane_smith', gender: 'female', name: 'Jane Smith', blocked: true, dtoc: '2024-01-20', dtoe: '14:45:00' },
  //   { id: 3, userid: 'bob_wilson', gender: 'male', name: 'Bob Wilson', blocked: false, dtoc: '2024-01-25', dtoe: '11:15:00' }
  // ];

  // // Add sample data if no rows exist
  // if (!config.rows || config.rows.length === 0) {
  //   config.rows = sampleData;
  // }

  return (
    <div className="bg-white min-h-screen">
      <div className=" px-3 sm:px-3 py-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h1 className={style?.title || `text-xl font-semibold text-gray-900 flex-shrink-0`}>{title} <span className='text-sm' >({filteredAndSortedData.length})</span> </h1>
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {toolbar?.print !== false && (
              <button
                onClick={() => exportTable('pdf')}
                className="inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer"
              >
                <Printer className="w-4 h-4 mr-1" />
                Print
              </button>
            )}

            <div className="relative inline-block text-left" ref={dropdownRef}>
              {toolbar?.export !== false &&
                <button
                  onClick={() => setOpen(!open)}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <Upload className="w-4 h-4 mr-1" />
                  Export
                </button>
              }
              {open && (
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white border border-gray-200 shadow-lg">
                  <ul className="py-1 text-sm text-action">
                    {CONSTANTS.EXPORT_ORDER.filter((key) =>
                      toolbar?.export === false
                        ? false
                        : Array.isArray(toolbar?.export)
                          ? toolbar.export.includes(key)
                          : CONSTANTS.DEFAULT_EXPORTS.includes(key)
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
                            <span className="text-xs font-medium text-gray-600">Processing export...</span>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>

                </div>
              )}
            </div>
            {toolbar?.email !== false && (
              <button
                className="inline-flex items-center px-3 py-1 text-sm font-medium bg-action rounded-md hover:bg-gray-100 cursor-pointer"

              >
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

        <div className={style?.searchBarContainer || "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-4"}>
          {toolbar?.search !== false && (
            <div className="flex items-center gap-3 flex-1 lg:max-w-sm">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-1 text-slate-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {/* <button
                onClick={handleReset}
                className="inline-flex cursor-pointer items-center px-3 py-1.5 text-sm font-medium bg-action  rounded-md  flex-shrink-0"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </button> */}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4">
            {(groupableColumns.length > 0 || currentView === 'kanban') && (
              <div className="flex items-center gap-2 flex-shrink-0">
                <Group className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">
                  {currentView === 'kanban' ? 'Group by:' : 'Group by:'}
                </span>
                <select
                  value={currentView === 'kanban' ? (kanbanGroupBy || '') : (groupBy || '')}
                  onChange={(e) => {
                    if (currentView === 'kanban') {
                      setKanbanGroupBy(e.target.value || null);
                    } else {
                      setGroupBy(e.target.value || null);
                    }
                  }}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">None</option>
                  {currentView === 'kanban'
                    ? Object.entries(config?.kanban?.colkeys || {}).map(([key, col]) => (
                      <option key={key} value={key}>{col.label}</option>
                    ))
                    : groupableColumns.map(col => (
                      <option key={col.key} value={col.key}>{col.label}</option>
                    ))
                  }
                </select>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {
                uiswitcher != false &&
                <div className="flex items-center bg-gray-100 rounded-lg p-1">

                  {
                    config?.datagrid &&
                    <button
                      onClick={() => setCurrentView('table')}
                      title='Table'
                      className={`inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${currentView === 'table' || !currentView
                        ? 'bg-action shadow'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      <List className="w-4 h-4 " />
                      {/* Table */}
                    </button>
                  }
                  {
                    config?.cards &&
                    <button
                      title='Cards'

                      onClick={() => setCurrentView('cards')}
                      className={`inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${currentView === 'cards'
                        ? 'bg-action shadow'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      <Grid className="w-4 h-4 " />
                      {/* Cards */}
                    </button>
                  }
                  {
                    config?.kanban &&
                    <button
                      onClick={() => setCurrentView('kanban')}
                      title='Kanban'

                      className={`inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${currentView === 'kanban'
                        ? 'bg-action shadow'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      <Columns className="w-4 h-4 " />
                      {/* Kanban */}
                    </button>
                  }
                  {
                    config?.calendar &&
                    <button
                      onClick={() => setCurrentView('calendar')}
                      title='Calender'

                      className={`inline-flex items-center px-3 cursor-pointer py-1.5 text-sm font-medium rounded-md transition-colors ${currentView === 'calendar'
                        ? 'bg-action shadow'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      <Calendar className="w-4 h-4 " />
                    </button>
                  }
                </div>
              }
              {actions && Object.entries(actions).map(([key, action]) => (
                <button
                  onClick={() => handleButtonClick(key, action)}
                  key={key}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium cursor-pointer bg-action rounded-md"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  {action?.label || "Add Record"}
                </button>
              ))}
              <button
                className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors  bg-action cursor-pointer`}
              >
                <FilterIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSettingsOpen(true)}

                className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors  bg-action cursor-pointer`}
              >
                <Settings className="w-4 h-4" />
              </button>
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

      {/* Pagination */}
      {(currentView === 'table' || currentView === null || currentView === 'cards') && totalPages > 1 && (
        <div className="px-4 sm:px-6 py-1 sticky z-30 top-0 bg-white  border-y border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-sm text-gray-500">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedData.length)} of {filteredAndSortedData.length} records
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="inline-flex cursor-pointer items-center px-3 py-0.5 text-sm font-medium text-action  rounded-md   disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="inline-flex cursor-pointer items-center px-3 py-0.5 text-sm font-medium text-action  rounded-md   disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Selected rows info */}
      {showExtraColumn === 'checkbox' && selectedRows.size > 0 && (
        <div className="px-4 sm:px-6 py-2 bg-blue-50 border-t border-blue-200">
          <div className="text-sm text-blue-700">
            {selectedRows.size} row{selectedRows.size !== 1 ? 's' : ''} selected
          </div>
        </div>
      )}
      {/* Render Current View */}
      {
        currentView === 'cards' ? (
          <CardView
            style={style?.cards}
            config={config}
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
            getIconComponent={getIconComponent} />
        ) : currentView === 'kanban' ? (
          <KanbanView
            config={config}
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
          />
        ) : currentView === 'calendar' ? (
          <CalendarView
            config={config}
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
          />
        ) : <TableView
          style={style?.table}
          config={config}
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
        />}

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
          setConfig={setConfig}
        />
      )}

      {
        components
      }

    </div>
  );
}