import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components/mood-picker';

export function Home() {
  return (
    <View style={styles.container}>
      <MoodPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
