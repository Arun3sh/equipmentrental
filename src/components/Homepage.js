import Aboutillu from './../assets/about-illustration.jpg';
function Homepage() {
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
						nostrud. Esse amet reprehenderit deserunt labore sunt ut. Dolore exercitation dolor
						fugiat laborum est fugiat commodo. Eiusmod excepteur tempor ea labore exercitation minim
						cupidatat occaecat veniam sit amet cillum aliquip.
					</p>
					<br />
					<p className="mission-para">
						Esse commodo proident mollit velit eiusmod magna aute aute duis. Pariatur id est duis
						tempor Lorem voluptate eiusmod nulla culpa ullamco ut labore enim non. Consequat
						proident culpa eu anim dolore tempor qui elit anim proident duis non adipisicing
						nostrud. Esse amet reprehenderit deserunt labore sunt ut. Dolore exercitation dolor
						fugiat laborum est fugiat commodo. Eiusmod excepteur tempor ea labore exercitation minim
						cupidatat occaecat veniam sit amet cillum aliquip.
					</p>
				</div>
			</div>

			{/* Solution */}
			<div className="solution" id="solution">
				<h3>Solution</h3>
				<div className="hour-rental" id="hour-rental">
					<h5>Why hourly rental?</h5>
					<p className="hour-rental-p">
						Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
						dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
						pariatur proident adipisicing. Dolor do culpa elit labore proident veniam. Exercitation
						minim eu adipisicing in duis.
					</p>
				</div>
				<div className="week-rental" id="week-rental">
					<h5>Why weekly rental?</h5>
					<p className="week-rental-p">
						Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
						dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
						pariatur proident adipisicing. Dolor do culpa elit labore proident veniam. Exercitation
						minim eu adipisicing in duis.
					</p>
				</div>
				<div className="custom-rental" id="custom-rental">
					<h5>Why custom rental?</h5>
					<p className="custom-rental-p">
						Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
						dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
						pariatur proident adipisicing. Dolor do culpa elit labore proident veniam. Exercitation
						minim eu adipisicing in duis.
					</p>
				</div>
				<div className="lease-rental" id="lease-rental">
					<h5>Why for lease?</h5>
					<p className="lease-rental-p">
						Esse aliqua Lorem dolor consectetur aliquip adipisicing dolor officia. Mollit laborum
						dolor magna laboris ut cillum labore nisi incididunt fugiat amet. Sint anim minim
						pariatur proident adipisicing. Dolor do culpa elit labore proident veniam. Exercitation
						minim eu adipisicing in duis.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
