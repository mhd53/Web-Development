import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

// Import Main components
import RowItems from './RowItems';

// Import Styled components
import StyledContainer from '../../styledComponents/StyledContainer';

// Raw Data
const COMPANY_LIST = ["Help", "Careers", "News", "Insurance",
                      "Media Kit", "About", "Contact Us", "Blog"];

const DISCOVER_LIST = ['How it Works', 'Request Service', 'Become a Member', 'Our Business',
                       'Terms of Use', 'Privacy Policy', 'Our Agreement']; 

const CITIES_LIST = ['Toronto', 'Calgary', 'Mississauga', 'Brampton', 'Ottawa', 'Edmonton', 'Montreal', 'Vancouver', 'Other'];

class RowContainer extends React.Component {
	render() {
		return (
			<Row>
				<Col>
					<RowItems items={COMPANY_LIST} header="Company" />
				</Col>
				<Col>
					<RowItems items={DISCOVER_LIST} header="Discover" />
				</Col>
				<Col>
					<RowItems items={CITIES_LIST} header="Cities" />
				</Col>
			</Row>
			);
	}
}

export default RowContainer;
