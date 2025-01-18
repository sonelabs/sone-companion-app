import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { usePushNotifications } from '@/hooks/Notif';

export default function Index() {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  

  useEffect(() => {
    setHasMounted(true); // Mark component as mounted
  }, []);

  useEffect(() => {
    if (hasMounted) {
      router.replace('/(tabs)/home'); // Corrected route
      usePushNotifications();
    }
  }, [hasMounted]); // Only run when `hasMounted` is true

  return null; // This screen does not need to render anything
}
