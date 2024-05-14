import Layout from "./assets/Page/Layout";
import { SidebarProvider } from "./assets/context/SidebarToggleContext";
import Header from "./layout/Header";



function App() {
	return (
		<SidebarProvider>
		<div className="min-h-screen flex flex-col">
			{/* header */}
			<Header />
			{/* header */}
			<Layout/>

		</div>
		</SidebarProvider>
	);
}

export default App;
