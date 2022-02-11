import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@restart/ui/esm/Button';
// import { Button } from '@mui/material';
import { ButtonGroup } from 'react-bootstrap';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { authContext } from './../App';
import { useState } from 'react';

function Checkoutcard() {
	const { cart, setCart } = useContext(authContext);

	// To get the individual product quantity and to reduce quantity
	const [cartValue, setCartValue] = useState(0);

	// To set the button display
	const [display, setDisplay] = useState('none');

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

	// Styles for displaying add to cart button and the button group
	const btnGrpStyle = { display: 'flex' };
	return (
		<Card sx={{ display: 'flex' }}>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxY0LWXEXcPHafAiKaDu7H1rkcD1UPSVq3OQ&usqp=CAU"
				alt="Live from space album cover"
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component="div" variant="h5">
						Product Name
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div">
						Brand Name
					</Typography>
				</CardContent>
				<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
					<ButtonGroup style={btnGrpStyle}>
						<Button className="btn btn-primary cartValue" onClick={removeCartValue}>
							-
						</Button>
						<span className="value">{cartValue}</span>
						<Button className="btn btn-primary cartValue" onClick={addCartValue}>
							+
						</Button>
					</ButtonGroup>
				</Box>
			</Box>

			{/* Try passing the button from the Checkoutpage to use material style */}
			<Button variant="outlined">Buy now</Button>
		</Card>
	);
}

export default Checkoutcard;
