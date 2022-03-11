import { Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { authContext } from './../App';
import { toast } from 'react-toastify';

function Checkoutcard({ pid, image, cost, pname, quantity, stock, from, to, index }) {
	const { cart, setCart, userCart } = useContext(authContext);

	// To get the individual product quantity and to reduce quantity
	const [cartValue, setCartValue] = useState(quantity);

	// To set from and to date of rental
	const [newFrom, setNewFrom] = useState(from);
	const [newTo, setNewTo] = useState(to);

	// This function is used to add items in cart and to checkout page
	function toUserCart(value) {
		let cartItem = {
			pid: pid,
			image: image,
			cost: cost,
			pname: pname,
			quantity: value === 'date' ? cartValue : value === 'add' ? cartValue + 1 : cartValue - 1,
			stock: stock,
			from: newFrom,
			to: newTo,
		};

		userCart[index] = cartItem;
	}

	// To add cart quantity and to increase one specific product quantity
	const addCartValue = () => {
		if (+stock - quantity) {
			setCart(cart + 1);
			setCartValue(cartValue + 1);

			toUserCart('add');
		} else {
			toast.error('Max quantity added in cart');
		}
	};

	// To remove cart quantity and also for one specific product quantity
	const removeCartValue = () => {
		setCart(cart - 1);
		setCartValue(cartValue - 1);
		toUserCart('sub');
	};

	// Styles for displaying add to cart button and the button group
	const btnGrpStyle = {
		display: 'flex',
	};

	if (!quantity) {
		return '';
	}
	return (
		<Card className="checkoutcard" sx={{ display: 'flex' }}>
			<CardMedia
				className="shoppingcart-image"
				component="img"
				image={image}
				alt="Live from space album cover"
			/>
			<Box className="checkout-content" sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					{/* Product name */}
					<Typography className="typo-heading" component="div" variant="h5">
						{pname}
					</Typography>

					{/* About quantity */}
					<Typography variant="subtitle1" color="text.secondary" component="div">
						Quantity : {quantity}
					</Typography>

					{/* Product cost for selected quantity */}
					<Typography className="typo-heading" component="div" variant="h6">
						₹{cost * quantity} per hour
					</Typography>
				</CardContent>

				{/* All the select buttons */}
				<div className="fromTo-form">
					<TextField
						type="date"
						label="From"
						inputProps={{ min: `${from}`, defaultValue: `${from}` }}
						onChange={(event) => setNewFrom(event.target.value) & toUserCart('date')}
					/>
					<TextField
						type="date"
						label="To"
						inputProps={{ min: `${from}`, defaultValue: `${from}` }}
						onChange={(event) => setNewTo(event.target.value) & toUserCart('date')}
					/>
					<Box sx={{ pl: 1, pb: 1 }} className="checkout-btn">
						<ButtonGroup className="checkout-btngrp" style={btnGrpStyle}>
							<Button
								className="btn btn-primary checkoutValue"
								type="button"
								onClick={removeCartValue}
							>
								-
							</Button>
							<span className="value">{cartValue}</span>
							<Button
								className="btn btn-primary checkoutValue"
								type="button"
								onClick={addCartValue}
							>
								+
							</Button>
						</ButtonGroup>
					</Box>
				</div>
			</Box>
		</Card>
	);
}

export default Checkoutcard;
