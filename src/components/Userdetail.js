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

	// let fromDate = new Date(user.orders[0].from.toString());
	// let toDate = new Date(user.orders[0].to.toString());

	// let finalFrom =
	// 	fromDate.getUTCDate() + '/' + (fromDate.getUTCDay() - 1) + '/' + fromDate.getUTCFullYear();

	// let finalTo =
	// 	toDate.getUTCDate() + '/' + (toDate.getUTCDay() - 1) + '/' + toDate.getUTCFullYear();
	console.log(user);

	// console.log(userOrder);
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
				{userOrder.map(({ pname, quantity }) => (
					<li>
						{pname} - {quantity}
					</li>
				))}
				{console.log(user.orders)}
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

	// return <div className="user-detail">HI</div>;
}

export default Userdetail;
