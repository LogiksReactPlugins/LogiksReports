import { Calendar, Check, Copy, MoreHorizontal, User } from 'lucide-react';
import React, { useState } from 'react'
import ShimmerCard from './loadings/ShimmerCard';
import copyToClipboard, { formatCardContent } from '../helpers/copyToClipboard';

const GalleryView = ({
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
    const [copiedCell, setCopiedCell] = useState(null);

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
        <div className="p-2 bg-muted">
            {Object.keys(paginatedGroupedData).map(groupKey => (
                <div key={groupKey}>
                    {groupBy && (
                        <div className="mb-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {datagrid[groupBy].label}: {groupKey} ({paginatedGroupedData[groupKey].length} records)
                            </h3>
                        </div>
                    )}

                    <div className={style?.cardContainer || "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"}>
                        {paginatedGroupedData[groupKey] && paginatedGroupedData[groupKey].length > 0 ? (
                            paginatedGroupedData[groupKey].map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className={
                                        style?.card || `border relative rounded-lg shadow-sm group hover:shadow-md transition-shadow duration-200 ${getCardColor(row)}`
                                    }
                                >
                                    <button
                                        onClick={() => {
                                            const content = formatCardContent(row, datagrid);
                                            copyToClipboard(content, `${row.id}-${rowIndex}`, setCopiedCell)

                                        }}
                                        className="inline-flex items-center absolute cursor-pointer right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-gray-900"
                                        title="Copy card content"
                                    >
                                        {copiedCell === `${row.id}-${rowIndex}` ? (
                                            <>
                                                <span className="text-xs text-gray-600">Copied!</span>
                                            </>
                                        ) : (
                                            <Copy className="w-4 h-4 text-gray-600" />
                                        )}
                                    </button>
                                    {/* Card Header with Avatar and Actions */}
                                    <div className="p-2 pb-0 flex items-start justify-between">
                                        <div className="flex flex-col w-full space-y-2">
                                            {/* Avatar */}
                                            {
                                                getCardValue(row, 'avatar') &&
                                                <div className="flex-shrink-0 bg-slate-200 h-40 flex justify-center">
                                                    {getCardValue(row, 'avatar') ? (
                                                        <img
                                                            className="h-40 object-cover"
                                                            src={getCardValue(row, 'avatar')}
                                                            alt=""
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'flex';
                                                            }}
                                                        />
                                                    ) :
                                                        <div
                                                            className={`h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center ${getCardValue(row, 'avatar') ? 'hidden' : 'flex'
                                                                }`}
                                                        >
                                                            <User className="h-5 w-5 text-gray-600" />
                                                        </div>
                                                    }
                                                </div>
                                            }

                                            {/* Title and Description */}
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-secondary line-clamp-1">
                                                    {getCardValue(row, 'title') || row.name || row.userid || `Record ${rowIndex + 1}`}
                                                </p>
                                                {getCardValue(row, 'descs') && (
                                                    <p title={getCardValue(row, 'descs')} className="text-xs text-gray-500 line-clamp-1">
                                                        {getCardValue(row, 'descs')}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="px-2 pb-2">


                                        {/* Due Date */}


                                    </div>

                                    {/* Card Actions */}
                                    <div className="p-2 border-t border-gray-100 rounded-b-lg">

                                        <div className="flex items-center justify-between">
                                            {getCardValue(row, 'due_date') && (
                                                <div className="flex items-center text-xs text-gray-500 ">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    {new Date(getCardValue(row, 'due_date')).toLocaleDateString()}
                                                </div>
                                            )}
                                            {hasButtons && (
                                                <>
                                                    <div className="flex items-center  space-x-2">
                                                        {visibleButtons.slice(0, 5).map(([buttonKey, button]) => (
                                                            <button
                                                                key={buttonKey}
                                                                onClick={() => handleButtonClick(buttonKey, button, row)}
                                                                className="inline-flex cursor-pointer items-center px-1 py-1 text-sm font-medium text-action"
                                                                title={button.label}
                                                            >
                                                                {getIconComponent(button.icon)}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {(visibleButtons.length > 5 || moreButtons.length > 0) && (
                                                        <div className="relative">
                                                            <button
                                                                onClick={() => toggleDropdown(row.id)}
                                                                className="inline-flex cursor-pointer items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            >
                                                                <MoreHorizontal className="w-3 h-3" />
                                                            </button>

                                                            {openDropdown === row.id && (
                                                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                                                    <div className="py-1">
                                                                        {visibleButtons.slice(5).map(([buttonKey, button]) => (
                                                                            <button
                                                                                key={buttonKey}
                                                                                onClick={() => {
                                                                                    handleButtonClick(buttonKey, button, row);
                                                                                    setOpenDropdown(null);
                                                                                }}
                                                                                className="flex items-center cursor-pointer gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                                                                                className="flex cursor-pointer items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <ShimmerCard key={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};


export default GalleryView