import loginImg from "../../assets/image/loginImage.png";

const FormImage = () => {
	return (
		<div className="hidden md:flex items-center  md:w-1/2">
			<img
				className="max-h-[750px]  object-center object-fill rounded-md md:h-[646px] lg:h-full"
				src={loginImg}
				alt="bg"
			/>
		</div>
	);
};

export default FormImage;
