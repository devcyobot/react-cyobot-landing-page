export const levelsData = {
	models: [
		{
			name: 'EXPLORER',
			level:
				'At the Explorer level, you begin your journey of discovery in robotics. You will familiarize yourself with your robot companion by going through hands-on activities and tutorials. As you complete the Explorer level, you will understand the world of robotics, explore different roles in the industry, identify your career interests and ready to level up.',
			rewards: [
				{
					image: {
						src: '/blinking-heart-effect.gif',
						staticSrc: '/blinking-heart-effect.jpg',
						alt: 'Display a blinking heart',
					},
					color: 'green',
					name: 'Emoji Display',
					job: 'Display different visuals and light effects on your robot',
				},
				{
					image: {
						src: '/dice-rolling.gif',
						staticSrc: '/dice-rolling.jpg',
						alt: 'Rolling a dice',
					},
					color: 'green',
					name: 'Electric Dice',
					job: 'Simulate a digital dice  that randomly generates numbers when shaked',
				},
				{
					image: {
						src: '/pomodoro.gif',
						staticSrc: '/pomodoro.jpg',
						alt: 'Pomodoro Timer',
					},
					color: 'green',
					name: 'Pomodoro Timer',
					job: 'Countdown a set time with LED visual and speaker alarm',
				},
			],
			timeImage: {
				src: '/time-atr-explorer.png',
				alt: 'Explorer Time Attribute Parts',
			},
			timeData: [
				{
					name: 'CODE LOGIC',
					color: 'green',
					amount: '75%',
				},
				{
					name: 'DEBUGGING',
					color: 'yellow',
					amount: '40%',
				},
				{
					name: 'DESIGN',
					color: 'red',
					amount: '5%',
				},
			],
		},
		{
			name: 'ADVENTURER',
			level:
				'Having mastered the basics, you will now delve deeper into the intricacies of robotics, exploring more complex applications and programming with specific design requirements. You will get to pick your roles  and pathways during your quest to become a master in a field of robotics. As the adventurer’s quest concludes, you will gain multiple essential skills allowing you to enter the real-world industry as your desired role.',
			rewards: [
				{
					image: {
						src: '/flappy-bird.gif',
						staticSrc: '/flappy-bird.jpg',
						alt: 'Flappy Bird',
					},
					color: 'yellow',
					name: 'Flappy Bird',
					job: 'Experience the Flappy Bird game right on your robot',
				},
				{
					image: {
						src: '/simple-imu-gimbal.gif',
						staticSrc: '/simple-imu-gimbal.jpg',
						alt: 'Balancing robot',
					},
					color: 'yellow',
					name: 'Balancing robot',
					job: 'Help the robot keep its head balance under extreme attack!',
				},
				{
					image: {
						src: '/led-chasing.gif',
						staticSrc: '/led-chasing.jpg',
						alt: 'LED chasing game',
					},
					color: 'yellow',
					name: 'LED chasing game',
					job: 'Catch the running light on the robot LED ring',
				},
				{
					image: {
						src: '/simple-ultrasonic-radar.gif',
						staticSrc: '/simple-ultrasonic-radar.jpg',
						alt: 'Distance sensor',
					},
					color: 'yellow',
					name: 'Distance sensor',
					job: 'Equip your robot with a distance sensor to detect incoming obstacles while moving',
				},
				{
					image: {
						src: '/car-chasing-simple.gif',
						staticSrc: '/car-chasing-simple.jpg',
						alt: 'Car chasing game',
					},
					color: 'yellow',
					name: 'Car chasing game',
					job: 'Bring back childhood with the famous 8-bit car chasing game',
				},
				{
					image: {
						src: '/humanoid-walking.gif',
						staticSrc: '/humanoid-walking.jpg',
						alt: 'Humanoid walking',
					},
					color: 'yellow',
					name: 'Humanoid walking',
					job: 'When walking with 4 is not hard enough, make it 2',
				},
			],
			timeImage: {
				src: '/time-atr-adventurer.png',
				alt: 'Adventurer Time Attribute Parts',
			},
			timeData: [
				{
					name: 'CODE LOGIC',
					color: 'green',
					amount: '65%',
				},
				{
					name: 'DEBUGGING',
					color: 'yellow',
					amount: '50%',
				},
				{
					name: 'DESIGN',
					color: 'red',
					amount: '20%',
				},
			],
		},
		{
			name: 'PIONEER',
			level:
				'At the Pioneer level, you have entered the rank of the elites. With proficiency in robotics, you’ll be able to come up with your own system design, hardware and software integration, and your own projects. As you master the Pioneer level, you will gain tremendous debugging experience as well as technical weapons to tackle any problems. After completing Pioneer level, you can form your own guild or party to create quests or tackle World Quests.',
			rewards: [
				{
					image: {
						src: '/crawler-attach-ultrasonic-sensor.jpg',
						staticSrc: '/crawler-attach-ultrasonic-sensor.jpg',
						alt: 'Obstacle avoidance',
					},
					color: 'red',
					name: 'Obstacle avoidance',
					job: 'Upgrade your robot with ultrasonic sensors and control the robot to avoid obstacles',
				},
				{
					image: {
						src: '/cyobrain-prosthesis.gif',
						staticSrc: '/cyobrain-prosthesis.jpg',
						alt: '3D printed prosthesis',
					},
					color: 'red',
					name: '3D printed prosthesis',
					staticSrc: '/.jpeg',
					job: 'Control a 3D printed dexterous prosthesis with CYOBrain',
				},
				{
					image: {
						src: '/remote-control-demo.gif',
						staticSrc: '/remote-control-demo.jpg',
						alt: 'Hybrid walking',
					},
					color: 'red',
					name: 'Remote control',
					job: 'Use another CYOBrain to control your robot wirelessly',
				},
			],
			timeImage: {
				src: '/time-atr-pioneer.png',
				alt: 'Pioneer Time Attribute Mistery',
			},
			timeData: [
				{
					name: 'CODE LOGIC',
					color: 'green',
					amount: '40%',
				},
				{
					name: 'DEBUGGING',
					color: 'yellow',
					amount: '70%',
				},
				{
					name: 'DESIGN',
					color: 'red',
					amount: '50%',
				},
			],
		},
	],
};
