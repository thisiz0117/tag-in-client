import AccessButton from "@/components/register/AccessButton";
import Info from "@/components/register/Info";
import { Image, StyleSheet, Text, View } from "react-native";

const exampleInfo = [
  {id:'nickname',title: '닉네임', text: '설정 안 함', plan:''},
  {id:'plan',title: '플랜', text: '무료', plan:'Pro 보기'}
]

const Successs = () => {
  return (
    <View style={styles.phone}>
      <View style={styles.successContainer}>
        <View style={styles.checkContainer}>
          <View style={styles.checkBackground}>
            <Image
              source={require("@/assets/images/icons/check-icon-black.svg")}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>준비됐어요</Text>
          <Text style={styles.note}>
            이제 아무 앱에서든 영상을 공유해 보세요. 공유 시트에서 이 앱을
            고르면 바로 저장돼요.
          </Text>
        </View>
      </View>
      <View>
        {
          exampleInfo.map((e) => (
            <Info
              key={e.id}
              title={e.title}
              text={e.text}
              plan={e.plan}
            />
          ))
        }
      </View>
      <View style={styles.buttonContainer}>
        <AccessButton
          backgroundColor="#F2F2F2"
          text="시작하기"
          textColor="#121212"
        />
        <View>
          <Text style={styles.shareNote}>공유 방법 먼저 볼게요</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phone: {
    paddingTop: 100,
    width: 402,
    height: 874,
    backgroundColor: "#000000",
    borderRadius: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 100,
    paddingInline: 24,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    width: 354,
    gap: 18.5,
    alignItems: "center",
    justifyContent: "center",
  },
  shareNote: {
    fontFamily: "Pretendard",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    color: "#7D7D7D",
  },
  checkBackground: {
    width: 56,
    height: 56,
    backgroundColor: "#F2F2F2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 28,
  },
  checkContainer: {
    width: 354,
    display: "flex",
    flexDirection: "column",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontFamily: "Pretendard",
    fontSize: 29,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 37.12,
    letterSpacing: -0.87,
    color: "#f2f2f2",
  },
  note: {
    fontFamily: "Pretendard",
    fontSize: 14.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 23.2,
    color: "#757575",
  },
  successContainer: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 26,
  },
});

export default Successs;
