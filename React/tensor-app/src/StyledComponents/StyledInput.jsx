import styled from'styled-components';
import defaultTheme from '../theme';

// Styled Component
const StyledInput = styled.input`
	width: 80%;
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 5px;
	border: 2px solid ${({theme}) => theme.borderColor};
	color ${props => props.invalid ? '#E53935' : ''};
	font-size: 16px; 
	opacity: ${props => props.disabled ? .5 : 1}; 
	border-radius: 4px;
	`;
	
StyledInput.defaultProps = {
	theme: defaultTheme,
}

export default StyledInput;
