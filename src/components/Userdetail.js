import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../assets/global';
import { BallTriangle } from 'react-loader-spinner';
import { authContext } from './../App';

function Userdetail() {
	const { isLoading, setIsLoading } = useContext(authContext);
	const { id } = useParams();
	const [user, setUser] = useState(null);

	const getUserData = async () => {
		setIsLoading(true);
		await fetch(`${API}/users/${id}`, {
			method: 'GET',
			headers: {
				'x-auth-token': ` ${localStorage.getItem('token')}`,
			},
		})
			.then((data) => data.json())
			.then((u) => setUser(u) & setIsLoading(false));
	};
	useEffect(getUserData, [setUser]);

	if (isLoading) {
		return (
			<div className="loading-wrapper">
				<BallTriangle className="loading-content" color="#ffd701" height={80} width={80} />
			</div>
		);
	}
	if (user !== null) {
		const userOrder = user.orders;

		return (
			<div className="container-md user-detail">
				<h5>{user.username}</h5>
				<p>{user.email}</p>
				<br />
				<h6>Recent Orders - Quantity</h6>
				{user.orders !== undefined
					? userOrder.map(({ pname, quantity }, index) => (
							<li key={index}>
								{pname} - {quantity}
							</li>
					  ))
					: '0'}
			</div>
		);
	}

	return (
		<div className="noitemfound-wrapper">
			<img
				src="https://cdn.dribbble.com/users/1231865/screenshots/11157048/media/bc9427646c632ded563ee076fdc5dfda.jpg?compress=1&resize=400x300"
				aria-label="no user found"
			/>
		</div>
	);
}

export default Userdetail;
