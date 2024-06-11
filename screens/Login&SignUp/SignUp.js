import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import CustomButton from "../../components/ui/CustomButton";
import Colors from '../../constants/colors';

export default function SignUp({ onSwitchToLogin }) {
  
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const handleCreateAccount = () => {
    onSwitchToLogin();
  }

  function Encryption(password) {
    let encryptedString = '';

    for (let i = 0; i < password.length; i++) {
        encryptedString += String.fromCharCode(password.charCodeAt(i) + 1);
    }
    return encryptedString;
  }

  const SignUpHandler = () => {

    let totalErrorCount = 0;
    let emailError = 0;
    let nameError = 0;
    let passwordError = 0;
    let confirmPasswordError = 0;

    let errorMessage = '';

    if (!emailValue.includes('@gmail.com') && !emailValue.includes('@hotmail.com')) {
        totalErrorCount += 1;
        emailError += 1;
    
        if (emailError === 1 && totalErrorCount <= 1) {
            errorMessage = 'Invalid Email Address';
        }
    }

    if(nameValue.length === 0) {
        totalErrorCount += 1;
        nameError += 1;

        if(nameError === 1 && totalErrorCount <= 1) {
            errorMessage = 'Empty Name';
        }
    }

    if (passwordValue.length < 10 || !/[!@#$%&*()<>?+\-=_]/.test(passwordValue)) {
        totalErrorCount += 1;
        passwordError += 1;
    
        if (passwordError === 1 && totalErrorCount <= 1) {
            errorMessage = 'Password must be at least 10 characters long and include a special character';
        }
    }

    if(confirmPasswordValue != passwordValue) {
        totalErrorCount += 1;
        confirmPasswordError += 1;

        if(confirmPasswordError === 1 && totalErrorCount <= 1) {
            errorMessage = 'Passwords Do Not Match';
        }

    }

    if (totalErrorCount > 1) {
        errorMessage = 'Multiple Input Errors';
    }

    if(totalErrorCount === 0 && emailError === 0 && nameError === 0 && passwordError === 0 && confirmPasswordError === 0 ) {
        //console.log("Account created with no issues");
        Alert.alert(
          'Account Created', 'Log in to use app features',
          [{text: 'Okay', style: 'blue', onPress: onSwitchToLogin}]
        )
    }
    else {
        Alert.alert(
        'Error Creating Account', errorMessage,
        [{text: 'Okay', style: 'blue',}]
      )
    }
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 52, android: 60 })}
    >
      <ScrollView contentContainerStyle={ViewStyles.scrollView}>
        <View style={ViewStyles.totalView}>
          <Text style={TextStyles.title}>Create an Account</Text>
          <View style={ViewStyles.emailView}>
            <Ionicons name="mail-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
            <TextInput
              style={TextStyles.email}
              placeholder="Email"
              onChangeText={text => setEmailValue(text)}
              value={emailValue}
            />
          </View>
          <View style={ViewStyles.emailView}>
            <Ionicons name="person-circle-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
            <TextInput
              style={TextStyles.email}
              placeholder="Name"
              value={nameValue}
              onChangeText={text => setNameValue(text)}
            />
          </View>
          <View style={ViewStyles.passwordView}>
            <Ionicons name="lock-closed-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
            <TextInput
              style={TextStyles.email}
              placeholder="Password"
              value={passwordValue}
              secureTextEntry={true}
              onChangeText={text => setPasswordValue(text)}
            />
          </View>
          <View style={ViewStyles.confirmPasswordView}>
            <Ionicons name="lock-closed-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
            <TextInput
              style={TextStyles.email}
              placeholder="Confirm Password"
              value={confirmPasswordValue}
              secureTextEntry={true}
              onChangeText={text => setConfirmPasswordValue(text)}
            />
          </View>
          <CustomButton onPress={SignUpHandler}>
            <Text style={TextStyles.buttonText}>Sign Up</Text>
          </CustomButton>
          <View style={ViewStyles.loginMessageView}>
            <Text style={TextStyles.loginMessage}>Already Have An Account? </Text>
            <TouchableOpacity onPress={handleCreateAccount}>
              <Text style={TextStyles.createAccount}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const ViewStyles = StyleSheet.create({
  totalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordView: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 350,
    height: 50,
    paddingStart: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  confirmPasswordView: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 350,
    height: 50,
    paddingStart: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  loginMessageView: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

const TextStyles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
    marginBottom: 12,
  },
  email: {
    flex: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
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
});

const IconsStyles = StyleSheet.create({
  EmailAndPasswordIcon: {
    paddingEnd: 10,
  },
});
