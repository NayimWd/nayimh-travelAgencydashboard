import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../component/reusableComopnent/Input";
import FormImage from "../../component/logincomponent/Image";
import { ErrorToast,
	SuccessToast,
	isEmail,
	isEmpty,
	isPassword, } from "../../helper/helper";


const Register = () => {
// states for hold and store data
const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    
});

// onchange handler
const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData({ ...inputData, [name]: value });
};
const handleSubmit = (e) => {
    e.preventDefault();
    // store form data to state
    const formData = { ...inputData };

    // form validatoin
    let name = inputData.name;
    let email = inputData.email;
    let password = inputData.password;
    

    if (isEmpty(name)) {
        ErrorToast("Enter your name");
    } else if (!isEmail(email)) {
        ErrorToast("Enter a valid email");
    } else if (!isPassword(password)) {
        ErrorToast("Invalid Password! read Instruction");
    } else {	
        SuccessToast("Registration success!");
        console.log(formData);
        // navigate("/signin")
        setInputData({ name: "", email: "", password: ""});
        e.target.reset();
    }
};

  return (
    <section className="container flex items-center justify-center min-h-screen w-full ">
			{/*/ container */}
			<div className="flex bg-soft_neutrals  rounded-md">
				{/* form */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
					<div className="w-full xsm:w-[404px]  px-4 xsm:px-8 py-[50px]  md:py-14">
						<span className="font-montserrat font-bold text-deep_blue text-3xl  md:text-4xl flex justify-between items-center">
							<h1>Get Started Now</h1>{" "}
							<Link to="/" title="home">
								{" "}
								<TiHome className="w-9 cursor-pointer" />{" "}
							</Link>
						</span>
						<p className="text-deep_blue text-[16px] sm:text-[18px] mt-1 font-sans ">
							Enter your Information to create your account
						</p>
						<form onSubmit={(e) => handleSubmit(e)} className="mt-7">
							<Input
								name={"name"}
								type={"text"}
								placeHolder={"Enter Your Name"}
								label={"name"}
								value={inputData.name}
								handleChange={handleChange}
							/>

							<Input
								name={"email"}
								type={"text"}
								placeHolder={"Enter Your Email"}
								label={"Email"}
								value={inputData.email}
								handleChange={handleChange}
							/>

							<Input
								name={"password"}
								type={"password"}
								placeHolder={"Enter Password"}
								label={"password"}
								value={inputData.password}
								handleChange={handleChange}
							/>
							{/* Button */}
							<button className="w-full mt-6 h-[34px] rounded-md items-center flex justify-center bg-deep_blue text-white text-lg py-1">
								{" "}
								sign in{" "}
							</button>
						</form>
						{/* other option of sign in */}
						<div className="my-8 flex justify-between items-center">
							<hr className="w-[86px] xsm:w-[110px] border-t-2 border-dark_gray" />{" "}
							<p className="text-[14px] text-deep_blue font-bold">
								or sign in with
							</p>{" "}
							<hr className="w-[86px] xsm:w-[110px] border-t-2 border-dark_gray" />
						</div>
						{/* sign in button for google & fb */}
						<div className="w-full flex justify-between gap-4 mb-8">
							{/* Google */}
							<div className="flex gap-2 xsm:gap-3 items-center justify-center h-12 w-1/2 bg-deep_blue  cursor-pointer rounded-md">
								<FcGoogle className="w-6 text-soft_neutrals" />
								<p className="font-bold text-xl text-soft_neutrals">Google</p>
							</div>
							{/* fb */}
							<div className="flex gap-2 xsm:gap-3 items-center justify-center h-12 w-1/2 bg-deep_blue  cursor-pointer rounded-md">
								<FaFacebook className="w-6 text-soft_neutrals" />
								<p className="font-bold text-xl  text-soft_neutrals">Facebook</p>
							</div>
						</div>
						<p className="text-center text-lg text-dark_gray font-semibold font-reem">
							Don't have an account?{" "}
							<span className="text-deep_blue font-extrabold text-xl cursor-pointer font-montserrat">
								<Link to="/login"> Sign In </Link>
							</span>
						</p>
					</div>
				</div>
				{/* image */}
				<FormImage />
			</div>
		</section>
  )
}

export default Register