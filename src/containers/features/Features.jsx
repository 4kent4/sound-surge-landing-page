import './features.css';
import { Feature } from '../../components';

const featuresData = [
	{
		title: 'Bluetooth Connectivity',
		text: 'Easily connect your Sound Surge wireless headphones to any Bluetooth enabled device and stream your music wirelessly. No more tangled cords or complicated setup – just pair and play.',
	},
	{
		title: 'Long Battery Life',
		text: "With up to 10 hours of continuous playback, the Sound Surge wireless headphones will keep the music going all day long. And when it's time to recharge, the headphones can be fully powered up in just a few hours.",
	},
	{
		title: 'High Quality Audio',
		text: "Whether you're listening to rock, hip hop, or classical, the Sound Surge wireless headphones deliver crisp, clear sound that will bring your music to life. With a wide frequency response and high signal-to-noise ratio, you'll hear every detail of your favorite tunes.",
	},
	{
		title: 'Comfortable and Secure Fit',
		text: "The Sound Surge wireless headphones are designed with comfort in mind. The ear cups are padded with soft, breathable material to ensure a comfortable fit, even during long listening sessions. The headband is adjustable, so you can find the perfect fit for your head size. And the headphones stay securely in place, even when you're on the move.",
	},
	{
		title: 'Durable Construction',
		text: "The Sound Surge wireless headphones are built to last. With a sturdy design and high quality materials, these headphones can withstand the rigors of daily use. Whether you're commuting, working out, or just relaxing at home, the Sound Surge wireless headphones are up for the task.",
	},
];

const Features = () => {
	return (
		<div className="ss__features section__padding" id="features">
			<div className="ss__features-heading">
				<h1 className="gradient__text">
					Upgrade your listening experience with Sound Surge
				</h1>
			</div>

			<div className="ss__features-container">
				{featuresData.map((item, index) => {
					return (
						<Feature
							title={item.title}
							text={item.text}
							key={item.title + index}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Features;
