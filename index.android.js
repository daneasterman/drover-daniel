import React, { Component } from 'react';
import { AppRegistry, Alert, StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native';

var DroverDaniel = React.createClass({

  _onPressButtonPOST: function() {

    let myBody = JSON.stringify({"partner[email]": "daniel.easterman@gmail.com", "partner[password]": "mypassword"});

    let myInit = { method: 'POST', cache: 'default', body: myBody };
    
    fetch("https://drover-test.herokuapp.com/app_partners/sign_in", myInit).then(function(response) {
      return response.json();
    }).then(function(j) {    
      Alert.alert("POST Response", "Response Body -> " + j.api_token)
      console.log(j);
    }).catch(function(err) {
    console.log(err);
    // Alert.alert("Response Body -> " +err);
    });

  },    

  render: function() {
    return (
      <View style={styles.container}>      
      <TouchableHighlight onPress={this._onPressButtonPOST} style={styles.button}>
      <Text>POST</Text>
      </TouchableHighlight>
      </View>
      );
  }

});

  var styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   button: {
     backgroundColor: '#eeeeee',
     padding: 10,
     marginRight: 5,
     marginLeft: 5,
   }
 });

AppRegistry.registerComponent('DroverDaniel', () => DroverDaniel);


// fetch('https://davidwalsh.name/demo/arsenal.json').then(function(response) { 
//   // Convert to JSON
//   return response.json();
// }).then(function(j) {
//   // Yay, `j` is a JavaScript object
//   console.log(j); 
// });