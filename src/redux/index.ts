// @ts-nocheck - this is a temporary fix for a bug in reactotron
//packages
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import logger from "redux-logger";

//reducer
import rootReducer from "@src/redux/reducers";
import Reactotron from "@src/config/reactotron";

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  enhancers: [Reactotron.createEnhancer()],
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
