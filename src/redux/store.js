import { configureStore } from "@reduxjs/toolkit";
import {  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactsReducer from './phonebook-reducer';
import authReducer from './auth/auth-slice';
import { persistStore, persistReducer } from 'redux-persist';

const middlware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}).concat(logger);

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        // auth: authReducer,
        contacts: contactsReducer,
    },
    middlware,
    devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

const storeNpersistor = { store, persistor };

export default storeNpersistor;