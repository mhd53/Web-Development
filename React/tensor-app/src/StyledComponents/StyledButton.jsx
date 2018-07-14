import styled from'styled-components';
import defaultTheme from '../theme';

// Styled Component
const StyledButton = styled.button`
	background: ${props => props.primary ? props.theme.buttonBgColor : 'white'};
	color: ${props => props.primary ? props.theme.buttonFontColor : props.theme.buttonBgColor};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${({theme}) => theme.borderColor};
	opacity: ${props => props.disabled ? .5 : 1};
	border-radius: 4px;
	`;

StyledButton.defaultProps = {
	theme: defaultTheme, 
}

export default StyledButton;