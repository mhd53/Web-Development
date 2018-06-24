import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

// Part 0: Hello World
/*
ReactDOM.render(
	<h1>Hello, world!</h1>,
	document.getElementById('root')
	);
*/

// Part I: Introducing JSX
/*
const name = "Josh Prerez";
const element = <h1>Hello, {name}</h1>;
const user = {
	firstName: "Harper",
	lastName: "Perez",
};

const element2 = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
	);

const element3 = (
	<div>
		<h1>Hello!</h1>
		<h2>Good to see you here.</h2>
	</div>
	);

const element4 = React.createElement(
	'h1',
	{className: 'greeting'},
	'Hello, world!'
	);
*/

/*
const element5 = {
	type: 'h1',
	props: {
		className: 'greeting',
		children: 'Hello, world!'
	}
};
*/

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger. </h1>
}


/*
ReactDOM.render(
	// element,
	// element2,
	// element3, 
	element4,
	// element5,
	document.getElementById('root')
	);
*/

// Part II: Rendering Elements

/*
function tick() {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
		);
		ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
*/

// Part III: Components and Props

// React: Function Component use test
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

/*
const element = <Welcome name="Sara" />;
ReactDOM.render(
	element,
	document.getElementById('root')
);
*/

// React: Class Component use test
/*
class Welcome extends React.Component {
	render() {
		return (
			<h1>Hello, {this.props.name}</h1>
			);
	}
}

// React: Class Component use test
ReactDOM.render(
	<Welcome name="Sara"/>, document.getElementById('root')
	);
*/



/*
// React Native: Component use test
export default class LotsOfWelcomes extends React.Component {
	render() {
		return (
			<Welcome name="Sara" />
			);
	}
}
*/

// Composiong Components
/*
function App() {
	return (
		<div>
			<Welcome name="Sara" />
			<Welcome name="Cahal" />
			<Welcome name="Edite" />
		</div>
		);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	);
*/

// Extracting Components
/*
function Comment(props){
	return (
		<div className="Comment">
			<div className="UserInfo">
				<img className="Avatar"
					src={props.author.avatarUrl}
					alt={props.author.name}
				/>
				<div className="UserInfo-name">
					{props.author.name}
				</div>
			</div>

			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
		);
}

function Avatar(props) {
	return (
		<img className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name}
		/>
		);
} 

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">
				{props.user.name}
			</div>
		</div>
		);
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
		);
}
*/

// Part IV: State and Lifecyle 

/*
function Clock(props) {
	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {props.date.toLocaleTimeString()}.</h2>
		</div>
		);
}

ReactDOM.render(
	<Clock />,
	document.getElementById('root')
	);
*/


/*
class Clock extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				*/
				{/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
				/*
				<FormatedDate date={this.state.date} />

			</div>
			);
	}
}

function FormatedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

function App() {
	return (
		<div>
			<Clock />
			<Clock />
			<Clock />
		</div>
		);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	);

*/

// Part V: Handling Events
/*
class Toggle extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {isToggleOn: true};

	  // This binding is necessary to make 'this' work in the callback
	  this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
			);
	}
}

ReactDOM.render(
	<Toggle />,
	document.getElementById('root')
	);
	*/

// Part VI: Conditional Rendering
function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up.</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;

	return (isLoggedIn ? <UserGreeting /> : <GuestGreeting />);
}

// Greeting class with  extra functionality

/*
class Greeting extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {isLoggedIn: false};

	  // Bind method to this
	  this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isLoggedIn: !prevState.isLoggedIn
		}));
	}

	render() {
		return (
			<div>
				{this.state.isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
				<button onClick={this.handleClick}>
					{this.state.isLoggedIn ? 'Logout' : 'Sign up'}
				</button>
			</div>
			);
	}
}

ReactDOM.render(
	// Try changing to isLoggedIn={true}:
	<Greeting />,
	document.getElementById('root')
	);
	*/

// Element Variables

/*
function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
		);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
		);
}

class LoginControl extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {isLoggedIn: false};

	  // Bind methods
	  this.handleLoginClick = this.handleLoginClick.bind(this);
	  this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		isLoggedIn ? button = <LogoutButton onClick={this.handleLogoutClick} /> :
					button = <LoginButton onClick={this.handleLoginClick} />;

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
			);
	}
}

ReactDOM.render(
	<LoginControl />,
	document.getElementById('root')
	);
	*/

function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 &&
				<h2>
					You have {unreadMessages.length} unread messages.
				</h2>
			} {/*in javascript; true && expression = expression & 
								false && exoression = false */}
		</div>
		);
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
/*
ReactDOM.render(
	<Mailbox unreadMessages={messages}/>,
	document.getElementById('root')
	);
	*/

// Preventing Component from Rendering
function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}

	return (
		<div className="warning">
			Warning
		</div>
		);
}

class Page extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {showWarning: true};

	  // Bind Methods
	  this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(prevState => ({
			showWarning: !prevState.showWarning
		}));
	}

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
			</div>
			);
	}
}

/*
ReactDOM.render(
	<Page />,
	document.getElementById('root')	);
	*/

// Part VII: Lists and Keys    

/*
function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) => 
			<li key={number.toString()}>
				{number}
			</li>
		);

	return(
		<ul>{listItems}</ul>
		);
}
*/


/*
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
);
*/

// Extracting Components with Keys
function ListItem(props) {
	return <li>{props.value}</li>;
}

/*
function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) =>
		<ListItem key={number.toString()} value={number} />
		);

	return (
		<ul>
			{listItems}
		</ul>
		);
}
*/

