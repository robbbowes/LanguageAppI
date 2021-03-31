import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import { AVPlaybackSource } from 'expo-av/build/AV'

interface AudioPlayerProps {
    src: AVPlaybackSource
}

const AudioPlayer = (props: AudioPlayerProps) => {
    const [sound, setSound] = useState(new Audio.Sound())
    const { src } = props;

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            src
        )
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

    return (
        <View>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.control} onPress={playSound}>
                    <FontAwesome5 name="play" size={20} color="#444" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.control} onPress={() => {}}>
                    <MaterialCommunityIcons
                        name="record-rec"
                        size={28}
                        color="#444"
                    />
                </TouchableOpacity>
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
