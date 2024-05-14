import { Link } from "react-router-dom";

const SmallSidebarItem = ({ icon, title, url }) => {
	return (
		<Link to={url}>
            <div className=" flex flex-col justify-center items-center bg-neutral-50 hover:bg-neutral-100 py-2 px-2 sm:py-3 rounded gap-2 w-full">
			{icon}

			<div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
            </div>
		</Link>
	);
};

export default SmallSidebarItem;
