import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { projectApi } from './project';



export const store = configureStore({
    reducer: {
        [projectApi.reducerPath] : projectApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(projectApi.middleware),
},)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


setupListeners(store.dispatch)

