import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FIREBASE_AUTH } from "../FirebaseConfig";

const Signout = () => {
    const handleSignOut = async () => {
        try {
            await FIREBASE_AUTH.signOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={handleSignOut}>
                <View style={styles.listItem}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Sign out</Text>
                    </View>
                    <AntDesign name="right" size={10} color="#71727a" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        height: 60,
        flexDirection: "row",
        padding: 16,
        gap: 16,
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "white",
        borderRadius: 12,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    content: {
        flex: 1
    },
    title: {
        lineHeight: 20,
        color: "#1f2024",
        textAlign: "left",
        fontFamily: "Inter-Regular",
        fontSize: 16,
        alignSelf: "stretch"
    },
    loginLink: {
        color: "#000",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 16
    }
});

export default Signout;
