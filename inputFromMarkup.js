<View style={Style.formContainer}>
<Text style={Style.label}>E-mail</Text>
<TextInput style={Style.input} onSubmitEditing={this.onSubmitEdit} />
<Text style={Style.label}>Password</Text>
<TextInput style={Style.input} textAlign="left" onSubmitEditing={this.onSubmitEdit} />        
<TouchableHighlight onPress={this.onSubmitEdit}><Text style={Style.button}>Log in</Text></TouchableHighlight>
</View>