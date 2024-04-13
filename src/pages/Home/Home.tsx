import Navbar from "../../components/navbar/Navbar";
import Intro from "./components/intro";
import Benefits from "./components/benefits";
import Roles from "./components/roles";
import Environments from "./components/environtments";

export default function Home() {
  return (
    <>
      <Navbar src="src/assets/Horizontal-Logo-CYOBot.png" alt="CYOBot Logo" />
      <Intro src="src/assets/adventurer.png" alt="Adventurer Model" />
      <Benefits />
      <Roles />
      <Environments />
    </>
  );
}
