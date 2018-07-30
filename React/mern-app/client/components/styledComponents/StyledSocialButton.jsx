import styled from 'styled-components';
import PropTypes from 'prop-types';


// Styled Component
const StyledSocialButton = styled.button`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin: 5px;
	color: ${props => props.color}
	background: ${props => props.bgColor};
	background-image: url(${props => props.bgImg});
	background-size: contain;
	background-repeat: no-repeat;
	`;

StyledSocialButton.propTypes = {
	color: PropTypes.string,
	bgColor: PropTypes.string,
	bgImg: PropTypes.string,
}

export default StyledSocialButton;
