import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

//REDUCER IMPORT

const store = configureStore({
  reducer: {
//reducer setter

  },
  devTools: true,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;