import styled from'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

// Styled Component
const StyledContainer = styled.div`
        background: ${({theme}) => theme.background};
        font-family: ${({theme}) => theme.fontFamily};
        overflow: hidden;
        width: ${props => props.width};
        height: ${props => props.height};
        margin-top: ${props => props.marginTop};
        margin-bottom: ${props => props.marginBot};
        margin-left: ${props => props.marginLeft};
        margin-right: ${props => props.marginRight};
        padding-top: ${props => props.paddingTop};
        padding-bottom: ${props => props.paddingBot};
        padding-left: ${props => props.paddingLeft};
        padding-right: ${props => props.paddingRight};
        `;

StyledContainer.defaultProps = {
	width: '100%',
	height: 'auto',
	marginTop: '0px',
	marginBot: '0px',
	marginRight: '0px',
	marginLeft: '0px',
	paddingTop: '0px',
	paddingBot: '0px',
	paddingRight: '0px',
	paddingLeft: '0px', 
	theme: defaultTheme,
}

StyledContainer.propTypes = {
	width: PropTypes.string,
	marginTop: PropTypes.string,
	marginBot: PropTypes.string,
	marginRight: PropTypes.string,
	marginLeft: PropTypes.string,
}

export default StyledContainer;
