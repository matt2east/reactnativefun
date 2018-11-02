import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import t from 'tcomb-form-native'; 

const Form = t.form.Form;

const User = t.struct({
  zipcode: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },

    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    zipcode: {
      error: 'We need a zipcode you jackass.'
    },
  },
  stylesheet: formStyles,
};

class FormFun extends Component {

    constructor(props){
        super(props);
        this.state ={ zipcode: ""}
      }
    
  handleSubmit = () => {
    const value = this._form.getValue();
    this.setState({zipcode: value.zipcode})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
        <Text>{this.state.zipcode}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});


export default FormFun