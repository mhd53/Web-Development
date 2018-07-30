import React from 'react';
import styled from 'styled-components';
import { Collapse,
		 Navbar,
		 NavbarToggler,
		 NavbarBrand,
		 Nav,
		 NavItem,
		 NavLink,
		 Dropdown,
		 DropdownToggle,
		 DropdownMenu,
		 DropdownItem } from 'reactstrap';

// Import StyledComponents
import StyledContainer from '../styledComponents/StyledContainer';
import StyledNavHeader from '../styledComponents/StyledNavHeader';
import StyledNavLink from '../styledComponents/StyledNavLink';

// Styled Components
const StyledSpace = styled.div`
	margin-right: '50px';
	`;

const StyledNavG1 = styled.div`
	margin: 0;
	margin-right: '50px';
	`;

const StyledNavG2 = styled.div`
	margin: 0;
	`;


// Main Components

class SiteNavbar extends React.Component {
	render() {
		return (
			<StyledContainer className="nav-bar" padding="20px" >
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">
						<StyledNavHeader>
							Hello World
						</StyledNavHeader>
					</NavbarBrand>
					<NavbarToggler />
					<Collapse navbar>
						<Nav className="ml-auto" navbar>
							<Dropdown nav>
								<DropdownToggle nav caret >
									<StyledNavLink>
										Services
									</StyledNavLink>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>Home Cleaning</DropdownItem>
									<DropdownItem>Moving Help</DropdownItem>
									<DropdownItem>Housekeeping</DropdownItem>
								</DropdownMenu>
							</Dropdown>
							<NavItem>
								<NavLink>
									<StyledNavLink>
										Professionals
									</StyledNavLink>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<StyledNavLink>
										Shop
									</StyledNavLink>
								</NavLink>
							</NavItem>

							<StyledSpace />

							<NavItem>
								<NavLink>
									<StyledNavLink>
										Become a Pro
									</StyledNavLink>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<StyledNavLink>
										Help
									</StyledNavLink>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/login">
									<StyledNavLink>
										Log in
									</StyledNavLink>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</StyledContainer>
			);
	}
}

export default SiteNavbar;
