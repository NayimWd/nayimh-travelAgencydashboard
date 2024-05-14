import { Link } from "react-router-dom";

const SmallSidebarItem = ({ icon, title, url }) => {
	return (
		<Link to={url}>
            <p className=" flex flex-col justify-center items-center bg-neutral-50 hover:bg-neutral-100 py-2 px-2 sm:py-3 rounded gap-2 w-full overflow-x-hidden ">
			{icon}
				
			<p className="text-sm whitespace-nowrap  text-ellipsis text-deep_blue">{title}</p>
            </p>
		</Link>
	);
};

export default SmallSidebarItem;
