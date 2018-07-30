import styled from'styled-components';
import { rgba, transparentize } from 'polished';
import PropTypes from 'prop-types';
import defaultTheme from '../../theme';

// Styled Component
const StyledContainer = styled.div`
        background-color ${props => props.transparent ? rgba(255, 255, 255, 0.1) : props.bgColor};
        background-image: url(${props => props.bgImg});
        background-size: ${props => props.bgImg ? 'cover' : null};
        font-family: ${({theme}) => theme.fontFamily};
        overflow: ${props => props.overflow};
        width: ${props => props.width};
        height: ${props => props.height};
        margin: ${props => props.margin};
        margin-top: ${props => props.marginTop};
        margin-bottom: ${props => props.marginBot};
        margin-left: ${props => props.marginLeft};
        margin-right: ${props => props.marginRight};
        padding: ${props => props.padding};
        padding-top: ${props => props.paddingTop};
        padding-bottom: ${props => props.paddingBot};
        padding-left: ${props => props.paddingLeft};
        padding-right: ${props => props.paddingRight};
        display: ${props => props.display};
        justify-content: ${props => props.justifyContent};
        justify-items: ${props => props.justifyItems};
        align-items: ${props => props.alignItems};
        align-content: ${props => props.alignContent};
        opacity: ${props => props.opacity};
        vertical-align: ${props => props.vertAlign};
        position: ${props => props.pos};
        top: ${props => props.top};
        right: ${props => props.right};
        bottom: ${props => props.bot};
        left: ${props => props.left};
        transform: translate(${props => props.translate})
        box-sizing: ${props => props.boxSizing};


        display: ${props => (props.centerX || props.centerY) ? 'flex' : null};
        justify-content: ${props => props.centerX ? 'center' : null};
        align-content: ${props => props.centerY ? 'center' : null};
        `;

StyledContainer.defaultProps = {
        bgColor: rgba(255, 255, 255, 0),
	width: '100%',
	height: 'auto',
	margin: '0px',
        overflow: 'hidden',
	padding: '0px',
        opacity: '1',
	theme: defaultTheme,
}

StyledContainer.propTypes = {
	width: PropTypes.string,
	margin: PropTypes.string,
	marginTop: PropTypes.string,
	marginBot: PropTypes.string,
	marginRight: PropTypes.string,
	marginLeft: PropTypes.string,
	padding: PropTypes.string,
	paddingTop: PropTypes.string,
	paddingBot: PropTypes.string,
	paddingRight: PropTypes.string,
	paddingLeft: PropTypes.string,
        justifyItems: PropTypes.string,
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
        alignContent: PropTypes.string,
        pos: PropTypes.string,
        top: PropTypes.string,
        right: PropTypes.string,
        bot: PropTypes.string,
        left: PropTypes.string,
	display: PropTypes.string,
	centerX: PropTypes.bool,
	centerY: PropTypes.bool,
        transparent: PropTypes.bool,
        opacity: PropTypes.string,
}

export default StyledContainer;
