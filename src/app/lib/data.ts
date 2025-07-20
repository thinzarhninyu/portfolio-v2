import { db } from "../utils/db";
import { LanguageCode, LanguageMap } from "./types";

export const getHero = async (lang: LanguageCode) => {
  try {
    const result = await db.content.findFirst({
      where: { language: LanguageMap[lang] },
      select: {
        title: true,
        content: true,
      },
    });

    return result;
  } catch {
    return null;
  }
};

export const getWorkExperience = async () => {
    try {
        const result = await db.workExp.findMany({ orderBy: { startDate: 'desc' } });

        return result;
    } catch {
        return null;
    }
};