// screens/NotificationsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

interface Notification {
  id: string;
  title: string;
  body: string;
  timestamp: string;
}

// Set up notification handler to store notifications when received
Notifications.setNotificationHandler({
  handleNotification: async (notification) => {
    const newNotification = {
      id: notification.request.identifier,
      title: notification.request.content.title,
      body: notification.request.content.body,
      timestamp: new Date().toISOString(),
    };

    // Store the new notification
    try {
      const storedNotifications = await AsyncStorage.getItem('notifications');
      const notifications: Notification[] = storedNotifications 
        ? JSON.parse(storedNotifications) 
        : [];
      
      notifications.unshift(newNotification);
      
      // Keep only last 50 notifications
      if (notifications.length > 50) {
        notifications.pop();
      }
      
      await AsyncStorage.setItem('notifications', JSON.stringify(notifications));
    } catch (error) {
      console.error('Error storing notification:', error);
    }

    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    };
  },
});

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();

    // Set up notification listeners
    const subscription = Notifications.addNotificationReceivedListener(() => {
      loadNotifications(); // Reload notifications when new one is received
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const loadNotifications = async () => {
    try {
      const storedNotifications = await AsyncStorage.getItem('notifications');
      if (storedNotifications) {
        setNotifications(JSON.parse(storedNotifications));
      }
    } catch (error) {
      console.error('Error loading notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationBody}>{item.body}</Text>
      <Text style={styles.notificationTime}>
        {formatTimestamp(item.timestamp)}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading notifications...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      {notifications.length === 0 ? (
        <View style={styles.centerContainer}>
          <Text>No notifications yet</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#FFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  listContainer: {
    padding: 16,
  },
  notificationCard: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  notificationBody: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
});