import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { MoodOptionTimestampType, MoodOptionType } from '../types/moods';

type MoodContextType = {
  moods: MoodOptionTimestampType[];
  handleSelectMood: (mood: MoodOptionType) => void;
  handleDeleteMood: (mood: MoodOptionTimestampType) => void;
};

const MoodContext = createContext<MoodContextType>({} as MoodContextType);

type MoodStorageType = MoodOptionTimestampType[];

const KEY = '@my-moods';

const setMoodsToStorage = async (moods: MoodStorageType) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(moods));
  } catch (e: any) {
    console.log(e.message);
  }
};

const getMoodsFromStorage = async () => {
  try {
    const results = await AsyncStorage.getItem(KEY);
    if (results) {
      const moods = JSON.parse(results) as MoodStorageType;

      return moods;
    }
  } catch (e: any) {
    console.log(e.message);
  }

  return null;
};

export const MoodProvider: React.FC = ({ children }) => {
  const [moods, setMoods] = useState<MoodOptionTimestampType[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoods((currentList) => {
      const newMoods = [...currentList, { timestamp: Date.now(), ...selectedMood }];
      setMoodsToStorage(newMoods);
      return newMoods;
    });
  }, []);

  const handleDeleteMood = useCallback((mood: MoodOptionTimestampType) => {
    setMoods((current) => {
      const moodsFiltered = current.filter((m) => mood.timestamp !== m.timestamp);

      return moodsFiltered;
    });
  }, []);

  useEffect(() => {
    const fetchInitialMoods = async () => {
      const data = await getMoodsFromStorage();
      if (!data) return;

      setMoods(data);
    };

    fetchInitialMoods();
  }, []);

  return (
    <MoodContext.Provider value={{ moods, handleSelectMood, handleDeleteMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMoodsContext = () => {
  const moodContext = useContext(MoodContext);

  return moodContext;
};
