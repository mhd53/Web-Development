import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
