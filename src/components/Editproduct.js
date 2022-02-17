import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';
import { API } from '../assets/global';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

toast.configure({
	autoClose: 3000,
	draggable: false,
});

function Editproduct() {
	const { id } = useParams();

	const [getEdited, setGetEdited] = useState({});

	useEffect(() => {
		fetch(`${API}/products/${id}`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((p) => setGetEdited(p));
	}, []);

	return getEdited.name ? <Toedit getEdited={getEdited} /> : '';
}

function Toedit({ getEdited }) {
	const history = useHistory();

	const inputstyle = {
		marginTop: '15px',
	};

	const editProduct = (newProduct) => {
		fetch(`${API}/products/edit-product/${getEdited._id}`, {
			method: 'PUT',
			body: JSON.stringify(newProduct),
			headers: {
				'Content-type': 'application/json',
				'x-auth-token': ` ${localStorage.getItem('token')}`,
			},
		}).then(() => {
			toast.success('Product updated');
			history.push('/products');
		});
	};

	const formValidationSchema = yup.object({
		name: yup.string().required('Product name is required'),
		img: yup.string().required('Product image link is required'),
		id: yup
			.number()
			.positive('Value must be positive')
			.transform((value) => (isNaN(value) ? undefined : value))
			.required('Product id is required'),
		chargeperhour: yup
			.number()
			.positive('Value must be positive')
			.transform((value) => (isNaN(value) ? undefined : value))
			.min(5, 'Must greater than ₹4.99')
			.required('Product price per hour is required'),
		category: yup.string().required('Product category is required'),
		quantity: yup
			.number()
			.positive('Value must be positive')
			.transform((value) => (isNaN(value) ? undefined : value))
			.min(0, "Can't be less than zero")
			.max(300, "Can't be greater than 300")
			.required('Product quantity is required'),
	});
	const { errors, handleSubmit, handleBlur, handleChange, touched, values, resetForm } = useFormik({
		initialValues: {
			name: `${getEdited.name}`,
			id: `${getEdited.id}`,
			img: `${getEdited.img}`,
			chargeperhour: `${getEdited.chargeperhour}`,
			category: `${getEdited.category}`,
			quantity: `${getEdited.quantity}`,
		},
		validationSchema: formValidationSchema,

		onSubmit: (values) => {
			// console.log(values);
			editProduct(values);

			resetForm();
		},
	});

	return (
		<div className="editproducts-wrapper">
			<h1>Edit Product</h1>
			<div className="editproducts">
				<form className="myEditForm" onSubmit={handleSubmit} autoComplete="off">
					<TextField
						id="name"
						name="name"
						label="Product Name"
						variant="outlined"
						type="text"
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.name && touched.name}
						helperText={errors.name && touched.name ? errors.name : ''}
					/>

					<TextField
						id="id"
						name="id"
						label="Product id"
						variant="outlined"
						type="link"
						value={values.id}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.id && touched.id}
						helperText={errors.id && touched.id ? errors.id : ''}
					/>

					<TextField
						id="img"
						name="img"
						label="Product Image link"
						variant="outlined"
						type="text"
						value={values.img}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.img && touched.img}
						helperText={errors.img && touched.img ? errors.img : ''}
					/>

					<TextField
						id="chargeperhour"
						name="chargeperhour"
						label="Charge per hour"
						variant="outlined"
						type="text"
						value={values.chargeperhour}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.chargeperhour && touched.chargeperhour}
						helperText={errors.chargeperhour && touched.chargeperhour ? errors.chargeperhour : ''}
					/>

					<TextField
						id="category"
						name="category"
						label="Product Category"
						variant="outlined"
						type="text"
						value={values.category}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.category && touched.category}
						helperText={errors.category && touched.category ? errors.category : ''}
					/>

					<TextField
						id="quantity"
						name="quantity"
						label="Product quantity"
						variant="outlined"
						type="text"
						value={values.quantity}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.quantity && touched.quantity}
						helperText={errors.quantity && touched.quantity ? errors.quantity : ''}
					/>

					<div className="update-cancel">
						<Button
							variant="outlined"
							type="submit"
							className="updateBtn"
							color="success"
							startIcon={<AddIcon />}
						>
							Update
						</Button>

						<Button
							variant="outlined"
							type="button"
							className="resetBtn"
							color="error"
							onClick={resetForm}
							startIcon={<DeleteIcon />}
						>
							Reset
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Editproduct;
