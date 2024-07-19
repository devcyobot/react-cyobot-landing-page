export type FaqDataType = {
	section: string;
	list: {
		question: string;
		answer: string;
	}[];
};

export const FaqData: FaqDataType[] = [
	{
		section: "General Information",
		list: [
			{
				question: "What is CYOBot?",
				answer:
					"CYOBot is an all-in-one open-source developer kit combined with an educational dashboard designed for learning and teaching robotics. It includes 1,000 projects covering embedded systems, control, machine learning/AI, robotics, IoT, and more.",
			},
			{
				question: "Who can use CYOBot?",
				answer:
					"CYOBot is ideal for K-12 students, aspiring future engineers, students who wish to study abroad, educators, hobbyists interested in Engineering, and professionals interested in learning or teaching robotics and related fields. It's designed for all skill levels, from beginners to advanced users.",
			},
			{
				question: "What makes CYOBot different from other robotic kits?",
				answer:
					"CYOBot offers a comprehensive kit that covers multiple disciplines within engineering, eliminating the need to buy different kits for each new area you want to learn. The interactive educational dashboard RoboticsQuest customizes learning paths based on students' interests and guides them through practical, industry-relevant projects.",
			},
		],
	},
	{
		section: "CYOBot Kit",
		list: [
			// {
			// 	question: "What features are included in CYOCrawler?",
			// 	answer: "TBD",
			// },
			// {
			// 	question: "What features are included in CYOBrain?",
			// 	answer: "TBD",
			// },
			// {
			// 	question:
			// 		"What is included in the open-source package of CYOBot? How can I utilize the open-source resources from CYOBot?",
			// 	answer: "TBD",
			// },
			{
				question: "What programming language is supported?",
				answer:
					"CYOBot primarily supports Python and C/C++. These languages are widely used in robotics and embedded systems, making it easy for users to program and control their projects.",
			},
		],
	},
	{
		section: "CYOBot RoboticsQuest (Dashboard)",
		list: [
			{
				question: "What is RoboticsQuest?",
				answer:
					"RoboticsQuest is the interactive educational dashboard that accompanies the CYOBot kit. It personalizes learning paths based on users' interests and skill levels, providing step-by-step guidance and resources for completing projects.",
			},
			// {
			// 	question:
			// 		"What can I learn with CYOBot? (Refer to our 30 days to 6 months journey)",
			// 	answer: "TBD",
			// },
			// {
			// 	question:
			// 		"How does the Dashboard support you in learning robotics/personalize your learning path?",
			// 	answer: "TBD",
			// },
		],
	},
	{
		section: "Projects and Learning",
		list: [
			// {
			// 	question: "What types of projects can I build with CYOBot?",
			// 	answer: "TBD",
			// },
			// {
			// 	question: "Are these projects industry-relevant?",
			// 	answer: "TBD",
			// },
			{
				question:
					"How can I build my GitHub account with projects from CYOBot?",
				answer:
					"Users can document their CYOBot projects on GitHub by creating repositories for each project, including code, schematics, and project descriptions. This not only showcases their work but also builds a portfolio that can be shared with potential employers or collaborators.",
			},
			{
				question: "Can I create my own projects with CYOBot?",
				answer:
					"Absolutely! CYOBot is open-source, allowing users to create and share their own projects. The kit's components and the educational dashboard support customization and innovation, encouraging users to develop unique projects.",
			},
		],
	},
	{
		section: "Purchase and Pricing",
		list: [
			{
				question: "Where can I buy the CYOBot kit?",
				answer:
					"The CYOBot kit (including CYOBrain and CYOCrawler) is available for purchase on our official CYOBot Kickstarter and through Google Form on our Facebook CYOBot Vietnam.",
			},
			// {
			// 	question: "What is the price of the CYOBot kit?",
			// 	answer: "TBD",
			// },
			{
				question: "Are there any subscription fees for the Dashboard?",
				answer:
					"Access to the educational dashboard is included with the purchase of the CYOBot kit.",
			},
		],
	},
	{
		section: "Support and Resources",
		list: [
			{
				question: "What kind of support is available for CYOBot users?",
				answer:
					"CYOBot offers a range of support options, including online tutorials, a community of experienced mentors, and customer service. Users can access step-by-step guides, video tutorials, and connect with other users or mentors for assistance and collaboration. For more information about the product, please email us through team.cyobot@gmail.com or direct message us through our official Facebook CYOBot Vietnam.",
			},
			{
				question: "How can I get started with CYOBot?",
				answer:
					"Getting started is easy! Purchase your CYOBot kit from our website, sign up for an account on the educational dashboard, take a quiz to identify the best path of engineering role for you, and follow the onboarding instructions to begin your learning journey. Beep beep!",
			},
		],
	},

	{
		section: "Other Information",
		list: [
			{
				question: "Can CYOBot be used in educational institutions?",
				answer:
					"Yes, CYOBot is perfect for use in schools, colleges, and universities. It provides a hands-on, interactive learning experience that aligns with modern STEM education standards, especially for the robotics field.",
			},
			{
				question: "Is CYOBot suitable for remote learning?",
				answer:
					"Certainly! The educational dashboard is accessible online, and the small, compact CYOBot kit can be shipped directly to your home, and carried anywhere as you wish, making it easy for users to learn and complete projects from all over the world.",
			},
			{
				question: "Is CYOBot suitable for home-schooling?",
				answer:
					"Certainly! The educational dashboard is accessible online, and the small, compact CYOBot kit can be shipped directly to your home, and carried anywhere as you wish, making it easy for users to learn and complete projects from all over the world.",
			},
			{
				question: "Can I use CYOBot as a main source to learn robotics?",
				answer:
					"CYOBot is designed to be a comprehensive learning tool for robotics and related fields, offering an extensive project library and an interactive dashboard to help users develop a strong foundation in robotics. However, it is recommended that users seek education from an actual institution with a verified curriculum, such as a university, to ensure a well-rounded and accredited learning experience.",
			},
		],
	},
	{
		section: "For educators",
		list: [
			{
				question: "How can I use CYOBot for my course?",
				answer:
					"Educators can integrate CYOBot into their curriculum by using the kit with CYOBrain and CYOCrawler and dashboard to teach various engineering concepts. The structured learning paths, hands-on projects, and real-time feedback make it an effective tool for classroom instruction and remote learning. Educators can also create custom projects and challenges through our open-source resources to align with their course objectives.",
			},
		],
	},
];
