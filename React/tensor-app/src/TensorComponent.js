import React from 'react';
import styled from 'styled-components';
import * as tf from '@tensorflow/tfjs';
import defaultTheme from './theme';
import {Col, Row, Container, Popover, PopoverHeader, PopoverBody} from 'reactstrap'; 

// Styled Components import 
import StyledModelTitle from './StyledComponents/StyledModelTitle';
import StyledContainer from './StyledComponents/StyledContainer';
import StyledButton from './StyledComponents/StyledButton';
import StyledForm from './StyledComponents/StyledForm';
import StyledFormLabel from './StyledComponents/StyledFormLabel';
import StyledInput from './StyledComponents/StyledInput';
import StyledOutput from './StyledComponents/StyledOutput';

/*
const StyledMainHeader = styled.div`
	background: ${({theme}) => theme.headerBgColor};
	width: 100%;
	height: 30px;
	`;

const StyledMainHeaderTitle = styled.h1`
	margin: 0;
	font-size: ${({theme}) => theme.headerFontSize};
	color: ${({theme}) => theme.headerFontColor};
	`;
*/



// Main Components

class PredictionInput extends React.Component {
	/*
	constructor(props) {
	  super(props);
	
	  this.state = {value: '', isValid: false, isPopOpen: false};

	  // Reference
	  this.invalid = React.createRef();

	  // Bind methods
	  this.setValue = this.setValue.bind(this);
	  this.getValue = this.getValue.bind(this);
	  this.setIsValid = this.setIsValid.bind(this);
	  this.getIsValid = this.getIsValid.bind(this);
	  this.setIsPopOpen = this.setIsPopOpen.bind(this);
	  this.getIsPopOpen = this.getIsPopOpen.bind(this);

	  // Class Methods
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.validate = this.validate.bind(this);
	}

	// Getter and setter methods
	setValue(newValue) {
		this.setState({value: newValue});
	}

	setIsValid(newBool) {
		this.setState({isValid: newBool});
	}

	setIsPopOpen(newBool) {
		this.setState({popOpen: newBool});
	}

	getValue() {
		return this.state.value;
	}

	getIsValid() {
		return this.state.invalidInput;
	}

	getIsPopOpen() {
		return this.state.popOpen;
	}
	*/

	/**
	 * Check to see whether the user input is valid or not.
	 * Uses /\[\d+,\s\d+\]/ regx to validate the input.
	 * @param  {string} userInput [value that the user has entered]
	 * @return {[bool]} isValid [true if userInput is valid]
	 */
	/*
	validate(userInput) {
		var regx = new RegExp("/\[\d+,\s\d\]/");  
		return regx.test(userInput);
	}
	*/

	/**
	 * Will update the state.value with what the user types in.
	 * @param  {react syntetic event]} e [description]
	 * @return {[type]}   [description]
	 */
	/*
	handleChange(e) {
		// alert(this.invalid.current.value);
		this.setValue(e.target.value);

		// Check to see if input is valid
		const isValid = this.validate(this.getValue());
		this.setIsValid(isValid);

	}
	*/

	/**
	 * Handle click method for the OK button.
	 * Will set state of the input to what the user has typed in.
	 * @return no return value.
	 */
	/*
	handleSubmit(e) {
		e.preventDefault();
		if (this.getIsValid()) {
			this.props.setInput(this.props.getInput());
		}

		else {
			const isPopOpen = true;
			this.setIsPopOpen(isPopOpen);
		}

	}
	*/

	render() {
		const value = this.props.value;
		return (
			<Row>
				<Col xs="12">
					<StyledFormLabel>
						Data point:
						<StyledInput 
								invalid={!this.props.isValid}
								required
								// ref={this.invalid}
								// pattern="\[\d+,\s\d+\]"
								type="text" 
								onChange={this.props.handleChange} 
								disabled={this.props.isFitted} 
								placeholder="Enter data point i.e [0, 0]" 
								value={value} />
						<StyledButton 
								primary
								type="submit"
								>
							OK
						</StyledButton>
					</StyledFormLabel>
				</Col>
			</Row>
			);
	}
}






