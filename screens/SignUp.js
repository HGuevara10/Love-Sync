import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CustomButton from "../components/ui/CustomButton";

export default function SignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

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
                />
            </View>

            <View style={ViewStyles.passwordView}>
                <Ionicons name="lock-closed-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
                <TextInput
                    style={TextStyles.email}
                    placeholder="Password"
                    secureTextEntry={!isPasswordVisible}
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

            <View style={ViewStyles.passwordView}>
                <Ionicons name="lock-closed-outline" size={24} color="black" style={IconsStyles.EmailAndPasswordIcon} />
                <TextInput
                    style={TextStyles.email}
                    placeholder=" Confirm Password"
                    secureTextEntry={!isPasswordVisible}
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

            <CustomButton>
                <Text style={TextStyles.buttonText}>Sign Up</Text>
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
        marginBottom: 12,
        justifyContent: 'space-between',
    },
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
});

const IconsStyles = StyleSheet.create({
    EmailAndPasswordIcon: {
        paddingEnd: 10,
    },
});
