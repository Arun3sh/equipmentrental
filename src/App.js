import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './style/productcard.css';
import './style/login.css';
import './style/register.css';
import './style/user.css';
import 'react-toastify/dist/ReactToastify.css';
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
import Userlist from './components/Userlist';
import { Redirect } from 'react-router-dom';
import Userdetail from './components/Userdetail';
import Error from './components/Error';
import Forgotpassword from './components/Forgotpassword';

export const authContext = createContext(null);

function App() {
	const [login, setLogin] = useState(false);
	const [cart, setCart] = useState(0);
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);
	const [userCart, setUserCart] = useState([]);

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
		userCart: userCart,
		setUserCart: setUserCart,
	};

	return (
		<authContext.Provider value={modes}>
			<div className="App">
				{location.pathname !== '/login' &&
					location.pathname !== '/register' &&
					location.pathname !== '/forgot-password' && <Navitem />}
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/forgot-password">
						<Forgotpassword />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/products">
						<Productpage />
					</Route>
					<Route path="/checkout">{login ? <Checkoutpage /> : <Redirect to="/products" />}</Route>
					<Route path="/add-products">
						<Addproduct />
					</Route>
					<Route path="/edit-product/:id">
						<Editproduct />
					</Route>
					<Route exact path="/users">
						{isAdmin ? <Userlist /> : <Redirect to="/login" />}
					</Route>
					<Route path="/users/:id">{isAdmin ? <Userdetail /> : <Redirect to="/login" />}</Route>

					<Route path="/**">
						<Error />
					</Route>
				</Switch>
				{location.pathname !== '/login' &&
					location.pathname !== '/register' &&
					location.pathname !== '/forgot-password' && <Footer />}
			</div>
		</authContext.Provider>
	);
}

export default App;
