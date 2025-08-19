// import React, { useState, useMemo } from 'react';
// import { User, Calendar, Tag, MoreHorizontal, Plus } from 'lucide-react';

// const KanbanView = ({ 
//   config, 
//   filteredAndSortedData,
//   hasButtons,
//   visibleButtons,
//   moreButtons,
//   showExtraColumn,
//   selectedRows,
//   openDropdown,
//   handleSelectRow,
//   handleButtonClick,
//   toggleDropdown,
//   setOpenDropdown,
//   getIconComponent,
//   kanbanGroupBy
// }) => {
//   const { kanban, datagrid } = config;
  
//   // Group data by the selected kanban column
//   const kanbanData = useMemo(() => {
//     if (!kanbanGroupBy || !filteredAndSortedData.length) return {};
    
//     const grouped = filteredAndSortedData.reduce((acc, row) => {
//       const groupValue = row[kanbanGroupBy] || 'Unassigned';
//       if (!acc[groupValue]) {
//         acc[groupValue] = [];
//       }
//       acc[groupValue].push(row);
//       return acc;
//     }, {});
    
//     return grouped;
//   }, [filteredAndSortedData, kanbanGroupBy]);

//   const getCardColor = (row) => {
//     if (!kanban?.colormap || !kanban?.colmap?.color) return 'bg-white border-gray-200';
    
//     const colorKey = row[kanban.colmap.color];
//     const colorClass = kanban.colormap?.[colorKey];
    
//     const colorMap = {
//       'card_green': 'bg-green-50 border-green-200',
//       'card_red': 'bg-red-50 border-red-200',
//       'card_blue': 'bg-blue-50 border-blue-200',
//       'card_yellow': 'bg-yellow-50 border-yellow-200',
//       'card_purple': 'bg-purple-50 border-purple-200',
//       'card_indigo': 'bg-indigo-50 border-indigo-200',
//       'card_pink': 'bg-pink-50 border-pink-200',
//       'card_gray': 'bg-gray-50 border-gray-200',
//     };
    
//     return colorMap[colorClass] || 'bg-white border-gray-200';
//   };

//   const getCardValue = (row, field) => {
//     if (!kanban?.colmap?.[field]) return '';
//     return row[kanban.colmap[field]] || '';
//   };

//   const getColumnTitle = (columnKey) => {
//     const colkeyConfig = kanban?.colkeys?.[kanbanGroupBy];
//     return colkeyConfig?.label || columnKey;
//   };

//   const columns = Object.keys(kanbanData);

//   if (!kanbanGroupBy) {
//     return (
//       <div className="flex items-center justify-center h-64 text-gray-500">
//         <div className="text-center">
//           <div className="text-lg font-medium mb-2">Select a column to group by</div>
//           <div className="text-sm">Choose a grouping option from the toolbar above</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 h-full overflow-hidden">
//       <div className="flex gap-6 h-full overflow-x-auto pb-4">
//         {columns.map(columnKey => (
//           <div key={columnKey} className="flex-shrink-0 w-80">
//             {/* Column Header */}
//             <div className="bg-gray-100 rounded-t-lg px-4 py-3 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-medium text-gray-900 truncate">
//                   {columnKey}
//                 </h3>
//                 <div className="flex items-center gap-2">
//                   <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
//                     {kanbanData[columnKey].length}
//                   </span>
//                   <button className="p-1 hover:bg-gray-200 rounded">
//                     <Plus className="w-4 h-4 text-gray-600" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Column Content */}
//             <div className="bg-gray-50 rounded-b-lg min-h-96 max-h-96 overflow-y-auto p-3 space-y-3">
//               {kanbanData[columnKey].map((row, index) => (
//                 <div
//                   key={`${columnKey}-${index}`}
//                   className={`${getCardColor(row)} border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer`}
//                 >
//                   {/* Card Header */}
//                   <div className="p-3 pb-2">
//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex items-start space-x-2 flex-1 min-w-0">
//                         {/* Avatar */}
//                         <div className="flex-shrink-0">
//                           {getCardValue(row, 'avatar') ? (
//                             <img
//                               className="h-8 w-8 rounded-full object-cover"
//                               src={getCardValue(row, 'avatar')}
//                               alt=""
//                               onError={(e) => {
//                                 e.target.style.display = 'none';
//                                 e.target.nextSibling.style.display = 'flex';
//                               }}
//                             />
//                           ) : null}
//                           <div 
//                             className={`h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center ${
//                               getCardValue(row, 'avatar') ? 'hidden' : 'flex'
//                             }`}
//                           >
//                             <User className="h-4 w-4 text-gray-600" />
//                           </div>
//                         </div>
                        
