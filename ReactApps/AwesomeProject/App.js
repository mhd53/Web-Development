/*
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Platform, TouchableHighlight, TouchableOpacity,
		TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView, Image, ViewPagerAndroid, FlatList} from 'react-native';
*/

/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

// React Tutorial

// Part I: Hello World:

/*export default class HelloWorldApp extends Comment {
  render () {
    return (
      <View>
        <Text>Hello World!</Text>
        <Text>This is Awesome!</Text>
      </View>
      );
  }
}
*/

// Part II: Probs:

/*
class Greeting extends React.Component {
  render() {
    return (
      <Text style={{backgroundColor: '#000'}}>Hello {this.props.name}!</Text>
      );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Greeting style={{marginBottom: 100, backgroundColor: '#000'}} name='Rexxar' />
        <Greeting style={{paddingBottom: 100}} name='Jaina' />
        <Greeting style={{paddingBottom: 100}} name='Valeera' />
      </View>
      );

  }
} 
*/

// Part III: State:

/* 
class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return {isShowingText: !previousState.isShowingText};
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
        <Text style={{paddingBottom: 100}}>{display}</Text>
      );
  }
}

export default class BlinkApp extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 100}}>
        <Blink text='I love to blink' />
        <Blink text='Tes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me loook at me' />
      </View>
      );
  }
}
*/

// Part IV: Style:

/*
export default class LotsOfStyles extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
      );
  }
}
*/

/*
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: 'center',
  },

  bigblue: {
    marginTop: 30,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  red: {
    marginTop: 30,
    color: 'red',
  },
});
*/

// Part V: Height and Width:
/*
export default class FixedDimesionsBasics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor:'powderblue'}}/>
        <View style={{width: 100, height: 100, backgroundColor:'skyblue'}}/>
        <View style={{width: 150, height: 150, backgroundColor:'steelblue'}}/>
      </View>
      );
  }
}

*/

/*
export default class FlexDimensionsBasics extends React.Component {
  render() {
    return (
      // Try removing the 'flex: 1' on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add 'height: 300' instead of 'flex: 1'?

      <View style={{flex}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
      );
  }
}
*/

const customeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: 'black',
  },

  actionBar: {
    /*
    fontSize: 10,
    fontFamily: 'sans-serif',
    */
    height: 100,
  },

  statusBar: {
    flex: 1,
    backgroundColor: 'steelblue',
  },

  toolBar: {
    flex: 3,
    backgroundColor: 'skyblue',
  },

  toolbarText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginLeft: 10,

  }


});

/* 
// Custome App design
export default class CustomeDesign extends React.Component {
  render() {
    return (
        <View style={customeStyles.mainContainer}>
          <View style={customeStyles.actionBar}>
            <View style={customeStyles.statusBar}/>
            <View style={customeStyles.toolBar}>
              <Text style={customeStyles.toolbarText}>Custome Design</Text>
            </View>
          </View> 

        </View>
      );
  }

}
*/

// Part VI: Layout with Flexbox:

/*
export default class FlexDirectionBasics extends React.Component {
  render() {
    return (
      // Try setting 'flexDirection' to 'column'.
      <View style={{flex: 1, flexDirection: 'row', marginTop: 25}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      )
  }
}
*/

/*
export default class JustifyContentBasics extends React.Component {
  render() {
    return (
      // Try setting 'justifyContent' to 'center'.
      // Try setting 'flexDirection' to 'row'.
      <View style={{
        marginTop: 25,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <View style={{width: 50, height: 50, backgroundColor:'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor:'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor:'steelblue'}} />
      </View>
      );
  }
}
*/

/*
export default class AlignItemsBasics extends React.Component {
  render() {
    return (
        // Try setting 'alignItems' to 'flex-start'.
        // Try setting 'justifyContent' to 'flex-end'.
        // Try setting 'flexDirection' to 'row'.
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      );
  }
};
*/

// Part VII: Handling Text Input: 

/*
export default class PizzaTranslator extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10, marginTop: 25}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'pizza').join(' ')}
        </Text>
      </View>
      );
  }
}
*/

// Part VIII: Handling Touches 
/*
export default class ButtonBasics extends React.Component {
	_onPressButton() {
		Alert.alert("You tapped the button!")
	}

	render() {
		return (
			<View style={buttonStyles.container}>
				<View style={buttonStyles.buttonContainer}>
					<Button
						onPress={this._onPressButton}
						title="Press Me"
					/>
				</View>
				<View style={buttonStyles.buttonContainer}>
					<Button
						onPress={this._onPressButton}
						title="Press Me"
						color="#841584"
					/>
				</View>
				<View style={buttonStyles.alternativeLayoutButtonContainer}>
					<Button 
						onPress={this._onPressButton}
						title="This looks great!"
					/>
					<Button
						onPress={this._onPressButton}
						title="OK!"
						color="#841584"
					/>
				</View>
			</View>
			);
	}
}

const buttonStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},

	buttonContainer: {
		margin: 20,
	},

	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})
*/

