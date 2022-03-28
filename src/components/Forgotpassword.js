import { Button, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

function Forgotpassword() {
	const history = useHistory();
	return (
		<div className="container-sm forgotPassword">
			<div className="logo-title">
				<h2>REAL</h2>
				<p>Rental Equipment in All Locations</p>
			</div>
			<div className="forgotpassword-wrapper" style={{ marginTop: '20px' }}>
				{/* <TextField id="email" name="email" label="User Email" variant="outlined" />
				<Button variant="outlined" onClick={() => toast.success('Password reset link sent')}>
					Submit
				</Button> */}
				<h6 style={{ fontSize: '24px' }}>User Email Password</h6>
				<p>test@real.com - Test@123</p>
				<br />
				<br />
				<h6 style={{ fontSize: '24px' }}>Admin Email Password</h6>
				<p>admin@real.com - Admin@123</p>
				<br />
				<br />
				<div className="user-already">
					<Button variant="outlined" onClick={() => history.goBack()}>
						Go Back
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Forgotpassword;
