import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // 컨테이너 아래쪽 여백 설정
  },
  selector: {
    flexDirection: "row", // 내부 요소를 가로 방향으로 배치
    alignItems: "center", // 세로 방향 가운데 정렬
    backgroundColor: "#FFF", // 배경색을 흰색으로 설정
    marginLeft: 24,
    paddingTop: 25.5,
    // justifyContent: "space-between", // 양 끝으로 요소 배치
    // borderWidth: 1, // 테두리 두께 설정
    // borderColor: "#CCC", // 테두리 색상 설정
    // borderRadius: 8, // 테두리를 둥글게 설정
    // padding: 12, // 내부 여백 설정
  },
  selectorText: {
    fontSize: 18, // 텍스트 크기 설정
    fontWeight: "bold", // 텍스트 굵게 설정
    color: "#009984", // 텍스트 색상을 초록색으로 설정
  },
  modalOverlay: {
    flex: 1, // 모달이 화면 전체를 차지하도록 설정
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경을 반투명 검정으로 설정
    justifyContent: "center", // 모달 내용을 세로 방향 가운데 정렬
    alignItems: "center", // 모달 내용을 가로 방향 가운데 정렬
  },
  pickerContainer: {
    width: "80%", // 컨테이너 너비를 화면의 80%로 설정
    backgroundColor: "#FFF", // 컨테이너 배경색을 흰색으로 설정
    borderRadius: 10, // 테두리를 둥글게 설정
    padding: 20, // 내부 여백 설정
    alignItems: "center", // 내부 요소를 가로 방향 가운데 정렬
  },
  pickerLabel: {
    fontSize: 16, // 텍스트 크기 설정
    fontWeight: "bold", // 텍스트 굵게 설정
    color: "#009984", // 텍스트 색상을 초록색으로 설정
    marginBottom: 10, // 텍스트 아래쪽 간격 설정
  },
  picker: {
    width: "100%", // 선택기 너비를 컨테이너 너비에 맞춤
  },
  buttonContainer: {
    flexDirection: "row", // 버튼들을 가로 방향으로 배치
    justifyContent: "space-between", // 버튼들을 양 끝으로 정렬
    marginTop: 20, // 위쪽 간격 설정
    width: "100%", // 버튼 컨테이너 너비를 전체로 설정
  },
  closeButton: {
    flex: 1, // 버튼이 동일한 너비를 가지도록 설정
    marginRight: 8, // 오른쪽 간격 설정
    paddingVertical: 10, // 세로 여백 설정
    backgroundColor: "#FFCDD2", // 버튼 배경색을 연한 빨간색으로 설정
    borderRadius: 8, // 버튼 테두리를 둥글게 설정
    alignItems: "center", // 텍스트를 가운데 정렬
  },
  closeButtonText: {
    color: "#D32F2F", // 텍스트 색상을 짙은 빨간색으로 설정
    fontWeight: "bold", // 텍스트 굵게 설정
    fontSize: 16, // 텍스트 크기 설정
  },
  confirmButton: {
    flex: 1, // 버튼이 동일한 너비를 가지도록 설정
    marginLeft: 8, // 왼쪽 간격 설정
    paddingVertical: 10, // 세로 여백 설정
    backgroundColor: "#C8E6C9", // 버튼 배경색을 연한 초록색으로 설정
    borderRadius: 8, // 버튼 테두리를 둥글게 설정
    alignItems: "center", // 텍스트를 가운데 정렬
  },
  confirmButtonText: {
    color: "#388E3C", // 텍스트 색상을 짙은 초록색으로 설정
    fontWeight: "bold", // 텍스트 굵게 설정
    fontSize: 16, // 텍스트 크기 설정
  },
});

export default styles;
