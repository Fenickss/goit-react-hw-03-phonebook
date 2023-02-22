import { Component } from "react";
import { nanoid } from "nanoid";

import FormContact from "./Components/FormContact/FormContact";
import ContactList from "./Components/ContactList";
import Container from "./Components/Container";
import Filter from "./Components/Filter";

// import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  formSubmitHandler = (date) => {
    console.log(date);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteringСontact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const filteringСontact = this.getFilteringСontact();

    return (
      <Container>
        <FormContact onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          onDeleteContact={this.deleteContact}
          contacts={filteringСontact}
        />
      </Container>
    );
  }
}

export default App;
