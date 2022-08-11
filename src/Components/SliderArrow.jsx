import styled from "styled-components"
import PropTypes from 'prop-types'
import leftArrow from "../assets/left-arrow.svg" 
import rightArrow from "../assets/right-arrow.svg"
import Img from "./Img"

export default function SliderArrow( { direction, moveSlideFunc } ) {

	const arrowStyle = {
		cursor: "pointer",
		width: "3.5rem",
		height: "2.5rem", 
		filter: "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))",
		left: direction !== "next" && 0,
		right: direction === "next" && 0,
	}

	return( 
		<ArrowsContainer>
			{(direction === "next") ? 
			<ArrowBtn right="0" onClick={moveSlideFunc}>
				<Img src={rightArrow} alt="right-arrow"  style={arrowStyle} />
			</ArrowBtn>
			:
			<ArrowBtn left="0" onClick={moveSlideFunc}>
				<Img src={leftArrow} alt="left-arrow" style={arrowStyle} />
			</ArrowBtn>
			}
		</ArrowsContainer>
	)
}

const ArrowsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
const ArrowBtn = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0.6rem 1rem;
	position: absolute;
	top: 50%;
    transform: translateY(-50%);
	right: ${props => props.right};
	left: ${props => props.left};
`
SliderArrow.propTypes = {
	direction: PropTypes.string.isRequired,
	moveSlideFunc: PropTypes.func.isRequired,
}
