import { BiEdit } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { GoSignOut, GoTag } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import avter from "../../assets/image/avter.png";

const ProfileSidebar = () => {
	return (
		<div className=" w-full md:w-[300px] justify-center bg-white shadow-lg p-5">
			<div className="flex items-center justify-around">
				<img className="w-16 md:w-32" src={avter} />
				<BiEdit className="w-8 h-8 cursor-pointer" />
			</div>
			<div
				className="py-5"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="options-menu"
			>
				<button
					className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left rounded"
					role="menuitem"
				>
					<CiUser className="w-6 h-6 text-deep_blue" />
					<p className="text-deep_blue font-semibold"> Personal Inco </p>
				</button>

				<button
					className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
					role="menuitem"
				>
					<CiSettings className="w-6 h-6 text-deep_blue" />
					<p className="text-deep_blue font-semibold">Settings</p>
				</button>
				<button
					className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
					role="menuitem"
				>
					<GoSignOut className="w-6 h-6 text-deep_blue" />
					<p className="text-deep_blue font-semibold">Sign Out</p>
				</button>
			</div>
		</div>
	);
};

export default ProfileSidebar;
