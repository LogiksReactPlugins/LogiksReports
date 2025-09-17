// import React, { useEffect, useRef, useMemo } from "react";
// import Gantt from "frappe-gantt";
// import dayjs from "dayjs";
// import "../../node_modules/frappe-gantt/dist/frappe-gantt.css";

// const GanttView = ({ paginatedGroupedData }) => {
//   const ganttRef = useRef(null);
//   const ganttInstance = useRef(null);

//   const tasks = useMemo(() => {
//     const data = paginatedGroupedData?.ungrouped || [];
//     return data.map(item => ({
//       id: item?.id,
//       name: item?.persona_name,
//       start: item?.start
//         ? dayjs(item.start).format("YYYY-MM-DD")
//         : dayjs().format("YYYY-MM-DD"),
//       end: item?.end
//         ? dayjs(item.end).format("YYYY-MM-DD")
//         : dayjs().add(1, "day").format("YYYY-MM-DD"),
//       progress: item?.progress || 0,
//       dependencies: item?.dependencies || []
//     }));
//   }, [paginatedGroupedData]);

//   useEffect(() => {
//     if (ganttRef.current && !ganttInstance.current) {
//       ganttInstance.current = new Gantt(ganttRef.current, tasks, {
//         view_mode: "Day",
//         date_format: "YYYY-MM-DD",
//         custom_popup_html: (task) => `
//           <div style="padding:8px; background:#fff; border-radius:6px; 
//                       box-shadow:0 2px 6px rgba(0,0,0,0.2); font-size:12px;">
//             <b>${task?.name}</b><br/>
//             Start: ${task?.start}<br/>
//             End: ${task?.end}<br/>
//             Progress: ${task?.progress}%
//           </div>
//         `
//       });
//     }
//   }, []); 

//   useEffect(() => {
//     if (ganttInstance.current && tasks.length > 0) {
//       ganttInstance.current.refresh(tasks);
//     }
//   }, [tasks]);

//   return (
//     <div className="bg-white rounded shadow p-2 relative z-0">
//       <div ref={ganttRef} className="overflow-x-auto min-h-[400px] w-full"></div>
//     </div>
//   );
// };

// export default GanttView;

// import React, { useMemo, useState } from "react";
// import Highcharts from "highcharts/highcharts-gantt";
// import HighchartsReact from "highcharts-react-official";
// import dayjs from "dayjs";

// const GanttView = ({ paginatedGroupedData }) => {
//   const [timeframe, setTimeframe] = useState("day"); // default zoom

//   const tasks = useMemo(() => {
//     const data = paginatedGroupedData?.ungrouped || [];
//     const today = dayjs().startOf("day");

//     return data.map(item => ({
//       name: item?.persona_name || "Untitled",
//       id: item?.id,
//       parent: item?.parent || undefined,
//       dependency: item?.dependencies || undefined,
//       start: item?.start
//         ? dayjs(item.start).valueOf()
//         : today.valueOf(),
//       end: item?.end
//         ? dayjs(item.end).valueOf()
//         : today.add(1, "day").valueOf(),
//       milestone: item?.milestone || false,
//       completed: {
//         amount: (item?.progress || 0) / 100,
//         fill: "#28a745"
//       },
//       owner: item?.owner || "Unassigned"
//     }));
//   }, [paginatedGroupedData]);

//   const options = useMemo(() => {
//   const today = dayjs().startOf("day").valueOf();

//   const ranges = {
//     hour: [today - 6 * 3600 * 1000, today + 18 * 3600 * 1000],
//     day: [today - 3 * 24 * 3600 * 1000, today + 18 * 24 * 3600 * 1000],
//     week: [today - 14 * 24 * 3600 * 1000, today + 90 * 24 * 3600 * 1000],
//     month: [today - 90 * 24 * 3600 * 1000, today + 365 * 24 * 3600 * 1000],
//     year: [today - 365 * 24 * 3600 * 1000, today + 3 * 365 * 24 * 3600 * 1000],
//   };

//   return {
//     chart: {
//       height: 500,
//       zoomType: null,     
//       panning: { enabled: true, type: "x" }, 
//       panKey: null         
//     },
//     title: {
//       text: "Gantt Project Management"
//     },
//     xAxis: {
//       currentDateIndicator: true,
//       min: ranges[timeframe][0],
//       max: ranges[timeframe][1],
//       scrollbar: { enabled: true } 
//     },
//     series: [
//       {
//         name: "Projects",
//         data: tasks
//       }
//     ],
//     tooltip: {
//       pointFormatter: function () {
//         const format = "%e. %b";
//         const completed = this.completed?.amount
//           ? Math.round(this.completed.amount * 100) + "%"
//           : "0%";

//         return `
//           <b>${this.name}</b><br/>
//           Start: ${Highcharts.dateFormat(format, this.start)}<br/>
//           ${!this.milestone ? "End: " + Highcharts.dateFormat(format, this.end) + "<br/>" : ""}
//           Completed: ${completed}<br/>
//           Owner: ${this.owner || "unassigned"}
//         `;
//       }
//     }
//   };
// }, [tasks, timeframe]);

