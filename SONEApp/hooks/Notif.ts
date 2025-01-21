import { useEffect } from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { FIREBASE_APP } from "@/msgFirebaseConfig";

try {
  // Test to ensure Firebase app is initialized
  FIREBASE_APP;
  console.log("Firebase app initialized successfully.");
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase initialization error:", error);
  }
}

export const usePushNotifications = () => {
  FIREBASE_APP; // Ensure Firebase is initialized

  const requestPermission = async () => {
    if (Platform.OS === "android" && Platform.Version >= 33) {
      // Android POST_NOTIFICATIONS Permission
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
    } else if (Platform.OS === "ios") {
      // Expo permission request for iOS
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        console.warn("Push notification permissions are not granted on iOS.");
        return false;
      }
      console.log("Push notification permissions granted on iOS.");
    }
    return true;
  };

  const getToken = async () => {
    FIREBASE_APP;
    try {
      if (Platform.OS === "ios") {
        // Fetch APNs token for iOS
       
        const apnsToken = await messaging().getAPNSToken();
        if (!apnsToken) {
          console.warn("APNs token is null. Check APNs setup.");
          return;
        }
        console.log("APNs Token:", apnsToken);
      }

      // Fetch FCM token
      const fcmToken = await messaging().getToken();
      console.log("FCM Token:", fcmToken);

      return fcmToken;
    } catch (error) {
      console.error("Error fetching push notification token:", error);
    }
  };

  const handleNotifications = () => {
    FIREBASE_APP;
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
    FIREBASE_APP;
    (async () => {
      if (!Device.isDevice) {
        console.warn("Push notifications are not supported on simulators.");
        return;
      }

      const hasPermission = await requestPermission();
      if (hasPermission) {
        await getToken();
        handleNotifications();
      }
    })();
  }, []);
};
