import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/StatisticsTabStyles/ConclusionSectionStyle"; // 스타일 파일 가져오기

const ConclusionSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>결론</Text>
      <Text style={styles.text}>
      사람마다 소득도 다르고 지출 역시 다르다. 또 집안 사정 역시 다를 것이다. 위에서 언급했던 이태영 학우도 명품에 돈을 전혀 소비하지 않는 건 아니었다. 그는 “최근에 가장 많은 돈을 소비한 것은 어머니께 선물해 드릴 명품 화장품을 구매했을 때다. 당월 입금된 돈에서 급하게 지출한 것이 아닌 3달 전부터 계획해 조금씩 돈을 모아왔기 때문에 당장 생활에 부담이 될 정도의 큰 지출을 막을 수 있었다.”라고 말했다. ‘돈’의 유동성과 그에 대한 책임을 크게 생각하기 때문에 체계적인 소비 생활을 지속할 수 있었던 것이다. 이 학우는 “만일 고등학생 때 금융과 경제를 배우지 않았더라면, 부모님께 충동적인 소비에 대해 가르침을 받지 못했더라면 지금의 나 또한 으레 20대와 같이 과시적인 소비를 반복했을 것이다.”라며 주변 환경과 교육에 대한 중요성도 언급했다.  안 교수는 가치 소비를 언급했다. 가치 소비란 자신이 가치를 부여하거나 본인의 만족도가 높은 소비재는 과감히 소비하고, 지향하는 가치의 수준은 낮추지 않는 대신 만족도 등을 꼼꼼히 따져 합리적으로 소비하는 성향을 지칭한다. 안 교수는 어떤 소비든 자신에게 가치가 있는 소비라면 이유가 있는 소비라고 말했다.
      </Text>
    </View>
  );
};

export default ConclusionSection;
