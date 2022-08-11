import { Container } from "../Components/Container"
import Banner from "../Components/Banner"
import HomeBanner from '../assets/home-banner.jpg'
import styled from "styled-components"
import Card from "../Components/Card"
import data from '../data/logements.json'
import StyledLink from "../Components/StyledLink"
import colors from "../utils/colors"

export default function Home() {
	return (
		<Container>
			<Banner txt="Chez vous, partout&nbsp;et&nbsp;ailleurs" src={HomeBanner} height="10rem" gradient/>
			<HousingsContainer>
				{data.map(house => 
					<StyledLink to={`/logement-${house.id}`} key={`/logement-${house.id}`} state={house} >
						<Card title={house.title} key={house.id} pictureSrc={house.cover} />
					</StyledLink>
				)}
			</HousingsContainer>

		</Container>
	)
}

const HousingsContainer = styled.section`
	background-color: ${colors.grayBackground};
	border-radius: 25px;
	margin-top: 1.5rem;
	padding: 2rem;
	height: auto;
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
	grid-gap: 2rem;
	
	@media (max-width: 860px) {
		grid-template-columns: repeat(1,minmax(0,1fr));
		padding: 0;
		background-color: #fff;
	}
`