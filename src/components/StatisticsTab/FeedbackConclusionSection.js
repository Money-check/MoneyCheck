import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import feedbackStyles from "../../styles/StatisticsTabStyles/FeedbackSectionStyle";
import conclusionStyles from "../../styles/StatisticsTabStyles/ConclusionSectionStyle";

const FeedbackConclusionSection = ({ selectedYear, selectedMonthIndex }) => {
  // 텍스트 세트 데이터
  const textSets = {
    "최근 소비 패턴 분석 결과, 감정과 소비의 상관관계에서 흥미로운 경향이 나타났습니다. 식비의 경우, 기쁨 상태에서 고급 레스토랑 방문이나 외식 비중이 크게 증가하였고, 슬픔 상태에서는 간편식, 배달 음식 소비가 두드러졌습니다. 이는 감정 변화에 따라 식비 소비가 쉽게 변동할 수 있다는 점을 보여줍니다. 주거비는 안정적인 지출이 유지되는 카테고리로, 감정 변화와는 큰 관련이 없었습니다. 교통비는 주로 보통의 감정 상태에서 높은 지출이 관찰되었으며, 이는 일상적인 활동과 연관된 소비임을 나타냅니다.\n\n의료/건강 관련 소비는 슬픔과 매우 슬픔 상태에서 높아졌습니다. 이는 스트레스나 감정적 불안이 건강 관리에 대한 필요성을 자극했기 때문으로 보입니다. 쇼핑은 매우 기쁨 상태에서 충동적 구매가 증가했으며, 슬픔 상태에서는 스트레스를 해소하기 위한 소비가 관찰되었습니다. 문화/여가 소비는 주로 기쁨 상태에서 활성화되었으며, 이는 긍정적인 감정을 유지하려는 의도로 해석됩니다. 반려동물 관련 소비는 감정 변화와 상관없이 안정적이었으나, 기쁨 상태에서 반려동물과의 활동을 위한 소비가 증가한 경향이 있었습니다. 기타 카테고리는 매우 슬픔 상태에서 불필요한 구매가 증가하여 감정적 소비의 대표 사례로 나타났습니다.": "소비는 단순한 경제적 활동을 넘어 감정을 표현하고 조절하는 수단으로 작용합니다. 하지만 감정적 소비는 때로는 비합리적인 결과를 초래할 수 있으므로, 이를 관리할 필요가 있습니다. 우선, 식비와 쇼핑에서 감정적 소비를 줄이기 위해 구매 전 꼭 필요한 지출인지 점검하는 습관을 가지는 것이 중요합니다. 이를 위해 외식 빈도를 제한하거나 쇼핑 시 장바구니에 담은 물건을 하루 뒤에 다시 검토하는 방식이 효과적일 수 있습니다.\n\n다음으로, 의료/건강 관련 소비를 긍정적으로 활용하여 슬픔 상태를 극복할 수 있는 방향성을 제안합니다. 운동, 요가, 명상과 같은 활동에 소액을 투자하는 것이 장기적인 건강 관리에 도움이 될 것입니다. 또한, 문화/여가 소비를 통해 기쁨 상태를 더욱 풍요롭게 유지하는 것도 추천됩니다. 감정이 기쁨일 때 즐길 수 있는 무료 또는 저비용 활동을 발굴하면 효율적인 소비로 이어질 수 있습니다.\n\n마지막으로, 매우 슬픔 상태에서는 즉흥적 소비를 억제하고 자신을 돌보는 데 집중해야 합니다. 반려동물과 시간을 보내거나 취미활동에 집중하는 것이 이를 도울 수 있습니다. 전반적으로, 소비를 통해 감정을 조절하기보다는, 감정을 안정적으로 관리하는 방법을 모색하며, 합리적인 지출을 추구하는 것이 바람직합니다.",
    "감정 상태와 소비 패턴을 분석한 결과, 식비에서는 기쁨이나 매우 기쁨 상태에서 고급 음식이나 외식을 즐기며 지출이 증가하는 경향이 발견되었습니다. 반면, 슬픔 상태에서는 간편식이나 배달 음식의 의존도가 높아졌습니다. 이는 감정이 긍정적일 때는 경험을 중시하고, 부정적일 때는 편의를 우선시하는 특성을 보여줍니다. 주거비는 변동성이 적으며, 계획된 지출로 감정과 큰 상관관계는 드러나지 않았습니다. 교통비는 보통 감정 상태에서 일상적으로 소비되었으며, 의료/건강 관련 지출은 슬픔과 매우 슬픔 상태에서 높게 나타났습니다. 이는 스트레스 해소와 건강 유지에 대한 필요성이 감정적으로 영향을 받는다는 점을 시사합니다. 쇼핑의 경우, 매우 기쁨 상태에서는 자기보상이나 충동구매가 증가했고, 슬픔 상태에서는 스트레스를 해소하기 위한 의도로 쇼핑이 이루어졌습니다. 문화/여가 소비는 기쁨 상태에서 활성화되었으며, 이는 긍정적 감정을 증폭하려는 욕구와 관련이 있습니다. 반려동물 카테고리는 감정에 따른 큰 차이는 없으나, 기쁨 상태에서는 반려동물과의 교감에 더 많은 지출이 이루어졌습니다. 기타 소비는 매우 슬픔 상태에서 필요 이상의 지출로 이어지는 경우가 관찰되었습니다.": "소비와 감정은 밀접한 연관이 있지만, 충동적 소비를 줄이고 더 나은 방향으로 지출을 계획할 필요가 있습니다.\n\n첫째, 식비와 쇼핑에서 자신만의 소비 규칙을 설정하는 것이 중요합니다. 예를 들어, 외식을 줄이고 주간 식단을 미리 계획하거나, 구매 충동을 억제하기 위해 대기 시간을 가지는 방법을 실천할 수 있습니다. 이렇게 하면 불필요한 소비를 줄이고, 더 많은 금액을 장기적인 목표에 투자할 수 있습니다.\n\n둘째, 슬픔이나 스트레스 상태에서 의료/건강 소비를 긍정적인 방식으로 전환하는 것이 필요합니다. 정기적인 건강 관리와 스트레스 해소를 위한 운동, 심리 상담 또는 웰니스 프로그램에 투자하면 즉각적인 감정 해소뿐 아니라 장기적인 삶의 질을 향상시킬 수 있습니다.\n\n셋째, 문화/여가 소비를 활용하여 기쁨 상태를 더욱 확대할 수 있습니다. 저비용의 문화 활동, 지역 축제, 독서 모임 등 감정적으로 만족스러우면서도 재정적으로 부담이 적은 활동을 찾아보세요.\n\n마지막으로, 매우 슬픔 상태에서는 즉흥적 소비를 지양하고, 자신을 위한 비소비적 활동을 찾는 노력이 필요합니다. 예를 들어, 반려동물과 산책하거나 명상과 같은 활동으로 감정을 정리하면 부정적인 감정에서 벗어나는 데 도움이 됩니다.\n\n이러한 과정을 통해 단순히 소비를 줄이는 데 그치지 않고, 감정과 소비 간의 균형을 찾는 방향으로 소비습관을 개선할 수 있습니다. 지속 가능한 소비와 감정 관리를 통해 장기적인 재정 안정과 심리적 만족을 모두 추구하는 것이 이상적인 방향입니다.",
    "소비 데이터를 분석한 결과, 감정 상태가 소비에 미치는 강력한 영향을 확인할 수 있었습니다. 식비는 매우 기쁨 상태에서 친구나 가족과 외식을 즐기며 지출이 증가하는 모습이 나타났고, 슬픔 상태에서는 편리함을 추구하는 배달 음식 지출이 늘어났습니다. 이는 식비가 감정 상태에 따라 변화하기 쉬운 대표적인 카테고리임을 보여줍니다. 주거비는 대부분 일정한 수준을 유지하며 감정 상태와 연관성이 낮았으나, 슬픔 상태에서 홈데코 등 환경 개선 지출이 다소 증가한 경우가 있었습니다.\n\n교통비는 보통의 감정 상태에서 꾸준히 유지되었으며, 감정 변화에 따른 변동은 크지 않았습니다. 의료/건강은 슬픔이나 매우 슬픔 상태에서 병원 방문, 약품 구매 등 지출이 증가한 반면, 기쁨 상태에서는 운동 관련 소비가 늘어나는 양상을 보였습니다. 쇼핑은 매우 기쁨 상태에서 기념품, 옷, 장신구 등 본인을 위한 지출이 급증했으며, 슬픔 상태에서는 스트레스 해소를 위한 즉흥적 구매가 증가했습니다. 문화/여가는 주로 기쁨 상태에서 활발히 이루어졌으며, 이는 긍정적인 감정을 지속시키고자 하는 소비자의 심리가 반영된 것으로 보입니다. 반려동물 관련 소비는 감정 상태와 크게 관련이 없었지만, 기쁨 상태에서는 반려동물을 위한 간식이나 장난감 구매가 소폭 증가했습니다. 기타 소비는 매우 슬픔 상태에서 충동적 소비로 이어지는 경향이 강했습니다.": "감정 기반 소비는 순간적인 만족을 제공할 수 있지만, 장기적인 관점에서는 재정적 안정성과 감정 조절 능력에 부정적인 영향을 줄 수 있습니다. 이를 개선하기 위해 우선 식비에서의 감정 소비를 의식적으로 관리하는 것이 필요합니다. 슬픔 상태에서 배달 음식 의존도를 낮추고, 간단하지만 직접 요리할 수 있는 재료를 미리 준비하는 방법을 활용해 보세요. 이는 비용을 줄이는 동시에 감정적으로도 안정감을 줄 수 있습니다.\n\n다음으로, 의료/건강 카테고리에서는 감정 상태에 관계없이 정기적인 건강 관리 루틴을 유지하는 것이 중요합니다. 예를 들어, 슬픔 상태일 때는 스트레스를 줄이는 명상 앱이나 간단한 홈 트레이닝을 활용할 수 있습니다. 이는 비생산적인 소비를 줄이고 감정 관리를 돕는 긍정적 방안이 될 것입니다.\n\n쇼핑과 문화/여가 소비에서는 기쁨 상태에서 과도한 소비를 방지하고, 무료 또는 저비용으로 즐길 수 있는 대안을 탐색해 보세요. 기쁨의 순간을 더욱 풍요롭게 만들되, 지출 후 후회하지 않도록 사전에 예산을 설정하는 것이 효과적입니다. 반대로 슬픔 상태에서는 쇼핑 대신 취미나 반려동물과의 시간을 활용해 스트레스를 해소하는 방법을 제안합니다.\n\n마지막으로, 매우 슬픔 상태에서는 소비를 통해 감정을 해결하려는 경향을 경계해야 합니다. 일기 쓰기, 산책, 친구와의 대화 등 소비 외적인 활동을 통해 부정적인 감정을 다루는 연습을 해보세요. 이는 즉흥적 소비를 줄이고, 스스로의 감정을 더 건강하게 관리할 수 있는 방법을 제공합니다.\n\n결론적으로, 소비는 감정의 도구가 아닌 삶의 가치를 높이는 수단으로 자리 잡아야 합니다. 감정적 소비를 줄이고, 계획적이고 가치 있는 소비를 실천하여 재정적 안정과 감정적 균형을 동시에 달성해 보세요.",
    "분석 결과, 감정 상태와 소비 패턴 간의 밀접한 관계가 확인되었습니다. 식비는 매우 기쁨 상태에서 친구와의 외식, 고급 레스토랑 소비가 증가하는 경향을 보였으며, 슬픔 상태에서는 간편식과 배달 음식으로 지출이 집중되는 모습이 나타났습니다. 이는 기쁨 상태에서는 사회적 경험을 중시하고, 슬픔 상태에서는 편리함과 즉각적인 만족을 추구하는 경향과 맞닿아 있습니다. 주거비는 계획된 비용으로 감정 변화와 큰 연관이 없었으나, 슬픔 상태에서 새로운 환경을 조성하려는 소규모 인테리어 비용이 증가한 사례가 관찰되었습니다.\n\n교통비는 보통 감정 상태에서 안정적인 소비를 보였고, 이는 일상생활의 필수적 지출로 해석됩니다. 의료/건강 소비는 슬픔과 매우 슬픔 상태에서 건강 관리 또는 스트레스 해소를 위한 소비가 증가했으며, 기쁨 상태에서는 운동용품이나 체험형 건강 프로그램 구매가 늘어나는 경향이 있었습니다. 쇼핑은 매우 기쁨 상태에서 자기 보상적 소비가 급증했고, 슬픔 상태에서는 스트레스 해소를 위한 구매로 이어졌습니다. 문화/여가 소비는 주로 기쁨 상태에서 활발히 이루어졌으며, 이는 긍정적인 감정을 지속시키고자 하는 의도가 반영된 소비로 보입니다. 반려동물 소비는 감정 상태에 따른 큰 변동은 없었으나, 기쁨 상태에서는 간식이나 장난감 구매가 증가해 반려동물과의 긍정적 상호작용을 중시하는 경향이 있었습니다. 기타 소비는 매우 슬픔 상태에서 비합리적인 구매로 이어지는 경향이 나타났습니다.": "감정에 따라 소비가 변동하는 것은 자연스러운 현상이지만, 지속 가능하고 합리적인 소비를 위해 감정적 소비를 관리하는 노력이 필요합니다. 식비의 경우, 기쁨 상태에서 외식 빈도를 제한하고, 건강하고 경제적인 식단을 준비하는 습관을 형성하는 것이 중요합니다. 슬픔 상태에서는 간단한 재료로 직접 요리하는 방식을 시도해 소비를 줄이고 정서적 만족감을 높일 수 있습니다.\n\n의료/건강 카테고리에서는 감정 변화에 흔들리지 않는 정기적인 건강 관리 체계를 마련해야 합니다. 슬픔 상태에서 즉각적 해소를 위한 소비보다는, 명상, 걷기 등 비용이 들지 않으면서도 스트레스를 해소할 수 있는 활동을 실천해 보세요. 쇼핑은 기쁨 상태에서의 충동 구매를 억제하기 위해, 구매 전 실제 필요한 물품인지 검토하는 시간을 갖는 것이 효과적입니다. 또한, 슬픔 상태에서는 쇼핑 대신 취미 활동이나 반려동물과의 시간을 활용해 스트레스를 관리하는 대안을 모색할 수 있습니다.\n\n문화/여가 소비는 긍정적 감정을 강화하는 효과가 있으므로, 저비용으로 즐길 수 있는 활동을 탐색하고 예산 범위 내에서 계획적으로 즐기는 방식을 추천합니다. 예를 들어, 도서관 방문, 공원 산책, 무료 전시회 참여 등은 감정적으로 풍요로움을 느끼게 해주면서도 재정적 부담이 적습니다.\n\n마지막으로, 매우 슬픔 상태에서는 소비에 의존하기보다 감정을 해소할 수 있는 비소비적 활동을 활용해야 합니다. 자신을 돌보고 감정을 표현할 수 있는 일기 쓰기, 음악 감상, 신뢰할 수 있는 사람과의 대화는 즉흥적 소비를 줄이고, 감정적 안정감을 찾는 데 도움이 될 것입니다.\n\n결론적으로, 감정 기반 소비는 그 자체로 문제가 되기보다는 관리의 여부에 따라 긍정적 또는 부정적 영향을 미칠 수 있습니다. 감정을 이해하고, 필요에 따라 소비를 통제하며, 장기적으로 안정된 재정을 유지하는 습관을 형성하는 것이 중요합니다. 감정에 흔들리지 않는 소비 습관을 통해 삶의 질을 더욱 높이고, 재정적 안정성과 정서적 균형을 모두 추구하는 방향으로 나아가세요.",
  };

  // 현재 표시할 피드백과 결론 상태
  const [currentFeedback, setCurrentFeedback] = useState("");
  const [currentConclusion, setCurrentConclusion] = useState("");

  // 날짜 변경 시 피드백과 결론 텍스트를 랜덤으로 변경
  useEffect(() => {
    const feedbackTexts = Object.keys(textSets); // ["1111", "2222", "3333", "4444"]
    const randomIndex = Math.floor(Math.random() * feedbackTexts.length);
    const selectedFeedback = feedbackTexts[randomIndex];
    setCurrentFeedback(selectedFeedback);
    setCurrentConclusion(textSets[selectedFeedback]);
  }, [selectedYear, selectedMonthIndex]);

  return (
    <>
      {/* 피드백 섹션 */}
      <View style={feedbackStyles.section}>
        <Text style={feedbackStyles.sectionTitle}>소비 습관 피드백</Text>
        <Text style={feedbackStyles.text}>{currentFeedback}</Text>
      </View>

      {/* 결론 섹션 */}
      <View style={conclusionStyles.section}>
        <Text style={conclusionStyles.sectionTitle}>결론</Text>
        <Text style={conclusionStyles.text}>{currentConclusion}</Text>
      </View>
    </>
  );
};

export default FeedbackConclusionSection;