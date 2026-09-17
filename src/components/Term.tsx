import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TermProps {
  isRequire: boolean;
  text: string;
  text_detail: string;
  isCheck: boolean;
  onToggle: () => void;
}
const Term = ({
  isRequire,
  text,
  text_detail,
  isCheck,
  onToggle,
}: TermProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={onToggle}>
          <Image
            source={require("@/assets/images/icons/check-icon.svg")}
            style={isCheck ? undefined : styles.unCheck}
          />
        </TouchableOpacity>
        <Text style={styles.textContainer}>
          <Text style={[styles.require, !isRequire && styles.optionalOpacity]}>
            {isRequire ? "필수 " : "선택 "}
          </Text>
          <Text style={styles.text}>{text}</Text>
        </Text>
      </View>
      <View style={styles.textDetailContainer}>
        <Text style={styles.textDetail}>{text_detail}</Text>
      </View>
      <Image
        source={require("@/assets/images/icons/arrow-icon.svg")}
        style={styles.arrow}
      />
    </View>
  );
};

const BASE = {
  fontFamily: "Pretendard",
  // fontSize: 12.5,
  lineHeight: 18,
  includeFontPadding: false,
  textAlignVertical: "center",
} as const;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 354,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 4,
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
    borderBottomWidth: 1,
    fontStyle: "normal",
  },
  require: {
    ...BASE,
    color: "#FFFFFF",
    fontSize: 12.5,
    fontFamily: "Pretendard",
    fontWeight: 600,
    opacity: 0.55,
  },
  text: {
    ...BASE,
    color: "#FFFFFF",
    opacity: 0.82,
    fontSize: 14.5,
    fontWeight: 400,
  },
  textDetail: {
    ...BASE,
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: 500,
  },
  textDetailContainer: {
    display: "none",
  },
  unCheck: {
    opacity: 0.3,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  arrow: {
    opacity: 0.28,
    flexShrink: 0,
  },
  arrowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  optionalOpacity: {
    opacity: 0.3,
  },
});

export default Term;
