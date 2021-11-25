import { Image, StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components/mood-picker';
import { useMoodsContext } from '../contexts/moods';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export function Home() {
  const { handleSelectMood } = useMoodsContext();

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={[StyleSheet.absoluteFill, styles.moodContainer]}>
        <MoodPicker onMoodChosen={handleSelectMood} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1
  },
  moodContainer: {
    justifyContent: 'center'
  }
});
