import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

// Import Styled components
import StyledFormLabel from './styledComponents/StyledFormLabel';
import StyledInput from './styledComponents/StyledInput';


// Styled Components
const Label = styled.p`
	margin: 0;
	padding: 0;
	font-size: 22px;
	font-weight: bold;
	padding-bottom: 15px;
	`;

// Presentational component
class InputBox extends React.Component {
	render() {
		return (
			<Row>
				<Col xs="12">
					<Label>
						{this.props.label}
					</Label>
					<StyledInput
							required
							type={this.props.type}
							placeholder={this.props.placeholder}
							value={this.props.value}
							/>
				</Col>
			</Row>
			);
	}
}

export default InputBox;