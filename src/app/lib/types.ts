export type LanguageCode = "en" | "es" | "de" | "fr";

export type WorkExp = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
};

export type GroupedWorkExp = {
  [company: string]: WorkExp[];
};
