import React from 'react'
import { StyleSheet, View } from 'react-native'

import Language from './constants/Language'
import { Sentence } from './models/Sentence'
import FlashCard from './components/FlashCard'

export default function App() {
    const sentenceData: Sentence = {
        id: 1,
        path: 'L001T04',
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
        ]
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
