import { router } from "expo-router";
import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable, TextInput, TouchableOpacity} from "react-native";
// import Rightbutton from "../assets/right-button.svg"
// import Rightbutton1 from "../assets/right-button1.svg"
// import Cursor from "../assets/cursor.svg"
import Entypo from '@expo/vector-icons/Entypo';

interface LoginPageProps {
	// The RootLayout passes an onLogin function, letting us set isLoggedIn to true
	onLogin?: () => void;
  }
  
  export default function LoginPage({ onLogin }: LoginPageProps) {
  // Add state for form fields
  const [name, setName] = React.useState('');
  const [uniqueId, setUniqueId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [nameFocused, setNameFocused] = React.useState(false);
  const [uniqueIdFocused, setUniqueIdFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleSubmit = async () => {
    //  if (onLogin) {
    //    await onLogin();
	//    router.replace('/(tabs)/home'); // testing out route
    // }
	onLogin?.();         // Tells RootLayout we're "logged in" now
    router.replace('/'); // Optionally jump directly to home 

  };
  
  return (
    <Pressable style={styles.auth} onPress={() => {}}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.logInWrapper}>
          <Text style={styles.logIn}>Log in</Text>
        </View>
        <View style={styles.loginOptions}>
          <View style={styles.form}>
          <View style={styles.textField}>
              <Text style={[styles.title4, styles.title4Typo]}>Name</Text>
              <View style={[
                styles.fieldBorder,
                nameFocused && styles.fieldFocused
              ]}>
                <View style={styles.textFlexBox}>
                  <View style={styles.textFlexBox}>
                    <TextInput
                      style={styles.placeholder}
                      onChangeText={setName}
                      value={name}
                      placeholder="First Last"
                      onFocus={() => setNameFocused(true)}
                      onBlur={() => setNameFocused(false)}
                      autoCorrect={false}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.textField}>
              <Text style={[styles.title4, styles.title4Typo]}>Unique ID</Text>
              <View style={[
                styles.fieldBorder,
                uniqueIdFocused && styles.fieldFocused
              ]}>
                <View style={styles.textFlexBox}>
                  <View style={styles.textFlexBox}>
                    <TextInput
                      style={styles.placeholder}
                      onChangeText={setUniqueId}
                      value={uniqueId}
                      placeholder="000000"
                      onFocus={() => setUniqueIdFocused(true)}
                      onBlur={() => setUniqueIdFocused(false)}
                      autoCorrect={false}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.textField}>
              <Text style={[styles.title4, styles.title4Typo]}>Password</Text>
              <View style={[
                styles.field2,
                styles.fieldBorder,
                passwordFocused && styles.fieldFocused
              ]}>
                <View style={styles.textFlexBox}>
                  <View style={styles.textFlexBox}>
                    <TextInput
                      style={styles.placeholder}
                      onChangeText={setPassword}
                      value={password}
                      placeholder="Create a password"
                      secureTextEntry={!showPassword}
                      autoComplete="off"
                      autoCorrect={false}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Entypo name={showPassword ? "eye-with-line" : "eye"} size={24} color="#c5c6cc" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textField3}>
              <View style={[
                styles.field2,
                styles.fieldBorder,
                confirmPasswordFocused && styles.fieldFocused
              ]}>
                <View style={styles.textFlexBox}>
                  <View style={styles.textFlexBox}>
                    <TextInput
                      style={styles.placeholder}
                      onChangeText={setConfirmPassword}
                      value={confirmPassword}
                      placeholder="Confirm password"
                      secureTextEntry={!showConfirmPassword}
                      autoComplete="off"
                      autoCorrect={false}
                      onFocus={() => setConfirmPasswordFocused(true)}
                      onBlur={() => setConfirmPasswordFocused(false)}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Entypo name={showConfirmPassword ? "eye-with-line" : "eye"} size={24} color="#c5c6cc" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.buttonPrimaryWrapper, styles.frameParentFlexBox]}>
        <Pressable 
          style={[styles.buttonPrimary, styles.fieldFlexBox]}
          onPress={handleSubmit}
        >
          <Text style={[styles.button, styles.continuetext]}>Continue</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  	frameParentFlexBox: {
    		alignItems: "center",
    		position: "absolute",
    		padding: 24
  	},
  	titleTypo: {
    		color: "#1f2024",
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		lineHeight: 20,
    		fontSize: 14
  	},
	continuetext: {
		color: "#fff",
		fontSize: 12,
		textAlign: "left"

	},
  	title4Typo: {
    		fontSize: 12,
    		textAlign: "left"
  	},
  	fieldFlexBox: {
    		paddingVertical: 12,
    		paddingHorizontal: 16,
    		height: 48,
    		flexDirection: "row",
    		borderRadius: 12,
    		alignSelf: "stretch",
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	textFlexBox: {
    		flexDirection: "row",
    		alignItems: "center",
    		flex: 1
  	},
  	iconLayout: {
    		height: 16,
    		overflow: "hidden"
  	},
  	fieldBorder: {
    		borderWidth: 1,
    		paddingVertical: 12,
    		paddingHorizontal: 16,
    		height: 48,
    		borderColor: "#c5c6cc",
    		borderStyle: "solid",
    		flexDirection: "row",
    		borderRadius: 12,
    		alignSelf: "stretch",
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	title: {
    		textAlign: "left",
    		alignSelf: "stretch"
  	},
  	content: {
    		flex: 1
  	},
  	rightButtonIcon: {
    		overflow: "hidden"
  	},
  	listItem: {
    		gap: 16,
    		padding: 16,
    		flexDirection: "row",
    		backgroundColor: "#eaf2ff",
    		borderRadius: 12,
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	listItem1: {
    		borderWidth: 0.5,
    		borderColor: "#c5c6cc",
    		borderStyle: "solid",
    		padding: 16,
    		flexDirection: "row",
    		borderRadius: 12,
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	listItem4: {
    		height: 50,
    		backgroundColor: "#eaf2ff",
    		borderRadius: 12,
    		display: "none",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	listItemParent: {
    		display: "none",
    		gap: 8,
    		alignSelf: "stretch"
  	},
  	logIn: {
    		fontSize: 36,
    		letterSpacing: 0.4,
    		fontWeight: "800",
    		fontFamily: "Inter-ExtraBold",
    		color: "#000",
    		textAlign: "left",
    		alignSelf: "stretch"
  	},
  	logInWrapper: {
    		alignSelf: "stretch"
  	},
  	title4: {
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		color: "#2f3036",
    		alignSelf: "stretch"
  	},
  	text1: {
    		textAlign: "left"
  	},
  	cursorIcon: {
    		maxWidth: "100%"
  	},
  	text: {
    		gap: 1
  	},
  	field: {
    		borderColor: "#70eed9",
    		borderWidth: 1.5,
    		borderStyle: "solid",
    		paddingVertical: 12,
    		paddingHorizontal: 16,
    		height: 48
  	},
  	textField: {
    		width: 327,
    		gap: 8
  	},
  	placeholder: {
    		color: "#000",
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		lineHeight: 20,
    		fontSize: 14,
    		width: '100%',
    		textAlignVertical: 'center',
    		height: 48,
  	},
  	icon: {
    		width: 16
  	},
  	field2: {
    		gap: 8
  	},
  	textField3: {
    		width: 327
  	},
  	form: {
    		gap: 16
  	},
  	loginOptions: {
    		height: 475,
    		padding: 16,
    		width: 375
  	},
  	frameParent: {
    		top: 60,
    		left: 9,
    		gap: 24,
    		padding: 24,
    		width: 375
  	},
  	button: {
    		fontWeight: "600",
    		fontFamily: "Inter-SemiBold",
    		color: "#000"
  	},
  	buttonPrimary: {
    		backgroundColor: "#70eed9",
    		justifyContent: "center"
  	},
  	buttonPrimaryWrapper: {
    		right: 0,
    		bottom: 24,
    		left: 0,
    		padding: 24
  	},
  	auth: {
    		backgroundColor: "#f7f7f7",
    		width: "100%",
    		height: 852,
    		overflow: "hidden",
    		flex: 1
  	},
  	fieldFocused: {
    		borderColor: "#70EED9",
    		borderWidth: 1.5,
  	},
});

