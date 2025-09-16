import React, { useEffect, useRef, useMemo } from "react";
import Gantt from "frappe-gantt";
import dayjs from "dayjs";
import "../../node_modules/frappe-gantt/dist/frappe-gantt.css";

const GanttView = ({ paginatedGroupedData }) => {
  const ganttRef = useRef(null);
  const ganttInstance = useRef(null);

  const tasks = useMemo(() => {
    const data = paginatedGroupedData?.ungrouped || [];
    return data.map(item => ({
      id: item?.id,
      name: item?.persona_name,
      start: item?.start
        ? dayjs(item.start).format("YYYY-MM-DD")
        : dayjs().format("YYYY-MM-DD"),
      end: item?.end
        ? dayjs(item.end).format("YYYY-MM-DD")
        : dayjs().add(1, "day").format("YYYY-MM-DD"),
      progress: item?.progress || 0,
      dependencies: item?.dependencies || []
    }));
  }, [paginatedGroupedData]);

  useEffect(() => {
    if (ganttRef.current && !ganttInstance.current) {
      ganttInstance.current = new Gantt(ganttRef.current, tasks, {
        view_mode: "Day",
        date_format: "YYYY-MM-DD",
        custom_popup_html: (task) => `
          <div style="padding:8px; background:#fff; border-radius:6px; 
                      box-shadow:0 2px 6px rgba(0,0,0,0.2); font-size:12px;">
            <b>${task?.name}</b><br/>
            Start: ${task?.start}<br/>
            End: ${task?.end}<br/>
            Progress: ${task?.progress}%
          </div>
        `
      });
    }
  }, []); 

  useEffect(() => {
    if (ganttInstance.current && tasks.length > 0) {
      ganttInstance.current.refresh(tasks);
    }
  }, [tasks]);

  return (
    <div className="bg-white rounded shadow p-2 relative z-0">
      <div ref={ganttRef} className="overflow-x-auto min-h-[400px] w-full"></div>
    </div>
  );
};

export default GanttView;
