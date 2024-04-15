import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Intro from './components/intro';
import Benefits from './components/benefits';
import Models from './components/models/models';
import Roles from './components/roles';
import Environments from './components/environtments';
import Steps from './components/steps';

export default function Home() {
  return (
    <>
      <Navbar src="src/assets/Horizontal-Logo-CYOBot.png" alt="CYOBot Logo" />
      <Intro src="src/assets/adventurer.png" alt="Adventurer Model" />
      <Benefits />
      <Models />
      <Roles />
      <Environments />
      <Steps />
      <Footer />
    </>
  );
}
