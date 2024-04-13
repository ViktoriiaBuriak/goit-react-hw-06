import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);

  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact contacts={contact} onDelete={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
