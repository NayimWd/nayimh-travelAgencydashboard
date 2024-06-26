const Button = ({ type, children, style }) => {
	let content;

	if (type === "rounded") {
		return (content = (
			<button
				className={`flex justify-center items-center bg-slate-50 hover:bg-soft_neutrals flex-shrink-0  p-2 sm:p-3 rounded-full ${style}`}
			>
				{children}
			</button>
		));
	}

	if (type === "rounded-dark") {
		return (content = (
			<button
				className={`bg-slate-50 hover:bg-soft_neutrals  p-1 sm:p-3 rounded-full ${style}`}
			>
				{children}
			</button>
		));
	}

	return content;
};

export default Button;
