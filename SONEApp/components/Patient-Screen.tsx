import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
const Patients = () => {
  	
  	return (
    		<Pressable style={styles.patients} onPress={()=>{}}>
      			<Text style={styles.patients1}>Patients</Text>
      			
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
  	patients: {
    		backgroundColor: "#f7f7f7",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	},
  	patients1: {
    		top: 106,
    		fontSize: 20,
    		letterSpacing: 0.2,
    		fontWeight: "800",
    		fontFamily: "Inter-ExtraBold",
    		width: 349,
    		textAlign: "left",
    		color: "#000",
    		left: 22,
    		position: "absolute"
  	},
  	rectangleView: {
    		top: 149,
    		left: 22,
    		borderRadius: 27,
    		backgroundColor: "#f4f4f4",
    		width: 349,
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
  	patientList: {
    		position: 'absolute',
    		top: 209,
    		left: 22,
    		right: 22,
  	},
  	patientItem: {
    		flexDirection: 'row',
    		justifyContent: 'space-between',
    		paddingVertical: 15,
    		paddingHorizontal: 15,
    		borderBottomWidth: 1,
    		borderBottomColor: '#E5E5E5',
    		backgroundColor: 'white',
    		borderRadius: 5,
    		marginBottom: 10,
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
