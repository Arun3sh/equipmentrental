import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';
import { API } from './../assets/global';

function Addproduct() {
	const history = useHistory();

	const inputstyle = {
		marginTop: '15px',
	};

	const addProduct = (newProduct) => {
		fetch(`${API}/products`, {
			method: 'POST',
			body: JSON.stringify(newProduct),
			headers: { 'Content-type': 'application/json' },
		}).then(() => history.push('/products'));
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
			.max(3, 'Must be less than 3 characters')
			.required('Product price per hour is required'),
		category: yup.string().required('Product category is required'),
		quantity: yup
			.number()
			.positive('Value must be positive')
			.transform((value) => (isNaN(value) ? undefined : value))
			.max(3, 'Must be less than 3 characters')
			.required('Product quantity is required'),
	});
	const { errors, handleSubmit, handleBlur, handleChange, touched, values, resetForm } = useFormik({
		initialValues: { name: '', id: '', img: '', chargeperhour: '', category: '', quantity: '' },
		validationSchema: formValidationSchema,

		onSubmit: (values) => {
			addProduct(values);

			resetForm();
		},
	});

	return (
		<div className="addproducts-wrapper">
			<h1>Add Product</h1>
			<div className="addproducts">
				<form className="myForm" onSubmit={handleSubmit} autoComplete="off">
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

					<div className="add-cancel">
						<Button
							variant="outlined"
							type="submit"
							className="addBtn"
							color="success"
							startIcon={<AddIcon />}
						>
							Add Movie
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

export default Addproduct;
