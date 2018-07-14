import styled from'styled-components';
import defaultTheme from '../theme';

// Styled Component
const StyledOutput = styled.output`
	width: 80%;
	height: 30px;
	margin-top: 20px;
	margin-buttom: 20px;
	padding: 5px;

	border: 2px solid ${({theme}) => theme.borderColor};
	border-radius: 4px;
	`;
	
StyledOutput.defaultProps = {
	theme: defaultTheme,
}

export default StyledOutput;