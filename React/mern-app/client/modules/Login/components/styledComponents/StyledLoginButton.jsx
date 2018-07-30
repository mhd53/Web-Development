import styled from 'styled-components';
import defaultTheme from '../../../../theme';

// Styled Component
const StyledLoginButton = styled.input`
	border: none;
	outline: none;
	width: 100%;
	margin-bottom: 20px;
	height: 40px;
	background-color: ${({theme}) => theme.themeColor}; 
	color: #fff;
	font-size: 22px;
	font-weight: bold;
	border-radius: 20px;

	&:hover {
		cursor: pointer;
		background-color: #ffc107; 
	}
	`;

StyledLoginButton.defaultProps = {
	theme: defaultTheme,
}

export default StyledLoginButton;
