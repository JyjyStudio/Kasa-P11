import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import SliderArrow from './SliderArrow'
import Img from './Img'

export default function Slider( {data} ) {
	

	const [index, setIndex] = useState(0)

	const prevImg = () => index > 0 ? setIndex(index - 1) : setIndex(data.length - 1)
		
	const nextImg = () => (index >= data.length - 1) ? setIndex(0) : setIndex(index + 1)

	return (
	<SliderContainer>
		<SlideContainer>
			<Img src={data[index]} height="22rem" width="100%" cover alt={`banner-${index+1}`} />
			<SliderArrow direction="prev" moveSlideFunc={prevImg} />
			<SliderArrow direction="next" moveSlideFunc={nextImg} />
		</SlideContainer>
	</SliderContainer>
  )
}

const SlideContainer = styled.div`
	position: absolute;
	width: 100%;
`
const SliderContainer = styled.section`
	position: relative;
	border-radius: 25px;
    overflow: hidden;
	width: 100%;
    height: 22rem;
`
Slider.propTypes = {
	data: PropTypes.array.isRequired,
}
