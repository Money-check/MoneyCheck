import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  section: {
    marginVertical: 13,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  barContainer: {
    marginBottom: 16,
    flexDirection: "column",
  },
  barLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  barLabel: {
    fontSize: 14,
  },
  barAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  progressBarBackground: {
    height: 24,
    backgroundColor: "#E0E0E0", // 배경 색상
    borderRadius: 12, // 전체 둥근 모서리
    overflow: "hidden", // 색 채워진 부분이 배경 밖으로 넘치지 않도록
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#00C4B4", // 프로그래스 바 색상
    borderRadius: 12, // 양 끝을 둥글게 처리
  },
});

export default styles;
