import { createContext, useEffect, useState } from "react";

export const sidebarContext = createContext(null);

export function SidebarProvider({ children }) {
	const [isLargeOpen, setIsLeargeOpen] = useState(true);
	const [isSmallOpen, setIsSmallOpen] = useState(false);


	useEffect(() => {
		const handler = () => {
			if (!isScreenSmall()) {
				setIsSmallOpen(false);
			}
		};
		window.addEventListener("resize", handler);

		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);

	function isScreenSmall() {
		return window.innerWidth < 1024;
	}

	function toggleSidebar() {
		if (isScreenSmall()) {
			setIsSmallOpen((sm) => !sm);
		} else {
			setIsLeargeOpen((lg) => !lg);
		}
	}

	function closeSidebar() {
		if (isScreenSmall()) {
			setIsSmallOpen(false);
		} else {
			setIsLeargeOpen(false);
		}
	}

	const toggle = () => {
		setIsOpen(!open)
	}


	return (
		<sidebarContext.Provider
			value={{
				isLargeOpen,
				isSmallOpen,
				toggleSidebar,
				closeSidebar,
			
			}}
		>
			{children}
		</sidebarContext.Provider>
	);
}
