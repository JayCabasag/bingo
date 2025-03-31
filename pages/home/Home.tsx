import { Text, View, StyleSheet } from 'react-native';
import useColorScheme from '@/hooks/useColorScheme';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
import { colors } from '@/theme';
import { useAppSlice } from '@/slices';

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
    backgroundColor: colors.lightPurple,
    height: 44,
    width: '50%',
  },
});

export default function Home() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const { dispatch, setLoading, reset } = useAppSlice();

  const handleOnSignOutPress = async () => {
    dispatch(setLoading(true));
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(null);
        dispatch(setLoading(true));
        dispatch(reset());
      }, 1000);
    });
  };

  return (
    <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
      <Text style={[styles.title, isDark && { color: colors.gray }]}>Home MOTO</Text>
      <Button
        title="Go to Details"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={() =>
          router.push({ pathname: '(main)/(tabs)/home/details', params: { from: 'Home' } })
        }
      />

      <Button
        title="Sign out"
        titleStyle={[styles.buttonTitle, isDark && { color: colors.blackGray }]}
        style={styles.button}
        onPress={handleOnSignOutPress}
      />
    </View>
  );
}
