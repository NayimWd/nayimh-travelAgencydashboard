import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./App.css";
import '../src/assets/global.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Dashboard from './Page/Dashboard.jsx';

{
  /* ---- OnBlur Title set ---- */
}
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "We are waiting! ❤️";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

// setup router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element={<Dashboard/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
