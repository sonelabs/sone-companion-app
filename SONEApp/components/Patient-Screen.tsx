import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
const Patients = () => {
  	
  	return (
    		<Pressable style={styles.patients} onPress={()=>{}}>
      			<View style={[styles.patientsInner, styles.patientsLayout]} />
      			<Text style={[styles.patients1, styles.patients1FlexBox]}>Patients</Text>
      			
      			{/* Search Bar */}
      			<View style={styles.rectangleView}>
        				<Ionicons 
          					name="search" 
          					size={24} 
          					color="#bbb"
          					style={styles.searchIcon}
        				/>
        				<Text style={styles.searchForA}>Search for a patient</Text>
      			</View>

      			{/* Patient List */}
      			<View style={styles.patientList}>
        				<View style={styles.patientItem}>
          					<Text style={styles.patientName}>Bob Bobbington</Text>
          					<Text style={styles.patientId}>#112</Text>
        				</View>
        				<View style={styles.patientItem}>
          					<Text style={styles.patientName}>Sally Mae</Text>
          					<Text style={styles.patientId}>#143</Text>
        				</View>
        				<View style={styles.patientItem}>
          					<Text style={styles.patientName}>Axel Rod</Text>
          					<Text style={styles.patientId}>#164</Text>
        				</View>
        				<View style={styles.patientItem}>
          					<Text style={styles.patientName}>John Case</Text>
          					<Text style={styles.patientId}>#144</Text>
        				</View>
      			</View>
    		</Pressable>);
};

const styles = StyleSheet.create({
  	patientsLayout: {
    		width: 349,
    		left: 22
  	},
  	textTypo: {
    		height: 11,
    		color: "#1f2024",
    		top: 663,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	dividerIconLayout: {
    		width: 315,
    		maxHeight: "100%",
    		left: 37,
    		position: "absolute"
  	},
  	textLayout1: {
    		width: 36,
    		left: 305
  	},
  	dividerIconPosition: {
    		left: 39,
    		width: 315,
    		maxHeight: "100%",
    		position: "absolute"
  	},
  	patients1FlexBox: {
    		textAlign: "left",
    		position: "absolute"
  	},
  	axelRodPosition: {
    		left: 51,
    		width: 123
  	},
  	textLayout: {
    		width: 38,
    		left: 305
  	},
  	text2Typo: {
    		height: 12,
    		top: 283,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text3Typo: {
    		top: 345,
    		height: 12,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text4Typo: {
    		top: 470,
    		height: 11,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text5Typo: {
    		top: 533,
    		height: 11,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text6Typo: {
    		top: 598,
    		height: 11,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text7Typo: {
    		top: 407,
    		height: 12,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	patientsInner: {
    		top: 136,
    		height: 577,
    		backgroundColor: "#fff",
    		borderRadius: 5,
    		position: "absolute"
  	},
  	haroldHermain: {
    		width: 123,
    		left: 49
  	},
  	dividerIcon: {
    		top: 641
  	},
  	text: {
    		height: 11,
    		color: "#1f2024",
    		top: 663,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	dividerIcon1: {
    		top: 259
  	},
  	dividerIcon2: {
    		top: 323
  	},
  	dividerIcon3: {
    		top: 387
  	},
  	patients1: {
    		top: 88,
    		fontSize: 20,
    		letterSpacing: 0.2,
    		fontWeight: "800",
    		fontFamily: "Inter-ExtraBold",
    		color: "#000",
    		width: 349,
    		left: 22
  	},
  	bobBobbington: {
    		top: 221,
    		height: 11,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	text1: {
    		top: 221,
    		height: 11,
    		textAlign: "left",
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		position: "absolute"
  	},
  	sallyMae: {
    		left: 51,
    		width: 123
  	},
  	text2: {
    		width: 38,
    		left: 305
  	},
  	axelRod: {
    		left: 51,
    		width: 123
  	},
  	text3: {
    		width: 38,
    		left: 305
  	},
  	emmaUmbrella: {
    		left: 51,
    		width: 123
  	},
  	dividerIcon4: {
    		top: 448
  	},
  	text4: {
    		width: 38,
    		left: 305
  	},
  	johnCase: {
    		width: 123,
    		left: 49
  	},
  	dividerIcon5: {
    		top: 511
  	},
  	text5: {
    		width: 36,
    		left: 305
  	},
  	angelaAnnapurna: {
    		width: 135,
    		left: 49,
    		top: 598
  	},
  	dividerIcon6: {
    		top: 576
  	},
  	text6: {
    		width: 36,
    		left: 305
  	},
  	larryJohnson: {
    		left: 51,
    		width: 123
  	},
  	text7: {
    		width: 38,
    		left: 305
  	},
  	rectangleView: {
    		top: 149,
    		left: 33,
    		borderRadius: 27,
    		backgroundColor: "#f4f4f4",
    		width: 328,
    		height: 40,
    		position: "absolute",
    		flexDirection: 'row',
    		alignItems: 'center',
    		paddingHorizontal: 12,
  	},
  	searchIcon: {
    		marginRight: 8,
  	},
  	searchForA: {
    		color: "#bbb",
    		fontFamily: "Inter-Regular",
    		fontSize: 14,
    		letterSpacing: 0.1,
  	},
  	patients: {
    		backgroundColor: "#f7f7f7",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	},
  	patientList: {
    		position: 'absolute',
    		top: 200,
    		left: 0,
    		right: 0,
    		paddingHorizontal: 22,
  	},
  	patientItem: {
    		flexDirection: 'row',
    		justifyContent: 'space-between',
    		paddingVertical: 15,
    		paddingHorizontal: 15,
    		borderBottomWidth: 1,
    		borderBottomColor: '#E5E5E5',
    		backgroundColor: 'white',
  	},
  	patientName: {
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		fontSize: 14,
    		letterSpacing: 0.1,
  	},
  	patientId: {
    		color: "#1f2024",
    		fontFamily: "Inter-Regular",
    		fontSize: 14,
    		letterSpacing: 0.1,
  	},
});

export default Patients;
