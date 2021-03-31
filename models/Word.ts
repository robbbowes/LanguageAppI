import { WordTranslation } from "./WordTranslation";

export interface Word {
    id: number,
    text: string,
    wordTranslation: WordTranslation[],
    studied: number,
    lastStudied: string,
    nextStudyDate: string
}