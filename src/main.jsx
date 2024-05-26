import React, { Suspense, lazy } from 'react';
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
import NotFound from './Page/NotFound.jsx';
import Layout from './Page/Layout.jsx';
import DashboardHome from './Page/DashboardHome.jsx';
const Login = lazy(()=> import("./Page/auth/Login.jsx"))
const Register = lazy(()=> import("./Page/auth/Register.jsx"))
const ProfilePage = lazy(()=> import("./Page/ProfilePage.jsx"));

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
      <Route path='/' element={<Layout/>}>
        <Route index={true} path='/' element={<DashboardHome/>}/>
        <Route path='profile' element={<ProfilePage/>}/>
       
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="*" element={<NotFound />} />
    <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
    <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>,
)
