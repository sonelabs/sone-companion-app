import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import PatientScreen from '../../components/Patient-Screen';
import Patients from '../../components/Patients';

export default function PatientsScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <PatientScreen 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <Patients searchQuery={searchQuery} />
        </View>
    );
}