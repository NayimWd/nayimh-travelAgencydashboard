import ProfileContent from "../component/profile/ProfileContent";
import ProfileSidebar from "../component/profile/ProfileSidebar";

const ProfilePage = ({ isOpen, toggle }) => {
	return (
		<div className="flex gap-6 flex-col  lg:flex-row px-3 rounded-lg ">
			<div className=" md:w-1/4">
				{/* Small sidebar */}
				<ProfileSidebar />
			</div>
			<div className=" flex-grow">
				{/* Large content area */}
				<ProfileContent />
			</div>
		</div>
	);
};

export default ProfilePage;