// Touchable Buttons

/*
export default class Touchables extends React.Component {
	_onPressButton() {
		Alert.alert("You tapped the button!")
	}

	_onLongPressButton() {
		Alert.alert("You long-pressed the button!")
	}

	render() {
		return (
			<View  style = {touchableStyles.container}>
				<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
					<View style={touchableStyles.button}>
						<Text style={touchableStyles.buttonText}>TouchableHighlight</Text>
					</View>
				</TouchableHighlight>

				<TouchableOpacity onPress={this._onPressButton}>
					<View style={touchableStyles.button}>
						<Text style={touchableStyles.buttonText}>TouchableOpacity</Text>
					</View>
				</TouchableOpacity>

				<TouchableNativeFeedback
					onPress={this._onPressButton}
					background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
					<View style={touchableStyles.button}>
						<Text style={touchableStyles.buttonText}>TouchableNativeFeedback</Text>
					</View>
				</TouchableNativeFeedback>

				<TouchableWithoutFeedback onPress={this._onPressButton}>
					<View style={touchableStyles.button}>
						<Text style={touchableStyles.buttonText}>TouchableWithoutFeedback</Text>
					</View>
				</TouchableWithoutFeedback>

				<TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}  onLongPress={this._onLongPressButton} 
									underlayColor='white'>
					<View style={touchableStyles.button}>
						<Text style={touchableStyles.buttonText}>Touchable with Long Press</Text>
					</View>

				</TouchableHighlight>
			</View> 
			);
	}
}

const touchableStyles = StyleSheet.create ({
	container: {
		paddingTop: 60,
		alignItems: 'center',
	},

	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3',
	},

	buttonText: {
		padding: 20,
		color: 'white'
	}
})
*/

/*
Part: IX: ScrollView
export default class IScrolledDownAndWhatHappenedNextSchockedMe extends React.Component {
	render() {
		return (
			<ScrollView>
				<Text style={{fontSize: 96}}>Scroll me plz</Text>
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Text style={{fontSize: 96}}>If you like</Text>
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Text style={{fontSize: 96}}>Scrolling down</Text>
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Text style={{fontSize: 96}}>What's the best</Text>
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Text style={{fontSize: 96}}>Framework around?</Text>
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Image source={require('./react-native/img/favicon.png')} />
				<Text style={{fontSize: 96}}>React Native</Text>
			</ScrollView>
			);
	}
}
*/

// Extra: ViewPagerAndroid

/*
export default class ImplementAndroidTabView extends React.Component {
	render() {
		return (
			<ViewPagerAndroid
				style={styles.viewPager}
				initialPage={0}>

				<View style={styles.pageStyle} key="1">
					<Text>First page</Text>
				</View>

				<View style={styles.pageStyle} key="2">
					<Text>Second page</Text>
				</View>
			</ViewPagerAndroid>
			);
	}
}

const styles = StyleSheet.create({
	viewPager: {
		flex: 1,
	},

	pageStyle: {
		alignItems: 'center',
		padding: 20,
	}
});
*/

// Part X: Using List Views

/*
export default class FlatListBasics extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{key: 'Devin'},
						{key: 'Jackson'},
						{key: 'James'},
						{key: 'Joel'},
						{key: 'John'},
						{key: 'Jillian'},
						{key: 'Jimmy'},
						{key: 'Julie'},
						]}
					renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
					/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},

	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})
*/

// Data broken into logical sections: IOS UITableViews equiv
/*
import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

export default class SectionListBasics extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<SectionList
				 sections={[
				 	{title: 'D', data: ['Devin']},
				 	{title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John',
				 		'Julie']},
				 	]}

				 renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
				 renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
				 keyExtractor={(item, index) => index}
				 />
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},

	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247, 247, 247, 1.0)',
	},

	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})
*/

// Part XI: Networking

import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View} from 'react-native';

export default class FetchExample extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {isLoading: true};
	}

	componentDidMount() {
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					dataSource: responseJson.movies,
				}, function() {

				});

			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		if (this.state.isLoading) {
			return(
				<View style={{flex: 1, padding: 20,}}>
					<ActivityIndicator/>
				</View>
				)
		}

		return(
			<View style={{flex: 1, paddingTop: 20}}>
				<FlatList
					data={this.state.dataSource}
					renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
					keyExtractor={(item, index) => index.toString()} // fix warning: failed child context type
				/>
			</View>
			);
	}
}
