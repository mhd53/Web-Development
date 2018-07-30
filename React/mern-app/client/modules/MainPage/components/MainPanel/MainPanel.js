import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

// Import StyledComponents
import StyledContainer from '../../../../components/styledComponents/StyledContainer';
import StyledPanelHeader from './styledComponents/StyledPanelHeader';

// Import components 
import ButtonPanel from './ButtonPanel';

class MainPanel extends React.Component {
	render() {
		return (
			<StyledContainer className="main-panel" padding="20px">
			 	<StyledContainer className="panel-header" 
			 					 padding="25px"
			 					 centerX 
			 					 centerY>
					<Row>
						<Col xs="12" >
							<StyledPanelHeader>
								{this.props.header}
							</StyledPanelHeader>
						</Col>
					</Row>
				</StyledContainer>
				<ButtonPanel firstButton="First Button"
							 secondButton="Second Button"
							 isPrimFirst
							  />
			</StyledContainer>
			);
	}
}

MainPanel.defaultProps = {
  header: 'This website is amazing!'
}

MainPanel.propTypes = {
	header: PropTypes.string,
}

export default MainPanel;