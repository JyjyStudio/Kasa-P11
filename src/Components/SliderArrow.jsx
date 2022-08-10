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
		position: "absolute",
		left: direction !== "next" && 0,
		right: direction === "next" && 0,
	}

	return( 
		<ArrowsContainer>
			{(direction === "next") ? 
			<Img src={rightArrow} alt="right-arrow"  style={arrowStyle} tabIndex="0" position="relative" onClick={moveSlideFunc}/>
			:
			<Img src={leftArrow} alt="left-arrow" style={arrowStyle} tabIndex="0" onClick={moveSlideFunc}/>
			}
		</ArrowsContainer>
	)
}

const ArrowsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 50%;
    transform: translateY(-50%);
	width: 100%;
`
SliderArrow.propTypes = {
	direction: PropTypes.string.isRequired,
	moveSlideFunc: PropTypes.func.isRequired,
}
