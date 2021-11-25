import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components/mood-picker';
import { useMoodsContext } from '../contexts/moods';

export function Home() {
  const { handleSelectMood } = useMoodsContext();

  return (
    <View style={styles.container}>
      <MoodPicker onMoodChosen={handleSelectMood} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
