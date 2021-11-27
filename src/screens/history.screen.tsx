import { Platform, UIManager } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MoodItemRow } from '../components/mood-item-row';
import { useMoodsContext } from '../contexts/moods';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export function History() {
  const { moods: moodList } = useMoodsContext();
  return (
    <ScrollView>
      {moodList
        .slice()
        .reverse()
        .map((mood, index) => (
          <MoodItemRow key={index} item={mood} />
        ))}
    </ScrollView>
  );
}
