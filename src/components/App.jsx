import css from "./App.module.css";
import ContactsForm from "./ContactsForm/ContactsForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  return (
    <>
      <div className={css.phonebookContainer}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactsForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
