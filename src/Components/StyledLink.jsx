import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
	color: ${props => props.color};
	text-decoration: ${props => props.$underlined ? 'underline' : 'none'};
	margin: ${({margin}) => margin};
	font-size: ${({fontSize}) => fontSize};
	&:hover {
		text-decoration: underline;
	}
`
export default StyledLink