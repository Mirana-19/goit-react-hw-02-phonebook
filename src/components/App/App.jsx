import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const nameToFind = name.toLowerCase();

    const canAddContact = contacts.find(contact => {
      return contact.name.toLowerCase() === nameToFind;
    });

    !canAddContact
      ? this.setState(prevState => {
          return {
            contacts: [{ id: nanoid(5), name, number }, ...prevState.contacts],
          };
        })
      : alert(`${name} is already in contacts`);
  };

  filterContacts = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  deleteContact = contactToDelete => {
    const { contacts } = this.state;

    const clearedContactList = contacts.filter(contact => {
      return contact.id !== contactToDelete;
    });

    this.setState({ contacts: clearedContactList });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase().trim();
    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <section>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} handleInput={this.filterContacts} />
        <Contacts contacts={visibleContacts} handleBtn={this.deleteContact} />
      </section>
    );
  }
}
