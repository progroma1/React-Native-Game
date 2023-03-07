import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreens}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreens}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreens: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});