/*
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
	);
*/

// Unique keys amoung siblings
function Blog(props) {
	const sidebar = (
		<ul>
			{props.posts.map((post) =>
				<li key={post.id}>
					{post.title}
				</li>
				)}
		</ul>
		);

	const content = props.posts.map((post) =>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
		);

	return (
		<div>
			{sidebar}
			<hr />
			{content}
		</div>
		);
}

const posts = [
	{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
	{id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

/*
ReactDOM.render(
	<Blog posts={posts} />,
	document.getElementById('root')
	);
*/

function NumberList(props) {
	const numbers = props.numbers;
	return (
		<ul>
			{numbers.map((number) =>
				<ListItem key={number.toString()} value={number} />
				)}
		</ul>
		);
}

/*
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList  numbers={numbers} />,
	document.getElementById('root')
	);
*/

// Part VIII: Forms
class NameForm extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {value: ''};
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name: 
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			);
	}
}

class EssayForm extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	value: 'Please write an essay about your favorite DOM element.'
	  };

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('An essay was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Essay:
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			);
	}
}

class FlavorForm extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {value: 'coconut'};

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Your favorite flavor is: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite La Croix flavor:
					{/*<select multiple={true} value={['B' ,'C']}> */}
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
			);
	}
}

class Reservation extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isGoing: true,
	  	numberOfGuests: 2
	  };

	  this.handleInputChange = this.handleInputChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		alert('Your reservation is complete: is going = ' + this.state.isGoing + '; number of guests = ' + this.state.numberOfGuests)
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Is going:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guests:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange} />
				</label>

				<input type="submit" value="Submit" />
			</form>
			);
	}

}

/*
ReactDOM.render(
	<Reservation />,
	document.getElementById('root')
	);
	*/

// Part IX: Lifting State up

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>;
	}
	return <p>The water would not boil.</p>;
}

/*
class Calculator extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {temperature: ''};

	  this.handleChange = this.handleChange.bind(this);
	}


	render() {
		const temperature = this.state.temperature;
		return (
			<fieldset>
				<legend>Enter temperature in Celsius:</legend>
				<input
					value={temperature}
					onChange={this.handleChange} />
				<BoilingVerdict 
					celsius={parseFloat(temperature)} />
			</fieldset>
			);
	}
}
*/

// Adding a second input

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}

	return (Math.round(convert(input) * 1000) / 1000).toString();
}

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		// Before: this.setState({temperature: e.target.value});
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		// Before: const temperature = this.state.temperature;
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
			);
	}
}

class Calculator extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {temperature: '', scale: 'c'};

	  this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
	  this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature});
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput 
					scale="c" 
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput 
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange} />

				<BoilingVerdict
					celsius={parseFloat(celsius)} />
			</div>
			);
	}
}


/*
ReactDOM.render (
	<Calculator />,
	document.getElementById('root')
	)
*/

// Part X: Composition vs Inheritance

function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
		);
}

function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
		);
}

function WelcomeDialog() {
	return (
		<Dialog
			title="Welcome"
			message="Thank you for visiting our spacecraft!" />
		);
}

class SignUpDialog extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {login: ''};

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleChange(e) {
		this.setState({login: e.target.value});
	}

	handleSignUp() {
		alert(`Welcome aboard, ${this.state.login}!`);
	}

	render() {
		return (
			<Dialog title="Mars Exploration Program"
				message="How should we refer to you?">

				<input value={this.state.login}
					onChange={this.handleChange} />

				<button onClick={this.handleSignUp}>
					Sign Me Up!
				</button>
			</Dialog>
			);
	}
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{props.left}
			</div>
			<div className="SplitPane-right">
				{props.right}
			</div>
		</div>
		);
}

/*
function App() {
	return (
		<SplitPane
			left={
				<Contacts />
			}
			right={
				<Chat />
			} />
		);
}
*/

/*
ReactDOM.render (
	<SignUpDialog />,
	document.getElementById('root')
	)
	*/

// Part XI: Thinking in React
class ProductCategoryRow extends React.Component {
	render() {
		const category = this.props.category;
		return (
			<tr>
				<th colSpan="2">
					{category}
				</th>
			</tr>
			);
	}
}

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.stocked ? product.name : 
		<span style={{color: 'red'}}>
			{product.name}
		</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
			);
	}
}

class ProductTable extends React.Component {
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		const rows = [];
		let lastCategory = null;

		this.props.products.forEach((product) => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			}

			if (inStockOnly && !product.stocked) {
				return;
			}

			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category} />
					);
			}

			rows.push(
				<ProductRow
					product={product}
					key={product.name} />
				);
			lastCategory = product.category;
		});
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			);
	}
}

class SearchBar extends React.Component {
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		return (
			<form>
				<input type="text" placeholder="Search..." value={filterText} onChange={this.props.handleChange} />
				<p>
					<input type="checkbox" checked={inStockOnly} onChange={this.props.handleClick} />
					{' '}
					Only show products in stock
				</p>
			</form>
			);
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {filterText: '', inStockOnly: false};

	  // Bind methods
	  this.handleChange = this.handleChange.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({filterText: e.target.value})
	}

	handleClick() {
		this.setState(prevState => ({
			inStockOnly: !prevState.inStockOnly
		}));
	}


	render() {
		return (
			<div>
				<SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} handleChange={this.handleChange} handleClick={this.handleClick} />
				<ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
			</div>
			);
	}
}

const PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
	<FilterableProductTable products={PRODUCTS} />,
	document.getElementById('root')
	)
