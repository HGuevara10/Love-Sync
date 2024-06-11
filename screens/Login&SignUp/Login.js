import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/colors';
import CustomButton from '../../components/ui/CustomButton';

export default function Login({ onSwitchToSignUp, onSwitchToForgotPassword }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const resetInputHandler = () => {
    setEnteredUsername('');
    setEnteredPassword('');
  };

  const handleForgotPassword = () => {
    onSwitchToForgotPassword();
  };

  const handleCreateAccount = () => {
    onSwitchToSignUp();
  };

  const handleUserAndPassInput = () => {
    if (enteredUsername.length === 0 || enteredPassword.length === 0) {
      Alert.alert(
        'Invalid Username or Password',
        'You must enter both a username and password.',
        [{text: 'Okay', style: 'blue', onPress: resetInputHandler}]
      )
    } else {
      console.log('Username: ' + enteredUsername + ' Password: ' + enteredPassword);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={enteredUsername}
          onChangeText={setEnteredUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={enteredPassword}
          onChangeText={setEnteredPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <CustomButton onPress={handleUserAndPassInput}>
        <Text style={styles.buttonText}>Login</Text>
      </CustomButton>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        
      </TouchableOpacity>
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccountButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  forgotPassword: {
    fontSize: 15.5,
    color: Colors.cardColor,
    marginTop: 10,
  },
  createAccountContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  createAccountText: {
    color: Colors.cardColor,
    fontSize: 15.5,

  },
  createAccountButton: {
    color: 'black',
    fontSize: 15.5,
    fontWeight: 'bold',
  },
});
