import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function PhoneLogin({navigation}) {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("")

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            const res = await confirm.confirm(code);
            navigation.navigate('Home')
            console.log(JSON.stringify(res))
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    const sendOtp = () => {
        if (phoneNumber.length < 10) {
            alert("Enter Correct Phone Number")
        } else {
            signInWithPhoneNumber(`+91 ${phoneNumber}`)
        }
    }

    if (!confirm) {
        return (
            <>
                <View style={styles.container}>

                    <Text style={styles.heading}>Login Page</Text>
                    <TextInput value={phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                        placeholder="Enter Phone Number"
                        style={styles.loginInput} 
                        maxLength={10}/>
                    <Button title="Send OTP" onPress={() => sendOtp()} />
                </View>
            </>
        );
    }

    return (
        <>
            <View style={styles.container}>

                <Text style={styles.heading}>OTP Verification Page</Text>
                <TextInput value={code}
                    onChangeText={text => setCode(text)}
                    placeholder="Enter 6 Digits OTP"
                    style={styles.loginInput} 
                    maxLength={6}/>
                <Button title="Verify OTP" onPress={() => confirmCode()} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10
    },
    loginInput: {
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        marginTop: 20,
        width: "94%"
    }
})