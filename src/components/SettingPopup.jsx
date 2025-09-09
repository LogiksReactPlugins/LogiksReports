import React, { useState } from 'react';
import saveOverrides from '../helpers/saveOverrides';

export default function SettingPopup({ config, setConfig, setSettingsOpen }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [tempConfig, setTempConfig] = useState({ ...config });
    const [columnOrder, setColumnOrder] = useState(
        Object.keys(config?.datagrid || {})
    );
   
    // Filter columns based on search
    const filteredColumns = Object.entries(tempConfig?.datagrid || {}).filter(
        ([key, col]) =>
            col.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle drag and drop
    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, dropIndex) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

        if (dragIndex === dropIndex) return;

        const newOrder = [...columnOrder];
        const draggedItem = newOrder[dragIndex];

        newOrder.splice(dragIndex, 1);
        newOrder.splice(dropIndex, 0, draggedItem);

        setColumnOrder(newOrder);
    };

    const handleSubmit = () => {
        const orderedDatagrid = {};
        columnOrder.forEach(key => {
            orderedDatagrid[key] = tempConfig.datagrid[key];
        });

        const finalConfig = {
            ...tempConfig,
            datagrid: orderedDatagrid
        };

        setConfig(finalConfig);
        saveOverrides(finalConfig);

        setSettingsOpen(false);
    };

    const handleCancel = () => {
        setTempConfig({ ...config });
        setSettingsOpen(false);
    };

    const updateSetting = (path, value) => {
        const updated = { ...tempConfig };
        const keys = path.split('.');
        let current = updated;

        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) current[keys[i]] = {};
            current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        setTempConfig(updated);
    };

    const Toggle = ({ checked, onChange }) => (
        <button
            type="button"
            onClick={() => onChange(!checked)}
            className={`relative  cursor-pointer inline-flex h-4 w-8 items-center rounded-full transition-all duration-200 ${checked ? 'bg-action shadow-primary/20' : 'bg-gray-300'
                }`}
        >
            <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${checked ? 'translate-x-4' : 'translate-x-0.5'
                    }`}
            />
        </button>
    );

    const DragIcon = () => (
        <svg className="w-4 h-4 text-gray-400 opacity-60" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="3" cy="3" r="2" />
            <circle cx="3" cy="10" r="2" />
            <circle cx="3" cy="17" r="2" />
            <circle cx="10" cy="3" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="10" cy="17" r="2" />
        </svg>
    );

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col m-4 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-2 bg-gradient-to-r from-primary/5 to-primary/10">
                    <div>
                        <h2 className="text-lg font-semibold text-secondary">Report Settings</h2>
                        <p className="text-xs text-muted mt-0.5">Customize your report view and columns</p>
                    </div>
                    <button
                        onClick={handleCancel}
                        className="p-2 hover:bg-white/80 cursor-pointer rounded-lg text-gray-500 hover:text-gray-700 transition-all duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Left Panel - Preferences */}
                    <div className="w-1/2 bg-gray-50/50 overflow-y-auto thin-scrollbar">
                        <div className="p-5">
                            {/* Page Size */}
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-secondary mb-1">
                                    Rows per page
                                </label>
                                <select
                                    value={tempConfig?.rowsPerPage || 10}
                                    onChange={(e) => updateSetting('rowsPerPage', parseInt(e.target.value))}
                                    className="w-full text-sm bg-white rounded-lg px-3 py-2 transition-all 
                   border border-gray-300 focus:outline-none cursor-pointer 
                   focus:ring-gray-200 focus:border-gray-400"
                                >
                                    <option value={10}>10 rows</option>
                                    <option value={25}>25 rows</option>
                                    <option value={50}>50 rows</option>
                                    <option value={100}>100 rows</option>
                                    <option value={200}>200 rows</option>
                                    <option value={500}>500 rows</option>
                                    <option value={1000}>1000 rows</option>
                                    <option value={2000}>2000 rows</option>
                                    <option value={5000}>5000 rows</option>
                                </select>
                                <p className="text-xs text-gray-500 mt-1">
                                    Controls how many rows are displayed per page.
                                </p>
                            </div>

                            {/* Display Options */}
                            <div className="mb-3">
                                <h3 className="text-sm font-medium text-secondary mb-1">Display Options</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted">Wrap text in cells</span>
                                            <Toggle
                                                checked={tempConfig?.wrapLines || false}
                                                onChange={(value) => updateSetting('wrapLines', value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            If enabled, long text will wrap to multiple lines instead of being truncated.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted">Alternate row colors</span>
                                            <Toggle
                                                checked={tempConfig?.stripedRows || false}
                                                onChange={(value) => updateSetting('stripedRows', value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Improves readability by shading every alternate row.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted">Row click selection</span>
                                            <Toggle
                                                checked={tempConfig?.rowClickSelection || false}
                                                onChange={(value) => updateSetting('rowClickSelection', value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Allows selecting rows by clicking anywhere on the row.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted">Dense layout</span>
                                            <Toggle
                                                checked={tempConfig?.compactMode || false}
                                                onChange={(value) => updateSetting('compactMode', value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Reduces row height to fit more rows on the screen.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Column Fixing */}
                            <div>
                                <h3 className="text-sm font-medium text-secondary mb-1">Column Pinning</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted">Pin first column</span>
                                            <Toggle
                                                checked={tempConfig?.fixFirstColumn || false}
                                                onChange={(value) => updateSetting('fixFirstColumn', value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Keeps the first column fixed in place while scrolling horizontally.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted">Pin first two columns</span>
                                            <Toggle
                                                checked={tempConfig?.fixFirstTwoColumns || false}
                                                onChange={(value) => updateSetting('fixFirstTwoColumns', value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Keeps the first two columns visible during horizontal scrolling.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted">Pin last column</span>
                                            <Toggle
                                                checked={tempConfig?.fixLastColumn || false}
                                                onChange={(value) => updateSetting('fixLastColumn', value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Locks the last column so it stays visible when scrolling.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Panel - Columns */}
                    <div className="flex-1 flex flex-col bg-white">
                        <div className="p-5 flex items-center justify-between bg-gray-50/30">
                            <div>
                                <h3 className="text-sm font-medium text-secondary">Column Visibility</h3>
                                <p className="text-xs text-muted mt-0.5">Drag to reorder • Toggle to show/hide</p>
                            </div>
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search columns..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="text-sm bg-white rounded-lg pl-9 pr-4 py-2 w-48 outline outline-slate-300 focus:outline-1 border-0 transition-all"
                                />
                                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Column List */}
                        <div className="flex-1 overflow-y-auto  thin-scrollbar">
                            {(searchTerm ? filteredColumns : columnOrder.map(key => [key, tempConfig.datagrid[key]])).map(([key, col], index) => (
                                <div
                                    key={key}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, index)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, index)}
                                    className="flex items-center gap-1 px-5 py-1.5 hover:bg-gray-50/50 cursor-move group transition-colors duration-150"
                                >
                                    <div className=" text-lg  group-hover:opacity-100">
                                        <DragIcon />
                                    </div>




                                    <span className="text-sm text-secondary flex-1 font-medium">{col.label}</span>

                                    <Toggle
                                        checked={col.hidden !== true}
                                        onChange={(value) => {
                                            setTempConfig((prev) => ({
                                                ...prev,
                                                datagrid: {
                                                    ...prev.datagrid,
                                                    [key]: {
                                                        ...prev.datagrid[key],
                                                        hidden: !value, // toggle correctly
                                                    },
                                                },
                                            }));
                                        }}
                                    />
                                    {/* <div className={`w-2 h-2 rounded-full transition-colors ${col.hidden !== true ? 'bg-green-500' : 'bg-gray-300'}`} /> */}
                                </div>
                            ))}

                            {(searchTerm ? filteredColumns : columnOrder).length === 0 && (
                                <div className="p-8 text-center">
                                    <div className="text-gray-400 mb-2">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0012 15c-2.34 0-4.464-.881-6.08-2.33" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-gray-500">No columns found</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50/30">
                    <button
                        onClick={handleCancel}
                        className="px-5 py-2  cursor-pointer text-sm font-medium text-muted bg-white hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-5 py-2 cursor-pointer text-sm font-medium text-action bg-action hover:bg-action/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        Apply Changes
                    </button>
                </div>
            </div>
        </div>
    );
}