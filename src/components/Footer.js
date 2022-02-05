import { TextField } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineInstagram } from 'react-icons/ai';

function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-wrapper-content">
				{/* Solutions */}
				<div className="footer-solution">
					<span className="footer-heading">Solution</span>
					<HashLink to="/#hour-rental">Hourly rental</HashLink>
					<HashLink to="/#week-rental">Weekly rental</HashLink>
					<HashLink to="/#custom-rental">Custom rental</HashLink>
					<HashLink to="/#lease-rental">For lease</HashLink>
				</div>

				{/* Company */}
				<div className="footer-company">
					<span className="footer-heading">Company</span>
					<HashLink to="/#about">About</HashLink>
					<a target="_blank" href="https://www.instagram.com/?hl=en">
						<AiOutlineInstagram /> Instagram
					</a>
					<p className="address">REAL Home Office, Coimbatore, India</p>
					<p className="phone">+91 00000 00000</p>
				</div>

				{/* ContactUS */}
				<div className="footer-contactus">
					<span className="footer-heading">
						Leave your conatct with query. We will get back to you
					</span>
					<TextField variant="outlined" label="Name" />
					<TextField variant="outlined" label="Phone Number" />
					<TextField
						id="outlined-multiline-static"
						multiline
						rows={4}
						variant="outlined"
						label="Detailed Enquiry"
					/>
				</div>
			</div>
			<div className="copyright">Copyright © 2022 Aruneshwaran</div>
		</footer>
	);
}

export default Footer;
