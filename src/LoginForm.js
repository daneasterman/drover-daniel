import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';

export default class LoginForm extends Component {

  render() {
    return (
      <View>   
      <Text style={Style.label}>E-mail</Text>
      <TextInput style={Style.input} placeholder="example@example.com" onSubmitEditing={this.onSubmitEdit} />
      <Text style={Style.label}>Password</Text>
      <TextInput style={Style.input} textAlign="left" onSubmitEditing={this.onSubmitEdit} />        
      <TouchableHighlight onPress={this.onSubmitEdit}><Text style={Style.button}>Log in</Text></TouchableHighlight>
      </View>
      )
  }

}

