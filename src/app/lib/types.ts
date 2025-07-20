export const LanguageMap = {
  en: "ENGLISH",
  es: "SPANISH",
  de: "GERMAN",
  fr: "FRENCH",
} as const;

export type LanguageCode = keyof typeof LanguageMap;

export type WorkExp = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
};

export type GroupedWorkExp = {
  [company: string]: WorkExp[];
};