//                         {/* Title */}
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-sm font-medium text-gray-900 truncate">
//                             {getCardValue(row, 'title') || row.name || row.userid || `Item ${index + 1}`}
//                           </h4>
//                           {getCardValue(row, 'descs') && (
//                             <p className="text-xs text-gray-500 truncate mt-1">
//                               {getCardValue(row, 'descs')}
//                             </p>
//                           )}
//                         </div>
//                       </div>
                      
//                       {/* Checkbox */}
//                       {showExtraColumn === 'checkbox' && (
//                         <input
//                           type="checkbox"
//                           checked={selectedRows.has(row.id)}
//                           onChange={() => handleSelectRow(row.id)}
//                           className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
//                           onClick={(e) => e.stopPropagation()}
//                         />
//                       )}
//                     </div>

//                     {/* Category/Tags */}
//                     {getCardValue(row, 'category') && (
//                       <div className="mb-2">
//                         <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                           <Tag className="w-3 h-3 mr-1" />
//                           {getCardValue(row, 'category')}
//                         </span>
//                       </div>
//                     )}
                    
//                     {/* Due Date */}
//                     {getCardValue(row, 'due_date') && (
//                       <div className="flex items-center text-xs text-gray-500 mb-2">
//                         <Calendar className="w-3 h-3 mr-1" />
//                         {new Date(getCardValue(row, 'due_date')).toLocaleDateString()}
//                       </div>
//                     )}
                    
//                     {/* Additional Fields */}
//                     <div className="space-y-1 text-xs">
//                       {Object.entries(row).slice(0, 2).map(([key, value]) => {
//                         if (!value || key === 'id' || key === kanbanGroupBy) return null;
//                         const column = datagrid[key];
//                         if (!column || column.hidden) return null;
                        
//                         return (
//                           <div key={key} className="flex justify-between items-center">
//                             <span className="text-gray-500 truncate">{column.label}:</span>
//                             <span className="font-medium text-gray-700 truncate ml-2 max-w-32">
//                               {column.formatter === 'date' && value ? 
//                                 new Date(value).toLocaleDateString() : 
//                                 String(value)
//                               }
//                             </span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   {hasButtons && (
//                     <div className="px-3 py-2 bg-gray-50 bg-opacity-50 border-t border-gray-100 rounded-b-lg">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-1">
//                           {visibleButtons.slice(0, 3).map(([buttonKey, button]) => (
//                             <button
//                               key={buttonKey}
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleButtonClick(buttonKey, button, row);
//                               }}
//                               className="inline-flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                               title={button.label}
//                             >
//                               {getIconComponent(button.icon)}
//                             </button>
//                           ))}
//                         </div>
                        
//                         {(visibleButtons.length > 3 || moreButtons.length > 0) && (
//                           <div className="relative">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 toggleDropdown(row.id);
//                               }}
//                               className="inline-flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             >
//                               <MoreHorizontal className="w-3 h-3" />
//                             </button>
                            
