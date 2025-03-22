import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => { 
    const addContact = await readContacts();
    const addNewContact = createFakeContact();
    writeContacts([...addContact, addNewContact]);
};

addOneContact();
