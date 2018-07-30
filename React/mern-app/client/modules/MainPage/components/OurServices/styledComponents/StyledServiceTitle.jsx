import styled from 'styled-components';
import defaultTheme from '../../../../../theme';


const StyledServiceTitle = styled.h4`
	margin: 0;
	font-family: ${({theme}) => theme.fontFamily};
	color: ${({theme}) => theme.defSecondaryFontColor};
	position: absolute;
	bottom: 50px;
	left: 110px;
	`;
StyledServiceTitle.defaultProps = {
	theme: defaultTheme,
}

export default StyledServiceTitle;