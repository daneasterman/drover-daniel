import React, { Component } from 'react';
import { AppRegistry, Alert, View, TextInput, TouchableHighlight, Text } from 'react-native';
import Style from './Style';

class DroverDaniel extends Component { 

    onPressButtonPOST (){

      // let creds = {"partner[email]":"daniel.easterman@gmail.com","partner[password]": "mypassword"};

      fetch("https://drover-test.herokuapp.com/app_partners/sign_in", {
        method: "POST",        
        body: JSON.stringify({
          "partner[email]":"daniel.easterman@gmail.com", "partner[password]": "mypassword"})
      })
      .then((response) => response.json())
      .then((responseData) => {
        Alert.alert('Token is :', responseData.api_token,'')
      })
      .done();
    }

    // import / export login form


    render() {
      return (
        <View style={Style.container}>      
        <TouchableHighlight onPress={this.onPressButtonPOST} style={Style.button}>
        <Text>POST</Text>
        </TouchableHighlight>
        </View>
        );
    }

}

AppRegistry.registerComponent('DroverDaniel', () => DroverDaniel);