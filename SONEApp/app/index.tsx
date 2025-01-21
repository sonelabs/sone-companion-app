import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Mark component as mounted
  }, []);

  useEffect(() => {
    if (hasMounted) {
      router.replace('/(tabs)/home'); // Corrected route
    }
  }, [hasMounted]); // Only run when `hasMounted` is true

  return null; // This screen does not need to render anything
}
