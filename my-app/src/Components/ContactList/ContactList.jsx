import React from "react";
import style from "./ContactList.module.css";
const ContactList = ({ contacts }) => (
  <ul className={style.list}>
    <p>Contacts</p>
    {contacts.map(({ name, id, number }) => (
      <li className={style.item} key={id}>
        <p>
          {name}
          {"---------->"}
          {number}
        </p>

        <button className={style.btn} type="button"></button>
      </li>
    ))}
  </ul>
);

export default ContactList;

// Больше ничего не нужно!!!!!!!!!!!!!!!
