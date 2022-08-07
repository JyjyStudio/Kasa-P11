import styled from 'styled-components'
import StyledLink from './StyledLink'
import Img from '../Components/Img'
import Logo from '../assets/logo.svg'
import Navbar from './Navbar'

export default function Header() {
  return (
	<HeaderContainer>
		<StyledLink margin="0 auto 0 0" to="/" tabIndex="0">
			<Img src={Logo} height="4rem" $mobileWidth="6rem" $mobileHeight="3rem" alt="logo" />
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
	@media (max-width: 768px) {
		height: 5rem;
	}
`
