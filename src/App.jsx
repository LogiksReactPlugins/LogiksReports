import React, { useCallback } from "react";

import { report } from "../data/report/example2";
import Reports from "./components/reports";
import actionHandler from "./actions/actionHandler";

export default function App() {
  const handleAction = useCallback((actionKey, rowData) => {
    actionHandler(actionKey, rowData);
  }, []);
  const handelTrig = () => {
    console.log("DONE TRIG");
  };
  const handelTrig2 = () => {
    console.log("handelTrig2");
  };
  return (
    <>
      <Reports
        report={report}
        onButtonClick={handleAction}
        methods={{ handelTrig, handelTrig2 }}
      />
    </>
  );
}