//                             {openDropdown === row.id && (
//                               <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                                 <div className="py-1">
//                                   {visibleButtons.slice(3).map(([buttonKey, button]) => (
//                                     <button
//                                       key={buttonKey}
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         handleButtonClick(buttonKey, button, row);
//                                         setOpenDropdown(null);
//                                       }}
//                                       className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                       title={button.label}
//                                     >
//                                       <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
//                                       <span className="truncate">{button.label}</span>
//                                     </button>
//                                   ))}
//                                   {moreButtons.map(([buttonKey, button]) => (
//                                     <button
//                                       key={buttonKey}
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         handleButtonClick(buttonKey, button, row);
//                                         setOpenDropdown(null);
//                                       }}
//                                       className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                       title={button.label}
//                                     >
//                                       <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
//                                       <span className="truncate">{button.label}</span>
//                                     </button>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
              
//               {kanbanData[columnKey].length === 0 && (
//                 <div className="text-center py-8 text-gray-400">
//                   <div className="text-sm">No items</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanView;

// import React, { useState, useMemo } from 'react';
// import {
//   DndContext,
//   closestCorners,
//   useSensor,
//   useSensors,
//   PointerSensor,
//   DragOverlay,
//   useDroppable,
//   useDraggable
// } from '@dnd-kit/core';
// import { CSS } from '@dnd-kit/utilities';
// import { User, Calendar, Tag, MoreHorizontal, Plus } from 'lucide-react';

// const KanbanView = ({ 
//   config, 
//   filteredAndSortedData,
//   hasButtons,
//   visibleButtons,
//   moreButtons,
//   showExtraColumn,
//   selectedRows,
//   openDropdown,
//   handleSelectRow,
//   handleButtonClick,
//   toggleDropdown,
//   setOpenDropdown,
//   getIconComponent,
//   kanbanGroupBy
// }) => {
//   const { kanban, datagrid } = config;

//   const [activeCard, setActiveCard] = useState(null);
//   const sensors = useSensors(useSensor(PointerSensor));

//   const kanbanData = useMemo(() => {
//     if (!kanbanGroupBy || !filteredAndSortedData.length) return {};

//     return filteredAndSortedData.reduce((acc, row) => {
//       const groupValue = row[kanbanGroupBy] || 'Unassigned';
//       if (!acc[groupValue]) acc[groupValue] = [];
//       acc[groupValue].push(row);
//       return acc;
//     }, {});
//   }, [filteredAndSortedData, kanbanGroupBy]);

//   const [columnsData, setColumnsData] = useState(kanbanData);

//   const getCardColor = (row) => {
//     const colorKey = row[kanban?.colmap?.color];
//     const colorClass = kanban?.colormap?.[colorKey];
//     const map = {
//       card_green: 'bg-green-50 border-green-200',
//       card_red: 'bg-red-50 border-red-200',
//       card_blue: 'bg-blue-50 border-blue-200',
//       card_yellow: 'bg-yellow-50 border-yellow-200',
//       card_purple: 'bg-purple-50 border-purple-200',
//       card_indigo: 'bg-indigo-50 border-indigo-200',
//       card_pink: 'bg-pink-50 border-pink-200',
//       card_gray: 'bg-gray-50 border-gray-200'
//     };
//     return map[colorClass] || 'bg-white border-gray-200';
//   };

//   const getCardValue = (row, field) => row[kanban?.colmap?.[field]] || '';

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (!over || !activeCard) return;

//     const fromCol = Object.keys(columnsData).find(col =>
//       columnsData[col].some(card => card.id === activeCard.id)
//     );
//     const toCol = over.id;
//     if (!fromCol || !toCol || fromCol === toCol) return;

//     setColumnsData(prev => {
//       const newFrom = prev[fromCol].filter(c => c.id !== activeCard.id);
//       const newTo = [...prev[toCol], activeCard];
//       return { ...prev, [fromCol]: newFrom, [toCol]: newTo };
//     });
//     setActiveCard(null);
//   };

