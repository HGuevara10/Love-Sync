import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import LoginPage from './screens/LoginPage';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  let currentScreen = <LoginPage />;

  return (
    <>
      <StatusBar style = "light" />
      <LinearGradient 
        colors={[Colors.yellowAccent500, Colors.pinkAccent500, Colors.yellowAccent500]} 
        style={styles.gradient}
      >
        <View style={styles.container}>
          <ImageBackground 
            source={require('./assets/images/Couple2.jpg')}
            resizeMode='cover'
            style={styles.backgroundImage}
          >         
          </ImageBackground>
          <SafeAreaView style={styles.safeArea}>{currentScreen}</SafeAreaView>
        </View> 
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  safeArea: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
