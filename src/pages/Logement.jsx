import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import colors from '../utils/colors'
import { Container } from '../Components/Container'
import Slider from '../Components/Slider'
import Tag from '../Components/Tag'
import Img from '../Components/Img'
import Dropdown from '../Components/Dropdown'
import FullStar from '../assets/full-star.svg'
import EmptyStar from '../assets/empty-star.svg'
import useViewPort from '../utils/Hooks/useViewport'
import data from '../data/logements.json'
import NotFound from './NotFound'

export default function Logement() {

	const params = useParams()
	const house = data.filter(house => house.id === params.id)[0]

	const { viewportWidth } = useViewPort()

	const displayStars = (rating) => {
		const range = [1, 2, 3, 4, 5]
		return range.map((num, index) =>
			(num <= rating) ? 
				<Img src={FullStar} alt="full star" key={index} />
			 : 
				<Img src={EmptyStar} alt="empty star" key={index} />
		)
	}

	return (
		house ? (
			<Container>
				<Slider data={house.pictures} />
				<GridContainer>
					<HouseInfosWrapper>
						<StyledH1>{house.title}</StyledH1>
						<StyledH2>{house.location}</StyledH2>
						{house.tags.map(tag => 
							<Tag txt={tag} key={`${house.id}-${tag}`} />
						)}
					</HouseInfosWrapper>
					<HostInfosWrapper>
						<ProfilContainer>
							<HostName>{house.host.name}</HostName>
							<Img
								src={house.host.picture}
								borderRadius="50%"
								width="4rem"
								margin="0 0 0 .5rem"
								alt="host"
							/>
						</ProfilContainer>
						<RatingContainer>
							{displayStars(house.rating)}
						</RatingContainer>
					</HostInfosWrapper>
				</GridContainer>
				<DropdownContainer>
					<Dropdown
						txt="Description"
						width={viewportWidth > 760 ? '45%' : '100%'}
						content={house.description}
					/>
					<Dropdown
						txt="Equipements"
						width={viewportWidth > 760 ? '45%' : '100%'}
						content={house.equipments}
					/>
				</DropdownContainer>
			</Container>
		) : <NotFound />
	)
}

const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 0.5rem;
	@media (max-width: 768px) {
		grid-template-rows: repeat(1, minmax(0, 1fr));
	}
`
const HouseInfosWrapper = styled.div`
	grid-row: span 2;
	grid-column: 1/4;
	margin: 1rem 0;
	@media (max-width: 760px) {
		grid-column: span 4;
	}
`
const StyledH1 = styled.h1`
	color: ${colors.primaryPink};
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 500;
`
const StyledH2 = styled.h2`
	color: ${colors.primaryPink};
	font-size: 1.2rem;
	font-weight: 400;
	margin-top: 0.3rem;
`
const HostInfosWrapper = styled.div`
	display: grid;
	grid-column-start: 4;
	grid-row-start: 1;
	margin-top: 1rem;
	@media (max-width: 760px) {
		grid-row-start: 3;
		grid-column: span 3;
	}
`
const ProfilContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	@media (max-width: 760px) {
		grid-row-start: 1;
		grid-column-start: 3;
	}
`
const RatingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 1.5rem;
	margin-left: 0;
`
const HostName = styled.div`
	color: ${colors.primaryPink};
	text-align: right;
	width: min-content;
	font-size: 1.25rem;
	line-height: 1.75rem;
`
const DropdownContainer = styled.section`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-top: 1.5rem;
	@media (max-width: 760px) {
		flex-direction: column;
	}
`
