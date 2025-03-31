import { useDispatch, useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, Dispatch } from '@/utils/store';
import { User } from '@/types';

export interface AppState {
  checked: boolean;
  loggedIn: boolean;
  isLoading?: boolean;
  user?: User;
}

const initialState: AppState = {
  checked: false,
  loggedIn: false,
  user: undefined,
  isLoading: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setLoggedIn: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.checked = true;
      state.loggedIn = payload;
    },
    setUser: (state: AppState, { payload }: PayloadAction<User | undefined>) => {
      state.user = payload;
    },
    reset: () => initialState,
  },
});

export function useAppSlice() {
  const dispatch = useDispatch<Dispatch>();
  const state = useSelector(({ app }: State) => app);
  return { dispatch, ...state, ...slice.actions };
}

export default slice.reducer;
