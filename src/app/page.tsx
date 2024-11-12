import Banner from "./home/Banner";
import EmailSubscription from "./home/EmailSubscription";
import Environments from "./home/environtments";
import Intro from "./home/intro";
import IntroWithVideo from "./home/introWithVideo";
import Levels from "./home/levels/levels";
import Roles from "./home/roles";
import Specs from "./home/specs";
import Steps from "./home/steps";

export default function Home() {
	return (
		<main className="pt-16 lg:pt-24">
			<IntroWithVideo />
			<Banner />
			<Intro />
			<Roles />
			<Levels />
			<Specs />
			<Environments />
			<Steps />
			<EmailSubscription />
		</main>
	);
}
