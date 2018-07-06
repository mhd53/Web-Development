import React from 'react';
import styled from 'styled-components';
import * as tf from '@tensorflow/tfjs';
import defaultTheme from './theme';
import {Col, Row, Container} from 'reactstrap';

// Styled Components
const StyledContainer = styled.div`
	width: ${props => props.width};
	`; 

const StyledButton = styled.button`
	background: ${props => props.primary ? props.theme.buttonBgColor : 'white'};
	color: ${props => props.primary ? props.theme.buttonFontColor : props.theme.buttonBgColor};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${({theme}) => theme.buttonBgColor};
	`;

StyledButton.defaultProps = {
	theme: defaultTheme, 
}

// Main Components

class TestLinearModel extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods`
	  this.linearModel = this.linearModel.bind(this); 
	  this.thisIsATest = this.thisIsATest.bind(this);
	}

	/**
	 * Create a simple example of a linear model using tenerflow api.
	 * @return none
	 */

	linearModel() {
		// Define a model for linear regression.
		const model = tf.sequential();
		model.add(tf.layers.dense({units: 1, inputShape: [1]}));

		// Prepare the model for training: Specify the loss and the optimizer.
		model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

		// Generate some synthetic data for training.
		const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
		const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);


		// Train the model using the data.
		model.fit(xs, ys, {epochs: 10}).then(() => {
			// Use the model to do inference on a data point the model hasn't seen before:
			model.predict(tf.tensor2d([5], [1, 1])).print();
		});

	}

	/**
	 * Tensorflow test method
	 * @return none
	 */
	thisIsATest() {
		const tensor = tf.scalar(2);
		const input = tf.tensor([2, 2]);
		const tensor_s = input.shape.print();
	}

	render() {
		return (
			<StyledContainer>
				<Container>
					<Row>
						<Col xs="6">
							<StyledButton primary onClick={this.linearModel}>
								Predict
							</StyledButton>
						</Col>

						<Col xs="6">

						</Col>
					</Row>
				</Container>
				<StyledButton onClick={this.thisIsATest}>
					Testing
				</StyledButton>
			</StyledContainer>
			);
	}
}

export default TestLinearModel; 
