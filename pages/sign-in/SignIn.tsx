import Button from '@/components/elements/Button';
import { useAppSlice } from '@/slices';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignIn() {
  const { dispatch, setUser, setLoading, isLoading, setLoggedIn } = useAppSlice();

  const handleOnSignIn = async () => {
    dispatch(setLoading(true));
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(null);
        const user = {
          email: 'jay@gmail.com',
          name: 'Jay',
        };
        dispatch(setUser(user));
        dispatch(setLoggedIn(!!user));
        dispatch(setLoading(false));
        router.replace('/');
      }, 1000);
    });
  };

  const handleOnCreateAccountPress = async () => {
    router.push('sign-up');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={handleOnSignIn}>Sign In</Text>
      <Button title="Create an account" onPress={handleOnCreateAccountPress} />
    </View>
  );
}
