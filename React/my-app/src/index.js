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

function NumberList(props) {
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
		<li>{number}</li>
	);

}

ReactDOM.render(
	<ul>{listItems}</ul>,
	document.getElementById('root')
	);
