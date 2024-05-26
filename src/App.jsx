import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarToggleContext";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<SidebarProvider>
			<Toaster/>
			<Outlet/>
		</SidebarProvider>
	);
}

export default App;
