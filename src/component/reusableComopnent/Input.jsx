import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GoTag } from "react-icons/go";

const Input = ({ placeHolder, type, label, name, handleChange }) => {
	// state for outline
	const [click, setClick] = useState(false);
	// state for password field
	const [close, setClose] = useState(false);
	// state for type
	const [inputType, setInputType] = useState(type);

	// setting icon based on input type
	let icon = "";
	// icon for email field
	if (type === "text" && label === "Email") {
		icon = (
			<MdOutlineMail
				className={`w-6 h-6  ${
					click ? "text-deep_blue" : "text-black"
				}`}
			/>
		);
	// icon for password field
	} else if (type === "password") {
		icon = (
			<MdLockOutline
				className={`w-6 h-6  ${
					click ? "text-deep_blue" : "text-black"
				}`}
			/>
		);
	// icon for name field 
	} else if (type === "text" && label === "name") {
		icon = (
			<CgProfile
				className={`w-6 h-6  ${
					click ? "text-deep_blue" : "text-black"
				}`}
			/>
		);
	} else if (type === "text" && name === "promoCode") {
		icon = (
			<GoTag
				className={`w-6 h-6  ${
					click ? "text-deep_blue" : "text-black"
				}`}
			/>
		);
	}
	// function for password type toggle 
	const handleClose = () => {
		setClose(!close);
		if (inputType === "password") {
			setInputType("text");
		} else {
			setInputType("password");
		}
	};

	return (
		<div className="relative">
			{/*<p className="text-dark_gray text-[16px]  mt-1 font-sans">{label}</p>*/}
			<span
				className={`flex items-center justify-between  w-full h-[34px] bg-white_clr p-4 rounded-md mb-4 border-2  ${
					click ? "border-deep_blue" : "border-neutral-200"
				}`}
			>
				{icon}

				<input
					name={name}
					type={inputType}
					
					placeholder={placeHolder}
					className="h-full sm:w-[280px]  w-full p-2 rounded-md outline-none bg-soft_neutrals text-black placeholder:text-black font-montserrat"
					autoComplete="off"
					onFocus={() => setClick(true)}
					onBlurCapture={() => setClick(false)}
					onChange={handleChange}
				/>

				{/* 
        eye icon and icon toggle */}
				{type === "password" &&
					(close ? (
						<AiFillEye
							className={`w-6 h-6  ${
								click ? "text-deep_blue" : "bg-soft_neutrals"
							} `}
							onClick={handleClose}
						/>
					) : (
						<IoMdEyeOff
							className={`w-6 h-6  ${
								click ? "text-deep_blue" : "bg-soft_neutrals"
							} `}
							onClick={handleClose}
						/>
					))}
			</span>
			{click && type === "password" ? (
				<div className="absolute top-10 right-0 bg-deep_blue p-4 rounded-md text-white  shadow-xl z-10">
					password must contained:
					<ol>
						<li>minimum length 6,</li>

						<li>1 number,</li>

						<li>1 Capital letter,</li>
						<li>1 Small letter &</li>

						<li>1 special symbol</li>
					</ol>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Input;
