import { View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

import { LUXURY_COLORS } from "@/constants/luxury-theme";

type LuxuryBackgroundProps = {
  variant?: "entry" | "experience";
};

export function LuxuryBackground({ variant = "entry" }: LuxuryBackgroundProps) {
  const isExperience = variant === "experience";

  return (
    <View className="absolute inset-0">
      <Svg width="100%" height="100%" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id={`luxury-bg-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop
              offset="0%"
              stopColor={isExperience ? LUXURY_COLORS.backgroundExperience : "#141416"}
            />
            <Stop
              offset="55%"
              stopColor={isExperience ? "#22262E" : "#1A1D22"}
            />
            <Stop
              offset="100%"
              stopColor={isExperience ? LUXURY_COLORS.backgroundExperienceEnd : "#22262E"}
            />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill={`url(#luxury-bg-${variant})`} />
      </Svg>
      <View
        className="absolute inset-0"
        style={{ backgroundColor: isExperience ? "rgba(196, 181, 160, 0.06)" : "rgba(196, 181, 160, 0.03)" }}
      />
    </View>
  );
}
