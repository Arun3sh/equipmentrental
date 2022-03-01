import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { authContext } from './../App';
import { useHistory } from 'react-router-dom';
import { API } from './../assets/global';
import { toast } from 'react-toastify';

function Confirmorder() {
	const { userCart, setUserCart, setCart } = useContext(authContext);
	const [userInfo, setUserInfo] = useState({});
	const [totalCost, setTotalCost] = useState(0);
	const [amount, setAmount] = useState();
	const [id, setId] = useState();
	const [currency, setCurrency] = useState();
	const history = useHistory();

	const getCost = () => {
		let mycost = 0;
		userCart.map(({ cost, quantity }) => {
			mycost += +cost * quantity;

			setTotalCost(mycost);
		});
	};

	const getUserInfo = async () => {
		await fetch(`${API}/users/${localStorage.getItem('userId')}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'x-auth-token': `${localStorage.getItem('token')}`,
			},
		})
			.then((data) => data.json())
			.then((d) => setUserInfo(d));
	};
	useEffect(getCost, []);
	useEffect(getUserInfo, []);

	function storeOrder(value) {
		if (value.error === undefined) {
			toast.success(value.msg);

			setUserCart([]);
			setCart(0);
			history.push('/my-orders');
		} else {
			toast.error(value.error);
			history.push('/checkout');
		}
	}

	function loadScript(src) {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	}

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

		if (!res) {
			toast.error('Razorpay SDK failed to load. Are you online?');
			return;
		}

		const result = async () => {
			await fetch(`${API}/payment/order`, {
				method: 'POST',
				body: JSON.stringify({ amount: totalCost, currency: 'INR' }),
				headers: {
					'Content-type': 'application/json',
					'x-auth-token': ` ${localStorage.getItem('token')}`,
				},
			})
				.then((data) => data.json())
				.then((d) => {
					if (d.error) {
						toast.error('Connectivity issue with Razor pay. Please try later');
						history.push('/products');
					} else {
						setAmount(d.amount);
						setId(d.id);
						setCurrency(d.currency);
					}
				});
		};
		await result();

		if (!result) {
			toast.error('Server error. Are you online?');
			return;
		}

		const options = {
			key: 'rzp_test_4k3ZRpnA3HTowh', // Enter the Key ID generated from the Dashboard
			amount: amount.toString(),
			currency: currency,
			name: 'REAL',
			description: 'Test Transaction',
			// image: { logo },
			order_id: id,
			handler: async function (response) {
				const newUserCart = [...userCart, id];
				const data = {
					orderCreationId: id,
					razorpayPaymentId: response.razorpay_payment_id,
					razorpayOrderId: response.razorpay_order_id,
					userCart: newUserCart,
					userId: `${localStorage.getItem('userId')}`,
				};

				const result = async () => {
					await fetch(`${API}/payment/success`, {
						method: 'POST',
						body: JSON.stringify(data),
						headers: {
							'Content-type': 'application/json',
							'x-razorpay-signature': response.razorpay_signature,
							'x-auth-token': ` ${localStorage.getItem('token')}`,
						},
					})
						.then((data) => data.json())
						.then((v) => storeOrder(v));
				};

				await result();
			},
			prefill: {
				name: userInfo.username,
				email: userInfo.email,
				contact: '9999999999',
			},
			notes: {
				address: 'user address comes here',
			},
			theme: {
				color: '#61dafb',
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return (
		<div className="container-sm confirmOrder">
			<div className="confirmOrder-wrapper">
				<h5 className="confirm-heading">Confirm details</h5>
				<div className="billing-address">
					<h5 className="user-name">{userInfo.username}</h5>
					<p className="billing">Billing at</p>
					<p className="user-address">
						<span className="line-1">Door No, BuildingName, Area,</span>
						<br />
						<span className="line-2">District,</span>
						<br />
						<span className="line-3">State - Pincode</span>
					</p>
				</div>
				<div className="confirmOrder-list">
					<ul className="order-list">
						{userCart
							.filter((e) => e.quantity !== 0)
							.map(({ pname, cost, quantity, from, to }) => (
								<li>
									<span className="finalOrder-item">
										{pname} x {quantity} = {quantity * cost}
									</span>{' '}
									<br />
									From: {from} - To: {to}
								</li>
							))}
					</ul>
				</div>
				<Button className="confirmPay" variant="outlined" onClick={displayRazorpay}>
					Pay {totalCost}
				</Button>
			</div>
		</div>
	);
}

export default Confirmorder;
