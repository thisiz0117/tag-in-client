import { View, StyleSheet, Text } from "react-native"

interface accessButtonProps {
    backgroundColor: string,
    text: string,
    textColor: string,
}

export default function AccessButton({backgroundColor, text, textColor} : accessButtonProps) {
    return(
        <View style={[styles.container, {backgroundColor: `${backgroundColor}`}]}>
            <Text style={[styles.text, {color: `${textColor}`}]}>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    maxWidth: 354,
    width: "100%",
    height: 52,
    marginTop: 24.43,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position:'absolute',
    bottom: 0,
  },
  text: {
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 700,
  },
})
