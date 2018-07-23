import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Col, Row, Container} from 'reactstrap';

// Import StyledComponents
import StyledContainer from '../../components/styledComponents/StyledContainer';

// Import Components
import SiteNavbar from '../../components/mainComponents/SiteNavbar';
import CatalogNav from './components/mainComponents/CatalogNav/CatalogNav'; 

class MainPage extends React.Component {
	render() {
		return (
			<StyledContainer paddingLeft="100px" paddingRight="100px">
				<SiteNavbar />
				<Container>
					<Row>
						<Col>
							<CatalogNav />
						</Col>
					</Row>
				</Container>
			</StyledContainer>
			);

	}

}

// Retrieve data from store as props
// function mapStateToProps(store) {
// 	return {
// 		intl: store.intl,
// 	};
// }

// export default connect(mapStateToProps)(MainPage);
// export default connect(MainPage);

export default MainPage; 