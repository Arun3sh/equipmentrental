import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Forgotpassword() {
	return (
		<div className="container-sm forgotPassword">
			<div className="logo-title">
				<h2>REAL</h2>
				<p>Rental Equipment in All Locations</p>
			</div>
			<div className="forgotpassword-wrapper">
				<TextField id="email" name="email" label="User Email" variant="outlined" />
				<Button variant="outlined" onClick={() => toast.success('Password reset link sent')}>
					Submit
				</Button>
				<div className="user-already">
					<Link to="/login" aria-label="login">
						Remembered password now? Login
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Forgotpassword;
