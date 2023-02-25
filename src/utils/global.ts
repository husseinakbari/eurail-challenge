import { Contacts, User } from "../models/interfaces";

export const createContactList = (users: User[]): Contacts => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let contact: Contacts = {};

  for (const alpha of alphabet) {
    contact[alpha] = null;
  }

  for (const user of users) {
    const firstCharOfLastName = user.name.last[0].toLowerCase()
    if(alphabet.includes(firstCharOfLastName)) {
        contact = {
            ...contact,
            [firstCharOfLastName]: user
        }
    }
  }

  return contact  
};
