import { Text, View, StyleSheet, Platform, Linking, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Index() {
  const handleGoogleLogin = () => {
    const oauth_url = "http://localhost:8080/auth/google";

    if (Platform.OS === 'web') {
      window.location.href = oauth_url;
    } else {
      Linking.openURL(oauth_url);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.google} onPress={handleGoogleLogin}>
        <Image source={require('@/assets/images/icons/google-icon.png')} style={{width: 50, height: 50, resizeMode: 'contain'}}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  google: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    
  }
});
