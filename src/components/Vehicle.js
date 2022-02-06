import { API } from './../assets/global';
import { useEffect, useState } from 'react';
import Productcard from './Productcard';

function Vehicle() {
	const [products, setProducts] = useState([]);
	const getProducts = () => {
		fetch(`${API}/products/?category=vehicle`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((p) => setProducts(p));
	};
	useEffect(getProducts, []);
	return (
		<section className="all-products-wrapper">
			{products.map(({ _id, name, chargeperhour, img }) => (
				<Productcard id={_id} name={name} chargeperhour={chargeperhour} img={img} key={_id} />
			))}
		</section>
	);
}

export default Vehicle;
