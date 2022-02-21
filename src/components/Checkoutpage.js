import Checkoutcard from './Checkoutcard';
import { useContext } from 'react';
import { authContext } from './../App';
import { Button } from '@mui/material';

function Checkoutpage() {
	const { userCart } = useContext(authContext);

	if (!userCart.length) {
		return (
			<div className="container-sm noItems-cart">
				<h5>Please add items in Cart</h5>
			</div>
		);
	}

	return (
		<div className="container-sm checkout-container">
			<div className="checkoutpage-wrapper">
				{userCart.map(({ pid, image, cost, pname, quantity, stock }, index) => (
					<Checkoutcard
						pid={pid}
						image={image}
						cost={cost}
						pname={pname}
						quantity={quantity}
						stock={stock}
						index={index}
						key={index}
					/>
				))}
			</div>
			{userCart.filter((item) => item.quantity !== 0).length === 0 ? (
				<div className="container-sm noItems-cart">
					<h5>Please add items in Cart</h5>
				</div>
			) : userCart.filter((item) => item.quantity !== 0).length > 1 ? (
				<Button variant="outlined">Rent All</Button>
			) : (
				''
			)}
		</div>
	);
}
export default Checkoutpage;
