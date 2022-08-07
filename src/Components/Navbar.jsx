import colors from '../utils/colors'
import styled from 'styled-components'
import StyledLink from './StyledLink'

export default function Navbar() {
	return (
		<Nav>
			<StyledLink color={colors.primaryPink} to="/" tabIndex="0">Accueil</StyledLink>
			<StyledLink color={colors.primaryPink} to="/about" tabIndex="0">A Propos</StyledLink>
		</Nav>
	)
}

const Nav = styled.nav`
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	font-weight: 500;
	gap: 2rem;
`
