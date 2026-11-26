import idCommon from "./id/common.json";
import idMarketing from "./id/marketing.json";
import idDocs from "./id/docs.json";

import enCommon from "./en/common.json";
import enMarketing from "./en/marketing.json";
import enDocs from "./en/docs.json";

export const id = {
  common: idCommon,
  marketing: idMarketing,
  docs: idDocs,
};

/**
 * Automatic type-check: ensures all JSON files in en/
 * have the exact same structure and keys as those in id/.
 */
export const en: typeof id = {
  common: enCommon,
  marketing: enMarketing,
  docs: enDocs,
};

export type Dictionary = typeof id;

export const dictionaries = {
  id,
  en,
} as const;
