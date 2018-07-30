import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../../theme';

const StyledItem = styled.h6`
	margin: 0;
	font-family: ${({theme}) => theme.fontFamily}; 
	color: gray;
	padding: 10px 0;
	`;

StyledItem.defaultProps = {
	theme: defaultTheme,

}

export default StyledItem;