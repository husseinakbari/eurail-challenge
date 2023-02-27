import { Contacts, User } from "../models/interfaces";

export const alphabet = [
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

export const createContactList = (users: User[]): Contacts => {
  let contact: Contacts = {};

  for (const alpha of alphabet) {
    contact[alpha] = {};
  }

  for (const user of users) {
    const firstCharOfLastName = user.name.last[0].toLowerCase();
    if (alphabet.includes(firstCharOfLastName)) {
      const fullname = `${user.name.first},${user.name.last}`;

      contact = {
        ...contact,
        [firstCharOfLastName]: {
          ...contact[firstCharOfLastName],
          [fullname]: user,
        },
      };
    }
  }
  return contact;
};

export const generateId = (
  length: number = 10,
  {
    containNumbers = true,
    containAlphabet = true,
  }: { containNumbers?: boolean; containAlphabet?: boolean } = {}
) => {
  let result = "";
  let characters = "";

  if (containNumbers) characters += "0123456789";
  if (containAlphabet)
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateFullname = (user: User): string => {
  return `${user.name.first}, ${user.name.last.toUpperCase()}`;
};
