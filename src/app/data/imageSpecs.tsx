export const specsDetailsData: {
	label: string;
	src: string;
	src2?: string | undefined;
	caption: string;
}[] = [
	{
		label: '12-channel motor controller',
		src: '/specs-12-channels-controller.jpg',
		caption:
			'Control up to 12 servo motors with built-in power system and microcontroller',
	},
	{
		label: 'Snap fit 3D printed design',
		src: '/specs-3d-printings.jpg',
		caption:
			'All mechanical designs are open-source, 3D printable and snap fit into each other',
	},
	{
		label: 'All the LEDs you need',
		src: '/specs-LEDs.png',
		caption:
			'Equipped with 33-LED RGB NeoPixel display and 12-LED RGB NeoPixel ring',
	},
	{
		label: 'ESP32 & micro SD card',
		src: '/specs-esp32.jpg',
		caption:
			'Robot is powered by ESP32 microcontroller with WiFi and Bluetooth and a micro SD card to store all your code and libraries',
	},
	{
		label: 'External peripherals',
		src: '/specs-external-peripherals.jpg',
		caption:
			'Connect extra peripherals to the robot via extension block with power output, I2C and UART',
	},
	{
		label: 'Sensors and inputs',
		src: '/specs-sensors-1.jpg',
		src2: '/specs-sensors-2.jpg',
		caption:
			'I2S speaker and ADC microphone help bring your robot to life with voice command and sound effect. Plus, a 6 DOF motion sensor (IMU) and 2 buttons for inputs',
	},
];
