import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
	width: ${props => props.width};
	height: ${props => props.height};
	color: ${props => props.color};
	`;

StyledImg.defaultProps = {
	width: '500px',
	height: '400px',
}

StyledImg.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
}

export default StyledImg;
