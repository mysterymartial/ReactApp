import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { MovieApi } from "../service/movieApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer:{
        //counter: counterReducer,
        [MovieApi.reducerPath]: MovieApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(MovieApi.middleware)
    }
});

setupListeners(store.dispatch);