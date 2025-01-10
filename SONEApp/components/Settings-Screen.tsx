import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
// import avatar from '@/Avatar.png'; 


const Settings = () => {
  	
  	return (
    		<View style={[styles.settings, styles.settingsLayout]}>
      			<Text style={styles.header}>Settings</Text>
      			<View style={styles.name}>
        				<Text style={[styles.johnDoe, styles.textFlexBox]}>John Doe</Text>
        				<Text style={[styles.text, styles.textFlexBox]}>121122</Text>
      			</View>
      			<View style={styles.settings1}>
        				<View style={styles.listItem}>
          					<View style={styles.content}>
            						<Text style={styles.title}>Preferences</Text>
          					</View>
          					<AntDesign name="right" size={10} color="#71727a" />
        				</View>
        				<View style={styles.listItem}>
          					<View style={styles.content}>
            						<Text style={styles.title}>Notifications</Text>
          					</View>
          					<AntDesign name="right" size={10} color="#71727a" />
        				</View>
        				<View style={styles.listItem}>
          					<View style={styles.content}>
            						<Text style={styles.title}>Language</Text>
          					</View>
          					<AntDesign name="right" size={10} color="#71727a" />
        				</View>
        				<View style={styles.listItem}>
          					<View style={styles.content}>
            						<Text style={styles.title}>Security</Text>
          					</View>
          					<AntDesign name="right" size={10} color="#71727a" />
        				</View>
        				<View style={styles.listItem}>
          					<View style={styles.content}>
            						<Text style={styles.title}>Sign out</Text>
          					</View>
          					<AntDesign name="right" size={10} color="#71727a" />
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	settingsLayout: {
    		width: "100%",
    		overflow: "hidden"
  	},
  	textFlexBox: {
    		textAlign: "center",
    		letterSpacing: 0.1
  	},
  	settingsChild: {
    		top: 247,
    		left: 15,
    		width: 362,
    		height: 431
  	},
  	title: {
    		lineHeight: 20,
    		color: "#1f2024",
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		fontSize: 16,
    		alignSelf: "stretch"
  	},
  	content: {
    		flex: 1
  	},
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
  	settings1: {
    		top: 280,
    		left: 22,
    		width: 349,
    		paddingHorizontal: 0,
    		paddingVertical: 24,
    		gap: 8,
    		position: "absolute"
  	},
  	avatarIcon: {
    		marginTop: -363,
    		marginLeft: -48.75,
    		top: "50%",
    		left: "50%",
    		width: 82,
    		height: 82,
    		position: "absolute"
  	},
  	johnDoe: {
    		fontWeight: "800",
    		fontFamily: "Inter-ExtraBold",
    		color: "#000",
    		fontSize: 16
  	},
  	text: {
    		fontSize: 12,
    		lineHeight: 16,
    		color: "#71727a",
    		fontFamily: "Inter-Regular"
  	},
  	name: {
    		top: 180,
    		left: 144,
    		gap: 4,
    		alignItems: "center",
    		position: "absolute"
  	},
  	settings: {
    		backgroundColor: "#f7f7f7",
    		flex: 1,
    		width: "100%",
    		height: "100%",
    		overflow: "hidden",
  	},
  	header: {
    		top: 106,
    		fontSize: 20,
    		letterSpacing: 0.2,
    		fontWeight: "800",
    		fontFamily: "Inter-ExtraBold",
    		width: 349,
    		textAlign: "left",
    		color: "#000",
    		left: 22,
    		position: "absolute",
  	},
});

export default Settings;