//   const DraggableCard = ({ row }) => {
//     const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id: row.id });
//     const style = {
//       transform: CSS.Transform.toString(transform),
//       transition
//     };

//     return (
//       <div
//         ref={setNodeRef}
//         style={style}
//         {...attributes}
//         {...listeners}
//         className={`${getCardColor(row)} border rounded-lg p-3 shadow-sm cursor-pointer`}
//         onClick={() => setActiveCard(row)}
//       >
//         <div className="text-sm font-medium truncate">{getCardValue(row, 'title') || row.name || 'Untitled'}</div>
//       </div>
//     );
//   };

//   const DroppableColumn = ({ id, children }) => {
//     const { setNodeRef } = useDroppable({ id });
//     return <div ref={setNodeRef}>{children}</div>;
//   };

//   if (!kanbanGroupBy) {
//     return (
//       <div className="flex items-center justify-center h-64 text-gray-500">
//         <div className="text-center">
//           <div className="text-lg font-medium mb-2">Select a column to group by</div>
//           <div className="text-sm">Choose a grouping option from the toolbar above</div>
//         </div>
//       </div>
//     );
//   }

//   const columns = Object.keys(columnsData);

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCorners}
//       onDragEnd={handleDragEnd}
//       onDragStart={({ active }) => {
//         const card = filteredAndSortedData.find(row => row.id === active.id);
//         setActiveCard(card);
//       }}
//     >
//       <div className="p-4 h-full overflow-hidden">
//         <div className="flex gap-6 h-full overflow-x-auto pb-4">
//           {columns.map((colKey) => (
//             <DroppableColumn key={colKey} id={colKey}>
//               <div className="w-80 flex-shrink-0">
//                 <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 rounded-t-lg">
//                   <div className="flex justify-between items-center">
//                     <h3 className="font-medium text-gray-900 truncate">{colKey}</h3>
//                     <span className="text-xs bg-gray-200 rounded-full px-2 py-1">{columnsData[colKey].length}</span>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 p-3 space-y-2 rounded-b-lg min-h-96 max-h-96 overflow-y-auto">
//                   {columnsData[colKey].map((row) => (
//                     <DraggableCard key={row.id} row={row} />
//                   ))}
//                 </div>
//               </div>
//             </DroppableColumn>
//           ))}
//         </div>
//         <DragOverlay>
//           {activeCard && (
//             <div className={`${getCardColor(activeCard)} border rounded-lg p-3 shadow-md`}> 
//               {getCardValue(activeCard, 'title') || 'Untitled'}
//             </div>
//           )}
//         </DragOverlay>
//       </div>
//     </DndContext>
//   );
// };

// export default KanbanView;

// import React, { useState, useMemo } from 'react';
// import {
//   DndContext,
//   closestCenter,
//   useSensor,
//   useSensors,
//   PointerSensor,
//   DragOverlay,
//   useDroppable,
//   useDraggable,
// } from '@dnd-kit/core';
// import {
//   SortableContext,
//   verticalListSortingStrategy,
//   useSortable,
//   sortableKeyboardCoordinates
// } from '@dnd-kit/sortable';
// import { arrayMove } from '@dnd-kit/sortable'; 

// import { CSS } from '@dnd-kit/utilities';
// import { User, Calendar, Tag, MoreHorizontal, Plus } from 'lucide-react';

// const KanbanView = ({ 
//   config, 
//   filteredAndSortedData,
//   hasButtons,
//   visibleButtons,
//   moreButtons,
//   showExtraColumn,
//   selectedRows,
//   openDropdown,
//   handleSelectRow,
//   handleButtonClick,
//   toggleDropdown,
//   setOpenDropdown,
//   getIconComponent,
//   kanbanGroupBy
// }) => {
//   const { kanban, datagrid } = config;
//   const sensors = useSensors(useSensor(PointerSensor));

