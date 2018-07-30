import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

const StyledButton = styled.button`
		background: ${props => props.primary ? props.theme.buttonBgColor : 'white'};
		color: ${props => props.primary ? props.theme.buttonFontColor : props.theme.buttonBgColor};
		font-size: ${props => props.fontSize};
		margin: 1em;
		padding: 0.25em 1em;
		border: 2px solid ${({theme}) => theme.borderColor};
		opacity: ${props => props.disabled ? .5 : 1};
		border-radius: 4px;
		width: ${props => props.width};
		height: ${props => props.height};
		`;

StyledButton.defaultProps = {
	width: '350px',
	height: '60px',
	fontSize: '1em',
	theme: defaultTheme,
}


export default StyledButton; 
