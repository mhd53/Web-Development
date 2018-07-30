import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../../../theme';


// Styled Component
const StyledButtonIcon = styled.img`
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${props => props.bgColor};
	position: absolute;
	bottom: 85px;
	left: 110px;
	border-radius: ${props => props.radius}; 
	`; 

StyledButtonIcon.defaultProps = {
	width: '50px',
	height: '50px',
	bgColor: props => props.theme.themeColor,
	radius: '5px',
	theme: defaultTheme,
}

StyledButtonIcon.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	bgColor: PropTypes.string,
	radius: PropTypes.string,
}



export default StyledButtonIcon;