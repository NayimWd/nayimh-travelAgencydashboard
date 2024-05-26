import { CiUser } from "react-icons/ci";
import { GoSignOut, GoTag } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
const ProfileDrower = ({ isOpen, onClose }) => {
	return (
		<div
			className={`absolute z-50 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
				isOpen ? "block" : "hidden"
			}`}
		>
			<div
				className="py-1"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="options-menu"
			>
                <Link to="profile">
				<button
					onClick={onClose}
					className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
					role="menuitem"
				>
					<CiUser className="w-6 h-6 text-deep_blue" />
					<p className="text-deep_blue font-semibold"> My Profile </p>
				</button>
                </Link>
				<button
					onClick={onClose}
					className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
					role="menuitem"
				>
					<CiSettings className="w-6 h-6 text-deep_blue" />
					<p className="text-deep_blue font-semibold">Settings</p>
				</button>
				<button
					onClick={onClose}
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

export default ProfileDrower;
