import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import illu from './../assets/thinkIllustration.gif';
import { useContext } from 'react';
import { authContext } from './../App';
import { useState } from 'react';
import { API } from './../assets/global';
import { toast } from 'react-toastify';

toast.configure();

function Login() {
	const history = useHistory();
	const { setLogin, setIsAdmin } = useContext(authContext);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const checkUser = async () => {
		await fetch(`${API}/users/login`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((data) => data.json())
			.then((userToken) => {
				if (email === 'admin@real.com') {
					setIsAdmin(true);
				}
				toast.success('Loged in');
				history.push('/products');

				localStorage.setItem('token', userToken.token);
				localStorage.setItem('userId', userToken.id);
				setLogin(true);
			})
			.catch(() => {
				toast.error('Invalid login attempt');
			});
	};

	return (
		<div className="container-sm login">
			<div className="logo-title">
				<h2>REAL</h2>
				<p>Rental Equipment in All Locations</p>
			</div>
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
							id="email"
							name="email"
							autoComplete="off"
							autoFocus={true}
							variant="outlined"
							className="email-textfield"
							label="Enter email id"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="password-container">
						<TextField
							id="password"
							name="password"
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
							<Link to="/get-demo-id" aria-label="forgot password">
								Get Demo User ID here
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
		</div>
	);
}

export default Login;
