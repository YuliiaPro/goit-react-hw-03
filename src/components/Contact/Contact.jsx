import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number } }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.btnDelete}>Delete</button>
    </div>
  );
}
