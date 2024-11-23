import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: "row", // 가로 방향 배치 (원형 바와 레전드 나란히 배치)
    alignItems: "center", // 세로 가운데 정렬
  },
  progressBar: {
    flex: 0, // 크기를 고정하여 왼쪽 정렬
    marginRight: 44, // 레전드와의 간격 조정
  },
  legendContainer: {
    flex: 1, // 나머지 공간을 차지하여 레전드를 오른쪽에 배치
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
});

export default styles;
