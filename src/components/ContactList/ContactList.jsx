import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";

function ContactList() {

  const contacts = useSelector((state) => {
    return state.contactBox.contacts;
  });

  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    const action = { type: "contactBox/DELETE_CONTACT", payload: contactId };

    dispatch(action);
  };

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} onDelete={deleteContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
