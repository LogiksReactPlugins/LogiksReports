import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Reports from './pages/Reports';

export const router=createBrowserRouter([
  {
    path:'/',
    element:<Reports/>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}