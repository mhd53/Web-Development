import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';


// Import Main components
import SiteNavbar from '../../components/mainComponents/SiteNavbar';
import LoginBox from './components/LoginBox';
import Footer from '../../components/mainComponents/Footer/Footer';

// Import Styled components
import StyledContainer from '../../components/styledComponents/StyledContainer';

class LoginPage extends React.Component {
	render() {
		return (
			<Container className="d-flex justify-content-center" fluid>
				<StyledContainer>
					<SiteNavbar />
					<StyledContainer centerX centerY>
						<LoginBox width="420px" height="520px"  />
					</StyledContainer>
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

export default connect(mapStateToProps)(LoginPage);
// export default LoginPage;
