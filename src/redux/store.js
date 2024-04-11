import { createStore, combineReducers } from "redux";
import { contactsReducer } from "./contactsSlice";

const rootReducer = combineReducers({
  contactBox: contactsReducer,
});

export const store = createStore(rootReducer)