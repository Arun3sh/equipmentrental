import Aboutillu from './../assets/about-illustration.jpg';
import Hourillu from './../assets/clock-illustration.jpg';
import Weekillu from './../assets/weekly-illustration.jpg';
import Customillu from './../assets/custom-illustration.jpg';
import Leaseillu from './../assets/lease-illustration.jpg';
// import { useContext } from 'react';
// import {authContext} from './../App'

function Homepage() {
	// const { login, setLogin } = useContext(authContext);
	return (
		<div className="homepage-wrapper">
			{/* App Vision */}
			<div className="app-vision">
				<h2 className="app-heading">REAL</h2>
				<p className="vision">Rentable Equipments in All Locations</p>
			</div>

			{/* About us */}
			<div className="about-us" id="about">
				<div className="about-illustration">
					<img src={Aboutillu} aria-label="thinking-image" />
				</div>
				<div className="about-mission">
					<h4>About us</h4>

					<p className="mission-para">
						Esse commodo proident mollit velit eiusmod magna aute aute duis. Pariatur id est duis
						tempor Lorem voluptate eiusmod nulla culpa ullamco ut labore enim non. Consequat
						proident culpa eu anim dolore tempor qui elit anim proident duis non adipisicing
						nostrud. Esse amet reprehenderit deserunt labore sunt ut.
					</p>
					<br />
					<p className="mission-para">
						Esse commodo proident mollit velit eiusmod magna aute aute duis. Pariatur id est duis
						tempor Lorem voluptate eiusmod nulla culpa ullamco ut labore enim non. Consequat
						proident culpa eu anim dolore tempor qui elit anim proident duis non adipisicing
						nostrud. Esse amet reprehenderit deserunt labore sunt ut.
					</p>
				</div>
			</div>

			{/* Solution */}
			<div className="solution" id="solution">
				<h3>Solution</h3>

				{/* Hourly Rental */}
				<div className="hour-rental" id="hour-rental">
					<div className="hour-rental-container">
						<h5>Why hourly rental?</h5>
						<p className="hour-rental-p">
							Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
							dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
							pariatur proident adipisicing.
						</p>
					</div>
					<div className="hour-illustration">
						<img src={Hourillu} aria-label="hour rental illustration" />
					</div>
				</div>

				{/* Weekly Rental */}
				<div className="week-rental" id="week-rental">
					<div className="week-rental-container">
						<h5>Why weekly rental?</h5>
						<p className="week-rental-p">
							Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
							dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
							pariatur proident adipisicing.
						</p>
					</div>
					<div className="week-illustration">
						<img src={Weekillu} aria-label="weekly rental illustration" />
					</div>
				</div>

				{/* Custom Rental */}
				<div className="custom-rental" id="custom-rental">
					<div className="custom-rental-container">
						<h5>Why custom rental?</h5>
						<p className="custom-rental-p">
							Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
							dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
							pariatur proident adipisicing.
						</p>
					</div>
					<div className="custom-illustration">
						<img src={Customillu} aria-label="custom rental" />
					</div>
				</div>

				{/* Lease Rental */}
				<div className="lease-rental" id="lease-rental">
					<div className="lease-rental-container">
						<h5>Why for lease?</h5>
						<p className="lease-rental-p">
							Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
							dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
							pariatur proident adipisicing.
						</p>
					</div>
					<div className="lease-illustration">
						<img src={Leaseillu} aria-label="contract" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
