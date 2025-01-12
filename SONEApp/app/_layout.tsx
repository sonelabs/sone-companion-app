import { NavigationContainer } from '@react-navigation/native';
import Login from '@/components/Login'; // (B) Our login component
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Home from '@/app/(tabs)/home';

const Stack = createNativeStackNavigator();
export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      ) : (
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      )}
    </Stack.Navigator>
  );
}