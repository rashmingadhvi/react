import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter([
  {path:"/", element: <App/>,},
  {path:"/dashboard", element: <Dashboard/>,}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
<RouterProvider router={router}/>
  </React.StrictMode>,
)
