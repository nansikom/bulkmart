import React, { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

const BackgroundMusic = () => {
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    async function playMusic() {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });

        const { sound } = await Audio.Sound.createAsync(
          require('@/assets/audio/background.mp3'),
          { isLooping: true, volume: 0.5 }
        );

        soundRef.current = sound;
        await sound.playAsync();
      } catch (error) {
        console.log('Error playing audio:', error);
      }
    }

    playMusic();

    return () => {
      soundRef.current && soundRef.current.unloadAsync();
    };
  }, []);

  return null;
};

export default BackgroundMusic;
