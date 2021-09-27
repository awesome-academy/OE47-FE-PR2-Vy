import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer
});

store.subscribe(function () {
    console.log("store ne: ", store.getState());
})

export default store;
