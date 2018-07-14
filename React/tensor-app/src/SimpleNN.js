import React from 'react';
import {Col, Row} from 'reactstrap';
import * as tf from '@tensorflow/tfjs';

// Styled Components import 
import StyledContainer from './StyledComponents/StyledContainer';
import StyledButton from './StyledComponents/StyledButton';
import StyledModelTitle from './StyledComponents/StyledModelTitle';

class SimpleNN extends React.Component {
	constructor(props) {
	  super(props);
	
	  // this.state = {model: null, isFitted: false, dataset:[], predData: []};
	  this.state = {model: null};

	  // Bind methods
	  this.fit = this.fit.bind(this);
	  this.predict = this.predict.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		alert('You Clicked Me!' + this.props.fitButton);
		// console.log(this.props.id);
		// if (this.props.className === 'fit-button') {
		// if (this.props.fitButton) {
		// if (event.target.id == 'fit-button') {
		// this.setState(prevState => ({
		// 	isFitted: !prevState.isFitted,
		// }));
		if (event.target.value == "fit-button" && !this.state.isFitted) {
			this.setState(prevState => ({
				isFitted: !prevState.isFitted,
			}));
			// console.log('Hey I changed my state for you!');
			alert('You have succesfully changed states!');
		}

	}

	createModel() {
		var model = tf.sequential();
		model.add(tf.layers.dense({units: 8, inputShape: 2, activation: 'tanh'}));
		model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
		model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy', lr:0.1});
		return model;
	}

	loadData() {
		const dataset = this.props.dataset;
		const xs = dataset[0];
		const ys = dataset[1];
		return [xs, ys];
	}


	async fit() {
		var model = this.createModel();
		const dataset = this.props.dataset;
		const X = dataset[0];
		const Y = dataset[1];

		await model.fit(X, Y, {
			batchSize: 1,
			epochs: 5000
		});

		console.log('Training finished!');

		// this.setState({model: model, isFitted: !this.state.isFitted}); // update model

		// Update snn state
		this.setState({model: model});

		// Update model container state
		this.props.setIsFitted(true);
	}

	async predict() {
		if (this.props.isFitted && this.props.predData.size != 0) {
			var model = this.state.model;
			const prediction = await model.predict(this.props.predData);
			this.setState({predictionData: prediction});
		}
		console.log("prediction data size: " + this.props.predData.size + 
			", isFitted: " + this.props.isFitted);
		return;
	}

	render() {
		return (
			<StyledContainer className="snn-model" marginTop="20px">
				<Row className="snn-title">
					<Col>
						<StyledModelTitle>
							{this.props.title}
						</StyledModelTitle>
					</Col>
				</Row>

				<Row className="snn-buttons">
					<Col>
						<StyledButton className='fit-button' primary value="fit-button" onClick={this.handleClick}>
							Fit model!
						</StyledButton>
					</Col>

					<Col>
						<StyledButton className='predict-button' primary onClick={this.handleClick} disabled={!this.state.isFitted}>
							Predict! 
						</StyledButton>
					</Col>
				</Row>
			</StyledContainer>
			);
	}
}

export default SimpleNN;