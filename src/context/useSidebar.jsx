import { useContext } from "react";
import { sidebarContext } from "./SidebarToggleContext";

export function useSidebarContext() {
	const value = useContext(sidebarContext);
	if (value === null) {
		throw Error("out side of context provider");
	}
	return value;
}
