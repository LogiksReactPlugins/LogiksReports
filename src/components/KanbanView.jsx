import React, { useState, useMemo, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
  useDroppable,
  useDraggable,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
  arrayMove
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { User, Calendar, Tag, MoreHorizontal, Plus, Copy } from 'lucide-react';
import copyToClipboard, { formatCardContent, formatKanbanCardContent } from '../helpers/copyToClipboard';

const KanbanView = ({
  config,
  filteredAndSortedData,
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
  kanbanGroupBy
}) => {
  console.log({ kanbanGroupBy })
  const { kanban, datagrid } = config;
  const sensors = useSensors(useSensor(PointerSensor));

  const groupedData = useMemo(() => {
    if (!kanbanGroupBy || !filteredAndSortedData.length) return {};
    return filteredAndSortedData.reduce((acc, row) => {
      const groupValue = row[kanbanGroupBy] || 'Unassigned';
      if (!acc[groupValue]) acc[groupValue] = [];
      acc[groupValue].push(row);
      return acc;
    }, {});
  }, [filteredAndSortedData, kanbanGroupBy]);

  const [columnsData, setColumnsData] = useState(groupedData);
  const [activeCard, setActiveCard] = useState(null);
  const [overId, setOverId] = useState(null);

  useEffect(() => {
    setColumnsData(groupedData)
  }, [groupedData])

  const getCardColor = (row) => {
    const colorKey = row[kanban?.colmap?.color];
    const colorClass = kanban?.colormap?.[colorKey];
    const map = {
      card_green: 'bg-green-50 border-green-200',
      card_red: 'bg-red-50 border-red-200',
      card_blue: 'bg-blue-50 border-blue-200',
      card_yellow: 'bg-yellow-50 border-yellow-200',
      card_purple: 'bg-purple-50 border-purple-200',
      card_indigo: 'bg-indigo-50 border-indigo-200',
      card_pink: 'bg-pink-50 border-pink-200',
      card_gray: 'bg-gray-50 border-gray-200'
    };
    return map[colorClass] || 'bg-white border-gray-200';
  };

  const getCardValue = (row, field) => row[kanban?.colmap?.[field]] || row[field] || '';
  const handleDragEnd = (event) => {
    const { active, over } = event;
    setOverId(null);
    if (!over || !activeCard) return;

    const fromCol = Object.keys(columnsData).find(col =>
      columnsData[col].some(card => card.id === activeCard.id)
    );
    const toCol = over.data.current?.columnId || over.id; // fallback to column id if card id missing

    if (!fromCol || !toCol) return;

    if (fromCol === toCol) {
      const oldIndex = columnsData[fromCol].findIndex(card => card.id === active.id);
      const newIndex = columnsData[toCol].findIndex(card => card.id === over.id);
      if (oldIndex !== newIndex && newIndex !== -1) {
        setColumnsData(prev => ({
          ...prev,
          [fromCol]: arrayMove(prev[fromCol], oldIndex, newIndex)
        }));
      }
    } else {
      const fromList = [...columnsData[fromCol]].filter(card => card.id !== activeCard.id);
      const toList = [...columnsData[toCol]];
      const overIndex = toList.findIndex(card => card.id === over.id);

      toList.splice(overIndex >= 0 ? overIndex : toList.length, 0, activeCard);

      setColumnsData(prev => ({
        ...prev,
        [fromCol]: fromList,
        [toCol]: toList
      }));
    }

    setActiveCard(null);
  };

  const SortableCard = ({ row, columnId }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
      id: row.id,
      data: { columnId }
    });
    const [copiedCell, setCopiedCell] = useState(null);

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      zIndex: isDragging ? 50 : 'auto'
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`${getCardColor(row)}  group relative border rounded-lg p-1 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 space-y-2`}
        onClick={() => setActiveCard(row)}
      >
        <div className="flex items-start gap-1">
          {/* Avatar (drag handle) */}
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing"
          >
            {getCardValue(row, 'avatar') ? (
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={getCardValue(row, 'avatar')}
                alt="Avatar"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
            )}
          </div>

          {/* Title + Description (drag handle) */}
          <div
            className="flex-1 min-w-0 cursor-grab active:cursor-grabbing"
            {...attributes}
            {...listeners}
          >
            <h4 className="text-sm font-medium text-gray-900 truncate">
              {getCardValue(row, 'title') || row.name || 'Untitled'}
            </h4>
            {getCardValue(row, 'descs') && (
              <p className="text-xs text-gray-500 line-clamp-2 h-[2rem]">
                {getCardValue(row, 'descs')}
              </p>
            )}

          </div>

          {/* Counter (not draggable) */}
          {getCardValue(row, 'counter') && (
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {getCardValue(row, 'counter')}
            </div>
          )}
        </div>

        {/* Category (not draggable) */}
        {getCardValue(row, 'category') && (
          <div>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Tag className="w-3 h-3 mr-1" />
              {getCardValue(row, 'category')}
            </span>
          </div>
        )}

        {/* Due Date (not draggable) */}
        {getCardValue(row, 'due_date') && (
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(getCardValue(row, 'due_date')).toLocaleDateString()}
          </div>
        )}

        {/* Action Buttons (no drag) */}
        {hasButtons && (
          <div className="px-3 py-1 bg-opacity-50 border-t border-gray-100 rounded-b-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {visibleButtons.slice(0, 5).map(([buttonKey, button]) => (
                  <button
                    key={buttonKey}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClick(buttonKey, button, row);
                    }}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium rounded cursor-pointer text-action"
                    title={button.label}
                  >
                    {getIconComponent(button.icon)}
                  </button>
                ))}
              </div>

              {(visibleButtons.length > 5 || moreButtons.length > 0) && (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(row.id);
                    }}
                    className="inline-flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <MoreHorizontal className="w-3 h-3" />
                  </button>

                  {openDropdown === row.id && (
                    <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {visibleButtons.slice(5).map(([buttonKey, button]) => (
                          <button
                            key={buttonKey}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleButtonClick(buttonKey, button, row);
                              setOpenDropdown(null);
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            title={button.label}
                          >
                            <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
                            <span className="truncate">{button.label}</span>
                          </button>
                        ))}
                        {moreButtons.map(([buttonKey, button]) => (
                          <button
                            key={buttonKey}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleButtonClick(buttonKey, button, row);
                              setOpenDropdown(null);
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
         <button
  onClick={() => {
    const content = formatKanbanCardContent(row, getCardValue);
    console.log({content})
    copyToClipboard(content, `${row.id}-${columnId}`, setCopiedCell);
  }}
  className="inline-flex items-center absolute cursor-pointer right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-gray-900"
  title="Copy card content"
>
  {copiedCell === `${row.id}-${columnId}` ? (
    <span className="text-xs text-gray-600">Copied!</span>
  ) : (
    <Copy className="w-4 h-4 text-gray-600" />
  )}
</button>



            </div>
          </div>
        )}
      </div>
    );
  };


  const DroppableColumn = ({ id, cards }) => {
    const { setNodeRef: setColumnRef } = useDroppable({ id });

    return (
      <div ref={setColumnRef} className="w-78 flex-shrink-0">
        <div className="bg-muted px-2 py-1 border-b border-gray-200 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-secondary truncate">{id}</h3>
            <span className="text-xs bg-gray-200 rounded-full px-2 py-1">{cards.length}</span>
          </div>
        </div>

        <div className="bg-gray-50 p-2 thin-scrollbar space-y-2 rounded-b-lg min-h-96 max-h-150 overflow-y-auto">
          <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy}>
            {cards.length === 0 ? (
              <div className="min-h-[50px] rounded border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                Drop here
              </div>
            ) : (
              cards.map(card => (
                <SortableCard key={card.id} row={card} columnId={id} />
              ))
            )}
          </SortableContext>
        </div>
      </div>
    );
  };


  if (!columnsData.length>0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <div className="text-sm">No data available</div>
        </div>
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={({ active }) => {
        const card = filteredAndSortedData.find(row => row.id === active.id);
        setActiveCard(card);
      }}
      onDragOver={({ over }) => {
        setOverId(over?.id || null);
      }}
    >
      <div className="p-2 overflow-hidden">
        <div className="flex gap-2  overflow-x-auto pb-4">
          {Object.keys(columnsData).map((colKey) => (
            <DroppableColumn key={colKey} id={colKey} cards={columnsData[colKey]} />
          ))}
        </div>
        <DragOverlay>
          {activeCard && (
            <div className={`${getCardColor(activeCard)} border rounded-lg p-3 shadow-md w-72`}>
              <div className="text-sm font-medium truncate">{getCardValue(activeCard, 'title') || activeCard.name || 'Untitled'}</div>
            </div>
          )}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

export default KanbanView;
