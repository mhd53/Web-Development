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
	  this.setModel = this.setModel.bind(this);
	  this.getModel = this.getModel.bind(this);

	  // Component methods
	  this.formateInput = this.formateInput.bind(this);
	  this.formateOutput = this.formateOutput.bind(this);
	  this.checkDatasetSpec = this.checkDatasetSpec.bind(this);
	  this.fit = this.fit.bind(this);
	  this.predict = this.predict.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	}

	setModel(newModel) {
		this.setState({model: newModel});
	}

	getModel() {
		return this.state.model;
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

	checkDatasetSpec() {
		const dataset = this.props.dataset;
		const xs = dataset[0];
		const ys = dataset[1];
		// const xs = tf.tensor2d(dataset[0]);
		// const ys = tf.tensor2d(dataset[1]);
		console.log("xs type: " + (typeof xs));
		console.log("ys type: " + (typeof ys));
		console.log("xs shape: " + xs.shape);
		console.log("ys shape: " + ys.shape);
		console.log("n = : " + xs.shape[1]);
		console.log("m = " + xs.shape[0]);
	}

	/**
	 * Take user input as string and formate it into one data point example.
	 * @return {[2d tensor]} array with the size and rank of one training example i.e. 1xn
	 */
	formateInput() {
		// Assign values
		const userInput = this.props.getInput();
		console.log("SimpleNN: formateInput: userInput = " + userInput);
		const dataset = this.props.dataset;
		const xs = dataset[0];

		// Get dataset shape
		const xs_s = xs.shape
		xs_s[0] = 1;
		// const n = xs.shape[1]; // num features
		// const m = xs.shape[0]; // num trainin examples

		// Extract values of each feature in the userInput
		const arrayVals = userInput.match(/\d+/g).map(Number);

		return tf.tensor(arrayVals, xs_s);
	}

	formateOutput(predVal) {
		return predVal.match(/\d+/)[0];
	}

	async fit() {
		var model = this.createModel();
		const dataset = this.props.dataset;
		const X = dataset[0];
		const Y = dataset[1];

		await model.fit(X, Y, {
			batchSize: 1,
			epochs: 1
		});

		console.log('Training finished!');

		// this.setState({model: model, isFitted: !this.state.isFitted}); // update model

		// Update snn state
		this.setModel(model);

		// Update model container state
		console.log("SimpleNN: fit: getIsFitted before = " + this.props.getIsFitted());
		this.props.setIsFitted(true);
		console.log("SimpleNN: fit: getIsFitted after = " + this.props.getIsFitted());
	}

	predict() {
		console.log("SimpleNN: prediction: input before " + this.props.getInput());
		if (this.props.getIsFitted() && this.props.getInput() != '') {
			const predData = this.formateInput(this.props.getInput());
			var model = this.getModel();
			const prediction = model.predict(predData);
			console.log("SimpleNN: predict: my prediction = " + prediction.print());
			console.log("SimpleNN: predict: my elem prediction = " + prediction.toString());

			// Set output value to prediction made by model
			const formatedOtp = this.formateOutput(prediction.toString());
			this.props.setOutput(formatedOtp);
			this.props.setOutput(prediction.toString());
		}
		// console.log("prediction data size: " + this.props.predData.size + 
		// 	", isFitted: " + this.props.isFitted);
		return;
	}

	render() {
		this.checkDatasetSpec();
		const isFitted = this.props.getIsFitted();
		const isValid = this.props.getIsValid();
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
						<StyledButton className='fit-button' primary value="fit-button" onClick={this.fit}>
							Fit model!
						</StyledButton>
					</Col>

					<Col>
						<StyledButton className='predict-button' primary onClick={this.predict} disabled={!isFitted || !isValid}>
							Predict! 
						</StyledButton>
					</Col>
				</Row>
			</StyledContainer>
			);
	}
}

export default SimpleNN;