import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

import {
  AnimatedDivider,
  AnimatedEntrance,
} from "@/components/animated-entrance";
import { GetStartedButton } from "@/components/get-started-button";
import { LuxuryBackground } from "@/components/luxury-background";
import { MfeLogo } from "@/components/mfe-logo";
import { GET_STARTED_BUTTON_HEIGHT } from "@/components/get-started-button.constants";
import { Host, Image } from "@expo/ui/swift-ui";
import { foregroundColor, tint } from "@expo/ui/swift-ui/modifiers";

const FOOTER_FADE_HEIGHT = 176;
const TOP_FADE_HEIGHT = 132;
const HEADER_TOP_PADDING = 20;
const HEADER_SCROLL_GAP = 28;

const FOOTER_GRADIENT_STOPS = [
  { offset: "0%", color: "#262B33", opacity: 0 },
  { offset: "18%", color: "#252931", opacity: 0.1 },
  { offset: "36%", color: "#242830", opacity: 0.22 },
  { offset: "52%", color: "#23272E", opacity: 0.36 },
  { offset: "66%", color: "#22262C", opacity: 0.52 },
  { offset: "78%", color: "#212429", opacity: 0.68 },
  { offset: "88%", color: "#1F2228", opacity: 0.82 },
  { offset: "96%", color: "#1D2025", opacity: 0.91 },
  { offset: "100%", color: "#1C1F24", opacity: 0.94 },
] as const;

const TOP_GRADIENT_STOPS = [
  { offset: "0%", color: "#181A1E", opacity: 0.99 },
  { offset: "6%", color: "#1C1F24", opacity: 0.96 },
  { offset: "14%", color: "#1D2025", opacity: 0.88 },
  { offset: "26%", color: "#1F2228", opacity: 0.74 },
  { offset: "38%", color: "#212429", opacity: 0.58 },
  { offset: "52%", color: "#23272E", opacity: 0.38 },
  { offset: "68%", color: "#242830", opacity: 0.22 },
  { offset: "84%", color: "#252931", opacity: 0.1 },
  { offset: "100%", color: "#262B33", opacity: 0 },
] as const;

const DESTINATIONS = [
  { id: "miami", label: "Miami", color: "#3A5560" },
  { id: "keys", label: "Florida Keys", color: "#465C54" },
  { id: "fort-lauderdale", label: "Fort Lauderdale", color: "#5E5345" },
  { id: "naples", label: "Naples", color: "#6B4E44" },
  { id: "orlando", label: "Orlando", color: "#43414C" },
  { id: "tampa", label: "Tampa", color: "#544840" },
] as const;

const serif = Platform.select({ ios: "Georgia", android: "serif" });

function LocationTile({
  label,
  color,
  delay,
  onPress,
}: {
  label: string;
  color: string;
  delay: number;
  onPress?: () => void;
}) {
  return (
    <AnimatedEntrance
      delay={delay}
      duration={900}
      offsetY={14}
      hapticOnEnter
      className="w-[47.5%]"
    >
      <Pressable
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
          onPress?.();
        }}
        className="aspect-[4/5] overflow-hidden rounded-xl active:opacity-90"
        accessibilityRole="button"
      >
        <View className="flex-1 justify-end" style={{ backgroundColor: color }}>
          <View className="absolute inset-0 bg-black/12" />
          <View className="absolute inset-0 bg-[#D4C4AB]/5" />
          <View className="px-3 pb-4 pt-8">
            <Text
              className="text-center text-[12px] font-medium uppercase tracking-[0.22em] text-[#F2EDE4]"
              style={{ fontFamily: serif }}
            >
              {label}
            </Text>
          </View>
        </View>
      </Pressable>
    </AnimatedEntrance>
  );
}

function LocationTopFade({ headerSolidHeight }: { headerSolidHeight: number }) {
  const totalHeight = headerSolidHeight + TOP_FADE_HEIGHT;

  return (
    <View
      pointerEvents="none"
      className="absolute left-0 right-0 top-0"
      style={{ height: totalHeight }}
    >
      <Svg width="100%" height="100%" preserveAspectRatio="none">
        <Defs>
          <LinearGradient
            id="location-top-fade"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            {TOP_GRADIENT_STOPS.map((stop) => (
              <Stop
                key={stop.offset}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity}
              />
            ))}
          </LinearGradient>
          <LinearGradient
            id="location-top-warmth"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#D4C4AB" stopOpacity="0.055" />
            <Stop offset="40%" stopColor="#C4B5A0" stopOpacity="0.02" />
            <Stop offset="100%" stopColor="#C4B5A0" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#location-top-fade)" />
        <Rect width="100%" height="100%" fill="url(#location-top-warmth)" />
      </Svg>
    </View>
  );
}

