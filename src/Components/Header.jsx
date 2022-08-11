import styled from 'styled-components'
import StyledLink from './StyledLink'
import Img from '../Components/Img'
import Logo from '../assets/logo.svg'
import Navbar from './Navbar'
import useViewport from '../utils/Hooks/useViewport'

export default function Header() {

	const { viewportWidth } = useViewport()

	const ImgStyle = {
		height: viewportWidth <= 700 ? "2.2rem" : "4rem",
	}
	
	const HeaderContainerStyle = {
		height: viewportWidth <= 768 && "5rem",
		gap: viewportWidth <= 550 && "2rem",
		alignItems: viewportWidth <= 550 && "center",
		padding: viewportWidth <= 550 && "0",
		flexDirection: viewportWidth < 390 && "column",
		marginBottom: viewportWidth < 390 && "2rem"
	}

	const StyledLinkStyle = {
		margin: viewportWidth > 390 && "0 auto 0 0",
	}

	return (
	<HeaderContainer style={HeaderContainerStyle}>
		<StyledLink style={StyledLinkStyle} to="/" tabIndex="0">
			<Img src={Logo} style={ImgStyle} alt="logo" />
		</StyledLink>
		<Navbar/>
	</HeaderContainer>
  )
}

const HeaderContainer = styled.header`
	display: flex;
	align-item: center;
	padding: 1rem;
	height: 6rem;
	gap: 3rem;
    margin: 0.5rem auto;
	width: 85%;
	max-width: 1300px;
`
