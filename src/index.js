import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
const router=createBrowserRouter([{path:'/', element:<App/>},
{path:'/HomePage', element:<HomePage/>}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);
