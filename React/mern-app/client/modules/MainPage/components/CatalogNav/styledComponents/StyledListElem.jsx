import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../../../theme';

// Styled Component
const StyledListElem = styled.h5`
	margin: 0;
	font-family: ${({theme}) => theme.fontFamily};
	color: 'black';
	`;

StyledListElem.defaultProps = {
	theme: defaultTheme,
}

export default StyledListElem;
