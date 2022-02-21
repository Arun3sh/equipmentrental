import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Button, Badge, TextField, ListItem, ListItemText, Avatar } from '@mui/material';
import { BiJoystick, BiCamera } from 'react-icons/bi';
import { FaSearch, FaTruckMoving } from 'react-icons/fa';
import { FcElectronics } from 'react-icons/fc';
import { GiClothes } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { authContext } from './../App';
import { useHistory } from 'react-router-dom';
import { yellow } from '@mui/material/colors';

function Navitem() {
	const { login, setLogin, cart, setCart, setQuery, isAdmin, setIsAdmin } = useContext(authContext);
	const cursorstyle = { cursor: 'pointer' };

	const history = useHistory();
	const passQuery = () => {
		history.push(`/products`);
	};

	return (
		<Navbar bg="light" expand="sm">
			<Container className="navbar-container">
				{/* Brand Name */}
				<Navbar.Brand href="#home">
					<Link className="nav-link" to="/">
						REAL
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="hamburger-menu" id="basic-navbar-nav">
					<Nav>
						{/* <Link className="nav-link" to="/">
							Home
						</Link> */}
						{!isAdmin && (
							<HashLink className="nav-link" to="/#about">
								About
							</HashLink>
						)}

						{!isAdmin && (
							<Link className="nav-link" to="/my-orders">
								Orders
							</Link>
						)}

						<Link className="nav-link" to="/products" onClick={() => setQuery('')}>
							Products
						</Link>

						{isAdmin && (
							<Link className="nav-link" to="/add-products">
								Add Product
							</Link>
						)}

						<NavDropdown title="Category" id="basic-nav-dropdown">
							{/* Vehicles */}
							<ListItem
								style={cursorstyle}
								onClick={() => setQuery('?category=vehicle') & passQuery()}
							>
								<ListItemAvatar color="success">
									<Avatar sx={{ bgcolor: yellow[600] }}>
										<FaTruckMoving />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Vehicle" />
							</ListItem>

							{/* Electronics */}
							<ListItem
								style={cursorstyle}
								onClick={() => setQuery('?category=electronics') & passQuery()}
							>
								<ListItemAvatar>
									<Avatar sx={{ bgcolor: yellow[600] }}>
										<FcElectronics />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Electronics" />
							</ListItem>

							{/* Gaming */}
							<ListItem
								style={cursorstyle}
								onClick={() => setQuery('?category=gaming') & passQuery()}
							>
								<ListItemAvatar>
									<Avatar sx={{ bgcolor: yellow[600] }}>
										<BiJoystick />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Gaming" />
							</ListItem>

							{/* Photography */}
							<ListItem
								style={cursorstyle}
								onClick={() => setQuery('?category=photography') & passQuery()}
							>
								<ListItemAvatar>
									<Avatar sx={{ bgcolor: yellow[600] }}>
										<BiCamera />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Photography" />
							</ListItem>

							{/* Clothes */}
							<ListItem
								style={cursorstyle}
								onClick={() => setQuery('?category=clothes') & passQuery()}
							>
								<ListItemAvatar>
									<Avatar sx={{ bgcolor: yellow[600] }}>
										<GiClothes />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Clothes" />
							</ListItem>
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
							onChange={(e) => setQuery(`?name=${e.target.value}`)}
							onKeyPress={(e) => e.key === 'Enter' && passQuery()}
						/>
						<Button className="search-button" onClick={passQuery}>
							<FaSearch className="search-icon" color="primary" />
						</Button>
					</div>

					{!login && (
						<Link className="login-link" to="/login">
							Login
						</Link>
					)}

					{login && (
						<Link
							to="#"
							className="logout-link"
							onClick={() =>
								setLogin(false) & setCart(0) & setIsAdmin(false) & localStorage.clear()
							}
						>
							Logout
						</Link>
					)}

					{!login && (
						<Button
							className="cart-icon"
							variant="outlined"
							onClick={() => history.push('/register')}
						>
							Sign up
						</Button>
					)}

					{login && !isAdmin && (
						<Badge className="cart-icon" color="primary" badgeContent={cart}>
							<ShoppingCartIcon onClick={() => history.push('/checkout')} />{' '}
						</Badge>
					)}

					{/* userlist for admin */}
					{isAdmin && (
						<Link className="nav-link" to="/users">
							View Users
						</Link>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navitem;
