import { Container } from '../Components/Container'
import Hero from '../Components/Hero'
import AboutHero from '../assets/about-hero.jpg'

export default function About() {
	return (
		<Container>
			<Hero img={AboutHero} /> 
			<h1>About</h1>
		</Container>
	)
}

