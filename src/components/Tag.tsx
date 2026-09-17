import { Text, View, StyleSheet, Platform, Linking, Image } from "react-native";
import { TouchableOpacity } from "react-native";

const Tag = (text:String) => {
    return (
        <View
            style={{
                backgroundColor: "#1E1E1E",
                paddingInline: 12,
                paddingVertical: 6,
                borderRadius:8,
                
            }}
        >
            <Text
                style={{
                    color: "#FFFFFF",
                    opacity: 0.8,
                }}
            >
                {text}
            </Text>
        </View>
    )
}

export default Tag