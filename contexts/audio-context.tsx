import {
  AudioPlayer,
  AudioSource,
  AudioStatus,
  useAudioPlayer,
} from "expo-audio";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AudioContextType {
  player: AudioPlayer;
  play: (source: AudioSource) => void;
  pause: () => void;
  status: AudioStatus | null;
}

const AudioContext = createContext<AudioContextType>(null!);

export default function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const player = useAudioPlayer();
  const [status, setStatus] = useState<AudioStatus | null>(null);

  const play = (source: AudioSource) => {
    try {
      player.replace(source);
      player.play();
    } catch (error) {
      console.error("playback error:", error);
    }
  };

  const pause = () => {
    player.pause();
  };

  useEffect(() => {
    return () => {
      player.remove();
      console.log("player unmounted");
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        player,
        play,
        pause,
        status,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);
