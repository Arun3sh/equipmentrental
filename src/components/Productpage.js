import { API } from './../assets/global';
import { useEffect, useState } from 'react';
import Productcard from './Productcard';
import { useContext } from 'react';
import { authContext } from './../App';

function Productpage() {
	const { query } = useContext(authContext);
	const [products, setProducts] = useState([]);

	let newApi = `${API}/products`;

	if (query.length > 1) {
		newApi = `${API}/products/?name=${query}`;
	}

	const getProducts = () => {
		fetch(`${newApi}`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((p) => setProducts(p));
	};
	// To call getproducts whenever there is a change in the api based on user input
	useEffect(getProducts, [newApi]);

	return (
		<section className="all-products-wrapper">
			{products.map(({ _id, name, chargeperhour, img }) => (
				<Productcard id={_id} name={name} chargeperhour={chargeperhour} img={img} key={_id} />
			))}
		</section>
	);
}

export default Productpage;
