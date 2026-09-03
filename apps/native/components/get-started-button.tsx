import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";

import {
  GET_STARTED_BUTTON_BACKGROUND,
  GET_STARTED_BUTTON_FONT_SIZE,
  GET_STARTED_BUTTON_HEIGHT,
  GET_STARTED_BUTTON_TEXT,
  GET_STARTED_BUTTON_TRACKING_EM,
} from "@/components/get-started-button.constants";

type GetStartedButtonProps = {
  label: string;
  onPress?: () => void;
  textSize?: number;
};

function getLabelTypography(label: string) {
  const isLongLabel = label.length > 16;

  return {
    fontSize: isLongLabel
      ? GET_STARTED_BUTTON_FONT_SIZE - 1
      : GET_STARTED_BUTTON_FONT_SIZE,
    letterSpacing:
      (isLongLabel
        ? GET_STARTED_BUTTON_FONT_SIZE - 1
        : GET_STARTED_BUTTON_FONT_SIZE) *
      (isLongLabel
        ? GET_STARTED_BUTTON_TRACKING_EM * 0.65
        : GET_STARTED_BUTTON_TRACKING_EM),
  };
}

export function GetStartedButton({ label, onPress }: GetStartedButtonProps) {
  const typography = getLabelTypography(label);

  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
      }}
      style={{
        height: GET_STARTED_BUTTON_HEIGHT,
        backgroundColor: GET_STARTED_BUTTON_BACKGROUND,
      }}
      className="w-full items-center justify-center rounded-full px-5 active:opacity-85"
      accessibilityRole="button"
    >
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.85}
        style={{
          fontSize: typography.fontSize,
          letterSpacing: typography.letterSpacing,
          color: GET_STARTED_BUTTON_TEXT,
        }}
        className="font-medium uppercase"
      >
        {label}
      </Text>
    </Pressable>
  );
}
