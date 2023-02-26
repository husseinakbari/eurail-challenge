import { useEffect, useState } from "react";
import "./styles.scss";

import Tabs from "~/components/Tabs";
import { contactServices } from "~/services/contactServices";
import { createContactList } from "~/utils/global";
import handleError from "~/utils/handleError";
import { Contacts } from "~/models/interfaces";


function App() {
  const [contacts, setContacts] = useState<Contacts | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await contactServices.getUserList();
      const contactList = createContactList(response.data.results);
      setContacts(contactList);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="screen">
      <header>
        <h4>Contacts List</h4>
      </header>
      <main className="main">
        <Tabs isLoading={isLoading} contacts={contacts} />
      </main>
    </div>
  );
}

export default App;
