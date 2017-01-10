import React, { Component } from 'react';
import { AppRegistry, Alert, View, TextInput, TouchableHighlight, Text } from 'react-native';

import Style from './Style';
// import LoginForm from './LoginForm';

class DroverDaniel extends Component {    

    onPressButtonPOST() {
      // let creds = {"partner[email]":"daniel.easterman@gmail.com","partner[password]": "mypassword"};

      fetch("https://drover-test.herokuapp.com/app_partners/sign_in", {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'partner%5Bemail%5D=daniel.easterman%40gmail.com&partner%5Bpassword%5D=mypassword'
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        Alert.alert('Token is :', data.api_token,'')
        console.log(data);
      }).catch(function(err) {
        console.log(err);
      });
    }

    render() {
      return (

        <View style={Style.rootContainer}>     

        <View style={Style.buttonContainer}>     
        <TouchableHighlight onPress={this.onPressButtonPOST} style={Style.button}>
        <Text>POST</Text>
        </TouchableHighlight>
        </View>               

        </View>        
        
        )
    }

} // End Class

AppRegistry.registerComponent('DroverDaniel', () => DroverDaniel);