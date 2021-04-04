import { SentenceTranslation } from "./SentenceTranslation";
import { Word } from "./Word";

export interface Sentence {
    id: number,
    path: string,
    // text: string,
    // words: Word[],
    translations: SentenceTranslation[]
    // audio: string
}