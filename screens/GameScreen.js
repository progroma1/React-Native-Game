import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
};

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            {/* Guess */}
            <View>
                <Text>Higher or lower?</Text>
                {/* +
                - */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderColor: Colors.accent500,
        borderWidth: 2,
    },
});