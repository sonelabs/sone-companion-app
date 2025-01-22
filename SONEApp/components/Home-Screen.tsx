import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configure notifications for iOS
async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'ios') {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

export default function Home() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    registerForPushNotificationsAsync();

    const subscription = Notifications.addNotificationReceivedListener(notification => {
      setNotifications(prev => [
        ...prev,
        {
          id: notification.request.identifier,
          ...notification.request.content,
          receivedAt: Date.now(), // Store the timestamp
        },
      ]);
    });

    // Cleanup listener on unmount
    return () => {
      subscription.remove();
    };
  }, []);

  // Calculate time passed in a human-readable format
  const getTimePassed = (receivedAt: number) => {
    const now = Date.now();
    const seconds = Math.floor((now - receivedAt) / 1000);

    if (seconds < 60) return 'now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
    return `${Math.floor(seconds / 86400)} day(s) ago`;
  };

  const renderNotification = ({ item }: { item: any }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <Text style={styles.timePassed}>{getTimePassed(item.receivedAt)}</Text>
    </View>
  );

  return (
    <View style={styles.home}>
      <Text style={styles.mostRecent}>Most Recent</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderNotification}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#f7f7f7",
    flex: 1,
    width: "100%",
    paddingTop: 106,
  },
  mostRecent: {
    fontSize: 20,
    letterSpacing: 0.2,
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#000",
    marginLeft: 22,
    marginBottom: 20,
  },
  notificationItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 22, // Add horizontal margin
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  timePassed: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});

/*

export default Home;
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configure notifications for iOS
async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'ios') {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

export default function Home() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    registerForPushNotificationsAsync();

    const subscription = Notifications.addNotificationReceivedListener(notification => {
      setNotifications(prev => [
        ...prev,
        { id: notification.request.identifier, ...notification.request.content },
      ]);
    });

    // Cleanup listener on unmount
    return () => {
      subscription.remove();
    };
  }, []);

  const renderNotification = ({ item }: { item: any }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.home}>
      <Text style={styles.mostRecent}>Most Recent</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderNotification}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildLayout: {
    height: 68,
    marginHorizontal: 22,
    marginLeft: 22,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    justifyContent: 'center',
  },
  patientTypo1: {
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    letterSpacing: 0.1,
    fontSize: 13,
    color: "#000",
  },
  agoTypo: {
    textAlign: "right",
    color: "#636363",
    fontFamily: "Inter-Regular",
    fontSize: 10,
    letterSpacing: 0.1,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  patientTypo: {
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    letterSpacing: 0.1,
    fontSize: 13,
    color: "#000",
  },
  mostRecent: {
    fontSize: 20,
    letterSpacing: 0.2,
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#000",
    marginLeft: 22,
    marginBottom: 20,
  },
  home: {
    backgroundColor: "#f7f7f7",
    flex: 1,
    width: "100%",
    paddingTop: 106,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
});

export default Home;
*/