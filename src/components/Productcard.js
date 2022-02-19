import Button from '@restart/ui/esm/Button';
import { useState } from 'react';
import { ButtonGroup, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { authContext } from './../App';
import { useHistory } from 'react-router-dom';
import { API } from './../assets/global';

function Productcard({ id, name, chargeperhour, img, quantity }) {
	const history = useHistory();

	const { login, cart, setCart, isAdmin, userCart, setUserCart } = useContext(authContext);

	// To get the individual product quantity and to reduce quantity
	const [cartValue, setCartValue] = useState(0);

	// To set the button display
	const [display, setDisplay] = useState('none');

	function toUserCart(value) {
		let cartItem = { pname: name, quantity: value === 'add' ? cartValue + 1 : cartValue - 1 };
		if (userCart.length === 0) {
			setUserCart([cartItem]);
		}

		if (userCart.length > 0) {
			const itemExist = userCart.filter((item) => item.pname !== name);

			setUserCart(itemExist.length === 0 ? [cartItem] : [...itemExist, cartItem]);
		}
	}

	// Add function to add cart quantity and to change the display of add to cart button
	const add = () => {
		let value = 'add';
		if (login) {
			setCart(cart + 1);

			setCartValue(cartValue + 1);

			setDisplay('added');
			toUserCart(value);
		} else {
			history.push('/login');
		}
	};

	// To add cart quantity and to increase one specific product quantity
	const addCartValue = () => {
		let value = 'add';

		if (quantity - cartValue) {
			setCart(cart + 1);
			setCartValue(cartValue + 1);

			toUserCart(value);
		}
	};

	// To remove cart quantity and also for one specific product quantity
	const removeCartValue = () => {
		let value = 'sub';
		// If and elseif to make sure the quantity doesn't go neagtive
		if (cartValue > 1) {
			setCart(cart - 1);
			setCartValue(cartValue - 1);
			toUserCart(value);
		} else if (cartValue === 1) {
			setDisplay('none');
			setCart(cart - 1);
			setCartValue(cartValue - 1);
			toUserCart(value);
		}
	};

	const toUpdate = () => {
		history.push(`/edit-product/${id}`);
	};

	const deleteProduct = () => {
		fetch(`${API}/products/${id}`, {
			method: 'DELETE',
			headers: { 'x-auth-token': ` ${localStorage.getItem('token')}` },
		}).then(() => history.push('/'));
	};

	// Styles for displaying add to cart button and the button group
	const btnGrpStyle = {
		display: isAdmin ? 'none' : quantity === '0' ? 'none' : display === 'added' ? 'flex' : 'none',
	};
	const btnStyle = {
		display: isAdmin ? 'none' : quantity === '0' ? 'none' : display === 'added' ? 'none' : 'block',
	};
	const crudstyle = { display: isAdmin ? 'flex' : 'none', justifyContent: 'space-around' };
	const noItem = { display: isAdmin ? 'none' : quantity === '0' ? 'flex' : 'none' };

	return (
		<Card className="shopping-card">
			<Card.Img className="shopping-image" variant="top" src={img} />
			<Card.Body className="shopping-body">
				<Card.Title className="title">{name}</Card.Title>
				<Card.Text className="text">
					<span className="description">
						Product description comes here to explain about the product.
					</span>
					<span className="price">₹{chargeperhour} per hour</span>
				</Card.Text>

				{/* <input type="date"></input> */}

				<Button className="btn btn-primary to-cart" type="button" style={btnStyle} onClick={add}>
					Add to Cart
				</Button>
				<ButtonGroup style={btnGrpStyle}>
					<Button className="btn btn-primary cartValue" type="button" onClick={removeCartValue}>
						-
					</Button>
					<span className="value">{cartValue}</span>
					<Button className="btn btn-primary cartValue" type="button" onClick={addCartValue}>
						+
					</Button>
				</ButtonGroup>

				<div className="no-item" style={noItem}>
					<p>Sorry we're loading more item</p>
				</div>

				<div className="crud-btn" style={crudstyle}>
					<Button className="btn btn-primary edit" onClick={toUpdate}>
						Edit
					</Button>
					<Button className="btn btn-danger delete" onClick={deleteProduct}>
						Delete
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
}
export default Productcard;
