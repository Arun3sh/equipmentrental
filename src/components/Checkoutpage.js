import Checkoutcard from './Checkoutcard';
import { useContext } from 'react';
import { authContext } from './../App';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Checkoutpage() {
	const { userCart } = useContext(authContext);
	const history = useHistory();

	if (!userCart.length) {
		return (
			<div className="container-sm noItems-cart">
				<img
					src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png"
					aria-label="empty cart"
				/>
			</div>
		);
	}

	return (
		<div className="container-sm checkout-container">
			<div className="checkoutpage-wrapper">
				{userCart.map(({ pid, image, cost, pname, quantity, stock, from, to }, index) => (
					<Checkoutcard
						pid={pid}
						image={image}
						cost={cost}
						pname={pname}
						quantity={quantity}
						stock={stock}
						from={from}
						to={to}
						index={index}
						key={index}
					/>
				))}
			</div>
			{userCart.filter((item) => item.quantity !== 0).length === 0 ? (
				<div className="container-sm noItems-cart">
					<img
						src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png"
						aria-label="empty cart"
					/>
				</div>
			) : userCart.filter((item) => item.quantity !== 0).length > 0 ? (
				<Button variant="outlined" onClick={() => history.push('/confirm-order')}>
					Rent Now
				</Button>
			) : (
				''
			)}
		</div>
	);
}
export default Checkoutpage;
