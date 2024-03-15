import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { contactsSelector, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {

    const contacts = useSelector(contactsSelector);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = () => {
        if (filter !== "") {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        } else {
            return contacts;
        }
    }

    const dispatch = useDispatch();
    const handleClick = id => {
        dispatch(deleteContact(id));
    }

    return (
        <ul className={css.list}>
            {filteredContacts().map(contact => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    deleteContact={() => handleClick(contact.id)}
                />
            ))}
        </ul>
    )
}