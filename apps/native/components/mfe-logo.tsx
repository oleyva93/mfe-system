import { Platform, Text } from "react-native";

type MfeLogoProps = {
  size?: "hero" | "header";
};

const SIZES = {
  hero: { fontSize: 72, letterSpacing: 6 },
  header: { fontSize: 26, letterSpacing: 5 },
} as const;

export function MfeLogo({ size = "hero" }: MfeLogoProps) {
  const dimensions = SIZES[size];

  return (
    <Text
      className="leading-none text-[#F2EDE4]"
      style={{
        fontFamily: Platform.select({ ios: "Georgia", android: "serif" }),
        fontSize: dimensions.fontSize,
        letterSpacing: dimensions.letterSpacing,
      }}
    >
      MFE
    </Text>
  );
}
