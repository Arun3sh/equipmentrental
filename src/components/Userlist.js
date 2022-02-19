import { useEffect, useState } from 'react';
import { API } from './../assets/global';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function Userlist() {
	const [users, setUsers] = useState([]);
	const history = useHistory();

	useEffect(() => {
		fetch(`${API}/users`, {
			method: 'GET',
			headers: {
				'x-auth-token': ` ${localStorage.getItem('token')}`,
			},
		})
			.then((data) => data.json())
			.then((u) => setUsers(u));
	}, []);

	return (
		<div className="userlist-wrapper">
			<h3>All Users</h3>

			{users
				.filter((e) => e.username !== 'admin')
				.map(({ username, email, orders, _id }) => (
					<Tolist username={username} email={email} orders={orders} id={_id} key={_id} />
				))}
		</div>
	);
}

function Tolist({ username, email, orders, id }) {
	return (
		<div className="list-wrapper">
			<p>Name: {username}</p>
			<p>Email: {email}</p>
			<p>Products Rented: {orders !== undefined ? orders.length : '0'}</p>
			<div className="view-userDetail">
				<Button variant="outlined">
					<Link to={`/users/${id}`}>View</Link>
				</Button>
			</div>
		</div>
	);
}

export default Userlist;
