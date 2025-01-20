import { useEffect } from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { initializeApp } from "@react-native-firebase/app";

// Firebase configuration extracted from GoogleService-Info.plist
const firebaseMsgConfig = {
  apiKey: "AIzaSyClzSu_rP1tHZEIj8-jvmM-_XHOjYRx2xY", // <key>API_KEY</key>
  authDomain: "sonenotifications.firebaseapp.com", // Constructed from PROJECT_ID
  projectId: "sonenotifications", // <key>PROJECT_ID</key>
  storageBucket: "sonenotifications.firebasestorage.app", // <key>STORAGE_BUCKET</key>
  messagingSenderId: "917120070266", // <key>GCM_SENDER_ID</key>
  appId: "1:917120070266:ios:aac6ef0b19212f130ac1c3", // <key>GOOGLE_APP_ID</key>
};

// Initialize Firebase if not already initialized
try {
  initializeApp(firebaseMsgConfig);
  console.log("Firebase app initialized successfully.");
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase initialization error:", error);
  }
}

export const usePushNotifications = () => {
  const requestPermission = async () => {
    if (Platform.OS === "android" && Platform.Version >= 33) {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      if (!hasPermission) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.warn("Push notification permissions are not granted.");
          return false;
        }
      }
    }

    const authStatus = await messaging().requestPermission();
    const isAuthorized =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!isAuthorized) {
      console.warn("Push notification permissions are not granted.");
    }
    return isAuthorized;
  };

  const getToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      console.log("FCM Token:", fcmToken);
      // Save this token to your backend if required
    } catch (error) {
      console.error("Error fetching FCM token:", error);
    }
  };

  const handleNotifications = () => {
    messaging().onMessage(async (remoteMessage) => {
      console.log("Foreground message received:", remoteMessage);
      Alert.alert(
        remoteMessage.notification?.title || "Notification",
        remoteMessage.notification?.body || "You have a new message!"
      );
    });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log("Notification opened from background:", remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log("Notification opened from quit state:", remoteMessage);
        }
      });
  };

  useEffect(() => {
    (async () => {
      const hasPermission = await requestPermission();
      if (hasPermission) {
        await getToken();
        handleNotifications();
      }
    })();
  }, []);
};