//   const groupedData = useMemo(() => {
//     if (!kanbanGroupBy || !filteredAndSortedData.length) return {};
//     return filteredAndSortedData.reduce((acc, row) => {
//       const groupValue = row[kanbanGroupBy] || 'Unassigned';
//       if (!acc[groupValue]) acc[groupValue] = [];
//       acc[groupValue].push(row);
//       return acc;
//     }, {});
//   }, [filteredAndSortedData, kanbanGroupBy]);

//   const [columnsData, setColumnsData] = useState(groupedData);
//   const [activeCard, setActiveCard] = useState(null);
//   const [overId, setOverId] = useState(null);

//   const getCardColor = (row) => {
//     const colorKey = row[kanban?.colmap?.color];
//     const colorClass = kanban?.colormap?.[colorKey];
//     const map = {
//       card_green: 'bg-green-50 border-green-200',
//       card_red: 'bg-red-50 border-red-200',
//       card_blue: 'bg-blue-50 border-blue-200',
//       card_yellow: 'bg-yellow-50 border-yellow-200',
//       card_purple: 'bg-purple-50 border-purple-200',
//       card_indigo: 'bg-indigo-50 border-indigo-200',
//       card_pink: 'bg-pink-50 border-pink-200',
//       card_gray: 'bg-gray-50 border-gray-200'
//     };
//     return map[colorClass] || 'bg-white border-gray-200';
//   };

//   const getCardValue = (row, field) => row[kanban?.colmap?.[field]] || row[field] || '';

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     setOverId(null);
//     if (!over || !activeCard) return;

//     const fromCol = Object.keys(columnsData).find(col =>
//       columnsData[col].some(card => card.id === activeCard.id)
//     );
//     const toCol = over.data.current?.columnId;
//     if (!fromCol || !toCol) return;

//     if (fromCol === toCol) {
//       const oldIndex = columnsData[fromCol].findIndex(card => card.id === active.id);
//       const newIndex = columnsData[toCol].findIndex(card => card.id === over.id);
//       if (oldIndex !== newIndex) {
//         setColumnsData(prev => ({
//           ...prev,
//           [fromCol]: arrayMove(prev[fromCol], oldIndex, newIndex)
//         }));
//       }
//     } else {
//       const fromList = [...columnsData[fromCol]].filter(card => card.id !== activeCard.id);
//       const toList = [...columnsData[toCol]];
//       const overIndex = toList.findIndex(card => card.id === over.id);
//       toList.splice(overIndex >= 0 ? overIndex : toList.length, 0, activeCard);

//       setColumnsData(prev => ({
//         ...prev,
//         [fromCol]: fromList,
//         [toCol]: toList
//       }));
//     }
//     setActiveCard(null);
//   };

//   const SortableCard = ({ row, columnId }) => {
//     const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: row.id, data: { columnId } });
//     const style = {
//       transform: CSS.Transform.toString(transform),
//       transition,
//       zIndex: isDragging ? 50 : 'auto'
//     };

//     return (
//       <div
//         ref={setNodeRef}
//         style={style}
//         {...attributes}
//         {...listeners}
//         className={`${getCardColor(row)} border rounded-lg p-3 shadow-sm cursor-pointer`}
//         onClick={() => setActiveCard(row)}
//       >
//         <div className="text-sm font-medium truncate">{getCardValue(row, 'title') || row.name || 'Untitled'}</div>
//           <div
//                   key={`${columnKey}-${index}`}
//                   className={`${getCardColor(row)} border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer`}
//                 >
//                   {/* Card Header */}
//                   <div className="p-3 pb-2">
//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex items-start space-x-2 flex-1 min-w-0">
//                         {/* Avatar */}
//                         <div className="flex-shrink-0">
//                           {getCardValue(row, 'avatar') ? (
//                             <img
//                               className="h-8 w-8 rounded-full object-cover"
//                               src={getCardValue(row, 'avatar')}
//                               alt=""
//                               onError={(e) => {
//                                 e.target.style.display = 'none';
//                                 e.target.nextSibling.style.display = 'flex';
//                               }}
//                             />
//                           ) : null}
//                           <div 
//                             className={`h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center ${
//                               getCardValue(row, 'avatar') ? 'hidden' : 'flex'
//                             }`}
//                           >
//                             <User className="h-4 w-4 text-gray-600" />
//                           </div>
//                         </div>
                        
