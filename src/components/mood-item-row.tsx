import { LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';

import { MoodOptionTimestampType } from '../types/moods';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Reanimated from 'react-native-reanimated';
import format from 'date-fns/format';
import { theme } from '../styles/theme';
import { useMoodsContext } from '../contexts/moods';

type MoodItemRowProps = {
  item: MoodOptionTimestampType;
};

const MAX_SWIPE = 150;

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const { handleDeleteMood } = useMoodsContext();

  const handlePressDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    console.log('i', item);
    handleDeleteMood(item);
  }, [item, handleDeleteMood]);

  return (
    <PanGestureHandler
      activeOffsetX={0}
      activeOffsetY={100}
      onGestureEvent={(event) => {
        console.log(event.nativeEvent.translationX);
      }}
    >
      <Reanimated.View style={[styles.moodItem]}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodValue}>{item.emoji}</Text>
          <Text style={styles.moodDescription}>{item.description}</Text>
        </View>
        <Text style={styles.moodDate}>
          {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </Text>
        <Pressable onPress={() => handlePressDelete()}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </Reanimated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colors.lavender
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colors.purple,
    fontWeight: 'bold'
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  deleteText: {
    color: theme.colors.blue
  }
});
