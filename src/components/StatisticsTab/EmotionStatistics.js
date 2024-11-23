import React from "react";
import { View, Text } from "react-native";
import { Svg, Circle, G } from "react-native-svg";
import styles from "../../styles/StatisticsTabStyles/EmotionStatisticsStyle"; // 스타일 파일 가져오기

const EmotionStatistics = () => {
  // 감정 데이터 생성 함수
  const generateRandomEmotions = () => {
    const labels = [
      { label: "🤩매우 기쁨", color: "#00B9A5" },
      { label: "😊기쁨", color: "#00C6B5" },
      { label: "😑보통", color: "#02D2C4" },
      { label: "🥲슬픔", color: "#73E0D6" },
      { label: "😭매우 슬픔", color: "#AEEBE6" },
    ];

    let remainingPercentage = 100; // 총합 100%로 제한
    return labels.map((emotion, index) => {
      const isLast = index === labels.length - 1; // 마지막 항목
      const randomPercentage = isLast
        ? remainingPercentage
        : Math.floor(Math.random() * (remainingPercentage + 1));

      remainingPercentage -= randomPercentage; // 남은 퍼센티지 계산
      return { ...emotion, percentage: randomPercentage };
    });
  };

  // 감정 데이터 생성
  const emotions = generateRandomEmotions();

  const radius = 50; // 원형 프로그레스 바의 반지름
  const strokeWidth = 30; // 선 두께
  const circumference = 2 * Math.PI * radius; // 원 둘레
  let accumulatedPercentage = 0; // 시작 각도 계산을 위한 변수

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>감정기반 통계</Text>
      <View style={styles.chartContainer}>
        {/* 원형 프로그레스 바 */}
        <Svg
          width={150}
          height={150}
          viewBox="0 0 150 150" // 뷰박스를 설정하여 전체 영역을 기준으로 렌더링
          style={styles.progressBar} // 추가된 스타일 적용
        >
          <G origin="75, 75" rotation="-90">
            {emotions.map((emotion, index) => {
              const startAngle = accumulatedPercentage;
              accumulatedPercentage += emotion.percentage;
              const strokeDasharray = `${(emotion.percentage / 100) * circumference} ${
                circumference
              }`;

              return (
                <Circle
                  key={index}
                  cx="75"
                  cy="75"
                  r={radius}
                  stroke={emotion.color}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={-startAngle * (circumference / 100)}
                />
              );
            })}
          </G>
        </Svg>

        {/* 레전드 (감정 라벨과 색상) */}
        <View style={styles.legendContainer}>
          {emotions.map((emotion, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[
                  styles.legendColor,
                  { backgroundColor: emotion.color },
                ]}
              />
              <Text style={styles.legendText}>
                {emotion.label}: {emotion.percentage}%
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default EmotionStatistics;
