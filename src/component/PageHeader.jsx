import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/useSidebar";
import { IoMdMenu } from "react-icons/io";
import Logo from "../assets/Logo";

const PageHeader = ({ hidden = false }) => {
	const { toggleSidebar } = useSidebarContext();
	return (
		<div
			className={`${
				hidden ? "hidden" : "flex"
			} gap-4 items-center flex-shrink-0`}
		>
			<button
				className="bg-slate-50 hover:bg-soft_neutrals  p-3 rounded-full"
				onClick={toggleSidebar}
			>
				<IoMdMenu className="w-6 h-6 cursor-pointer" />
			</button>
			<Link to="/">
				<Logo />
			</Link>
		</div>
	);
};

export default PageHeader;
