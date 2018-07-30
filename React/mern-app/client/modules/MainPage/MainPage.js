import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Col, Row, Container} from 'reactstrap';
import { Link } from 'react-router';

// Import StyledComponents
import StyledContainer from '../../components/styledComponents/StyledContainer';

// Import Components
import SiteNavbar from '../../components/mainComponents/SiteNavbar';
import CatalogNav from './components/CatalogNav/CatalogNav'; 
import MainPanel from './components/MainPanel/MainPanel';
import OurServices from './components/OurServices/OurServices';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Footer from '../../components/mainComponents/Footer/Footer';

class MainPage extends React.Component {
	render() {
		/*return (
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
			*/
		/*
		return (
			<StyledContainer >
				<Container>
					<SiteNavbar />
					<Row>
						<Col>
							<CatalogNav />
						</Col>
					</Row>
				</Container>
			</StyledContainer>
			);
			*/

		/*
		return (
			<Container>
				<StyledContainer>
					<SiteNavbar />
					<Row>
						<Col>
							<CatalogNav />
						</Col>
					</Row>
				</StyledContainer>
			</Container>

			);
			*/
		/*
		return (
			<StyledContainer>
				<SiteNavbar />
				<MainPanel header="Piano is amazing!" />
			</StyledContainer>
			);
			*/
		return (
			<Container className="d-flex justify-content-center" fluid>
				<StyledContainer>
					<h1>
					<Link to="/login">Login</Link>
					</h1>
					<SiteNavbar />
					<MainPanel header="Fluid is amazing!" />
					<OurServices />
					<ProductInfo />
					<StyledContainer paddingBot="600px">
					</StyledContainer>
					<Footer />
				</StyledContainer>
			</Container>
			);

	}

}

// Retrieve data from store as props
function mapStateToProps(store) {
	return {
		intl: store.intl,
	};
}

export default connect(mapStateToProps)(MainPage);
// export default MainPage;
// export default connect(MainPage);

// export default MainPage; 