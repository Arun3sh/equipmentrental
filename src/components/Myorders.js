import { useEffect, useState } from 'react';
import { API } from '../assets/global';
import { BallTriangle } from 'react-loader-spinner';

function Myorders() {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState({});

	const getUserData = async () => {
		await fetch(`${API}/users/${localStorage.getItem('userId')}`, {
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

	if (user.orders.length > 0) {
		const userOrder = user.orders;
		return (
			<div className="container-sm myorder-container">
				<div className="myOrder-wrapper">
					{userOrder.map((list) =>
						list
							.filter((e) => e.pid === undefined)
							.map((d, index) => (
								<div className="order-listed" key={index}>
									<div className="user-order">
										<h5>Order ID : </h5>
										<p>{d}</p>
									</div>

									<ul>
										{list
											.filter((e) => e.pid !== undefined)
											.map(({ pname, quantity }, index) => (
												<li key={index}>
													{pname} - {quantity}
												</li>
											))}
									</ul>
								</div>
							))
					)}
				</div>
			</div>
		);
	}

	return (
		<div className="container-sm noOrder">
			<div className="noOrder-wrapper">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzwp5cn6d4CEN44ZXOTCkzGqEi5AqsCMmUg&usqp=CAU"
					aria-label="no orders"
				></img>
			</div>
		</div>
	);
}

export default Myorders;
