import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Button, Badge, TextField } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { authContext } from './../App';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Navitem() {
	const { login, setLogin, setLoginPage, cart, query, setQuery } = useContext(authContext);

	const history = useHistory();
	const passQuery = (e) => {
		// To prevent from auto submitting
		e.preventDefault();

		// To capitalize first letter alone
		let captilize = query.charAt(0).toUpperCase() + query.slice(1);
		setQuery(captilize);

		history.push(`/products`);
	};
	return (
		<Navbar bg="light" expand="sm">
			<Container className="navbar-container">
				<Navbar.Brand href="#home">REAL</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Link className="nav-link" to="/">
							Home
						</Link>
						<HashLink className="nav-link" to="/#about">
							About
						</HashLink>
						<HashLink className="nav-link" to="/#solution">
							Solution
						</HashLink>

						<Link className="nav-link" to="/products">
							Products
						</Link>
						<NavDropdown title="Category" id="basic-nav-dropdown">
							<Link className="dropdown-item" to="/electronics">
								Electronics
							</Link>
							<Link className="dropdown-item" to="/vehicles">
								Vehicles
							</Link>
							<Link className="dropdown-item" to="/clothes">
								Clothes
							</Link>
							<Link className="dropdown-item" to="/gaming">
								Gaming
							</Link>
							<Link className="dropdown-item" to="/photography">
								Photography
							</Link>
						</NavDropdown>
					</Nav>

					{/* Seacrh Feature */}
					<div className="search-bar">
						<TextField
							id="outlined-basic"
							placeholder="Search rentables here..."
							variant="outlined"
							className="text-field"
							autoComplete="off"
							onChange={(e) => setQuery(e.target.value.toLowerCase())}
							onKeyPress={(e) => e.key === 'Enter' && passQuery(e)}
						/>
						<Button className="search-button" onClick={passQuery}>
							<FaSearch className="search-icon" color="primary" />
						</Button>
					</div>

					{!login && (
						<Link className="nav-link login-link" to="/login" onClick={() => setLoginPage(true)}>
							Login
						</Link>
					)}

					{login && (
						<Link
							className="nav-link logout-link"
							onClick={() => setLogin(false) & localStorage.clear()}
						>
							Logout
						</Link>
					)}

					{!login && (
						<Button variant="outlined" onClick={() => history.push('/register')}>
							Sign up
						</Button>
					)}
					{login && (
						<Badge color="primary" badgeContent={cart}>
							<ShoppingCartIcon />{' '}
						</Badge>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navitem;
