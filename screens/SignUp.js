import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CustomButton from "../components/ui/CustomButton";

export default function SignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    const SignUpHandler = () => {

        let errorCount = 0;

        console.log("Sign Up Button Pressed");

        if(emailValue.length === 0) {
            errorCount += 1;
        }

        if(nameValue.length === 0) {
            errorCount += 1;
        }

        if(passwordValue.length === 0) {
            errorCount += 1;
        }
        if(confirmPasswordValue.length === 0) {
            errorCount += 1;
        }


    }


    return (
        <View style={ViewStyles.totalView}>
            <Text style={TextStyles.title}>Create an Account</Text>

            <View style={ViewStyles.emailView}>
                <Ionicons 
                    name="mail-outline" 
                    size={24} color="black" 
                    style={IconsStyles.EmailAndPasswordIcon} 
                />
                <TextInput
                    style={TextStyles.email}
                    placeholder="Email"
                    onChangeText={text => setEmailValue(text)}
                    value={emailValue}
                />
            </View>

            <View style={ViewStyles.emailView}>
                <Ionicons 
                    name="person-circle-outline" 
                    size={24} color="black" 
                    style={IconsStyles.EmailAndPasswordIcon} 
                />
                <TextInput
                    style={TextStyles.email}
                    placeholder="Name"
                    value={nameValue}
                    onChangeText={text => setNameValue(text)}
                />
            </View>

            <View style={ViewStyles.passwordView}>
                <Ionicons name="lock-closed-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
                <TextInput
                    style={TextStyles.email}
                    placeholder="Password"
                    value={passwordValue}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={text => setPasswordValue(text)}

                />
                <View style={ViewStyles.showAndHidePasswordView}>
                    <CustomButton onPress={togglePasswordVisibility}>
                        <Ionicons 
                            name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                            size={24} 
                            color="black" 
                        />
                    </CustomButton>
                </View>
            </View>

            <View style = {ViewStyles.passwordMessageView}>
                <Text style = {TextStyles.passwordMessage}>
                    Password must exceed 10 characters and include a special character
                </Text>
            </View>

            <View style={ViewStyles.confirmPasswordView}>
                <Ionicons name="lock-closed-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
                <TextInput
                    style={TextStyles.email}
                    placeholder=" Confirm Password"
                    value={confirmPasswordValue}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={text => setConfirmPasswordValue(text)}
                />
                <View style={ViewStyles.showAndHidePasswordView}>
                    <CustomButton onPress={togglePasswordVisibility}>
                        <Ionicons 
                            name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                            size={24} 
                            color="black" 
                        />
                    </CustomButton>
                </View>
            </View>

            <CustomButton onPress={SignUpHandler}>
                <Text style={TextStyles.buttonText}>
                    Sign Up
                </Text>
            </CustomButton>
        </View>
    );
}

const ViewStyles = StyleSheet.create({
    totalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailView: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 350,
        height: 50,
        paddingStart: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    passwordView: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 350,
        height: 50,
        paddingStart: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    confirmPasswordView: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 350,
        height: 50,
        paddingStart: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        justifyContent: 'space-between',
    },
    passwordMessageView: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const TextStyles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 36,
        fontWeight: '600',
        marginBottom: 12,
    },
    email: {
        flex: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    passwordMessage: {
        fontSize: 13,
    },
});

const IconsStyles = StyleSheet.create({
    EmailAndPasswordIcon: {
        paddingEnd: 10,
    },
});