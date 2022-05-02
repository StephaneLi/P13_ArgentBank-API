import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.store";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  },
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppDispatch = typeof store.dispatch
export type Store = typeof store;
export type Reducer = typeof userSlice.reducer;
export type State = ReturnType<Reducer>;

export default store;