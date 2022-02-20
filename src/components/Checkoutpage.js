import Checkoutcard from './Checkoutcard';
import { useContext } from 'react';
import { authContext } from './../App';

function Checkoutpage() {
	const { userCart } = useContext(authContext);

	return (
		<div className="container-sm checkout-container">
			<div className="checkoutpage-wrapper">
				{userCart.map(({ pid, image, cost, pname, quantity }) => (
					<Checkoutcard pid={pid} image={image} cost={cost} pname={pname} quantity={quantity} />
				))}
			</div>
		</div>
	);
}
export default Checkoutpage;
