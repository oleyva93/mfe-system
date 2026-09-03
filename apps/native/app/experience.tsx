import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  AnimatedDivider,
  AnimatedEntrance,
} from "@/components/animated-entrance";
import { GetStartedButton } from "@/components/get-started-button";
import { LuxuryBackground } from "@/components/luxury-background";
import { MfeLogo } from "@/components/mfe-logo";
import { router, Stack } from "expo-router";

const CATEGORIES = [
  {
    id: "discover",
    label: "Discover",
    descriptor: "Guided by place and taste",
  },
  {
    id: "private",
    label: "Private",
    descriptor: "Access beyond the ordinary",
  },
  {
    id: "signature",
    label: "Signature",
    descriptor: "Crafted for one",
  },
] as const;

const serif = Platform.select({ ios: "Georgia", android: "serif" });

function SectionLabel({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) {
  return (
    <AnimatedEntrance delay={delay} duration={850} offsetY={8} hapticOnEnter>
      <View className="mb-6 flex-row items-center gap-3 px-1">
        <View className="h-px flex-1 bg-[#D4C4AB]/14" />
        <Text className="text-[9px] uppercase tracking-[0.4em] text-[#8A857D]">
          {children}
        </Text>
        <View className="h-px flex-1 bg-[#D4C4AB]/14" />
      </View>
    </AnimatedEntrance>
  );
}

function CircleChevron() {
  return (
    <View className="h-8 w-8 items-center justify-center rounded-full border border-[#D4C4AB]/22 bg-[#D4C4AB]/5">
      <Ionicons
        name="chevron-forward"
        size={12}
        color="rgba(212, 196, 171, 0.62)"
      />
    </View>
  );
}

function CategoryList({
  onSelect,
}: {
  onSelect?: (id: (typeof CATEGORIES)[number]["id"]) => void;
}) {
  return (
    <View className="mt-8">
      <SectionLabel delay={600}>Curated paths</SectionLabel>

      <View className="overflow-hidden rounded-2xl border border-[#D4C4AB]/16 bg-[#D4C4AB]/4">
        {CATEGORIES.map((category, index) => (
          <AnimatedEntrance
            key={category.id}
            delay={680 + index * 100}
            duration={900}
            offsetY={10}
            hapticOnEnter
          >
            <Pressable
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
                onSelect?.(category.id);
              }}
              className={`flex-row items-center px-5 py-5 active:bg-[#D4C4AB]/10 ${
                index < CATEGORIES.length - 1
                  ? "border-b border-[#D4C4AB]/10"
                  : ""
              }`}
              accessibilityRole="button"
            >
              <View className="flex-1 pr-4">
                <View className="flex-row items-center gap-3">
                  <View className="h-[5px] w-[5px] rounded-full bg-[#D4C4AB]/50" />
                  <Text
                    className="text-[17px] tracking-[0.02em] text-[#EDE8DF]"
                    style={{ fontFamily: serif }}
                  >
                    {category.label}
                  </Text>
                </View>
                <Text
                  className="mt-2 pl-[17px] text-[12px] font-light italic leading-5 text-[#8A857D]"
                  style={{ fontFamily: serif }}
                >
                  {category.descriptor}
                </Text>
              </View>

              <CircleChevron />
            </Pressable>
          </AnimatedEntrance>
        ))}
      </View>
    </View>
  );
}

function KnownIntentCard({
  delay,
  onPress,
}: {
  delay: number;
  onPress?: () => void;
}) {
  return (
    <AnimatedEntrance delay={delay} duration={950} offsetY={14} hapticOnEnter>
      <Pressable
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
          onPress?.();
        }}
        className="flex-row items-center rounded-2xl border border-[#D4C4AB]/16 bg-[#D4C4AB]/4 px-5 py-5 active:bg-[#D4C4AB]/10"
        accessibilityRole="button"
      >
        <View className="flex-1 pr-4">
          <Text
            className="text-[15px] leading-6 tracking-[0.01em] text-[#D8D2C8]"
            style={{ fontFamily: serif }}
          >
            I already know what I want
          </Text>
          <Text
            className="mt-1.5 text-[11px] font-light italic text-[#8A857D]"
            style={{ fontFamily: serif }}
          >
            Skip the curation
          </Text>
        </View>
        <CircleChevron />
      </Pressable>
    </AnimatedEntrance>
  );
}

export default function ExperienceScreen() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen
        options={{ headerShown: false, headerTransparent: true, title: "" }}
      />
      <Stack.Toolbar placement="left">
        <Stack.Toolbar.Button
          icon="chevron.backward"
          onPress={() => router.back()}
          separateBackground
          iconRenderingMode="template"
          hidesSharedBackground
          tintColor="#D4C4AB"
        />
      </Stack.Toolbar>
      <View className="flex-1 bg-[#1C1F24]">
        <StatusBar style="light" />
        <LuxuryBackground variant="experience" />

        <View
          className="flex-1 px-7"
          style={{
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 16,
          }}
        >
          <View className="items-center">
            <AnimatedEntrance
              delay={120}
              duration={900}
              offsetY={10}
              hapticOnEnter
            >
              <MfeLogo size="header" />
            </AnimatedEntrance>

            <AnimatedDivider
              delay={240}
              className="mt-4 h-px w-10 bg-[#D4C4AB]/35"
              hapticOnEnter
            />
          </View>

          <View className="mt-9 flex-1">
            <AnimatedEntrance
              delay={320}
              duration={1000}
              offsetY={20}
              hapticOnEnter
            >
              <Text
                className="text-center text-[29px] leading-9.5 text-[#F2EDE4]"
                style={{ fontFamily: serif }}
              >
                What Florida{"\n"}experience do you{"\n"}want to live?
              </Text>
            </AnimatedEntrance>

            <AnimatedEntrance
              delay={500}
              duration={950}
              offsetY={16}
              className="mt-9"
              hapticOnEnter
            >
              <GetStartedButton label="Build My Experience" textSize={11} />
            </AnimatedEntrance>

            <CategoryList onSelect={() => router.push("/location")} />
          </View>

          <KnownIntentCard delay={1020} onPress={() => router.push("/location")} />
        </View>
      </View>
    </>
  );
}
