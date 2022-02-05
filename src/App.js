import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navitem from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
	return (
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
	);
}

export default App;
