import React from "react";
import DashboardHome from "./DashboardHome";
import ProfileContent from "../component/profile/ProfileContent";
import ProfilePage from "./ProfilePage";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
	return <div className="container w-full  ">
   <Outlet/>
  </div>;
};

export default Dashboard;
