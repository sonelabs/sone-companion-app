import * as React from "react";
import {StyleSheet, View, Text, Pressable} from "react-native";

const Home = () => {
  // Track hidden messages and last tap time
  const [hiddenMessages, setHiddenMessages] = React.useState<{[key: string]: boolean}>({});
  const lastTap = React.useRef<{[key: string]: number}>({});
  
  const handlePress = (messageId: string) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300; // milliseconds
    
    if (lastTap.current[messageId] && (now - lastTap.current[messageId]) < DOUBLE_PRESS_DELAY) {
      // Double tap detected - hide the message
      setHiddenMessages(prev => ({ ...prev, [messageId]: !prev[messageId] }));
      lastTap.current[messageId] = 0; // Reset last tap
    } else {
      // First tap
      lastTap.current[messageId] = now;
    }
  };

  // Message component
  const Message = ({ id, style, children }: { id: string, style?: any, children: React.ReactNode }) => (
    <Pressable
      onPress={() => handlePress(id)}
      style={({ pressed }) => [
        style,
        {
          display: hiddenMessages[id] ? 'none' : 'flex',
          backgroundColor: pressed ? '#e0e0e0' : '#fff',
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
    >
      {children}
    </Pressable>
  );

  return (
    <View style={styles.home}>
      <Text style={styles.mostRecent}>Most Recent</Text>

      <Message id="msg2" style={styles.homeChildLayout}>
        <Text style={styles.patientTypo}>
          Patient in Room #144 requested ice.
        </Text>
        <Text style={styles.agoTypo}>1m ago</Text>
      </Message>

      <Message id="msg3" style={styles.homeChildLayout}>
        <Text style={styles.patientTypo}>
          Patient in Room #112 requested water.
        </Text>
        <Text style={styles.agoTypo}>1m ago</Text>
      </Message>

      <Message id="msg4" style={styles.homeChildLayout}>
        <Text style={styles.patientTypo1}>
          Patient in Room #144 would like the lights turned off.
        </Text>
        <Text style={styles.agoTypo}>1m ago</Text>
      </Message>
	  
	  <Message id="msg1" style={styles.homeChildLayout}>
        <Text style={styles.patientTypo1}>
          Patient in Room #164 needs to use the restroom.
        </Text>
        <Text style={styles.agoTypo}>Now</Text>
      </Message>
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
  }
});

export default Home;
