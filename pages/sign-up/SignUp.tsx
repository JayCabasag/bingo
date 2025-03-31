import Button from '@/components/elements/Button';
import { useAppSlice } from '@/slices';
import { router, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignUp() {
  const router = useRouter();
  const { dispatch, setUser, setLoading, isLoading, setLoggedIn } = useAppSlice();

  const handleOnSignUpPress = async () => {
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to sign up</Text>
      <Text onPress={handleOnSignUpPress}>Sign Up</Text>
      <Button title="Go back to sign in" onPress={router.back} />
    </View>
  );
}
