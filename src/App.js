import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './style/productcard.css';
import './style/login.css';
import './style/register.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navitem from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Productpage from './components/Productpage';
import Login from './components/Login';
import { Register } from './components/Register';
import Electronics from './components/Electronics';
import Gaming from './components/Gaming';
import Vehicle from './components/Vehicle';
import Clothes from './components/Clothes';
import Photography from './components/Photography';

export const authContext = createContext(null);

function App() {
	const [login, setLogin] = useState(false);
	const [loginPage, setLoginPage] = useState(false);
	const [cart, setCart] = useState(0);
	const [query, setQuery] = useState('');

	const modes = {
		login: login,
		setLogin: setLogin,
		loginPage: loginPage,
		setLoginPage: setLoginPage,
		cart: cart,
		setCart: setCart,
		query: query,
		setQuery: setQuery,
	};

	if (loginPage) {
		{
			console.log('loginpage');
		}
		return (
			<authContext.Provider value={modes}>
				<div className="App">
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<footer>
						<div className="copyright">Copyright © 2022 Aruneshwaran</div>
					</footer>
				</div>
			</authContext.Provider>
		);
	}
	return (
		<authContext.Provider value={modes}>
			<div className="App">
				<Navitem />
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
					<Route path="/electronics">
						<Electronics />
					</Route>
					<Route path="/gaming">
						<Gaming />
					</Route>
					<Route path="/vehicles">
						<Vehicle />
					</Route>
					<Route path="/clothes">
						<Clothes />
					</Route>
					<Route path="/photography">
						<Photography />
					</Route>
					<Route path="/checkout">checkout</Route>
				</Switch>
				<Footer />
			</div>
		</authContext.Provider>
	);
}

export default App;
