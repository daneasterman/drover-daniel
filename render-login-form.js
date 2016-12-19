render() {
  return (
    <View>   
      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} textAlign="left" placeholder="example@example.com" onSubmitEditing={this.onSubmitEdit} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} textAlign="left" onSubmitEditing={this.onSubmitEdit} />        
      <TouchableHighlight onPress={this.onSubmitEdit}><Text style={styles.button}>Log in</Text></TouchableHighlight>
    </View>
    )
}

const styles = StyleSheet.create ({

  input: {
    // marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1
  },

  button: {
   backgroundColor: 'limegreen',
   color: 'white',
   padding: 10,
   marginLeft: 10,
   marginRight: 10,
   marginTop: 10
 },

 label: {
  marginLeft: 10,
  marginTop: 10,
  marginBottom: 10
 }

})

