import './header.css';
import Model1 from '../../assets/Model1.png';

const Header = () => {
	return (
		<div className="soundsurge__header section__padding" id="home">
			<div className="soundsurge__header-content">
				<h1 className="gradient__text">
					Experience crystal clear sound with the Sound Surge wireless
					headphones
				</h1>
				<p>
					Welcome to Sound Surge, home of the crystal clear wireless headphones.
					Our headphones is designed to deliver high quality audio anywhere you
					go, thanks to its Bluetooth connectivity and long battery life. With a
					sleek design and durable construction, the Sound Surge headphones is
					the perfect companion for all your music listening needs
				</p>

				<div className="soundsurge__header-content__input">
					<button>Shop Now!</button>
				</div>
			</div>
			<div className="soundsurge__header-image">
				<img src={Model1} alt="Model1" />
			</div>
		</div>
	);
};
export default Header;
