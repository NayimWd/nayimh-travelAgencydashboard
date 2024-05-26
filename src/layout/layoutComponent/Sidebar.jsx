import SmallSidebarItem from "./SmallSidebarItem";
import { IoMdHome } from "react-icons/io";
import {
	MdWidgets,
	MdOutlineCreateNewFolder,
	MdManageAccounts,
} from "react-icons/md";
import { CiUser } from "react-icons/ci";
import LargeSidebar from "./LargeSidebar";
import LargeSidebarItem from "./LargeSidebarItem";
import { useSidebarContext } from "../../context/useSidebar";
import { useRef, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const Sidebar = () => {
	const [toggle, setToggle] = useState(false);
	const { isLargeOpen, isSmallOpen } = useSidebarContext();
	const iconClass = "h-6 w-6 text-deep_blue";

	

	return (
		<>
			<aside
				className={`sticky top-0  h-screen overflow-y-auto scrolbar-hidden p-4 flex  flex-col   overflow-x-hidden bg-whiet ${
					isLargeOpen ? "lg:hidden" : "lg:flex"
				} $${isLargeOpen ? "hidden" : "flex"} `}
			>
				<div className=" flex flex-col items-center justify-center gap-3 w-full">
					<SmallSidebarItem
						icon={<IoMdHome className={iconClass} />}
						title="home"
						url="/"
					/>
					<SmallSidebarItem
						icon={<MdWidgets className={iconClass} />}
						title="All Tour"
						url="/AllTour"
					/>
					<SmallSidebarItem
						icon={<MdOutlineCreateNewFolder className={iconClass} />}
						title="Create tour"
						url="/createTour"
					/>
					<SmallSidebarItem
						icon={<MdManageAccounts className={iconClass} />}
						title="manage tour"
						url="/manageTour"
					/>
					<SmallSidebarItem
						icon={<CiUser className={iconClass} />}
						title="manage users"
						url="/manageUser"
					/>
				</div>
			</aside>
			{/* large screen sidebar*/}
			<aside
				
				className={`lg:sticky absolute top-[80px] md:top-[96px] h-screen overflow-y-auto scrollbar-hidden pb-4  ml-1 gap-2 px-2  flex-col overflow-x-hidden bg-whiet py-6 border-r ${
					isLargeOpen ? "lg:flex" : "lg:hidden"
				} ${isSmallOpen ? "flex z-5 bg-white h-screen" : "hidden"}`}
			>
				<LargeSidebarItem
					isActive
					icon={<IoMdHome className={iconClass} />}
					title="home"
					url="/"
				/>

				<LargeSidebar>
					<LargeSidebarItem
						icon={<MdWidgets className={iconClass} />}
						title="All Tour"
						url="/"
					/>
				</LargeSidebar>
				<LargeSidebar>
					<LargeSidebarItem
						icon={<MdOutlineCreateNewFolder className={iconClass} />}
						title="Create Tour Package"
						url="/"
					/>
				</LargeSidebar>
				<LargeSidebar>
					<LargeSidebarItem
						icon={<MdManageAccounts className={iconClass} />}
						title="manage Tour Package"
						url="/"
					/>
				</LargeSidebar>
				<LargeSidebar>
					<LargeSidebarItem
						icon={<CiUser className={iconClass} />}
						title="Manage All Users"
						url="/"
					/>
				</LargeSidebar>
			</aside>
		</>
	);
};

export default Sidebar;
