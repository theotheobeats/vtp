import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export default function App() {
	return (
		<main className="w-full">
			<Heading />
			<Hero />
			<Marquee />
			<Projects />
			<Profile />
		</main>
	);
}
