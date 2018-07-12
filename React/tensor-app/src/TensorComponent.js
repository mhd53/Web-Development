import React from 'react';
import styled from 'styled-components';
import * as tf from '@tensorflow/tfjs';
import defaultTheme from './theme';
import {Col, Row, Container} from 'reactstrap';

// Styled Components
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

const StyledModelTitle = styled.h1`
	margin: 0;
	font-size: ${({theme}) => theme.header1FontSize};
	color: ${({theme}) => theme.headerFontColor};
	`;

const StyledContainer = styled.div`
	background: ${({theme}) => theme.background};
	font-family: ${({theme}) => theme.fontFamily};
	overflow: hidden;
	width: ${props => props.width};
	margin-top: ${props => props.marginTop};
	margin-bottom: ${props => props.marginBot};
	margin-left: ${props => props.marginLeft};
	margin-right: ${props => props.marginTop};
	`; 

const StyledButton = styled.button`
	background: ${props => props.primary ? props.theme.buttonBgColor : 'white'};
	color: ${props => props.primary ? props.theme.buttonFontColor : props.theme.buttonBgColor};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${({theme}) => theme.borderColor};
	opacity: ${props => props.disabled ? .5 : 1};
	border-radius: 4px;
	`;

const StyledForm = styled.form`
	width: 100%;
	height: ${props => props.height};
	border: 4px solid black;
	border-radius: 4px;
	`;

const StyledFormLabel = styled.label`
	font-size: 1em;
	margin: 1em;
	padding 0.25em 1em;
	`;
const StyledInput = styled.input`
	width: 80%;
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 5px;
	border: 2px solid ${({theme}) => theme.borderColor};
	color ${props => props.invalid ? '#E53935' : ''};
	font-size: 16px; 
	opacity: ${props => props.disabled ? .5 : 1}; 
	border-radius: 4px;

	`;

const StyledOutput = styled.output`
	width: 80%;
	height: 30px;
	margin-top: 20px;
	margin-buttom: 20px;
	padding: 5px;

	border: 2px solid ${({theme}) => theme.borderColor};
	border-radius: 4px;
	`;

StyledButton.defaultProps = {
	theme: defaultTheme, 
}

StyledInput.defaultProps = {
	theme: defaultTheme,
}

StyledOutput.defaultProps = {
	theme: defaultTheme,
}

// Main Components

class PredictionInput extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {value: '', isValid: false};

	  // Reference
	  this.invalid = React.createRef();

	  // Bind methods
	  this.setValue = this.setValue.bind(this);
	  this.getValue = this.getValue.bind(this);
	  this.setIsValid = this.setIsValid.bind(this);
	  this.getIsValid = this.getIsValid.bind(this);

	  this.handleChange = this.handleChange.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	}

	// Getter and setter methods
	setValue(newValue) {
		this.setState({value: newValue});
	}

	setIsValid(newBool) {
		this.setState({isValid: newBool});
	}

	getValue() {
		return this.state.value;
	}

	getIsValid() {
		return this.state.invalidInput;
	}

	/**
	 * Check to see whether the user input is valid or not.
	 * Uses /\[\d+,\s\d+\]/ regx to validate the input.
	 * @param  {string} userInput [value that the user has entered]
	 * @return {[bool]} isValid [true if userInput is valid]
	 */
	validate(userInput) {

	}

	/**
	 * Will update the state.value with what the user types in.
	 * @param  {react syntetic event]} e [description]
	 * @return {[type]}   [description]
	 */
	handleChange(e) {
		alert(this.invalid.current.value);
		this.setValue(e.target.value);
	}

	/**
	 * Handle click method for the OK button.
	 * Will set state of the input to what the user has typed in.
	 * @return no return value.
	 */
	handleClick() {
		if (this.getIsValid()) {
			this.props.setInput(this.props.getInput());
		}
	}

	checkValidInput() {
		const userInput = this.props.getValue();
	}

	render() {
		const value = this.state.value;
		return (
			<Row>
				<Col xs="12">
					<StyledFormLabel>
						Data point:
						<StyledInput 
								required
								ref={this.invalid}
								pattern="\[\d+,\s\d+\]"
								type="text" 
								onChange={this.handleChange} 
								disabled={this.props.isFitted} 
								placeholder="Enter data point i.e [0, 0]" 
								value={value} />
						<StyledButton 
								primary
								>
							OK
						</StyledButton>
					</StyledFormLabel>
				</Col>
			</Row>
			);
	}
}


/**
 * Presentational components:
 */
class PredictionOutput extends React.Component {
	render() {
		const output = this.props.output;
		return (
			<Row>
				<Col xs="12">
					<StyledFormLabel>
						Result Prediction:
						<StyledOutput name="result"> 
							{output}
						</StyledOutput> 
					</StyledFormLabel>
				</Col>
			</Row>
			);
	}
}

class ResultForm extends React.Component {
	render() {
		const isFitted = this.props.getIsFitted();
		return (
			<Row>
				<Col xs="12">
					<StyledContainer className="result-form" marginTop="20px">
						<StyledForm >
							<PredictionInput 
									className="prediction-input" 
									isFitted={isFitted} 
									/>
							<PredictionOutput 
									className="prediction-output" 
									output={this.props.output} 
									/>
						</StyledForm>
					</StyledContainer>
				</Col>
			</Row>
			);
	}
}

class ModelContainer extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {input: '', isFitted: false};

	  // Bind methods
	  this.setInput = this.setInput.bind(this);
	  this.setIsFitted = this.setIsFitted.bind(this);
	  this.getInput = this.setInput.bind(this);
	  this.getIsFitted = this.getIsFitted.bind(this);
	}
	// Setter and getter methods (some standards should remain the same)
	setInput(newInput) {
		this.setState({input: newInput});
	}

	setIsFitted(newBool) {
		this.setState({isFitted: newBool});
	}

	getInput() {
		return this.state.input;
	}

	getIsFitted(newBool) {
		return this.state.isFitted;
	}

	render() {
		const modelName = this.props.modelName;
		let model;
		if (modelName == 'snn') {
			/* Create a Simple Neural Net model. */
			model = <SimpleNN dataset={this.props.dataset} 
							  setInput={this.setInput} 
							  setIsFitted={this.setIsFitted}
							  getInput={this.getInput}
							  getIsFitted={this.getIsFitted}
							  title="Simple Neural Net Powers!" 
							  />
		}


		return (
			<StyledContainer width="100%">
			{/* Use conditional render + model state to render different models */}
			<Container>
				<Row className="model">
					<Col xs="12">
						{model}
					</Col>
				</Row>

				<Row className="modelForm">
					<Col xs="12">
						<ResultForm setInput={this.setInput}
									setIsFitted={this.setIsFitted}
									getInput={this.getInput}
									getIsFitted={this.getIsFitted}
									/>
					</Col>
				</Row>
			</Container>
			</StyledContainer>
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
		this.setState({dataset: [xs, ys]});
	}

	render() {
		return (
			null
			);
	}
}

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

const xs = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
const ys = tf.tensor2d([[0], [1], [1], [0]]);

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

export default ModelContainer; 
