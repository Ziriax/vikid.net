import type { en } from "./en";
import type { values } from "./en/values";

// TODO: Support regions, eg en-US, nl-BE...
export type Language = "nl" | "en";

export type ValueDescription = typeof values;
export type Translations = typeof en;

export type TranslationKey = keyof Translations;
