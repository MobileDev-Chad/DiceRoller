import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: require("./src/images/dice1.png"),
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  playButtonPressed = () => {
    let randNum = this.getRandomValue();

    switch (randNum) {
      case 1:
        this.setState({ uri: require("./src/images/dice1.png") });
        break;
      case 2:
        this.setState({ uri: require("./src/images/dice2.png") });
        break;
      case 3:
        this.setState({ uri: require("./src/images/dice3.png") });
        break;
      case 4:
        this.setState({ uri: require("./src/images/dice4.png") });
        break;
      case 5:
        this.setState({ uri: require("./src/images/dice5.png") });
        break;
      case 6:
        this.setState({ uri: require("./src/images/dice6.png") });
        break;

      default:
        this.setState({ uri: require("./src/images/dice1.png") });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.uri} />
        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.gamebutton}> Roll Die! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A20CB",
    alignItems: "center",
    justifyContent: "center",
  },
  gamebutton: {
    marginTop: 35,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#FFF",
  },
});

export default App;
