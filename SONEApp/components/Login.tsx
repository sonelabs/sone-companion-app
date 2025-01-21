import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Text, TextInput } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { router } from "expo-router";

interface LoginProps {
  onShowSignup: () => void;
}

export default function Login({ onShowSignup }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.auth}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
                <View style={styles.logInWrapper}>
                    <Text style={styles.logIn}>Log in</Text>
                </View>
                <View style={styles.loginOptions}>
                    <View style={styles.form}>
                        <View style={styles.textField}>
                            <Text style={[styles.title4, styles.title4Typo]}>Email</Text>
                            <View style={[styles.fieldBorder, emailFocused && styles.fieldFocused]}>
                                <TextInput
                                    style={styles.placeholder}
                                    onChangeText={setEmail}
                                    value={email}
                                    placeholder="email@example.com"
                                    onFocus={() => setEmailFocused(true)}
                                    onBlur={() => setEmailFocused(false)}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </View>
                        </View>
                        <View style={styles.textField}>
                            <Text style={[styles.title4, styles.title4Typo]}>Password</Text>
                            <View style={[styles.field2, styles.fieldBorder, passwordFocused && styles.fieldFocused]}>
                                <TextInput
                                    style={styles.placeholder}
                                    onChangeText={setPassword}
                                    value={password}
                                    placeholder="Enter password"
                                    secureTextEntry={!showPassword}
                                    onFocus={() => setPasswordFocused(true)}
                                    onBlur={() => setPasswordFocused(false)}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <Entypo name={showPassword ? "eye-with-line" : "eye"} size={24} color="#c5c6cc" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.buttonPrimaryWrapper, styles.frameParentFlexBox]}>
                {loading ? (
                    <ActivityIndicator size="large" color="#70eed9"/>
                ) : (
                    <>
                        <TouchableOpacity style={[styles.buttonPrimary, styles.fieldFlexBox]} onPress={signIn}>
                            <Text style={styles.continuetext}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onShowSignup}>
                            <Text style={styles.signupLink}>Don't have an account? Sign up</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    auth: {
        backgroundColor: "#f7f7f7",
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    frameParentFlexBox: {
        alignItems: "center",
        position: "absolute",
        padding: 24
    },
    title4Typo: {
        fontSize: 12,
        textAlign: "left"
    },
    fieldFlexBox: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        height: 48,
        flexDirection: "row",
        borderRadius: 12,
        alignSelf: "stretch",
        alignItems: "center",
        overflow: "hidden"
    },
    fieldBorder: {
        borderWidth: 1,
        paddingVertical: 0,
        paddingHorizontal: 16,
        height: 40,
        borderColor: "#c5c6cc",
        borderStyle: "solid",
        flexDirection: "row",
        borderRadius: 12,
        alignSelf: "stretch",
        alignItems: "center",
        overflow: "hidden"
    },
    logIn: {
        fontSize: 36,
        letterSpacing: 0.4,
        fontWeight: "800",
        fontFamily: "Inter-ExtraBold",
        color: "#000",
        textAlign: "left",
        alignSelf: "stretch"
    },
    logInWrapper: {
        alignSelf: "stretch"
    },
    title4: {
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: "#2f3036",
        alignSelf: "stretch"
    },
    placeholder: {
        color: "#000",
        textAlign: "left",
        fontFamily: "Inter-Regular",
        fontSize: 14,
        flex: 1,
        height: 40,
        paddingVertical: 8
    },
    field2: {
        gap: 8
    },
    textField: {
        width: "100%",
        gap: 8
    },
    form: {
        gap: 16
    },
    loginOptions: {
        padding: 16,
        width: "100%"
    },
    frameParent: {
        top: 60,
        left: 0,
        right: 0,
        gap: 24,
        padding: 24
    },
    buttonPrimary: {
        backgroundColor: "#70eed9",
        justifyContent: "center",
        marginBottom: 12
    },
    buttonSecondary: {
        backgroundColor: "#ffffff",
        borderColor: "#70eed9",
        borderWidth: 1,
        justifyContent: "center"
    },
    buttonPrimaryWrapper: {
        right: 0,
        bottom: 24,
        left: 0,
        padding: 24
    },
    continuetext: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        width: "100%"
    },
    signuptext: {
        color: "#70eed9",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        width: "100%"
    },
    fieldFocused: {
        borderColor: "#70EED9",
        borderWidth: 1.5,
    },
    signupLink: {
        color: "#000",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 16
    }
});
