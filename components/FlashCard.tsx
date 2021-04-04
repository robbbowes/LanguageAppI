import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Asset, useAssets } from 'expo-asset'
import AppLoading from 'expo-app-loading'

import { Sentence } from '../models/Sentence'
import AudioPlayer from './AudioPlayer'
import MetaTagInfo from '../helpers/MetaTagInfo'
import AudioFiles from '../constants/AudioFiles'

interface FlashCardProps {
    sentence: Sentence
}

const FlashCard = (props: FlashCardProps) => {
    const [assets] = useAssets([AudioFiles[props.sentence.path]])

    const [isReady, setIsReady] = useState(false)
    const [text, setText] = useState()
    const [id, setId] = useState()

    const setMetaData = async () => {
        const localURI = Asset.fromModule(AudioFiles[props.sentence.path])
            .localUri

        const data = await MetaTagInfo.getMusicInfoAsync(localURI, {
            title: true,
            name: true,
        })
        if (data.title) {
            let string = data.title.split('-')[1]
            setText(string)
            setId(data.name)
            console.log('After setText:', text)
        }
    }

    if (!assets && !text) {
        return <AppLoading />
    }
    setMetaData()

    return (
        <View>
            <View key={id}>
                <Text>{text}</Text>
                <Text>__________________________</Text>
            </View>
            <AudioPlayer src={assets[0]} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default FlashCard
