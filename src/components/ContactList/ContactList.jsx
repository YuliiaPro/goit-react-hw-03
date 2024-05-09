import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <>
      <ul className={css.list}>
        {contacts.map((contactItem) => (
          <li className={css.item} key={contactItem.id}>
            <Contact contact={contactItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
