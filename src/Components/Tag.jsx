import styled from "styled-components"
import colors from "../utils/colors"

export default function Tag({txt}) {
  return (
	<StyledTag>{txt}</StyledTag>
  )
}

const StyledTag = styled.div`
	background-color: ${colors.primaryPink};
    padding: 0.3rem 1rem;
	margin-right: .75rem;
	margin-top: 1.2rem;
	border-radius: 1rem;
	display: inline-block;
	color: white;
	font-size: .9rem;
`
