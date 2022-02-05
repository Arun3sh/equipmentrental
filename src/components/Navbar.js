import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navitem() {
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
						<Link className="nav-link" to="/product">
							Products
						</Link>
						<NavDropdown title="Category" id="basic-nav-dropdown">
							<Link className="dropdown-item" to="/electronics">
								Electronics
							</Link>
							<Link className="dropdown-item" to="/clothes">
								Clothes
							</Link>
							<Link className="dropdown-item" to="/toys">
								Toys
							</Link>
							<Link className="dropdown-item" to="/hs">
								Household Stationary
							</Link>
						</NavDropdown>
					</Nav>
					<Link className="nav-link login-link" to="/product">
						Login
					</Link>
					<Button variant="outlined">Sign up</Button>
					<Badge color="primary" badgeContent={4}>
						<ShoppingCartIcon />{' '}
					</Badge>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navitem;
