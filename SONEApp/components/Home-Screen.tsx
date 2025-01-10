import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";


const Home = () => {
  	
  	return (
    		<Pressable style={styles.home} onPress={()=>{}}>
      			<Text style={styles.mostRecent}>Most Recent</Text>
      			<View style={[styles.homeInner, styles.homeChildLayout]} />
      			<Text style={[styles.patientInRoom, styles.patientTypo1]}>Patient in Room #164 needs to use the restroom.</Text>
      			<Text style={[styles.now, styles.agoTypo]}>Now</Text>
      			<View style={[styles.rectangleView, styles.homeChildLayout]} />
      			<Text style={[styles.patientInRoom1, styles.patientTypo]}>Patient in Room #144 requested ice.</Text>
      			<Text style={[styles.mAgo, styles.agoTypo]}>1m ago</Text>
      			<View style={[styles.homeChild1, styles.homeChildLayout]} />
      			<Text style={[styles.patientInRoom2, styles.patientTypo]}>Patient in Room #112 requested water.</Text>
      			<Text style={[styles.mAgo1, styles.agoTypo]}>1m ago</Text>
      			<View style={[styles.homeChild2, styles.homeChildLayout]} />
      			<Text style={[styles.patientInRoom3, styles.patientTypo1]}>Patient in Room #144 would like the lights turned off.</Text>
      			<Text style={[styles.mAgo2, styles.agoTypo]}>1m ago</Text>
    		</Pressable>);
};

const styles = StyleSheet.create({
  	homeChildLayout: {
    		height: 68,
    		width: 349,
    		left: 22,
    		backgroundColor: "#fff",
    		borderRadius: 5,
    		position: "absolute"
  	},
  	patientTypo1: {
    		height: 31,
    		width: 269,
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		letterSpacing: 0.1,
    		fontSize: 13,
    		left: 45,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	agoTypo: {
    		height: 11,
    		width: 35,
    		textAlign: "right",
    		color: "#636363",
    		fontFamily: "Inter-Regular",
    		fontSize: 10,
    		left: 324,
    		letterSpacing: 0.1,
    		position: "absolute"
  	},
  	patientTypo: {
    		height: 17,
    		width: 269,
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		letterSpacing: 0.1,
    		fontSize: 13,
    		left: 45,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	mostRecent: {
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
  	homeInner: {
    		top: 158
  	},
  	patientInRoom: {
    		top: 177
  	},
  	now: {
    		top: 166
  	},
  	rectangleView: {
    		top: 236
  	},
  	patientInRoom1: {
    		top: 262
  	},
  	mAgo: {
    		top: 244
  	},
  	homeChild1: {
    		top: 314
  	},
  	patientInRoom2: {
    		top: 340
  	},
  	mAgo1: {
    		top: 322
  	},
  	homeChild2: {
    		top: 392
  	},
  	patientInRoom3: {
    		top: 411
  	},
  	mAgo2: {
    		top: 400
  	},
  	home: {
    		backgroundColor: "#f7f7f7",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default Home;
