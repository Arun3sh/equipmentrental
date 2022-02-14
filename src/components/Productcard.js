import Button from '@restart/ui/esm/Button';
import { useState } from 'react';
import { ButtonGroup, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { authContext } from './../App';
import { useHistory } from 'react-router-dom';
import { API } from './../assets/global';

function Productcard({ id, name, chargeperhour, img }) {
	const history = useHistory();

	const { login, cart, setCart, isAdmin } = useContext(authContext);

	// To get the individual product quantity and to reduce quantity
	const [cartValue, setCartValue] = useState(0);

	// To set the button display
	const [display, setDisplay] = useState('none');

	// Add function to add cart quantity and to change the display of add to cart button
	const add = () => {
		if (login) {
			setCart(cart + 1);
			setCartValue(cartValue + 1);
			setDisplay('added');
		} else {
			history.push('/login');
		}
	};

	// To add cart quantity and to increase one specific product quantity
	const addCartValue = () => {
		setCart(cart + 1);
		setCartValue(cartValue + 1);
	};

	// To remove cart quantity and also for one specific product quantity
	const removeCartValue = () => {
		// If and elseif to make sure the quantity doesn't go neagtive
		if (cartValue > 1) {
			setCart(cart - 1);
			setCartValue(cartValue - 1);
		} else if (cartValue === 1) {
			setDisplay('none');
			setCart(cart - 1);
			setCartValue(cartValue - 1);
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
	const btnGrpStyle = { display: isAdmin ? 'none' : display === 'added' ? 'flex' : 'none' };
	const btnStyle = { display: isAdmin ? 'none' : display === 'added' ? 'none' : 'block' };
	const crudstyle = { display: isAdmin ? 'flex' : 'none', justifyContent: 'space-around' };

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

				{/* {isLogin} */}
				<Button className="btn btn-primary to-cart" style={btnStyle} onClick={add}>
					Add to Cart
				</Button>
				<ButtonGroup style={btnGrpStyle}>
					<Button className="btn btn-primary cartValue" onClick={removeCartValue}>
						-
					</Button>
					<span className="value">{cartValue}</span>
					<Button className="btn btn-primary cartValue" onClick={addCartValue}>
						+
					</Button>
				</ButtonGroup>

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
