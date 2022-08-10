import { Container } from '../Components/Container'
import Banner from '../Components/Banner'
import AboutBanner from '../assets/about-banner.jpg'

export default function About() {
	return (
		<Container>
			<Banner src={AboutBanner} height="10rem" gradient/> 
			<h1>About</h1>
		</Container>
	)
}

