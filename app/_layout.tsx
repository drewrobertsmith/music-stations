import AudioProvider from "@/contexts/audio-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setAudioModeAsync } from "expo-audio";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <AudioProvider>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="index"
              options={{
                title: "Music Stations",
              }}
            />
            <Stack.Screen
              name="local-stations"
              options={
                {
                  // presentation: "modal",
                }
              }
            />
          </Stack>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </AudioProvider>
  );
}
