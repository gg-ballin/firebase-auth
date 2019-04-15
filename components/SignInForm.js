import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-6844d.cloudfunctions.net/'

class SignInForm extends Component {



state = { phone: '', code: ''}

handleSubmit = async () => {
    const { phone, code } = this.state;
    try{
        let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
            phone: phone, code: code
        });
        firebase.auth().signInAndRetrieveDataWithCustomToken(data.token);
    }catch(err) {
        console.log(err);
    }
    
}

render() {
    return (
        <View>
        <View style={{ marginBottom: 10 }}>
            <Input 
                label="Enter your phone number"
                value={this.state.phone}
                onChangeText={phone => this.setState({ phone})}
                
                />
        </View>
        <View style={{ marginBottom: 10 }}>
            <Input 
                label="Enter code"
                value={this.state.code}
                onChangeText={code => this.setState({ code})}
                
                />
        </View>
        <Button onPress={this.handleSubmit.bind(this)} title="Submit" />
        </View>
    );
    }
}

export default SignInForm;