import { useEffect, useState } from 'react'
import ContactForm from './ContactForm/ContactForm'
import SearchBar from './SearchBar/SearchBar'
import ContactList from './ContactList/ContactList';

const initialContacts = JSON.parse(localStorage.getItem("contacts")) ?? [];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filteredContacts, setFilteredContacts] = useState(initialContacts);


  useEffect(() => {
    setFilteredContacts([
      ...contacts
    ]);

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // add contact

  const handleSubmit = (value) => {
    setContacts([
      ...contacts,
      {
        id: `id-${new Date().getTime()}`,
        name: value.username,
        number: value.number
      }
    ]);
  }

  // delete contact

  const handleClick = (e) => {
    const id = e.target.dataset.id
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  // search bar



  const findContact = (value) => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase()));

    setFilteredContacts(filtered);
  }

  // values for contacts

  const contactListFunctions = {
    handleClick: handleClick,
    filteredContacts
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBar search={findContact} />
      <ContactList allContacts={contactListFunctions} />
    </div>

  )
}

export default App
