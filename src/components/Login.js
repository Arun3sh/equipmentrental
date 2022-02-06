import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import illu from './../assets/thinkIllustration.gif';
import { useContext } from 'react';
import { authContext } from './../App';
import { useState } from 'react';
import { API } from './../assets/global';

function Login() {
	const history = useHistory();
	const { login, setLogin, setLoginPage } = useContext(authContext);
	const [name, setName] = useState(null);
	const [passkey, setPasskey] = useState(null);

	const confirmLogin = () => {
		setLoginPage(false);
		setLogin(true);

		let loginData = { username: name, password: passkey };
		// Function to check user name and password

		fetch(`${API}/users/login`, {
			method: 'POST',
			body: JSON.stringify(loginData),
			headers: { 'Content-type': 'application/json' },
		})
			.then((data) => data.json())
			.then((e) => console.log(e));

		history.push('/');
		// history.goBack();
	};

	return (
		<div className="login-wrapper">
			{/* Illustration Container */}
			<div className="row-illustration">
				<img src={illu} alt="Illustration" aria-label="Think image" />
			</div>

			{/* Login Container */}
			<div className="row-login">
				<div className="login-heading">
					<h2>Login</h2>
				</div>
				<div className="email-container">
					<TextField
						id="outlined-basic"
						variant="outlined"
						className="email-textfield"
						label="Enter User Name"
						// onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className="password-container">
					<TextField
						id="outlined-basic"
						variant="outlined"
						className="password-textfield"
						type="password"
						label="Enter Password"
						onChange={(e) => setPasskey(e.target.value)}
						onKeyPress={(e) => e.key === 'Enter' && confirmLogin()}
					/>
				</div>
				<div className="login-btn-container">
					<div className="forgot-password">
						<Link to="/forgot-password" aria-label="forgot password">
							Forgot Password?
						</Link>
					</div>
					<Button variant="outlined" onClick={confirmLogin}>
						LOGIN
					</Button>
					<div className="register-yet">
						<Link to="/register" aria-label="not registered">
							Haven't Registered Yet?
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