//                         {/* Title */}
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-sm font-medium text-gray-900 truncate">
//                             {getCardValue(row, 'title') || row.name || row.userid || `Item ${index + 1}`}
//                           </h4>
//                           {getCardValue(row, 'descs') && (
//                             <p className="text-xs text-gray-500 truncate mt-1">
//                               {getCardValue(row, 'descs')}
//                             </p>
//                           )}
//                         </div>
//                       </div>
                      
//                       {/* Checkbox */}
//                       {showExtraColumn === 'checkbox' && (
//                         <input
//                           type="checkbox"
//                           checked={selectedRows.has(row.id)}
//                           onChange={() => handleSelectRow(row.id)}
//                           className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
//                           onClick={(e) => e.stopPropagation()}
//                         />
//                       )}
//                     </div>

//                     {/* Category/Tags */}
//                     {getCardValue(row, 'category') && (
//                       <div className="mb-2">
//                         <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                           <Tag className="w-3 h-3 mr-1" />
//                           {getCardValue(row, 'category')}
//                         </span>
//                       </div>
//                     )}
                    
//                     {/* Due Date */}
//                     {getCardValue(row, 'due_date') && (
//                       <div className="flex items-center text-xs text-gray-500 mb-2">
//                         <Calendar className="w-3 h-3 mr-1" />
//                         {new Date(getCardValue(row, 'due_date')).toLocaleDateString()}
//                       </div>
//                     )}
                    
//                     {/* Additional Fields */}
//                     <div className="space-y-1 text-xs">
//                       {Object.entries(row).slice(0, 2).map(([key, value]) => {
//                         if (!value || key === 'id' || key === kanbanGroupBy) return null;
//                         const column = datagrid[key];
//                         if (!column || column.hidden) return null;
                        
//                         return (
//                           <div key={key} className="flex justify-between items-center">
//                             <span className="text-gray-500 truncate">{column.label}:</span>
//                             <span className="font-medium text-gray-700 truncate ml-2 max-w-32">
//                               {column.formatter === 'date' && value ? 
//                                 new Date(value).toLocaleDateString() : 
//                                 String(value)
//                               }
//                             </span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   {hasButtons && (
//                     <div className="px-3 py-2 bg-gray-50 bg-opacity-50 border-t border-gray-100 rounded-b-lg">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-1">
//                           {visibleButtons.slice(0, 3).map(([buttonKey, button]) => (
//                             <button
//                               key={buttonKey}
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleButtonClick(buttonKey, button, row);
//                               }}
//                               className="inline-flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                               title={button.label}
//                             >
//                               {getIconComponent(button.icon)}
//                             </button>
//                           ))}
//                         </div>
                        
//                         {(visibleButtons.length > 3 || moreButtons.length > 0) && (
//                           <div className="relative">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 toggleDropdown(row.id);
//                               }}
//                               className="inline-flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             >
//                               <MoreHorizontal className="w-3 h-3" />
//                             </button>
                            
