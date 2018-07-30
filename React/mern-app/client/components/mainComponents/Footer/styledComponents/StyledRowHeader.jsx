import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../../theme';

// Styled Component
const StyledRowHeader = styled.h4`
	margin: 0;
	font-family: ${({theme}) => theme.fontFamily};
	color: white;
	padding: 10px 0;
	`;

StyledRowHeader.defaultProps = {
	theme: defaultTheme,
}

export default StyledRowHeader;


