import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
	return (
		<div className="ss__footer section__padding">
			<div className="ss__footer-heading">
				<h1 className="gradient__text">
					Take your music to the next level with Sound Surge.
				</h1>
			</div>
			<div className="ss__footer-links">
				<div className="ss__footer-links_logo">
					<img src={logo} alt="logo" />
					<p>123 Main Street Batangas, Philippines 7654</p>
				</div>
				<div className="ss__footer-links_div">
					<h4>Connect with us</h4>
					<p>Facebook</p>
					<p>Twitter</p>
					<p>Instagram</p>
					<p>YouTube</p>
				</div>

				<div className="ss__footer-links_div">
					<h4>Company</h4>
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
					<p>Return Policy</p>
				</div>

				<div className="ss__footer-links_div">
					<h4>Contact us</h4>
					<p>Email: info@soundsurge.com</p>
					<p>Phone: 555-555-1212</p>
				</div>
			</div>
			<div className="ss__footer-copyright">
				<p>Copyright 2022 Sound Surge. All Rights Reserved.</p>
			</div>
		</div>
	);
};
export default Footer;
