import styled from'styled-components';
import defaultTheme from '../theme';

// Styled Component
const StyledForm = styled.form`
	width: 100%;
	height: ${props => props.height};
	border: 4px solid black;
	border-radius: 4px;
	`;

export default StyledForm;