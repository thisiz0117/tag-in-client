import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
        <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 402,
        height: 63.5,
        backgroundImage: '#000000',
        display: 'flex',
        flexDirection: 'column',
    }
});

export default Header;
