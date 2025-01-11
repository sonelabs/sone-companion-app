import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

interface CustomTabBarProps {
  state: {
    index: number;
    routes: Array<{
      key: string;
      name: string;
    }>;
  };
  descriptors: any;
  navigation: any;
}

export function CustomTabBar({ state, descriptors, navigation }: CustomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}>
            <View style={styles.iconLabelWrapper}>
              {isFocused && <View style={styles.selectedIconWrapper} />}
              <View style={styles.iconContainer}>
                {options.tabBarIcon && (
                  <options.tabBarIcon color={isFocused ? 'white' : 'black'} />
                )}
              </View>
              <Text style={[styles.tabLabel, isFocused && styles.focusedLabel]}>
                {options.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    //paddingVertical: 5,
    borderRadius: 7,
    marginHorizontal: 40,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },
  iconLabelWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconContainer: {
    borderRadius: 50,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  selectedIconWrapper: {
    backgroundColor: '#70EED9',
    padding: 40,
    position: 'absolute',
    borderRadius: 7,
    zIndex: 0,
  },
  tabLabel: {
    color: 'black',
    fontSize: 12,
  },
  focusedLabel: {
    color: 'white',
  },
});
