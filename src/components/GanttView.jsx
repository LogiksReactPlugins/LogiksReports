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

import React, { useMemo, useState } from "react";
import Highcharts from "highcharts/highcharts-gantt";
import HighchartsReact from "highcharts-react-official";
import dayjs from "dayjs";

const GanttView = ({ paginatedGroupedData }) => {
  const [timeframe, setTimeframe] = useState("day"); // default zoom

  const tasks = useMemo(() => {
    const data = paginatedGroupedData?.ungrouped || [];
    const today = dayjs().startOf("day");

    return data.map(item => ({
      name: item?.persona_name || "Untitled",
      id: item?.id,
      parent: item?.parent || undefined,
      dependency: item?.dependencies || undefined,
      start: item?.start
        ? dayjs(item.start).valueOf()
        : today.valueOf(),
      end: item?.end
        ? dayjs(item.end).valueOf()
        : today.add(1, "day").valueOf(),
      milestone: item?.milestone || false,
      completed: {
        amount: (item?.progress || 0) / 100,
        fill: "#28a745"
      },
      owner: item?.owner || "Unassigned"
    }));
  }, [paginatedGroupedData]);

  const options = useMemo(() => {
  const today = dayjs().startOf("day").valueOf();

  const ranges = {
    hour: [today - 6 * 3600 * 1000, today + 18 * 3600 * 1000],
    day: [today - 3 * 24 * 3600 * 1000, today + 18 * 24 * 3600 * 1000],
    week: [today - 14 * 24 * 3600 * 1000, today + 90 * 24 * 3600 * 1000],
    month: [today - 90 * 24 * 3600 * 1000, today + 365 * 24 * 3600 * 1000],
    year: [today - 365 * 24 * 3600 * 1000, today + 3 * 365 * 24 * 3600 * 1000],
  };

  return {
    chart: {
      height: 500,
      zoomType: null,     
      panning: { enabled: true, type: "x" }, 
      panKey: null         
    },
    title: {
      text: "Gantt Project Management"
    },
    xAxis: {
      currentDateIndicator: true,
      min: ranges[timeframe][0],
      max: ranges[timeframe][1],
      scrollbar: { enabled: true } 
    },
    series: [
      {
        name: "Projects",
        data: tasks
      }
    ],
    tooltip: {
      pointFormatter: function () {
        const format = "%e. %b";
        const completed = this.completed?.amount
          ? Math.round(this.completed.amount * 100) + "%"
          : "0%";

        return `
          <b>${this.name}</b><br/>
          Start: ${Highcharts.dateFormat(format, this.start)}<br/>
          ${!this.milestone ? "End: " + Highcharts.dateFormat(format, this.end) + "<br/>" : ""}
          Completed: ${completed}<br/>
          Owner: ${this.owner || "unassigned"}
        `;
      }
    }
  };
}, [tasks, timeframe]);

  return (
    <div className="bg-white rounded shadow p-2">
      {/* 🔘 Timeframe Controls */}
      <div className="flex gap-2 mb-2">
        {["hour", "day", "week", "month", "year"].map(tf => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-3 py-1 rounded ${
              timeframe === tf ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {tf.charAt(0).toUpperCase() + tf.slice(1)}
          </button>
        ))}
      </div>

      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"ganttChart"}
        options={options}
      />
    </div>
  );
};

export default GanttView;
