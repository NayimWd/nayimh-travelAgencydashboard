import Stats from "../component/dashboard/Stats";


const DashboardHome = () => {
	return (
		<div className=" p-2 h-screen">
			<div className="mb-2">
				<h1 className="text-dark_gray font-bold text-lg sm:text-xl ">Stats</h1>
			</div>
			<div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<Stats />
				<Stats />
				<Stats />
				<Stats />
			</div>

      

		</div>
	);
};

export default DashboardHome;
