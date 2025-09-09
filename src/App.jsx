import React, { useCallback } from 'react';

import { report } from '../data/report/example3';
import Reports from './components/reports';
import actionHandler from './actions/actionHandler';

export default function App() {

   const handleAction = useCallback(
    (actionKey, rowData) => {
      actionHandler(actionKey, rowData);
    },
    []
  );
  return (
   <>
    
    <Reports
     report={report} 
     onButtonClick={handleAction}
     
    // methods={{eyeButtonClick,addButtonClick,addRemark}}
    />

   </>
  )
}