//                             {openDropdown === row.id && (
//                               <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                                 <div className="py-1">
//                                   {visibleButtons.slice(3).map(([buttonKey, button]) => (
//                                     <button
//                                       key={buttonKey}
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         handleButtonClick(buttonKey, button, row);
//                                         setOpenDropdown(null);
//                                       }}
//                                       className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                       title={button.label}
//                                     >
//                                       <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
//                                       <span className="truncate">{button.label}</span>
//                                     </button>
//                                   ))}
//                                   {moreButtons.map(([buttonKey, button]) => (
//                                     <button
//                                       key={buttonKey}
//                                       onClick={(e) => {
//                                         e.stopPropagation();
//                                         handleButtonClick(buttonKey, button, row);
//                                         setOpenDropdown(null);
//                                       }}
//                                       className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                       title={button.label}
//                                     >
//                                       <div className="flex-shrink-0">{getIconComponent(button.icon)}</div>
//                                       <span className="truncate">{button.label}</span>
//                                     </button>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
            
//       </div>
//     );
//   };

//   const DroppableColumn = ({ id, cards }) => {
//     const { setNodeRef } = useDroppable({ id });
//     return (
//       <div ref={setNodeRef} className="w-80 flex-shrink-0">
//         <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 rounded-t-lg">
//           <div className="flex justify-between items-center">
//             <h3 className="font-medium text-gray-900 truncate">{id}</h3>
//             <span className="text-xs bg-gray-200 rounded-full px-2 py-1">{cards.length}</span>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-3 space-y-2 rounded-b-lg min-h-96 max-h-96 overflow-y-auto">
//           <SortableContext items={cards.map(c => c.id)} strategy={verticalListSortingStrategy}>
//             {cards.map(card => (
//               <SortableCard key={card.id} row={card} columnId={id} />
//             ))}
//           </SortableContext>
//         </div>
//       </div>
//     );
//   };

//   if (!kanbanGroupBy) {
//     return (
//       <div className="flex items-center justify-center h-64 text-gray-500">
//         <div className="text-center">
//           <div className="text-lg font-medium mb-2">Select a column to group by</div>
//           <div className="text-sm">Choose a grouping option from the toolbar above</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCenter}
//       onDragEnd={handleDragEnd}
//       onDragStart={({ active }) => {
//         const card = filteredAndSortedData.find(row => row.id === active.id);
//         setActiveCard(card);
//       }}
//       onDragOver={({ over }) => {
//         setOverId(over?.id || null);
//       }}
//     >
//       <div className="p-4 h-full overflow-hidden">
//         <div className="flex gap-6 h-full overflow-x-auto pb-4">
//           {Object.keys(columnsData).map((colKey) => (
//             <DroppableColumn key={colKey} id={colKey} cards={columnsData[colKey]} />
//           ))}
//         </div>
//         <DragOverlay>
//           {activeCard && (
//             <div className={`${getCardColor(activeCard)} border rounded-lg p-3 shadow-md w-72`}>
//               <div className="text-sm font-medium truncate">{getCardValue(activeCard, 'title') || activeCard.name || 'Untitled'}</div>
//             </div>
//           )}
//         </DragOverlay>
//       </div>
//     </DndContext>
//   );
// };

// export default KanbanView;

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
import { User, Calendar, Tag, MoreHorizontal, Plus } from 'lucide-react';

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
    console.log({kanbanGroupBy})
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
  
  useEffect(()=>{
    setColumnsData(groupedData)
  },[groupedData])
  
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

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     setOverId(null);
//     if (!over || !activeCard) return;

//     const fromCol = Object.keys(columnsData).find(col =>
//       columnsData[col].some(card => card.id === activeCard.id)
//     );
//     const toCol = over.data.current?.columnId;
//     if (!fromCol || !toCol) return;

//     if (fromCol === toCol) {
//       const oldIndex = columnsData[fromCol].findIndex(card => card.id === active.id);
//       const newIndex = columnsData[toCol].findIndex(card => card.id === over.id);
//       if (oldIndex !== newIndex) {
//         setColumnsData(prev => ({
//           ...prev,
//           [fromCol]: arrayMove(prev[fromCol], oldIndex, newIndex)
//         }));
//       }
//     } else {
//       const fromList = [...columnsData[fromCol]].filter(card => card.id !== activeCard.id);
//       const toList = [...columnsData[toCol]];
//       const overIndex = toList.findIndex(card => card.id === over.id);
//       toList.splice(overIndex >= 0 ? overIndex : toList.length, 0, activeCard);

