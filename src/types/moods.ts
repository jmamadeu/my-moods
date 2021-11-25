export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionTimestampType = MoodOptionType & {
  timestamp: number;
};
