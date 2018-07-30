import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSectionHeader = styled.h3`
	margin: 0;
	font-family: ${({theme}) => theme.headerFont}; 
	color: ${({theme}) => theme.headerFontColor};
	padding: 10px;

	`;

export default StyledSectionHeader;

