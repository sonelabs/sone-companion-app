import React, { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import LoginPage from '@/components/LoginPage'; // (B) Our login component

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Wait for layout to mount, to avoid "navigate before mount" errors
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If layout isn't mounted yet, show nothing
  if (!hasMounted) {
    return null;
  }

  if (!isLoggedIn) {
    // Show the login screen. Once user logs in, we'll set "isLoggedIn = true"
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  // If logged in, show all other routes (including tabs)
  return <Slot />;
}