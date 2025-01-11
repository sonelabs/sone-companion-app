import * as React from "react";
import {StyleSheet, View, Text} from "react-native";

// Add interface for Patient and props
interface Patient {
  name: string;
  id: string;
}

interface PatientsProps {
  searchQuery: string;
}

// Mock data - replace with your actual data source
const patientData: Patient[] = [
  { name: "Bob Bobbington", id: "112" },
  { name: "Sally Mae", id: "143" },
  { name: "Axel Rod", id: "164" },
  { name: "John Case", id: "144" },
];

const Patients = ({ searchQuery }: PatientsProps) => {
  const filteredPatients = patientData.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.patientList}>
      {filteredPatients.map((patient) => (
        <View key={patient.id} style={styles.patientItem}>
          <Text style={styles.patientName}>{patient.name}</Text>
          <Text style={styles.patientId}>#{patient.id}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
