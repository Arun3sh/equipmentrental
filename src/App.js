import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navitem from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

export const authContext = createContext(null);

function App() {
	const [login, setLogin] = useState(false);
	const modes = {
		login: login,
		setLogin: setLogin,
	};
	return (
		<authContext.Provider value={modes}>
			<div className="App">
				<Navitem />
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/product">Product</Route>
					<Route patyh="/checkout">checkout</Route>
				</Switch>
				<Footer />
			</div>
		</authContext.Provider>
	);
}

export default App;
