// import { render } from "@testing-library/react";
import React from "react";
import Form from "./Form";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { nanoid } from 'nanoid';


export class App extends React.Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  formSubmitHandler = data => {

    const filterContact = data.name.toLocaleLowerCase();
    const includeContact = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterContact));
    // console.log(includeContact)
    // console.log(filterContact)
    if (includeContact.length !== 0){
      window.alert(`${data.name} is already in contacts`);
      return
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    this.setState(prevState =>({
         contacts: [contact, ...prevState.contacts]
       }))
}
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId)
    }))
  };

  render() {
    // const { contacts } = this.state.contacts;
    const normalFilter = this.state.filter.toLocaleLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalFilter));
    return (
      <div
        style={{
          height: '100vh',
          justifyItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler}  />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <h2>Contact</h2>
        <ContactList contacts={filterContacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  };
}
