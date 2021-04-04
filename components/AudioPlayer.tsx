import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import { AVPlaybackSource } from 'expo-av/build/AV'
import MusicInfo from 'expo-music-info'
import { Asset, useAssets } from 'expo-asset';
interface AudioPlayerProps {
    src: AVPlaybackSource
}

const AudioPlayer = (props: AudioPlayerProps) => {
    const [sound, setSound] = useState(new Audio.Sound())
    const { src } = props
    // const [metaGrabber, setMetaGrabber] = useState(RNMusicMetadata)


    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(src)
        setSound(sound)
        await sound.replayAsync()
    }

    useEffect(() => {
        return sound
            ? () => {
                  sound.unloadAsync()
              }
            : undefined
    }, [sound])

    // const path = './assets/assimil/lesson4/T03.mp3'
    // const meta = async () => {
    //     const [{ localUri }] = await Asset.loadAsync(src);
    //     console.log(localUri)
    //     const data = await MusicInfo.getMusicInfoAsync(
    //         localUri, 
    //         {
    //         title: true
    //     })
    //     console.log(data)
    //     return data
    // }

    return (
        <View>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.control} onPress={playSound}>
                    <FontAwesome5 name="play" size={20} color="#444" />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.control} onPress={() => {}}>
                    <MaterialCommunityIcons
                        name="record-rec"
                        size={28}
                        color="#444"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.control} onPress={meta}>
                    <MaterialCommunityIcons
                        name="record-rec"
                        size={28}
                        color="#444"
                    />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    controls: {
        flexDirection: 'row',
    },
    control: {
        margin: 20,
    },
})

export default AudioPlayer
