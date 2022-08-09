import PropTypes from 'prop-types'
import styled from 'styled-components'
import useViewport from '../utils/Hooks/useViewport'
import Img from './Img'

export default function Banner({ txt, img }) {

	const { viewportWidth } = useViewport()

	const bannerImgStyle = {
		height: viewportWidth < 769 && '14rem',
		borderRadius: '25px',
		width: '100%',
		filter: 'brightness(0.75)',
	}

	return (
		<ImgContainer>
			<Img src={img} style={bannerImgStyle} alt="Banner" cover/>
			<ImgLabel>{txt}</ImgLabel>
		</ImgContainer>
	)
}

const ImgContainer = styled.section`
	position: relative;
`

const ImgLabel = styled.h1`
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

Banner.propTypes = {
	txt: PropTypes.string,
	img: PropTypes.string.isRequired,
}
