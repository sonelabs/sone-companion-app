import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable, TextInput} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface PatientScreenProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Patients = ({ searchQuery, onSearchChange }: PatientScreenProps) => {
  return (
    <Pressable style={styles.patients} onPress={() => {}}>
      <Text style={styles.patients1}>Patients</Text>

      {/* White Background Container */}
      <View style={styles.whiteContainer}>
        {/* Search Bar */}
        <View style={styles.rectangleView}>
          <Ionicons 
            name="search" 
            size={24} 
            color="#bbb"
            style={styles.searchIcon}
          />
          <TextInput
            value={searchQuery}
            onChangeText={onSearchChange}
            placeholder="Search for a patient"
            placeholderTextColor="#bbb"
            style={styles.searchForA}
            selectionColor="#000"
          />
        </View>
      </View>
    </Pressable>
  );
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
  whiteContainer: {
    position: 'absolute',
    top: 150,
    left: 22,
    right: 22,
    bottom: 150,
    backgroundColor: 'white',
    paddingHorizontal: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  rectangleView: {
    marginTop: 19,
    borderRadius: 27,
    backgroundColor: "#f4f4f4",
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchForA: {
    color: "#000",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    letterSpacing: 0.1,
  },
});

export default Patients;
