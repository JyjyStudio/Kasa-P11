import PropTypes from 'prop-types'
import styled from 'styled-components'
import useViewport from '../utils/Hooks/useViewport'
import Img from './Img'

export default function Hero({ txt, img }) {

	const { viewportWidth } = useViewport()

	const HeroImgStyle = {
		height: viewportWidth < 769 && '14rem',
		borderRadius: '25px',
		width: '100%',
		filter: 'brightness(0.75)',
	}

	return (
		<ImgContainer>
			<Img src={img} style={HeroImgStyle} alt="hero" cover/>
			<ImgLabel>{txt}</ImgLabel>
		</ImgContainer>
	)
}

const ImgContainer = styled.div`
	position: relative;
`

const ImgLabel = styled.div`
	color: white;
	font-size: 2.3rem;
	position: absolute;
	top: 50%;
	text-align: center;
	width: 100%;
	font-weight: 500;
	transform: translateY(-50%);
	@media (max-width: 768px) {
		font-size: 1.7rem;
		text-align: left;
		padding: 15px;
	}
`

Hero.propTypes = {
	txt: PropTypes.string,
	img: PropTypes.string.isRequired,
}
