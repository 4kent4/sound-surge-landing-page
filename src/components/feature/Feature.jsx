import './feature.css';
const Feature = ({ title, text, image }) => {
	return (
		<div className="ss__features-container__feature">
			<div className="ss__features-container__feature-title">
				<div />
				<h1>{title}</h1>
			</div>
			<div className="ss__features-container__feature-text">
				<p>{text}</p>
				{image && <img src={image} alt={image} />}
			</div>
		</div>
	);
};
export default Feature;
