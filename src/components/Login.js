import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import illu from './../assets/thinkIllustration.gif';
import { useContext } from 'react';
import { authContext } from './../App';
import { useState } from 'react';
import { API } from './../assets/global';

async function loginUser(credentials) {
	return fetch(`${API}/users/login`, {
		method: 'POST',
		body: JSON.stringify(credentials),
		headers: {
			'Content-type': 'application/json',
		},
	}).then((data) => data.json());
}

function Login() {
	const history = useHistory();
	const { login, setLogin, setLoginPage } = useContext(authContext);
	const [username, setUserName] = useState(null);
	const [password, setPassword] = useState(null);
	const [token, setToken] = useState(null);

	const checkUser = async () => {
		// const token = await loginUser({
		// 	username,
		// 	password,
		// });

		// setToken(token);
		// console.log(token);
		setLogin(true);
		setLoginPage(false);
		history.push('/');
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
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className="password-container">
					<TextField
						id="outlined-basic"
						variant="outlined"
						className="password-textfield"
						type="password"
						label="Enter Password"
						onChange={(e) => setPassword(e.target.value)}
						onKeyPress={(e) => e.key === 'Enter' && checkUser()}
					/>
				</div>
				<div className="login-btn-container">
					<div className="forgot-password">
						<Link to="/forgot-password" aria-label="forgot password">
							Forgot Password?
						</Link>
					</div>
					<Button variant="outlined" onClick={checkUser}>
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
