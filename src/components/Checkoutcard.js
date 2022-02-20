import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

function Checkoutcard({ pid, image, cost, pname, quantity }) {
	return (
		<Card className="checkoutcard" sx={{ display: 'flex' }}>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={image}
				alt="Live from space album cover"
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					{/* Product name */}
					<Typography component="div" variant="h5">
						{pname}
					</Typography>

					{/* About quantity */}
					<Typography variant="subtitle1" color="text.secondary" component="div">
						Quantity : {quantity}
					</Typography>

					{/* Product cost for selected quantity */}
					<Typography component="div" variant="h6">
						₹{cost * quantity} per hour
					</Typography>
				</CardContent>
				<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
					<Button className="rent-btn" variant="outlined">
						Rent now
					</Button>
				</Box>
			</Box>
		</Card>
	);
}

export default Checkoutcard;
