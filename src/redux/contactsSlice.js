const INITIAL_STATE = {
    contacts: [],
    filter: ""
}

export const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "contactBox/ADD_CONTACT":
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case "contactBox/DELETE_CONTACT":
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id !== action.payload
          ),
        };
      case "contactBox/FILTER_CONTACTS":
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
}