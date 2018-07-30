import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

// Styled Component
const StyledNavHeader = styled.h3`
	margin: 0;
	margin-left: 5px;
	margin-right: 15px;
	font-family: ${({theme}) => theme.fontFamily};
	color: ${({theme}) => theme.navBrandColor};

	`;

StyledNavHeader.defaultProps = {
	color: 'black',
	theme: defaultTheme,
}

StyledNavHeader.propTypes = {
	color: PropTypes.string,
}

export default StyledNavHeader;
