import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/reviews' element={<Reviews />}></Route>
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
