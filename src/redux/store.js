import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { selectContacts } from "./contactsSlice";
import { selectNameFilter } from "./filtersSlice";

const contactsPeristConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPeristConfig, selectContacts),
    filters: selectNameFilter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
