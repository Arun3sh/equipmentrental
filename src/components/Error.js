function Error() {
	const style = { width: '100%' };
	return (
		<div className="error-page">
			<img
				src="https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png"
				alt="404 Not Found"
				aria-label="404 Page not found"
				style={style}
			/>
		</div>
	);
}

export default Error;
