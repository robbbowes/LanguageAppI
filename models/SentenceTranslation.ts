import Language from "../constants/Language";

export interface SentenceTranslation {
    id: number,
    language: Language,
    text: string
}