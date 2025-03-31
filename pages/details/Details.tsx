import { Text, View, StyleSheet } from 'react-native';
import GradientButton from '@/components/elements/GradientButton';
import { useRouter, useLocalSearchParams } from 'expo-router';
import useColorScheme from '@/hooks/useColorScheme';
import { colors } from '@/theme';
import BottomSheet from '@/components/elements/BottomSheet';
import BottomSheetContents from '@/components/layouts/BottomSheetContents';
import { useState } from 'react';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    height: 44,
    width: '50%',
  },
});

export default function Details() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const { from } = useLocalSearchParams();

  const [isOpen, setOpen] = useState(false);

  return (
    <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
      <Text
        style={[styles.title, isDark && { color: colors.gray }]}>{`Details (from ${from})`}</Text>
      <GradientButton
        title="Go back to Home"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        gradientBackgroundProps={{
          colors: [colors.purple, colors.pink],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
        onPress={() => router.back()}
      />
      <GradientButton
        title="Toggle Modal"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        gradientBackgroundProps={{
          colors: [colors.purple, colors.pink],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
        onPress={() => setOpen(prev => !prev)}
      />
      <BottomSheet
        isOpen={isOpen}
        initialOpen
        onClose={() => setOpen(false)}
        backgroundStyle={isDark && { backgroundColor: colors.blackGray }}>
        <BottomSheetContents
          onClose={() => {
            console.log('Close ');
            setOpen(false);
          }}
        />
      </BottomSheet>
    </View>
  );
}
