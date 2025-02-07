import {
  AudioPlayer,
  AudioSource,
  AudioStatus,
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface Track {
  trackId: string;
  url: string;
  tritonId: string;
  albumArt?: string;
  stationName: string;
}

interface AudioContextType {
  player: AudioPlayer;
  play: (source: AudioSource) => void;
  pause: () => void;
  status: AudioStatus | null;
  currentSource: Track | null;
  setCurrentSource: React.Dispatch<SetStateAction<Track | null>>;
}

const AudioContext = createContext<AudioContextType>(null!);

export default function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const player = useAudioPlayer();
  const [status, setStatus] = useState<AudioStatus | null>(null);
  const [currentSource, setCurrentSource] = useState<Track | null>(null);

  const play = (source: AudioSource) => {
    try {
      player.replace(source);
      console.log("source replaced");
      player.play();
      console.log("player playing");
    } catch (error) {
      console.error("playback error:", error);
    }
  };

  const pause = () => {
    player.pause();
  };

  //Subscribe to player status updates
  const playerStatus = useAudioPlayerStatus(player);
  useEffect(() => {
    setStatus(playerStatus);
  }, [playerStatus]);

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
        currentSource,
        setCurrentSource,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);

// helper to compare sources
export const isSameSource = (a: AudioSource | null, b: AudioSource) => {
  if (!a) return false;
  if (typeof a === "string") return a === b;
  if (typeof a === "number") return a === b;
  return a.uri === (b as any).uri;
};
