import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../../../theme'; 

// Stlyed Component
const StyledListHeader = styled.h3`
	margin: 5px;
	font-family: ${({theme}) => theme.fontFamily};
	color: ${({theme}) => theme.navBrandColor};
	`;

StyledListHeader.defaultProps = {
	color: 'black',
	theme: defaultTheme,

}

StyledListHeader.propTypes = {
	color: PropTypes.string,
}

export default StyledListHeader;