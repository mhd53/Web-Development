import styled from'styled-components';
import defaultTheme from '../theme';

// Styled Component
const StyledContainer = styled.div`
	background: ${({theme}) => theme.background};
	font-family: ${({theme}) => theme.fontFamily};
	overflow: hidden;
	width: ${props => props.width};
	margin-top: ${props => props.marginTop};
	margin-bottom: ${props => props.marginBot};
	margin-left: ${props => props.marginLeft};
	margin-right: ${props => props.marginTop};
	`; 

export default StyledContainer;