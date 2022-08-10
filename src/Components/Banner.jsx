import PropTypes from 'prop-types'
import styled from 'styled-components'
import Arrow from './Arrows'
import Img from './Img'

export default function Banner({ txt, src, height, gradient, arrows }) {

	const bannerImgStyle = {
		height,
		borderRadius: '25px',
		width: '100%',
	}

	return (
		
		<ImgContainer>
			{gradient ?
				<GradientOverlay>
					<Img src={src} style={bannerImgStyle} alt="Banner" filter="grayscale(.3)" cover/>
				</GradientOverlay>
			:
			<Img src={src} style={bannerImgStyle} alt="Banner" cover/>
			}
			<ImgLabel>{txt}</ImgLabel>
			{arrows && <Arrow/>}
		</ImgContainer>
		
		
	)
}
const GradientOverlay = styled.div`
	&::after {
		content: '';
		width: 100%;
		height: 10rem;
		position: absolute;
		top: 0;
		left: 0;
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), transparent);
	}
`
const ImgContainer = styled.section`
	position: relative;
	border-radius: 25px;
    overflow: hidden;

`

const ImgLabel = styled.h1`
	color: white;
	font-size: 2.3rem;
	font-weight: 600;
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

Banner.propTypes = {
	txt: PropTypes.string,
	src: PropTypes.string.isRequired,
	height: PropTypes.string,
	gradient: PropTypes.bool,
}
