import colors from '../utils/colors'
import styled from 'styled-components'
import StyledLink from './StyledLink'

export default function Navbar() {

	const navbarItems = [
		{ label: 'Accueil', path: '/' },
		{ label: 'A Propos', path: '/about' },
	]

	return (
		<Nav>
			{navbarItems.map((item, id) => (
				<StyledLink
					color={colors.primaryPink}
					to={item.path}
					key={`${id}-${item.label}`}
				>
					{item.label}
				</StyledLink>
			))}
		</Nav>
	)
}

const Nav = styled.nav`
	display: flex;
	align-items: center;
	font-weight: 500;
	gap: 2rem;
	@media (max-width: 1024px) {
		font-size: calc(15px + 1vw);
	}
	@media (max-width: 389px) {
		font-size: calc(15px + 2vw);
	}
`
