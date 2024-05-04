// import logoImage from './assets/logo-CYOBot.png';
// import Navbar from './components/navbar/navbar';
import Intro from './home/intro';
import Levels from './home/levels/levels';
import Roles from './home/roles';
import Specs from './home/specs';
import Environments from './home/environtments';
import Steps from './home/steps';
// import Footer from './components/footer/footer';

export default function Home() {
	return (
		<main>
			{/* <Intro /> */}
			<Levels />
			{/* <Roles /> */}
			<Specs />
			{/* <Environments />
			<Steps /> */}
		</main>
	);
}
