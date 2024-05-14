import { Link } from "react-router-dom";
import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/Logo";
import Button from "../component/reusableComopnent/Button";
import SearchBar from "./layoutComponent/SearchBar";
import { CiSearch } from "react-icons/ci";
import {  useState } from "react";

import { useSidebarContext } from "../assets/context/useSidebar";


const Header = () => {
	const [showFullSearch, setFullSearch] = useState(false);

	
	const {toggleSidebar} = useSidebarContext();

	

	return (
		<div className="flex gap-10 h-14 xsm:h-14 sm:h-26 sm:gap-12 md:gap-14 lg:gap-16 justify-between items-center p-2 mb-6 mx-4 sticky top-0">
			{/* icon and logo */}
			<div
				className={`${
					showFullSearch ? "hidden md:flex" : "flex"
				} gap-4 items-center flex-shrink-0`}
			>
				<button className="bg-slate-50 hover:bg-soft_neutrals  p-3 rounded-full" onClick={toggleSidebar}>
					<IoMdMenu  className="w-6 h-6 cursor-pointer" />
				</button>
				<Link to="/">
					<Logo />
				</Link>
			</div>
			
			{/* search bar */}
			<div className="flex-grow">
				<SearchBar
					showFullSearch={showFullSearch}
					setFullSearch={setFullSearch}
				/>
			</div>
			{/* right notification and profile button */}
			<div
				className={`${
					showFullSearch ? "hidden md:flex" : "flex"
				}  gap-1 flex-shrink-0 gap  sm:1 md:2`}
			>
				<button
					onClick={() => setFullSearch(true)}
					className="block md:hidden bg-slate-50 hover:bg-soft_neutrals  p-3 rounded-full"
				>
					<CiSearch className="w-6 h-6" />
				</button>
				<Button type="rounded">
					<IoMdNotificationsOutline className="w-6 h-6" />
				</Button>
				<Button type="rounded">
					<CgProfile className="w-6 h-6" />
				</Button>
			</div>
		</div>
	);
};

export default Header;
