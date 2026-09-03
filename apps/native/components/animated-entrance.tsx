import { useEffect, type PropsWithChildren } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Easing } from "react-native-reanimated";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { scheduleEntranceHaptic } from "@/utils/entrance-haptics";

const LUXURY_EASE = Easing.bezier(0.22, 1, 0.36, 1);

type AnimatedEntranceProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  offsetY?: number;
  scaleFrom?: number;
  hapticOnEnter?: boolean;
  className?: string;
  style?: StyleProp<ViewStyle>;
}>;

export function AnimatedEntrance({
  children,
  delay = 0,
  duration = 1000,
  offsetY = 18,
  scaleFrom,
  hapticOnEnter = false,
  className,
  style,
}: AnimatedEntranceProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(offsetY);
  const scale = useSharedValue(scaleFrom ?? 1);

  useEffect(() => {
    const timingConfig = { duration, easing: LUXURY_EASE };

    opacity.value = withDelay(delay, withTiming(1, timingConfig));
    translateY.value = withDelay(delay, withTiming(0, timingConfig));

    if (scaleFrom !== undefined) {
      scale.value = withDelay(delay, withTiming(1, timingConfig));
    }

    const hapticTimeout = hapticOnEnter ? scheduleEntranceHaptic(delay) : undefined;

    return () => {
      if (hapticTimeout) {
        clearTimeout(hapticTimeout);
      }
    };
  }, [delay, duration, hapticOnEnter, offsetY, opacity, scale, scaleFrom, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <Animated.View className={className} style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

export function AnimatedDivider({
  delay = 520,
  className,
  hapticOnEnter = false,
}: {
  delay?: number;
  className?: string;
  hapticOnEnter?: boolean;
}) {
  const opacity = useSharedValue(0);
  const scaleX = useSharedValue(0.35);

  useEffect(() => {
    const timingConfig = { duration: 900, easing: LUXURY_EASE };

    opacity.value = withDelay(delay, withTiming(1, timingConfig));
    scaleX.value = withDelay(delay, withTiming(1, timingConfig));

    const hapticTimeout = hapticOnEnter ? scheduleEntranceHaptic(delay) : undefined;

    return () => {
      if (hapticTimeout) {
        clearTimeout(hapticTimeout);
      }
    };
  }, [delay, hapticOnEnter, opacity, scaleX]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scaleX: scaleX.value }],
  }));

  return (
    <Animated.View
      className={className ?? "mt-5 h-px w-10 bg-[#D4C4AB]/35"}
      style={animatedStyle}
    />
  );
}
