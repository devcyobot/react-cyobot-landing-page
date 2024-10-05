import Intro from "./home/intro";
import Levels from "./home/levels/levels";
import Roles from "./home/roles";
import Specs from "./home/specs";
import Environments from "./home/environtments";
import Steps from "./home/steps";
import EmailSubscription from "./home/EmailSubscription";

export default function Home() {
	return (
		<main>
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
