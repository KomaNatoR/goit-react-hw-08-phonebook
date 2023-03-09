import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import contactsReducer from "./contacts/contacts-reducer";
// import filterReducer from "./filter/filter-reducer";

import contactsSlice from "./contacts/contacts-slice";
import filterSlice from "./filter/filter-slice";
import authSlice from "./auth/auth-slice";

const persistConfig = {
    key: 'token',
    storage,
    whitelist:["token"],
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        contacts: contactsSlice,
        filter: filterSlice,
    }
});

export const persistor = persistStore(store);
// export default persistor;
// console.log(store.getState());