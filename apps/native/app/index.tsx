import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AnimatedDivider, AnimatedEntrance } from "@/components/animated-entrance";
import { GetStartedButton } from "@/components/get-started-button";
import { LuxuryBackground } from "@/components/luxury-background";
import { MfeLogo } from "@/components/mfe-logo";

function SecondaryLink({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className="items-center py-2 active:opacity-60"
      accessibilityRole="button"
    >
      <Text className="text-[11px] font-normal uppercase tracking-[0.24em] text-[#8A857D]">
        {label}
      </Text>
    </Pressable>
  );
}

export default function EntryScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#141416]">
      <StatusBar style="light" />
      <LuxuryBackground variant="entry" />

      <View
        className="flex-1 px-7"
        style={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 12 }}
      >
        <View className="flex-1 items-center justify-center pb-10">
          <AnimatedEntrance delay={180} duration={1100} offsetY={22} scaleFrom={0.97} hapticOnEnter>
            <MfeLogo size="hero" />
          </AnimatedEntrance>

          <AnimatedDivider delay={520} hapticOnEnter />

          <AnimatedEntrance delay={680} duration={980} offsetY={14} hapticOnEnter>
            <Text className="mt-5 text-[11px] uppercase tracking-[0.38em] text-[#A39E96]">
              My Florida Experience
            </Text>
          </AnimatedEntrance>

          <AnimatedEntrance delay={860} duration={980} offsetY={12} hapticOnEnter>
            <Text className="mt-8 text-center text-[17px] font-light leading-7 text-[#C8C2B8]">
              Florida. Built Around You.
            </Text>
          </AnimatedEntrance>
        </View>

        <View className="w-full gap-3">
          <GetStartedButton label="Get Started" onPress={() => router.push("/experience")} />
          <SecondaryLink label="Explore Experiences" />
        </View>
      </View>
    </View>
  );
}
