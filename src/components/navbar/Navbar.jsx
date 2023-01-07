import { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
	<>
		<p>
			<a href="home">Home</a>
		</p>
		<p>
			<a href="wss">What is Sound Surge</a>
		</p>
		<p>
			<a href="possibility">Tech Specs</a>
		</p>
		<p>
			<a href="Features">Features</a>
		</p>
		<p>
			<a href="blog">blogs</a>
		</p>
	</>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="soundsurge__navbar">
			<div className="soundsurge__navbar-links">
				<div className="soundsurge__navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="soundsurge__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="soundsurge__navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>
			<div className="soundsurge__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="soundsurge__navbar-menu_container scale-up-center">
						<div className="soundsurge__navbar-menu_container-links">
							<Menu />
							<div className="soundsurge__navbar-menu_container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Navbar;
