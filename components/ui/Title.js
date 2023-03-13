import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.accent500,
        textAlign: 'center',
        borderColor: Colors.accent500,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        maxWidth: '80%',
    },
});