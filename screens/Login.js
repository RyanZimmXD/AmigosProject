import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text></Text>
            <TextInput style={styles.LoginTextInput} placeholder="Id #" />
            <TextInput style={styles.LoginTextInput} placeholder="password" />
            <StatusBar style="auto" />
            <Button title="Login" onPress={() => navigation.navigate('Main')} />
        </View>
    );
}

const styles = StyleSheet.create({
    LoginTextInput: {
        textAlign: 'center',
        height: '3%',
        width: '85%',
        marginBottom: '20px',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen; 
