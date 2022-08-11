import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from './Img'

export default function Card({ title, pictureSrc }) {
	return (
		<CardContainer>
			<GradientOverlay>
				<Img
					src={pictureSrc}
					alt="house"
					cover
					width="100%"
					height="16rem"
				/>
			</GradientOverlay>
			<StyledH2>{title}</StyledH2>
		</CardContainer>
	)
}

const CardContainer = styled.article`
	border-radius: 10px;
	height: 16rem;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	@media (max-width: 860px) {
		width: 100%;
		height: 100%;
	}
`
const GradientOverlay = styled.div`
	transform: scale(1);
	transition: all .5s ease;
	&:hover {
		transform: scale(1.05);
	}
	&::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: linear-gradient(to bottom, transparent, transparent, rgba(0, 0, 0, 0.7));
	}
`
const StyledH2 = styled.h2`
	position: absolute;
	bottom: 1.5rem;
	left: 1.5rem;
	font-size: 1.1rem;
	font-weight: 600;
	color #fff;
`

Card.propTypes = {
	title: PropTypes.string.isRequired,
	pictureSrc: PropTypes.string.isRequired,
}
