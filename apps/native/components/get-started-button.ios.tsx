import { Button, Host, Text } from "@expo/ui/swift-ui";
import {
  buttonStyle,
  containerRelativeFrame,
  controlSize,
  font,
  foregroundColor,
  frame,
  kerning,
  padding,
  textCase,
  tint,
} from "@expo/ui/swift-ui/modifiers";
import * as Haptics from "expo-haptics";

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

export function GetStartedButton({
  label,
  onPress,
  textSize = GET_STARTED_BUTTON_FONT_SIZE,
}: GetStartedButtonProps) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
  };

  return (
    <Host
      style={{
        width: "100%",
        height: GET_STARTED_BUTTON_HEIGHT,
        alignSelf: "stretch",
      }}
      useViewportSizeMeasurement
    >
      <Button
        onPress={handlePress}
        modifiers={[
          buttonStyle("glassProminent"),
          tint(GET_STARTED_BUTTON_BACKGROUND),
          controlSize("large"),
          containerRelativeFrame({ axes: "horizontal" }),
          frame({
            maxWidth: Number.MAX_SAFE_INTEGER,
            height: GET_STARTED_BUTTON_HEIGHT,
            minHeight: GET_STARTED_BUTTON_HEIGHT,
            maxHeight: GET_STARTED_BUTTON_HEIGHT,
          }),
        ]}
      >
        <Text
          modifiers={[
            padding({
              horizontal: 56,
            }),
            foregroundColor(GET_STARTED_BUTTON_TEXT),
            font({ size: textSize, weight: "medium" }),
            kerning(textSize * GET_STARTED_BUTTON_TRACKING_EM),
            textCase("uppercase"),
          ]}
        >
          {label}
        </Text>
      </Button>
    </Host>
  );
}
