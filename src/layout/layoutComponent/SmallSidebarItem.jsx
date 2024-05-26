import { Link } from "react-router-dom";

const SmallSidebarItem = ({ icon, title, url }) => {
	return (
		<Link to={url}>
            <div className="w-28 flex l flex-col justify-center items-center bg-neutral-50 hover:bg-neutral-100 py-2 px-2 sm:py-3 rounded gap-2   ">
			<span>
			{icon}
			</span>
			<p className="text-sm whitespace-nowrap  text-ellipsis overflow-hidden text-deep_blue">{title}</p>
            </div>
		</Link>
	);
};

export default SmallSidebarItem;