//       setColumnsData(prev => ({
//         ...prev,
//         [fromCol]: fromList,
//         [toCol]: toList
//       }));
//     }
//     setActiveCard(null);
//   };

  const SortableCard = ({ row, columnId }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: row.id, data: { columnId } });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      zIndex: isDragging ? 50 : 'auto'
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`${getCardColor(row)} relative border rounded-lg p-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 space-y-2`}
        onClick={() => setActiveCard(row)}
      >
        <div className="flex items-start gap-3">
            
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
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 truncate">
              {getCardValue(row, 'title') || row.name || 'Untitled'}
            </h4>
            {getCardValue(row, 'descs') && (
              <p className="text-xs text-gray-500 truncate">
                {getCardValue(row, 'descs')}
              </p>
            )}
          </div>
          
          {getCardValue(row, 'counter') && (
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
  {getCardValue(row, 'counter')}
          </div>
        )}
        </div>
        {getCardValue(row, 'category') && (
          <div>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Tag className="w-3 h-3 mr-1" />
              {getCardValue(row, 'category')}
            </span>
          </div>
        )}
        {getCardValue(row, 'due_date') && (
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(getCardValue(row, 'due_date')).toLocaleDateString()}
          </div>
        )}
         {hasButtons && (
                    <div className="px-3 py-2 bg-gray-50 bg-opacity-50 border-t border-gray-100 rounded-b-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {visibleButtons.slice(0, 3).map(([buttonKey, button]) => (
                            <button
                              key={buttonKey}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleButtonClick(buttonKey, button, row);
                              }}
                              className="inline-flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              title={button.label}
                            >
                              {getIconComponent(button.icon)}
                            </button>
                          ))}
                        </div>
                        
                        {(visibleButtons.length > 3 || moreButtons.length > 0) && (
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
                                  {visibleButtons.slice(3).map(([buttonKey, button]) => (
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

                        </div>
                        </div>
         )}
      </div>
    );
  };

//   const DroppableColumn = ({ id, cards }) => {
//     const { setNodeRef } = useDroppable({ id });
//     return (
//       <div ref={setNodeRef} className="w-80 flex-shrink-0">
//         <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 rounded-t-lg">
//           <div className="flex justify-between items-center">
//             <h3 className="font-medium text-gray-900 truncate">{id}</h3>
//             <span className="text-xs bg-gray-200 rounded-full px-2 py-1">{cards.length}</span>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-3 space-y-2 rounded-b-lg min-h-96 max-h-96 overflow-y-auto">
//    <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy}>
//   {cards.length === 0 ? (
//     <div className="min-h-[50px] rounded border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
//       Drop here
//     </div>
//   ) : (
//     cards.map(card => (
//       <SortableCard key={card.id} row={card} columnId={id} />
//     ))
//   )}
// </SortableContext>


//         </div>
//       </div>
//     );
//   };


const DroppableColumn = ({ id, cards }) => {
  const { setNodeRef: setColumnRef } = useDroppable({ id });

  return (
    <div ref={setColumnRef} className="w-80 flex-shrink-0">
      <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900 truncate">{id}</h3>
          <span className="text-xs bg-gray-200 rounded-full px-2 py-1">{cards.length}</span>
        </div>
      </div>

      <div className="bg-gray-50 p-3 space-y-2 rounded-b-lg min-h-96 max-h-96 overflow-y-auto">
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


  if (!kanbanGroupBy) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <div className="text-lg font-medium mb-2">Select a column to group by</div>
          <div className="text-sm">Choose a grouping option from the toolbar above</div>
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
      <div className="p-4 h-full overflow-hidden">
        <div className="flex gap-6 h-full overflow-x-auto pb-4">
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
