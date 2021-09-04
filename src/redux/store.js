import { configureStore } from "@reduxjs/toolkit";
import {  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER} from "redux-persist";
import logger from 'redux-logger';
import contactsReducer from './phonebook-reducer';
import authReducer from './auth/auth-slice';

const middlware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}).concat(logger);

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
    },
    middlware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;