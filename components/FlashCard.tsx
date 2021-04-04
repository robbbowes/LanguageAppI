import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Sentence } from '../models/Sentence'
import AudioPlayer from './AudioPlayer'
import MusicInfo from 'expo-music-info'
import { Asset, useAssets } from 'expo-asset'
import AudioFiles from '../constants/AudioFiles'
import AppLoading from 'expo-app-loading'

interface FlashCardProps {
    sentence: Sentence
}

const FlashCard = (props: FlashCardProps) => {
    // const [text, setText] = useState()
    // const [audioPath, setAudioPath] = useState()
    // let localUri;
    const [isReady, setIsReady] = useState(false)

    const [assets] = useAssets([AudioFiles[props.sentence.path]])
    const [text, setText] = useState()
    const [id, setId] = useState()

    // const getData = async () => {
    //     // console.log(props)
    //     // console.log(AudioFiles[sentence.path])
    //     let [{ localUri }] = await Asset.loadAsync(props.sentence.path)

    //     // console.log(localUri)
    //     const data = await MusicInfo.getMusicInfoAsync(asset, {
    //         title: true,
    //         name: true,
    //     })
    //     console.log(data)
    //     setText(data.title)
    //     setId(data.name)
    //     return data
    // }

    // const _getAudioFile = async () => {
    //     const file = [props.sentence.path];
    //     const files = file.map(file => {
    //         return Asset.fromModule(file).downloadAsync();
    //     });
    //     const data = await MusicInfo.getMusicInfoAsync(asset, {
    //         title: true,
    //         name: true,
    //     })
    //     setText(data.title)
    //     setId(data.name)
    //     return Promise.all(files);
    //   }

    // const _cacheResourcesAsync = async () => {
    //     return Asset.fromModule(AudioFiles[props.sentence.path]).downloadAsync()
    // }

    const setMetaData = async () => {
        const localURI = Asset.fromModule(AudioFiles[props.sentence.path]).localUri;
        // const [{ localUri }] = await Asset.loadAsync(AudioFiles[props.sentence.path]);
        const data = await MusicInfo.getMusicInfoAsync(localURI, {
            title: true,
            name: true,
        })
        setText(data.title)
        setId(data.name)
        console.log(text)
    }

    if (!assets && !text) {
        return <AppLoading />
    }

    setMetaData();



    return (
        <View>
            {/* {sentenceData.map((s) => ( */}
            <View key={id}>
                <Text>{text}</Text>
                <Text>__________________________</Text>
                {/* 
                {sentence.translations.map((t) => (
                    <View key={t.id}>
                        <Text>{t.text}</Text>
                    </View>
                ))} */}
            </View>
            {/* ))} */}
            <AudioPlayer src={assets[0]} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default FlashCard
