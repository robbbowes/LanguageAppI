import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Language from './constants/Language'
import { Sentence } from './models/Sentence'
import FlashCard from './components/FlashCard'

export default function App() {
    const sentenceData: Sentence = {
        id: 1,
        text: 'Jeg har en hytte med bare tre rom.',
        translations: [
            {
                id: 1,
                language: Language.English,
                text: 'I have a cabin with only three rooms',
            },
            {
                id: 2,
                language: Language.French,
                text: "J'ai un chalet avec seulement trois chambres.",
            },
        ],
        audio: './assets/assimil/lesson4/T03.mp3',
    }

    return (
        <View style={styles.container}>
            <FlashCard sentence={sentenceData} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
