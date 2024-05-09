//import { useState } from "react";
//import ContactForm from "../ContactForm/ContactForm";
//import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import dataContacts from "../../contacts.json";
import css from "./App.module.css";

export default function App() {
  // const [count, setCount] = useState();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox /> */}
      <ContactList contacts={dataContacts} />
    </div>
  );
}
