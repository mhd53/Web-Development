import styled from'styled-components';
import defaultTheme from '../theme';

// Styled Component
const StyledModelTitle = styled.h1`
	margin: 0;
	font-size: ${({theme}) => theme.header1FontSize};
	color: ${({theme}) => theme.headerFontColor};
	`;

export default StyledModelTitle;