import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { authContext } from './../App';

function Navitem() {
	const { login, setLogin } = useContext(authContext);
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

						<Link className="nav-link" to="/product">
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
					{!login && (
						<Link className="nav-link login-link" to="/" onClick={() => setLogin(true)}>
							Login
						</Link>
					)}

					{login && (
						<Link className="nav-link logout-link" to="/" onClick={() => setLogin(false)}>
							Logout
						</Link>
					)}

					{!login && <Button variant="outlined">Sign up</Button>}
					{login && (
						<Badge color="primary" badgeContent={4}>
							<ShoppingCartIcon />{' '}
						</Badge>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navitem;
