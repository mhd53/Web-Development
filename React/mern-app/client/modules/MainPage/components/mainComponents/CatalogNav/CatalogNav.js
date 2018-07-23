import React from 'react';
import { Navbar,
		 NavbarBrand,
		 Nav,
		 NavItem,
		 NavLink } from 'reactstrap';

import styled from 'styled-components';

// Import components
import ListContainer from './ListContainer';

// Import StyledComponents
import StyledContainer from '../../../../../components/styledComponents/StyledContainer';
// import StyledListHeader from '../styledComponents/StyledListHeader';

// Styled Components
const StyledListContainer = styled.div`
	padding: '8px';
	`;

const CATALOGITEMS = ['hello', 'world', 'living', 'louder', 'and stronger'];



class CatalogNav extends React.Component {
	render() {
		return (
			<StyledContainer className="catalog-nav" width="30%">
				<ListContainer header="Amazing!" items={CATALOGITEMS} />
			</StyledContainer>
			);
	}

}

export default CatalogNav;
