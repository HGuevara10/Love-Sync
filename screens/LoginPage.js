import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import Colors from '../constants/colors';
import CustomButton from '../components/ui/CustomButton';
import { Ionicons  } from '@expo/vector-icons';

export default function LoginPage() {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  function resetInputHandler() {
    setEnteredUsername('');
    setEnteredPassword('');
  }

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
  };;

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  const handleCreateAccount = () => {
    console.log('Create Account pressed');
  };

  return (
    <View style={styles.totalView}>
      <Text style={styles.titleText}>Login</Text>

      <View style={styles.textContainerUsername}>
        <Ionicons name="person-outline" size={24} style={styles.icons} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={enteredUsername}
          onChangeText={(text) => setEnteredUsername(text)}
        />
      </View>

      <View style={styles.textContainerPassword}>
        <Ionicons name="lock-closed-outline" size={24} style={styles.icons} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={enteredPassword}
          onChangeText={(text) => setEnteredPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <CustomButton onPress={handleUserAndPassInput}>
          <Text>Submit</Text>
        </CustomButton>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccount}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainerUsername: {
    width: 350,
    height: 50,
    backgroundColor: Colors.cardColor,
    paddingLeft: 9,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    marginVertical: 10,
  },
  textContainerPassword: {
    width: 350,
    height: 50,
    backgroundColor: Colors.cardColor,
    paddingLeft: 9,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    marginVertical: 5,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginTop: 5,
  },
  totalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 36,
    paddingBottom: 12,
  },
  buttonContainer: {
    width: 150,
    backgroundColor: Colors.cardColor,
    borderRadius: 28,
    marginTop: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: 'white',
  },
  createAccount: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  icons: {
    paddingEnd: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: 'black',
  },
  errorMessage: {
    color: '#ff4800',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
