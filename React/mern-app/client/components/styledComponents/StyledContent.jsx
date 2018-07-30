import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

const StyledContent = styled.p`
	font-size: 32px;
	font-family: ${({theme}) => theme.fontFamily};
	color: ${props => props.color};
	`;

StyledContent.defaultProps = {
	color: 'black',
	theme: defaultTheme,
}
 StyledContent.propTypes = {
 	color: PropTypes.string,
 }

export default StyledContent;