import { Container } from '../Components/Container'
import Banner from '../Components/Banner'
import AboutBanner from '../assets/about-banner.jpg'
import Dropdown from '../Components/Dropdown'
import useViewport from '../utils/Hooks/useViewport'

export default function About() {

	const {viewportWidth} = useViewport()

	return (
		<Container>
			<Banner src={AboutBanner} height="10rem" gradient/> 
			<Dropdown txt="Fiabilité" content={fiabilityTxt} width={viewportWidth > 760 ? "80%" : "100%"} center />
			<Dropdown txt="Respect" content={respectTxt} width={viewportWidth > 760 ? "80%" : "100%"} center />
			<Dropdown txt="Service" content={serviceTxt} width={viewportWidth > 760 ? "80%" : "100%"} center />
			<Dropdown txt="Sécurité" content={securityTxt} width={viewportWidth > 760 ? "80%" : "100%"} center />
		</Container>
	)
}

const fiabilityTxt = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
const respectTxt = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const serviceTxt = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
const securityTxt = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
