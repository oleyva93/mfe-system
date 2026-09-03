import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

export async function playEntranceHaptic() {
  if (Platform.OS === "web") {
    return;
  }

  try {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  } catch {
    try {
      await Haptics.selectionAsync();
    } catch {
      // Haptics unavailable on this device.
      console.warn("Haptics unavailable on this device.");
    }
  }
}

export function scheduleEntranceHaptic(delay: number) {
  if (Platform.OS === "web") {
    return undefined;
  }

  return setTimeout(() => {
    void playEntranceHaptic();
  }, delay);
}
