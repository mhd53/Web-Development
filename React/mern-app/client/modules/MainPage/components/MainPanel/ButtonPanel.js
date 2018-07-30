import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row } from 'reactstrap';

// Import StyledComponents 
import StyledButton from '../../../../components/styledComponents/StyledButton';
import StyledContainer from '../../../../components/styledComponents/StyledContainer';

class ButtonPanel extends React.Component {
	render() {
		return (
			<StyledContainer className="button-panel" 
							 padding="50px"
							 centerX 
							 centerY>
				<Row>
					<Col xs="12" md="6">
						<StyledButton primary={this.props.isPrimFirst}
									  fontSize="1.5em">
							{this.props.firstButton}
						</StyledButton>
					</Col>
					<Col xs="12" md="6">
						<StyledButton primary={this.props.isPrimSecond}
									  fontSize="1.5em">
							{this.props.secondButton}
						</StyledButton>
					</Col>
				</Row>
			</StyledContainer>
			);
	}

}

ButtonPanel.propTypes = {
	isPrimFirst: PropTypes.boolean,
	isPrimSecond: PropTypes.boolean,
	firstButton: PropTypes.string,
	secondButton: PropTypes.string,
}

export default ButtonPanel;