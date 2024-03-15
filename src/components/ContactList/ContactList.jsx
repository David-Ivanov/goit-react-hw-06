import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ allContacts: { handleClick, filteredContacts } }) {
    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    deleteContact={handleClick}
                />
            ))}
        </ul>
    )
}