import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Reports from './pages/Reports';
import { report } from '../data/report/example1';
import Reports from './components/reports';

export const router=createBrowserRouter([
  {
    path:'/',
    element:<Reports report={report}/>
  }
])



export default function App() {
  const handelClick=()=>{
    console.log('BTN CLiCK')
  }
  const addButtonClick=()=>{
    console.log('ADD BUtton string click')
  }

  const eyeButtonClick=(id)=>{
   console.log("EYE BUTTON")
}

const addRemark=(test_id)=>{
  console.log({test_id})
  console.log("addRemark CALL")
}
  return (
    // <RouterProvider router={router} />
    <Reports report={report} 
    methods={{eyeButtonClick,addButtonClick,addRemark}}
    />
  )
}