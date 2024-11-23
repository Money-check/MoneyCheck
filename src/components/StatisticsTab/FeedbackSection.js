import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/StatisticsTabStyles/FeedbackSectionStyle";

const FeedbackSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>소비 습관 피드백</Text>
      <Text style={styles.text}>
      근 젊은 층을 중심으로 과소비 행태가 점차 과열되고 있다. 그 중심에는 20대가 자리하고 있다. 현재의 인생을 즐기자는 ‘욜로(현재 자기 행복을 가장 중시하고 소비하는 태도를 이르는 말로, 'You Only Live Once'의 앞글자를 딴 용어)’ 문화가 확산되며 최근 20대들은 미래를 위한 저축보다는 현재의 행복을 지향하는 소비에 치중하는 모습이다. 여기에 ‘과시한다’는 의미를 지닌 ‘플렉스(Flex)’ 문화까지 더해지며 20대의 과소비 행태는 날로 심각해지고 있다.  20대와 대학생들의 소비는 주로 일회성, 쾌락, 흥미를 위한 경우가 많다. 하지만 과거 대학생의 소비는 생활비, 교통비, 생활용품 구매가 주를 이루고 있었다. 10년 전과 비교했을 때 즉흥적인 소비 문화로 변화한 것을 알 수 있다. 어떤 이유 때문일까?   이를 묻기 위해 경제학 전공 안상선 교수를 만나보았다. 안상선 교수는 10년 전 20대와 지금 20대들의 가장 큰 차이점으로 ‘저축하지 않는 점’을 꼽았다. 그는 “과거에는 서울, 경기 집값이 이 정도로 비싸지 않았다. 그래서 직장 생활하고 열심히 저축한다면 집을 살 수 있다는 믿음이 있었다. 하지만 지금은 서울 집값이 10억이 넘어간다. 저축으로 집을 살 수 없다는 것을 알기 때문에 현재에 행복만 추구하는 문화가 퍼졌다.”라고 말했다. 그러나 자가를 마련하지 못한다는 이유로는 미래 없는 소비를 하는 20대를 변호할 수 없다. 그렇다면 20대는 어디에 주로 소비하는 것일까?
      </Text>
    </View>
  );
};

export default FeedbackSection;
