import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/colors';
import CustomButton from "../../components/ui/CustomButton";


export default function ForgotPassword({ onSwitchToLogin }) {

    const [emailValue, setEmailValue] = useState('');

    const handleBackToLogin = () => {
        onSwitchToLogin();
    }

    const ConfirmationEmailSent = () => {

        if (!emailValue.includes('@gmail.com') && !emailValue.includes('@hotmail.com')) {
            Alert.alert(
                'Invalid Email', 'Enter a valid email address', 
                [{text: 'okay', style: 'red'}]
            )
        }
        else {
            Alert.alert(
                'Email Sent', 'An email has been sent to reset your password', 
                [{text: 'okay', style: 'blue', onPress: handleBackToLogin}]
            )
            setEmailValue('');
        }
    }

    return(
        <View style = {ViewStyles.container}>
            <Text style = {TextStyles.title}>Forgot Password</Text>
            <View style={ViewStyles.emailView}>
                <Ionicons name="mail-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
                <TextInput
                style={TextStyles.email}
                placeholder="Email"
                onChangeText={text => setEmailValue(text)}
                value={emailValue}
                />
            </View>
            <CustomButton onPress={ConfirmationEmailSent}>
                <Text style={TextStyles.buttonText}>Reset Password</Text>
            </CustomButton>
            <View style={ViewStyles.loginMessageView}>
                <Text style={TextStyles.loginMessage}>Already Have An Account? </Text>
                <TouchableOpacity onPress={handleBackToLogin}>
                    <Text style={TextStyles.createAccount}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const ViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    loginMessageView: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    emailView: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 350,
        height: 50,
        paddingStart: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

});

const TextStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    title: {
        color: 'white',
        fontSize: 36,
        fontWeight: '600',
        marginBottom: 12,
    },
    loginMessage: {
        fontSize: 15.5,
        color: Colors.cardColor,
    },
    createAccount: {
        color: 'black',
        fontSize: 15.5,
        fontWeight: 'bold',
    },
    email: {
        flex: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});

const IconsStyles = StyleSheet.create({
    EmailAndPasswordIcon: {
      paddingEnd: 10,
    },
  });