import * as React from 'react';
import { Text, StyleSheet,View } from 'react-native';


class AppHeader extends React.Component{

  render(){
    return(
      <View>

      <Text
      style={
styles.textContainer
      }
      >
      Dj Audio Mixer App 
      </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({

    textContainer :{
          backgroundColor:'yellow',
           marginBottom: 0,
            color : "black",
            fontWeight: 'bold',
            alignItems: 'center',
            fontSize:24
   
}
})
export default AppHeader