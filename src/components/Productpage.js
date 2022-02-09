import { API } from './../assets/global';
import { useEffect, useState } from 'react';
import Productcard from './Productcard';
import { useContext } from 'react';
import { authContext } from './../App';
import { BallTriangle } from 'react-loader-spinner';

function Productpage() {
	const { query, isLoading, setIsLoading } = useContext(authContext);
	const [products, setProducts] = useState([]);

	let newApi = `${API}/products`;

	if (query.length > 1) {
		// setIsLoading(true);
		newApi = `${API}/products/?name=${query}`;
	}

	const getProducts = async () => {
		setIsLoading(true);
		await fetch(`${newApi}`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((p) => setProducts(p) & setIsLoading(false));
	};
	// To call getproducts whenever there is a change in the api based on user input
	useEffect(getProducts, [newApi]);

	if (isLoading) {
		return (
			<div className="loading-wrapper">
				<BallTriangle className="loading-content" color="#ffd701" height={80} width={80} />
			</div>
		);
	}

	if (products.length === 0) {
		return (
			<div className="noitemfound-wrapper">
				<img
					src="https://cdn.dribbble.com/users/1231865/screenshots/11157048/media/bc9427646c632ded563ee076fdc5dfda.jpg?compress=1&resize=400x300"
					aria-label="no item found"
				/>
			</div>
		);
	}
	return (
		<section className="all-products-wrapper">
			{products.map(({ _id, name, chargeperhour, img }) => (
				<Productcard id={_id} name={name} chargeperhour={chargeperhour} img={img} key={_id} />
			))}
		</section>
	);
}

export default Productpage;
