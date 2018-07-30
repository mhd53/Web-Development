import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImgButton = styled.button`
	background-image: url(${props => props.image});
	width: ${props => props.width};
	height; ${props => props.height};
	z-index: ${props => props.zIndex};
	margin: ${props => props.margin};
	border: 2px solid ${props => props.borderColor};
	border-radius: ${props => props.radius};
	`;

StyledImgButton.defaultProps = {
	width: 'auto',
	height: 'auto',
	borderColor: 'black',
	margin: '10px',
	radius: '4px',
}

StyledImgButton.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	borderColor: PropTypes.string,
	margin: PropTypes.string,
	radius: PropTypes.string,
}

export default StyledImgButton;