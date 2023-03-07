import { StyleSheet, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.rootScreens}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreens: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
});