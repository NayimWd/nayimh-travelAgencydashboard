import React from "react";
import Sidebar from "../layout/layoutComponent/Sidebar";
import Dashboard from "./Dashboard";
import Header from "../layout/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="w-full flex">
				<div className="w-full overflow-y-auto overflow-x-hidden scrolbar-hidden  flex  ">
					<Sidebar />
					<Dashboard />
				</div>
			</div>
		</>
	);
};

export default Layout;
