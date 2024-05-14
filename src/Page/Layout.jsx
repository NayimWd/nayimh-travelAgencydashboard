import React from "react";
import Sidebar from "../layout/layoutComponent/Sidebar";
import Dashboard from "./Dashboard";

const Layout = () => {
	return (
		<div className="w-full flex">
			<div className=" overflow-y-auto overflow-x-hidden scrolbar-hidden py-4 flex flex-col ">
				<Sidebar />
			</div>
			<Dashboard />
		</div>
	);
};

export default Layout;
