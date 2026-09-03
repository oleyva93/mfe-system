import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View
        className="flex-1 items-center justify-center bg-[#141416] px-6"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        <Text className="mb-2 text-lg font-medium text-[#F2EDE4]">Page not found</Text>
        <Text className="mb-6 text-center text-sm text-[#8A857D]">
          The page you are looking for does not exist.
        </Text>
        <Link href="/" asChild>
          <Pressable className="rounded-full bg-[#D4C4AB] px-6 py-3 active:opacity-85">
            <Text className="text-sm font-medium text-[#1A1816]">Go home</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
