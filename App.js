import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import Colors from './constants/colors';
import Login from './screens/Login&SignUp/Login';
import SignUp from './screens/Login&SignUp/SignUp';
import ForgotPassword from './screens/Login&SignUp/ForgotPassword';

export default function App() {
  const [screen, setScreen] = useState('login');

  const switchToLogin = () => setScreen('login');
  const switchToSignUp = () => setScreen('signup');
  const switchToForgotPassword = () => setScreen('forgotPassword');

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient 
        colors={[Colors.yellowAccent500, Colors.pinkAccent500, Colors.yellowAccent500]} 
        style={GradientStyles.gradient}
      >
        <View style={ViewStyles.container}>
          <ImageBackground 
            source={require('./assets/images/Couple2.jpg')}
            resizeMode='cover'
            style={ImageStyle.backgroundImage}
          />
          <View style={ViewStyles.container}>
            {screen === 'login' && <Login onSwitchToSignUp={switchToSignUp} onSwitchToForgotPassword={switchToForgotPassword} />}
            {screen === 'signup' && <SignUp onSwitchToLogin={switchToLogin} />}
            {screen === 'forgotPassword' && <ForgotPassword onSwitchToLogin={switchToLogin} />}
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

const GradientStyles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

const ViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    //borderColor: 'white'
  },
  screenContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const ImageStyle = StyleSheet.create({
  backgroundImage: {
    opacity: 0.15,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
