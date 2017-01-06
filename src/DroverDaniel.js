import React, { Component } from 'react';
import { AppRegistry, Alert, View, TextInput, TouchableHighlight, Text } from 'react-native';

import Style from './Style';
// import LoginForm from './LoginForm';

class DroverDaniel extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'example@example.com' };
      }

    onPressButtonPOST() {
      // let creds = {"partner[email]":"daniel.easterman@gmail.com","partner[password]": "mypassword"};

      fetch("https://drover-test.herokuapp.com/app_partners/sign_in", {
        method: "POST",        
        body: JSON.stringify({
          "partner[email]":"daniel.easterman@gmail.com", "partner[password]": "mypassword"})
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        Alert.alert('Token is :', data.api_token,'')
        console.log(data);
      }).catch(function(err) {
        console.log(err);
      });    
    }

    onSubmitEdit() {




    }


    render() {
      return (

        <View style={Style.rootContainer}>     

        <View style={Style.buttonContainer}>     
        <TouchableHighlight onPress={this.onPressButtonPOST} style={Style.button}>
        <Text>POST</Text>
        </TouchableHighlight>
        </View>        
        
        <View style={Style.formContainer}>
        <Text style={Style.label}>E-mail</Text>
        <TextInput style={Style.input} onSubmitEditing={this.onSubmitEdit} />
        <Text style={Style.label}>Password</Text>
        <TextInput style={Style.input} textAlign="left" onSubmitEditing={this.onSubmitEdit} />        
        <TouchableHighlight onPress={this.onSubmitEdit}><Text style={Style.button}>Log in</Text></TouchableHighlight>
        </View>

        </View>        
        
        )
    }

} // End Class

AppRegistry.registerComponent('DroverDaniel', () => DroverDaniel);