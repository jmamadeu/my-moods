import { StyleSheet, Text, View } from 'react-native';

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' }
];

export function MoodPicker() {
  return (
    <View style={styles.moodOptions}>
      {moodOptions.map((mood, index) => (
        <Text key={index}>{mood.emoji}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
});
