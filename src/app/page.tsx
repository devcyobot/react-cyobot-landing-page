import logoImage from './assets/logo-CYOBot.png';
import introImage from './assets/intro-adventurer.png';
import Navbar from './components/navbar/navbar';
import Intro from './home/intro';
import Levels from './home/levels/levels';
import Roles from './home/roles';
import Benefits from './home/benefits';
import Environments from './home/environtments';
import Steps from './home/steps';
import Footer from './components/footer/footer';

export default function Home() {
	return (
		<>
			<Navbar src={logoImage.src} alt="CYOBot Logo" />
			<main>
				<Intro src={introImage.src} alt="Adventurer Model" />
				<Levels />
				<Roles />
				<Benefits />
				<Environments />
				<Steps />
			</main>
			<Footer />
		</>
	);
}
