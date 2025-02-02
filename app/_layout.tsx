import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setAudioModeAsync } from "expo-audio";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const setUpAudio = async () => {
      await setAudioModeAsync({
        allowsRecording: false,
        playsInSilentMode: true,
        shouldPlayInBackground: true,
        interruptionMode: "duckOthers",
      });
    };
    setUpAudio();
  }, []);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
