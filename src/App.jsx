import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path='/' element={<Navigate to='/home' />} />

					<Route path='/home' element={<Home />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/reviews' element={<Reviews />}></Route>
					<Route path='/checkout' element={<Checkout />}></Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
