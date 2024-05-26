import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/Logo";
import Button from "../component/reusableComopnent/Button";
import SearchBar from "./layoutComponent/SearchBar";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";

import { useSidebarContext } from "../context/useSidebar";
import ProfileDrower from "../component/ProfileDrower";
import useClickOutSide from "../hooks/useClickOutSide";
import useDebounce from "../hooks/useDebounce";

const Header = () => {
	const [showFullSearch, setFullSearch] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { toggleSidebar } = useSidebarContext();
	const [search, setSearch] = useState("");
	const deboundSearch = useDebounce(search);
	const profileRef = useRef(null);
	// hook for click outside
	useClickOutSide(profileRef, () => setIsOpen(false));

	useEffect(() => {
		console.log(deboundSearch);
	}, [deboundSearch]);

	return (
		<div className="sticky top-0 z-50 bg-white shadow flex justify-between items-center p-4 md:p-6 md:gap-10">
			{/* icon and logo */}
			<div
				className={`${
					showFullSearch ? "hidden md:flex" : "flex"
				} gap-2 sm:gap-4 items-center flex-shrink-0`}
			>
				
					<button
						className="bg-slate-50 hover:bg-soft_neutrals  p-3 rounded-full"
						onClick={toggleSidebar}
					>
						<IoMdMenu className="w-6 h-6 cursor-pointer text-deep_blue" />
					</button>
			
				<Link to="/">
					<Logo />
				</Link>
			</div>

			{/* search bar */}
			<div className="flex-grow">
				<SearchBar
					search={search}
					setSearch={setSearch}
					showFullSearch={showFullSearch}
					setFullSearch={setFullSearch}
				/>
			</div>
			{/* right notification and profile button */}
			<div
				className={`relative ${
					showFullSearch ? "hidden md:flex" : "flex"
				}  gap-1 flex-shrink-0 gap  sm:1 md:2`}
			>
				<button
					onClick={() => setFullSearch(true)}
					className="block md:hidden bg-slate-50 hover:bg-soft_neutrals  p-3 rounded-full"
				>
					<CiSearch className="w-6 h-6 text-deep_blue" />
				</button>
				<Button type="rounded">
					<CgProfile
						onClick={() => setIsOpen(!isOpen)}
						className="w-6 h-6 text-deep_blue"
					/>
				</Button>
				
				<div
					ref={profileRef}
					className="absolute top-[57px] md:top-16 right-[140px]"
				>
					<ProfileDrower toggle={setIsOpen} isOpen={isOpen} />
				</div>
			</div>
		</div>
	);
};

export default Header;