function LocationFooterFade({
  footerSolidHeight,
}: {
  footerSolidHeight: number;
}) {
  const totalHeight = FOOTER_FADE_HEIGHT + footerSolidHeight;

  return (
    <View
      pointerEvents="none"
      className="absolute left-0 right-0 bottom-0"
      style={{ height: totalHeight }}
    >
      <Svg width="100%" height="100%" preserveAspectRatio="none">
        <Defs>
          <LinearGradient
            id="location-footer-fade"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            {FOOTER_GRADIENT_STOPS.map((stop) => (
              <Stop
                key={stop.offset}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity}
              />
            ))}
          </LinearGradient>
          <LinearGradient
            id="location-footer-warmth"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#C4B5A0" stopOpacity="0" />
            <Stop offset="55%" stopColor="#C4B5A0" stopOpacity="0.015" />
            <Stop offset="100%" stopColor="#D4C4AB" stopOpacity="0.045" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#location-footer-fade)" />
        <Rect width="100%" height="100%" fill="url(#location-footer-warmth)" />
      </Svg>
    </View>
  );
}

export default function LocationScreen() {
  const insets = useSafeAreaInsets();
  const footerSolidHeight = GET_STARTED_BUTTON_HEIGHT + 20 + insets.bottom + 12;
  const scrollBottomInset = footerSolidHeight + FOOTER_FADE_HEIGHT * 0.72;

  const headerContentHeight =
    HEADER_TOP_PADDING + 26 + 16 + 1 + 32 + 34 + 8 + 11;
  const headerSolidHeight = insets.top + headerContentHeight;
  const scrollTopInset = headerSolidHeight + HEADER_SCROLL_GAP;

  return (
    <>
      <View className="flex-1 bg-[#1C1F24]">
        <StatusBar style="light" />
        <LuxuryBackground variant="experience" />

        <View className="relative flex-1 px-7">
          <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: scrollTopInset,
              paddingBottom: scrollBottomInset,
            }}
          >
            <View className="flex-row flex-wrap justify-between gap-y-3">
              {DESTINATIONS.map((destination, index) => (
                <LocationTile
                  key={destination.id}
                  label={destination.label}
                  color={destination.color}
                  delay={460 + index * 85}
                />
              ))}
            </View>
          </ScrollView>

          <View
            pointerEvents="box-none"
            className="absolute left-0 right-0 top-0"
            style={{ marginHorizontal: -28 }}
          >
            <LocationTopFade headerSolidHeight={headerSolidHeight} />

            <View
              className="px-7"
              style={{ paddingTop: insets.top + HEADER_TOP_PADDING }}
            >
              <View className="items-center">
                <View className="absolute left-8 -top-1.75 z-50 flex-1">
                  <Pressable
                    className="active:opacity-90 flex-1"
                    onPress={() => router.back()}
                  >
                    <Host matchContents>
                      <Image
                        systemName="chevron.backward"
                        size={18}
                        modifiers={[
                          tint("#D4C4AB"),
                          foregroundColor("#D4C4AB"),
                        ]}
                      />
                    </Host>
                  </Pressable>
                </View>
                <AnimatedEntrance
                  delay={120}
                  duration={900}
                  offsetY={10}
                  hapticOnEnter
                >
                  <MfeLogo size="header" />
                </AnimatedEntrance>

                <AnimatedDivider
                  delay={220}
                  className="mt-4 h-px w-10 bg-[#D4C4AB]/35"
                  hapticOnEnter
                />
              </View>

              <AnimatedEntrance
                delay={320}
                duration={950}
                offsetY={16}
                className="mt-8"
              >
                <Text
                  className="text-center text-[34px] leading-10 text-[#F2EDE4]"
                  style={{ fontFamily: serif }}
                >
                  Where?
                </Text>
                <Text className="mt-2 text-center text-[11px] uppercase tracking-[0.34em] text-[#8A857D]">
                  Choose your destination
                </Text>
              </AnimatedEntrance>
            </View>
          </View>

          <View
            pointerEvents="box-none"
            className="absolute bottom-0 left-0 right-0"
            style={{ marginHorizontal: -28 }}
          >
            <LocationFooterFade footerSolidHeight={footerSolidHeight} />

            <View
              className="px-7 pt-3"
              style={{ paddingBottom: insets.bottom + 12 }}
            >
              <AnimatedEntrance
                delay={980}
                duration={900}
                offsetY={12}
                hapticOnEnter
                className="w-full"
              >
                <View className="w-full flex-row items-center gap-2.5">
                  <View className="min-w-0 flex-1">
                    <GetStartedButton label="Surprise Me" />
                  </View>
                </View>
              </AnimatedEntrance>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
