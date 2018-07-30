import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../../../theme';

// Styled Component
const StyledPanelHeader = styled.h3`
	margin: 0;
	font-familty: ${({theme}) => theme.fontFamily};
	color: ${({theme}) => theme.defPrimaryFontColor};
	`;
StyledPanelHeader.defaultProps = {
	color: 'black',
	theme: defaultTheme,
}

export default StyledPanelHeader;
