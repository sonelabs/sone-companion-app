import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { soneTeal } from "@/constants/Colors";

const ButtonPrimary = () => {
  	
  	return (
    		<View style={styles.buttonPrimary}>
      			<Text style={styles.button}>Continue</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	button: {
    		fontSize: 12,
    		fontWeight: "600",
    		fontFamily: "Inter-SemiBold",
    		color: "#000",
    		textAlign: "left"
  	},
  	buttonPrimary: {
    		alignSelf: "stretch",
    		borderRadius: 12,
    		backgroundColor: soneTeal,
    		flex: 1,
    		width: "100%",
    		height: 48,
    		overflow: "hidden",
    		flexDirection: "row",
    		alignItems: "center",
    		justifyContent: "center",
    		paddingHorizontal: 16,
    		paddingVertical: 12
  	}
});

export default ButtonPrimary;
