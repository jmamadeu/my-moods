import React, { useCallback, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles/theme';
import { MoodOptionType } from '../types/moods';

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' }
];

type MoodPickerProps = {
  onMoodChosen: (mood: MoodOptionType) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({ onMoodChosen }) => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType | null>(null);
  const [hasSelected, setHasSelected] = useState(false);

  const handleSelect = useCallback(() => {
    setHasSelected((current) => !current);

    if (selectedMood) {
      onMoodChosen(selectedMood);
      setSelectedMood(null);
    }
  }, [selectedMood, onMoodChosen]);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/butterflies.png')} />
        <Pressable style={styles.button} onPress={() => handleSelect()}>
          <Text style={styles.buttonText}>Choose another</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map((option, index) => (
          <View key={index}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              key={option.emoji}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji ? styles.selectedMoodItem : undefined
              ]}
            >
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <Pressable style={styles.button} onPress={() => handleSelect()}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.white
  },
  descriptionText: {
    color: theme.colors.purple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center'
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colors.purple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colors.white
  },
  button: {
    backgroundColor: theme.colors.purple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    alignSelf: 'center'
  }
});
