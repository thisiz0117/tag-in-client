// 이용 약관
import Header from "@/components/Header";
import Term from "@/components/Term";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Terms = () => {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const ex = [
    {
      id: "age",
      isRequire: true,
      text: "만 14세 이상입니다",
      text_detail: "만 14세 이상 이용 약관 상세 내용...",
      isCheck: checks.age ?? false,
      onToggle: () => setChecks((prev) => ({ ...prev, age: !prev.age })),
    },
    {
      id: "service",
      isRequire: true,
      text: "서비스 이용약관",
      text_detail: "서비스 이용약관 상세 내용...",
      isCheck: checks.service ?? false,
      onToggle: () =>
        setChecks((prev) => ({ ...prev, service: !prev.service })),
    },
    {
      id: "privacy",
      isRequire: true,
      text: "개인정보 수집 및 이용",
      text_detail: "개인정보 수집 및 이용 상세 내용...",
      isCheck: checks.privacy ?? false,
      onToggle: () =>
        setChecks((prev) => ({ ...prev, privacy: !prev.privacy })),
    },
    {
      id: "marketing",
      isRequire: false,
      text: "마케팅 정보 수신",
      text_detail: "마케팅 정보 수신 동의 상세 내용...",
      isCheck: checks.marketing ?? false,
      onToggle: () =>
        setChecks((prev) => ({ ...prev, marketing: !prev.marketing })),
    },
  ];
  return (
    <View style={styles.phone}>
      <Header />
      {ex.map((e) => (
        <Term
          key={e.id}
          isRequire={e.isRequire}
          text={e.text}
          text_detail={e.text_detail}
          isCheck={e.isCheck}
          onToggle={e.onToggle}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  phone: {
    width: 402,
    height: 874,
    backgroundColor: "#000000",
    borderRadius: 48,
    display: "flex",
    // justifyContent: 'center',
    alignItems: "center",
  },
});

export default Terms;
