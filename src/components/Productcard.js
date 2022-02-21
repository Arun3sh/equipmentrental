import Button from '@restart/ui/esm/Button';
import { useState } from 'react';
import { ButtonGroup, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { authContext } from './../App';
import { useHistory } from 'react-router-dom';
import { API } from './../assets/global';
import { toast } from 'react-toastify';

function Productcard({ id, name, chargeperhour, img, quantity }) {
	const history = useHistory();

	const { login, cart, setCart, isAdmin, userCart, setUserCart } = useContext(authContext);

	let check = userCart.filter((item) => item.pname === name);

	// To get the individual product quantity and to reduce quantity
	const [cartValue, setCartValue] = useState(check.length !== 0 && login ? check[0].quantity : 0);

	// To set the button display
	const [display, setDisplay] = useState(
		check.length !== 0 && check[0].quantity !== 0 && login ? 'added' : 'none'
	);

	// This function is used to add items in cart and to checkout page
	function toUserCart(value) {
		let cartItem = {
			pid: id,
			image: img,
			cost: chargeperhour,
			pname: name,
			quantity: value === 'add' ? cartValue + 1 : cartValue - 1,
			stock: quantity,
		};

		//If cart is empty will set the cart items
		if (userCart.length === 0) {
			setUserCart([cartItem]);
		}

		//If cart has any item already
		if (userCart.length > 0) {
			//Checking if there is anyother item other then the selected item
			const itemExist = userCart.filter((item) => item.pname !== name);

			// If the cart is not empty and no other product is there, which means user is
			// selecting same item. Based on these conditions are set to set cart item

			setUserCart(itemExist.length === 0 ? [cartItem] : [...itemExist, cartItem]);
		}
	}

	// Add function to add cart quantity and to change the display of add to cart button
	const add = () => {
		if (!login) {
			history.push('/login');
		}

		if (check.length !== 0 && login) {
			if (quantity - check[0].quantity) {
				setCart(cart + 1);

				setCartValue(cartValue + 1);

				toUserCart('add');

				setDisplay('added');
			} else {
				toast.error('Max quantity added in cart');
			}
		}

		if (check.length === 0 && login) {
			setCart(cart + 1);

			setCartValue(cartValue + 1);

			setDisplay('added');
			toUserCart('add');
		}
	};

	// To add cart quantity and to increase one specific product quantity
	const addCartValue = () => {
		// console.log(check[0], userCart);
		if (check.length !== 0) {
			if (quantity - check[0].quantity) {
				setCart(cart + 1);

				setCartValue(cartValue + 1);

				toUserCart('add');
			} else {
				toast.error('Max quantity added in cart');
			}
		}
	};

	// To remove cart quantity and also for one specific product quantity
	const removeCartValue = () => {
		setCart(cart - 1);
		setCartValue(cartValue - 1);
		toUserCart('sub');

		// If to make sure the quantity doesn't go neagtive
		if (cartValue === 1) {
			setDisplay('none');
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
