import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  
  rootContainer: {
    flex: 1,
    backgroundColor: '#eeeeee'
  },

  formContainer: {
    flex: 8,
  },

  buttonContainer: {
    flex: 2,
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#3E606F',
    padding: 10,
    marginRight: 5,
    marginLeft: 5,
  },

   input: {
     // marginTop: 10,
     marginLeft: 10,
     marginRight: 10,
     height: 40,
     borderColor: 'grey',
     borderWidth: 1,
     textAlign: "left"
   },

  label: {
   marginLeft: 10,
   marginTop: 10,
   marginBottom: 10
  }

});

export default Style;