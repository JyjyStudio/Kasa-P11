import styled from 'styled-components'
import whiteLogo from '../assets/logo-white.svg'
import Img from '../Components/Img'
import StyledLink from '../Components/StyledLink'

export default function Footer(props) {
	
	const year = new Date().getFullYear()

	return (
		<FooterContainer>
			<StyledLink to="/">
				<Img src={whiteLogo} width="10rem" alt="logo footer" />
			</StyledLink>
			<div>© {year} Kasa. All rights reserved</div>
		</FooterContainer>
	)
}

const FooterContainer = styled.footer`
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	gap: 2rem;
`
