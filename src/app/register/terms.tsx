// 이용 약관
import Term from "@/components/Term";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Terms = () => {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [detail, setDetail] = useState<Record<string, boolean>>({});
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const toggleSetCheckAll = () => {
    setCheckAll(!checkAll);

    const updatedChecks: Record<string, boolean> = {};
    ex.forEach((item) => {
      updatedChecks[item.id] = !checkAll;
    });
    setChecks(updatedChecks);
  };

  const ex = [
    {
      id: "age",
      isRequire: true,
      text: "만 14세 이상입니다",
      text_detail:
        "만 14세 이상 이용 약관 상세 내용 만 14세 이상 이용 약관 상세 내용 만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용만 14세 이상 이용 약관 상세 내용",
      isCheck: checks.age ?? false,
      isDetail: detail.age ?? false,
      onToggle: () => setChecks((prev) => ({ ...prev, age: !prev.age })),
      onDetailTextToggle: () =>
        setDetail((prev) => ({ ...prev, age: !prev.age })),
    },
    {
      id: "service",
      isRequire: true,
      text: "서비스 이용약관",
      text_detail:
        "서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용서비스 이용약관 상세 내용",
      isCheck: checks.service ?? false,
      isDetail: detail.service ?? false,
      onToggle: () =>
        setChecks((prev) => ({ ...prev, service: !prev.service })),
      onDetailTextToggle: () =>
        setDetail((prev) => ({ ...prev, service: !prev.service })),
    },
    {
      id: "privacy",
      isRequire: true,
      text: "개인정보 수집 및 이용",
      text_detail:
        "개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용개인정보 수집 및 이용 상세 내용",
      isCheck: checks.privacy ?? false,
      isDetail: detail.privacy ?? false,
      onToggle: () =>
        setChecks((prev) => ({ ...prev, privacy: !prev.privacy })),
      onDetailTextToggle: () =>
        setDetail((prev) => ({ ...prev, privacy: !prev.privacy })),
    },
    {
      id: "marketing",
      isRequire: false,
      text: "마케팅 정보 수신",
      text_detail:
        "마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용마케팅 정보 수신 동의 상세 내용",
      isCheck: checks.marketing ?? false,
      isDetail: detail.marketing ?? false,
      onToggle: () =>
        setChecks((prev) => ({ ...prev, marketing: !prev.marketing })),
      onDetailTextToggle: () =>
        setDetail((prev) => ({ ...prev, marketing: !prev.marketing })),
    },
  ];
  return (
    <View style={styles.phone}>
      <TouchableOpacity onPress={toggleSetCheckAll}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>약관에 동의해 주세요</Text>
          <Text style={styles.titleNote}>필수 항목에 동의하면 바로 시작할 수 있어요.</Text>
        </View>
        <View style={styles.checkAllContainer}>
          <View
            style={[
              styles.checkAllBox,
              checkAll ? styles.check : styles.unCheck,
            ]}
          >
            <Image
              source={require("@/assets/images/icons/check-icon.svg")}
              style={checkAll ? undefined : styles.unCheck}
            />
          </View>
          <Text style={styles.checkAllText}>전체 동의</Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {ex.map((e) => (
          <Term
            key={e.id}
            isRequire={e.isRequire}
            text={e.text}
            text_detail={e.text_detail}
            isCheck={e.isCheck}
            isDetail={e.isDetail}
            onToggle={e.onToggle}
            onDetailTextToggle={e.onDetailTextToggle}
          />
        ))}
        <View style={styles.noteContainer}>
          <Text style={styles.note}>
            만 14세 미만 보호자 동의가 필요합니다. 선택 항목에 동의하지 않아도
            서비스를 이용할 수 있어요.
          </Text>
        </View>
        <View style={styles.agreeContainer}>
          <Text style={styles.agreeText}>동의하고 계속</Text>
        </View>
      </ScrollView>
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
    justifyContent: 'center'
  },
  scroll: {
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 24,
  },
  note: {
    fontFamily: "Pretendard",
    color: "#595959",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 19.2,
  },
  noteContainer: {
    display: "flex",
    width: 354,
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 17.09,
    marginInline: 24,
  },
  agreeContainer: {
    maxWidth: 354,
    width: "100%",
    height: 52,
    backgroundColor: "#1E1E1E",
    marginTop: 24.43,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  agreeText: {
    color: "#666666",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 700,
  },
  checkAllBox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#494949",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    borderColor: "#ffffff",
  },
  unCheck: {
    opacity: 0.4,
  },
  checkAllContainer: {
    width: 359,
    height: 54,
    backgroundColor: '#1A1A1A',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 13,
    alignItems: 'center',
    gap: 13,
    padding: 16
  },
  checkAllText: {
    color: 'rgba(242, 242, 242, 1)',
    fontFamily: 'Pretendard',
    fontSize: 15.5,
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: -0.155,
  },
  titleContainer: {
    width: 354,
    height: 64.8,
    display: 'flex',
    flexDirection: 'column',
    gap: 8.8,
    marginBottom: 30.68

  },
  title: {
    fontFamily: 'Pretendard',
    color: '#F2F2F2',
    fontSize: 26,
    fontWeight: 700,
    fontStyle: 'normal',
    lineHeight: 33.8,
    letterSpacing: -0.65
  },
  titleNote: {
    color: '#757575',
    fontFamily: 'Pretendard',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 21.7,
  }
});

export default Terms;
