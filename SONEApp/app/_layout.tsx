// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Slot, router } from 'expo-router';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/authFirebaseConfig';
import Login from '@/components/Login'; // Using new Login component
import Signup from '@/components/Signup'; // Using new Signup component

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
      setUser(currentUser);
      setHasMounted(true);
      // Reset signup flag when auth state changes
      setShowSignup(false);
    });

    return () => unsubscribe();
  }, []);

  // Wait until Firebase confirms authentication state
  if (!hasMounted) {
    return null;
  }

  // If not logged in, show either Login or Signup
  if (!user) {
    if (showSignup) {
      return <Signup onSignup={() => setShowSignup(false)} />;
    }
    return <Login onShowSignup={() => setShowSignup(true)} />;
  }

  // If logged in, show the main app routes
  return <Slot />;
}

// import React, { useEffect, useState } from 'react';
// import { Slot } from 'expo-router';
// import Login from '@/components/Login'; // (B) Our login component

// export default function RootLayout() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);

//   // Wait for layout to mount, to avoid "navigate before mount" errors
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   // If layout isn't mounted yet, show nothing
//   if (!hasMounted) {
//     return null;
//   }

//   if (!isLoggedIn) {
//     // Show the login screen. Once user logs in, we'll set "isLoggedIn = true"
//     return <Login onLogin={() => setIsLoggedIn(true)} />;
//   }

//   // If logged in, show all other routes (including tabs)
//   return <Slot />;
// }
