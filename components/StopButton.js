import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class StopButton extends Component {
  playSound = async (sound) => {
    await Audio.Sound.createAsync({ uri: '' }, { shouldPlay: false });
  };

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: this.props.color,
          },
        ]}
        onPress={() => {
              Audio.setIsEnabledAsync(false);
            }}>
        <Text style={
          styles.buttonText
          }>
          {
            this.props.title
            }
            </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'rgb(0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 24,
    marginBottom: 50
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default StopButton;
