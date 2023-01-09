import { Feature } from '../../components';
import './whatSoundSurge.css';
import sonic from '../../assets/sonic.png';
import airwave from '../../assets/airwave.png';
import titan from '../../assets/titan.png';

const WhatSoundSurge = () => {
	return (
		<div className="ss__soundsurge section__margin" id="about">
			<div className="ss__soundsurge-feature">
				<Feature
					title="Sound Surge"
					text="Sound Surge is a brand that is dedicated to delivering high quality audio products that bring music to life. Our latest innovation is the Sound Surge wireless headphones, a pair of headphones that are designed to provide crystal clear sound and ultimate comfort."
				/>
			</div>
			<div className="ss__soundsurge-heading">
				<h1 className="gradient__text">
					Experience the Sound Surge Difference
				</h1>
				<p>See more</p>
			</div>
			<div className="ss__soundsurge-container">
				<Feature title="Sonic" image={sonic} />
				<Feature title="Titan" image={titan} />
				<Feature title="Airwave" image={airwave} />
			</div>
		</div>
	);
};
export default WhatSoundSurge;
