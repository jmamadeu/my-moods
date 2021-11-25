import React, { createContext, useCallback, useContext, useState } from 'react';
import { MoodOptionTimestampType, MoodOptionType } from '../types/moods';

type MoodContextType = {
  moods: MoodOptionTimestampType[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const MoodContext = createContext<MoodContextType>({} as MoodContextType);

export const MoodProvider: React.FC = ({ children }) => {
  const [moods, setMoods] = useState<MoodOptionTimestampType[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoods((currentList) => [...currentList, { timestamp: Date.now(), ...selectedMood }]);
  }, []);

  return (
    <MoodContext.Provider value={{ moods, handleSelectMood }}>{children}</MoodContext.Provider>
  );
};

export const useMoodsContext = () => {
  const moodContext = useContext(MoodContext);

  return moodContext;
};
