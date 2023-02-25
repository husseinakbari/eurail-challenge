import { useEffect, useState } from "react";

import { Contacts } from "./models/interfaces";
import { contactServices } from "./services/contactServices";
import { createContactList } from "./utils/global";

function App() {
  const [contact, setContact] = useState<Contacts>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await contactServices.getUserList();
      const contactList = createContactList(response.data.results);
      setContact(contactList);
    } catch (error) {
      // handle error
      console.log(error);
      
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h4>Contacts List</h4>
      </header>
    </div>
  );
}

export default App;
