import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Sentence } from '../models/Sentence'
import AudioPlayer from './AudioPlayer'

interface FlashCardProps {
    sentence: Sentence
}

const FlashCard = (props: FlashCardProps) => {
    const { sentence } = props

    return (
        <View>
            {/* {sentenceData.map((s) => ( */}
            <View key={sentence.id}>
                <Text>{sentence.text}</Text>
                <Text>__________________________</Text>

                {sentence.translations.map((t) => (
                    <View key={t.id}>
                        <Text>{t.text}</Text>
                    </View>
                ))}
            </View>
            {/* ))} */}
            <AudioPlayer src={require('../assets/assimil/lesson4/T03.mp3')} />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default FlashCard
