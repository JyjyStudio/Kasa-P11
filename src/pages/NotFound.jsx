import styled from "styled-components"
import colors from "../utils/colors"
import StyledLink from "../Components/StyledLink"

export default function NotFound() {
	return (
		<OopsContainer>
			<Oops fontSize="12rem" fontWeight="700" mobileFontSize="8rem">404</Oops>
			<Oops fontSize="2rem" fontWeight="500" mobileFontSize="1.5rem">Oups! La page que vous demandez n'existe pas.</Oops>
			<StyledLink $underlined margin="7rem 0" color={colors.primaryPink} to="/">Retourner sur la page d’accueil</StyledLink>
		</OopsContainer>
	)
}

const OopsContainer = styled.div`
	text-align: center;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1 1 0%;
`
const Oops = styled.div`
	color: ${colors.primaryPink};
	font-size: ${({fontSize}) => fontSize};
	font-weight: ${({fontWeight}) => fontWeight};
	@media (max-width: 768px) {
		font-size: ${({mobileFontSize}) => mobileFontSize};
	}
`
