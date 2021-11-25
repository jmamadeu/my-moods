import { View } from 'react-native';
import { MoodItemRow } from '../components/mood-item-row';
import { useMoodsContext } from '../contexts/moods';

export function History() {
  const { moods: moodList } = useMoodsContext();
  return (
    <View>
      {moodList.map((mood, index) => (
        <MoodItemRow key={index} item={mood} />
      ))}
    </View>
  );
}