//   return (
//     <div className="bg-white rounded shadow p-2">
//       {/* 🔘 Timeframe Controls */}
//       <div className="flex gap-2 mb-2">
//         {["hour", "day", "week", "month", "year"].map(tf => (
//           <button
//             key={tf}
//             onClick={() => setTimeframe(tf)}
//             className={`px-3 py-1 rounded ${
//               timeframe === tf ? "bg-blue-600 text-action" : "bg-gray-200"
//             }`}
//           >
//             {tf.charAt(0).toUpperCase() + tf.slice(1)}
//           </button>
//         ))}
//       </div>

//       <HighchartsReact
//         highcharts={Highcharts}
//         constructorType={"ganttChart"}
//         options={options}
//       />
//     </div>
//   );
// };

// export default GanttView;
import React, { useMemo, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import dayjs from 'dayjs';

const GanttView = ({ paginatedGroupedData, config }) => {
  const [timeframe, setTimeframe] = useState('day');
  
  const tasks = useMemo(() => {
    const data = paginatedGroupedData?.ungrouped || [];
    const today = dayjs().startOf('day');
    const col = config?.gantt?.colmap || {};

    return data
      .filter(item => {
        const validStart = item?.[col.start] && dayjs(item[col.start]).isValid();
        const validEnd = !item?.[col.end] || dayjs(item[col.end]).isValid();
        return validStart && validEnd;
      })
      .map(item => ({
        name: item?.[col.name] || 'Untitled',
        id: item?.[col.id] || `task-${Math.random().toString(36).substr(2, 5)}`,
        parent: item?.[col.parent] || undefined,
        dependency: item?.[col.dependencies] || undefined,
        start: dayjs(item?.[col.start]).valueOf(),
        end: item?.[col.end]
          ? dayjs(item[col.end]).valueOf()
          : dayjs(item[col.start]).add(1, 'day').valueOf(),
        milestone: item?.[col.milestone] || false,
        completed:
          typeof item?.[col.progress] === 'number'
            ? item[col.progress] / 100
            : 0,
        owner: item?.[col.owner] || 'Unassigned',
      }));
  }, [paginatedGroupedData]);

  const ranges = {
    hour: [dayjs().startOf('day').valueOf() - 6 * 3600 * 1000, dayjs().startOf('day').valueOf() + 18 * 3600 * 1000],
    day: [dayjs().startOf('day').valueOf() - 3 * 24 * 3600 * 1000, dayjs().startOf('day').valueOf() + 18 * 24 * 3600 * 1000],
    week: [dayjs().startOf('day').valueOf() - 14 * 24 * 3600 * 1000, dayjs().startOf('day').valueOf() + 90 * 24 * 3600 * 1000],
    month: [dayjs().startOf('day').valueOf() - 90 * 24 * 3600 * 1000, dayjs().startOf('day').valueOf() + 365 * 24 * 3600 * 1000],
    year: [dayjs().startOf('day').valueOf() - 365 * 24 * 3600 * 1000, dayjs().startOf('day').valueOf() + 3 * 365 * 24 * 3600 * 1000],
  };

  const options = useMemo(() => {
    const range = ranges[timeframe];

    return {
      title: {
        text: 'Gantt Project Management',
        textStyle: {
          color: '#3653C6',
          fontSize: 20,
          fontWeight: 'bold'
        },
        left: 'center',
        top: 10
      },
      tooltip: {
        formatter: (params) => {
          const task = params.data || {};
          const completed = Math.round((task.completed || 0) * 100) + '%';
          return `
            <div style="padding: 12px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <div style="font-weight: bold; color: #3653C6; font-size: 14px; margin-bottom: 8px;">${task.name}</div>
              <div style="color: #6B7280; font-size: 12px; line-height: 1.5;">
                <div><strong>Start:</strong> ${dayjs(task.start).format('MMM DD, YYYY')}</div>
                ${!task.milestone ? `<div><strong>End:</strong> ${dayjs(task.end).format('MMM DD, YYYY')}</div>` : '<div><strong>Type:</strong> Milestone</div>'}
                <div><strong>Progress:</strong> <span style="color: ${task.completed >= 1 ? '#10B981' : '#F59E0B'};">${completed}</span></div>
                <div><strong>Owner:</strong> ${task.owner || 'Unassigned'}</div>
              </div>
            </div>
          `;
        },
        backgroundColor: 'transparent',
        borderWidth: 0
      },
      grid: {
        top: 60,
        bottom: 80,
        left: Math.max(120, Math.max(...tasks.map(t => t.name.length)) * 8),
        right: 40,
        backgroundColor: '#ffffff',
        borderColor: '#e5e7eb',
        borderWidth: 1
      },
      xAxis: {
        type: 'time',
        min: range[0],
        max: range[1],
        axisLabel: {
          formatter: value => {
            switch(timeframe) {
              case 'hour': return dayjs(value).format('HH:mm');
              case 'day': return dayjs(value).format('MMM DD');
              case 'week': return dayjs(value).format('MMM DD');
              case 'month': return dayjs(value).format('MMM YYYY');
              case 'year': return dayjs(value).format('YYYY');
              default: return dayjs(value).format('MMM DD');
            }
          },
          color: '#6B7280',
          fontSize: 11
        },
        axisLine: {
          lineStyle: {
            color: '#e5e7eb'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#e5e7eb'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#f3f4f6',
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: tasks.map(task => task.name),
        axisLabel: {
          interval: 0,
          color: '#374151',
          fontSize: 11,
          fontWeight: 500,
          formatter: (value) => {
            return value.length > 20 ? value.substring(0, 17) + '...' : value;
          }
        },
        axisLine: {
          lineStyle: {
            color: '#e5e7eb'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#f9fafb',
            width: 1
          }
        }
      },
      series: [
        {
          name: 'Tasks',
          type: 'custom',
          renderItem: (params, api) => {
            const categoryIndex = api.value(4);
            const start = api.value(0);
            const end = api.value(1);
            const progress = api.value(2);
            const milestone = api.value(6);
            
            if (milestone) {
              // Render milestone as diamond
              const x = api.coord([start, categoryIndex])[0];
              const y = api.coord([start, categoryIndex])[1];
              return {
                type: 'polygon',
                shape: {
                  points: [
                    [x, y - 8],
                    [x + 8, y],
                    [x, y + 8],
                    [x - 8, y]
                  ]
                },
                style: {
                  fill: '#9428C8',
                  stroke: '#ffffff',
                  strokeWidth: 2
                }
              };
            }
            
            // Regular task bar
            const barColor = progress >= 1 ? '#10B981' : progress > 0 ? '#F59E0B' : '#17E5D9';
            const x = api.coord([start, categoryIndex])[0];
            const y = api.coord([start, categoryIndex])[1];
            const width = Math.max(api.coord([end, categoryIndex])[0] - x, 4);
            const height = 16;
            
            const elements = [];
            
            // Background bar
            elements.push({
              type: 'rect',
              shape: {
                x: x,
                y: y - height/2,
                width: width,
                height: height,
                r: 4
              },
              style: {
                fill: '#f3f4f6',
                stroke: '#e5e7eb',
                strokeWidth: 1
              }
            });
            
            // Progress bar
            if (progress > 0) {
              elements.push({
                type: 'rect',
                shape: {
                  x: x + 1,
                  y: y - height/2 + 1,
                  width: Math.max((width - 2) * progress, 2),
                  height: height - 2,
                  r: 3
                },
                style: {
                  fill: barColor
                }
              });
            }
            
            return {
              type: 'group',
              children: elements
            };
          },
          encode: {
            x: [0, 1],
            y: 4,
            tooltip: [0, 1, 2, 3],
          },
          data: tasks.map((task, i) => [
            task.start,
            task.end,
            task.completed,
            task.owner,
            i,
            task.name,
            task.milestone,
          ]),
        },
      ],
    };
  }, [tasks, timeframe]);

  const dynamicHeight = Math.max(400, tasks.length * 40 + 200);

  return (
    <div className="bg-white relative rounded-lg shadow-lg border border-gray-100 overflow-hidden">
      {/* Sticky Header with Timeframe Controls */}
      <div className="sticky top-0 z-10 shadow-md">
        <div className="p-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-action text-xl font-semibold">Project Gantt Chart</h2>
              <p className="text-action text-opacity-90 text-sm">
                {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} • {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} view
              </p>
            </div>
            
            {/* Timeframe Controls */}
            <div className="flex gap-1 bg-white bg-opacity-20 p-1 rounded-lg backdrop-blur-sm">
              {['hour', 'day', 'week', 'month', 'year'].map(tf => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2 py-1 cursor-pointer rounded-md text-sm font-medium transition-all duration-200 ${
                    timeframe === tf 
                      ? 'text-white bg-action shadow-md' 
                      : 'text-action hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  {tf.charAt(0).toUpperCase() + tf.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      {tasks.length > 0 && (
        <div className="sticky top-0 border-t  bg-white px-2 py-1 z-10">
          <div className="flex flex-wrap gap-4 sm:gap-4 text-sm justify-center sm:justify-start">
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 bg-primary rounded shadow-sm"></div>
              <span className="text-muted text-xs">Not Started</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 bg-yellow-500 rounded shadow-sm"></div>
              <span className="text-muted text-xs">In Progress</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 bg-green-500 rounded shadow-sm"></div>
              <span className="text-muted text-xs">Completed</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-action transform rotate-45 shadow-sm"></div>
              <span className="text-muted text-xs">Milestone</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400 ml-auto">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              Scroll horizontally to view timeline
            </div>
          </div>
        </div>
      )}
      {/* Chart Content */}
      <div className="p-2 pt-0">
        {tasks.length > 0 ? (
          <div className="bg-muted rounded-lg p-2">
            <ReactECharts
              option={options}
              style={{ height: dynamicHeight, width: '100%' }}
              opts={{ renderer: 'canvas' }}
            />
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-muted" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Gantt Data Available</h3>
            <p className="text-muted max-w-md mx-auto">
              There are no valid tasks with start dates to display in the Gantt chart. Please ensure your data includes the required date fields.
            </p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default GanttView;