import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

// Styled Component
const StyledNavLink = styled.h5`
	margin: 0;
	margin-right: 30px;
	padding: 20px 0;
	font-family: ${({theme}) => theme.fontFamily};
	color: ${({theme}) => theme.navFontColor};

	`;

StyledNavLink.defaultProps = {
	color: 'black',
	theme: defaultTheme,
}

StyledNavLink.propTypes = {
	color: PropTypes.string,
}

export default StyledNavLink;