import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import SoundButton from './components/SoundButton';
import AppHeader from './components/AppHeader';
import StopButton from './components/StopButton';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 0,
          backgroundColor: 'black'
        }}>
        <AppHeader />
        <SoundButton
          title="Sound - 1"
          color="red"
          sound="https://soundbible.com//mp3/cartoon-birds-2_daniel-simion.mp3"
        />
        <SoundButton
          title="Sound - 2"
          color="blue"
          sound="https://soundbible.com//mp3/Little_Demon_Girl_Song-KillahChipmunk-2101926733.mp3"
        />
        <SoundButton
          title="Sound - 3"
          color="purple"
          sound="https://soundbible.com//mp3/large_waterfall_1-daniel_simon.mp3"
        />
        <SoundButton
          title="Sound - 4"
          color="green"
          sound="https://soundbible.com//mp3/Gewitter__Thunderstorm-Tim-1509815136.mp3"
        />
        <SoundButton
          title="Sound -5"
          color="cyan"
          sound="https://soundbible.com//mp3/alien-spaceship_daniel_simion.mp3"
        />
        
        <StopButton 
          title="STOP" 
          color="lime" 
        />
        
      </View>
    );
  }
}
