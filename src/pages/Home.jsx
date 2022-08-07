import { Container } from "../Components/Container"
import Hero from "../Components/Hero"
import HomeHero from '../assets/hero.jpg'


export default function Home() {

	return (
		<Container>
			<Hero txt="Chez vous, partout&nbsp;et&nbsp;ailleurs" img={HomeHero} />
			<h1>Home</h1>
		</Container>
	)
}
