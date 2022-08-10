import styled from "styled-components"

export const Container = styled.main`
	flex: 1 1 0%;
	margin: .5rem auto 4%;
    width: 85%;
	max-width: 1300px;
	position: ${props => props.position};
	@media (max-width: 760px) {
		width: 95%;
	}
`