// ML Components


/*
class CreateData extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {data: []};
	}

	createSynData() {
		return;

	}

	render() {
		return (
			null,
			);
	}

}
*/

class DatasetManager extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {dataset: []};
	}

	readData() {
	}

	loadData() {
		// this.setState({dataset: [xs, ys]});
	}

	render() {
		return (
			null
			);
	}
}



class OptimizationModel extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.f = this.f.bind(this);
	  this.minimize = this.minimize.bind(this);
	  this.runTest = this.runTest.bind(this);
	}

	/**
	 * Function to minimize.
	 * @param  {tensor} x -data
	 * @return {tensor}  computation graph
	 */
	f(x) {
		const f1 = x.pow(tf.scalar(6, 'int32')); // x^6
		const f2 = x.pow(tf.scalar(4, 'int32')).mul(tf.scalar(2)); // 2x^4
		const f3 = x.pow(tf.scalar(2, 'int32')).mul(tf.scalar(3));// 3x^2
		const f4 = tf.scalar(1); // 1

		return f1.add(f2).add(f3).add(x).add(f4);
	}

	/**
	 * Run training on the model and minimize the value of 'x' which
	 * in the context of ML, 'x' represents the training data.
	 * Therefore, the objective of the optimization algorithm is not to 
	 * minimize the loss of the model by finding optimal theta parameters 
	 * which in the context of ML, theta represents the weight of each feature 
	 * in the training dataset. Instead gradient descent is simply run on the
	 * function f(x) and returnes the global min of the function. 
	 *
	 * @param  {[type]} epochs -number of iterations over the dataset
	 * @param  {float} lr     -learning rate alpha
	 * @return {[tensor]}     -global minimum of f(x)
	 */
	minimize(epochs, lr) {
		let y = tf.variable(tf.scalar(2)) // initial value
		const optim = tf.train.adam(lr) // gradient descent algorithm
		for (let i = 0; i < epochs; i++) { // start minimization
			optim.minimize(() => this.f(y));
		}
		return y;
	}

	runTest() {
		this.minimize(200, 0.9).print();
	}

	render() {
		return (
			<StyledButton primary onClick={this.runTest}>
				Run Optimzation
			</StyledButton>
			);
	}


}

class TestLinearModel extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods`
	  this.linearModel = this.linearModel.bind(this); 
	  this.thisIsATest = this.thisIsATest.bind(this);
	  this.f = this.f.bind(this);
	  this.testFx = this.testFx.bind(this);
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
		const tensor_s = input.shape;

		// Operators
		const a = tf.tensor([1, 2, 3]);
		a.square().print();
		const a2 = a.square().square();
		a2.print();
		a.dispose();

	}

	testFx() {
		const x = tf.tensor([1, 2, 3]);
		this.f(x).print();
	}

	f(x) {
		return tf.tidy(() => {
			const y = x.square();
			const z = x.mul(y);
			return z;
		});
	}

	polyF(x) {
		// Optimization problem
		const f1 = x.pow(tf.scalar(6, 'int32')) // x^6
		const f2 = x.pow(tf.scalar(4, 'int32')).mul(tf.scalar(2)) // 2x^4
		const f3 = x.pow(tf.scalar(2, 'int32')).mul(tf.scalar(3)) // 3x^2
		const f4 = tf.scalar(1) // 1

		return f1.add(f2).add(f3).add(x).add(f4)
	}

	render() {
		return (
			<StyledContainer width="80%">
				<Container>
					<Row>
						<Col xs="4">
							<StyledButton primary onClick={this.linearModel}>
								Predict
							</StyledButton>
						</Col>
						<Col xs="4">
							<StyledButton onClick={this.thisIsATest}>
								Testing
							</StyledButton>
						</Col>

						<Col xs="4">
							<StyledButton onClick={this.testFx}>
								F(X)
							</StyledButton>
						</Col>
					</Row>

					<Row>
						<Col xs="6">
							<OptimizationModel />
						</Col>
					</Row>
				</Container>
			</StyledContainer>
			);
	}
}

