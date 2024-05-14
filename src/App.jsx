import Layout from "./Page/Layout";
import { SidebarProvider } from "./context/SidebarToggleContext";
import Header from "./layout/Header";

function App() {
	return (
		<SidebarProvider>
			<div className="min-h-screen flex flex-col w-full  overflow-x-hidden">
				{/* header */}
				<Header />
				{/* header */}
				<Layout />
			</div>
		</SidebarProvider>
	);
}

export default App;
