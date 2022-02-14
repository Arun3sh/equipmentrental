import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './style/productcard.css';
import './style/login.css';
import './style/register.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navitem from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Productpage from './components/Productpage';
import Login from './components/Login';
import Register from './components/Register';
import Checkoutpage from './components/Checkoutpage';
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';

export const authContext = createContext(null);

function App() {
	const [login, setLogin] = useState(false);
	const [cart, setCart] = useState(0);
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);

	const location = useLocation();
	const modes = {
		login: login,
		setLogin: setLogin,
		cart: cart,
		setCart: setCart,
		query: query,
		setQuery: setQuery,
		isLoading: isLoading,
		setIsLoading: setIsLoading,
		isAdmin: isAdmin,
		setIsAdmin: setIsAdmin,
	};

	return (
		<authContext.Provider value={modes}>
			<div className="App">
				{location.pathname !== '/login' && location.pathname !== '/register' && <Navitem />}
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/products">
						<Productpage />
					</Route>

					<Route path="/checkout">
						<Checkoutpage />
					</Route>
					<Route path="/add-products">
						<Addproduct />
					</Route>
					<Route path="/edit-product/:id">
						<Editproduct />
					</Route>
				</Switch>
				{location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
			</div>
		</authContext.Provider>
	);
}

export default App;
