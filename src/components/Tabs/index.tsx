import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { Contacts, PersonObject, User } from "models/interfaces";
import { alphabet } from "utils/global";
import TabContent from "../TabContent";
import TabItem from "../TabItem";
import FormInput from "components/FormInput";
import "./style.scss";

interface TabsProps {
  contacts: Contacts | null;
  isLoading: boolean;
}
interface Data {
  users: PersonObject;
  names: string[];
}

const Tabs: FC<TabsProps> = ({ contacts, isLoading }) => {
  const [activeTab, setActiveTab] = useState("a");
  const [searchValue, setSeaerchValue] = useState("");
  const [foundUsers, setFoundUsers] = useState<User[]>([]);

  const memoizedData = useMemo<Data>(() => {
    let users: PersonObject = {};
    let names: string[] = [];

    if (contacts) {
      for (const items of Object.values(contacts)) {
        if (items) {
          users = {
            ...users,
            ...items,
          };
        }
      }
      for (const name of Object.keys(users)) {
        names.push(name);
      }
    }

    return {
      users,
      names,
    };
  }, [contacts]);

  const onSearch = useCallback(() => {
    let result: User[] = [];
    for (const name of memoizedData.names) {
      const regex = new RegExp(searchValue.toLowerCase(), "i");
      if (regex.test(name.toLowerCase())) {
        result.push(memoizedData.users[name]);
      }
    }
    setFoundUsers(result);
  }, [searchValue, memoizedData]);

  useEffect(() => {
    onSearch();
  }, [searchValue, onSearch]);

  return (
    <div className="tabs">
      <div className="tabs__search">
        <FormInput
          name="search"
          placeholder="Search"
          disabled={isLoading}
          value={searchValue}
          onChange={(e) => setSeaerchValue(e.target.value)}
          onClear={() => setSeaerchValue("")}
        />
      </div>
      {isLoading || searchValue ? (
        <MockTabitem />
      ) : contacts ? (
        <ul className="tabs__bloc">
          {Object.keys(contacts).map((key) => (
            <TabItem
              key={key}
              label={key}
              count={Object.keys(contacts[key]).length}
              isActive={activeTab === key}
              onClick={() => setActiveTab(key)}
            />
          ))}
        </ul>
      ) : null}
      <TabContent
        data-testid="tab-content"
        users={
          contacts
            ? searchValue
              ? foundUsers
              : Object.values(contacts[activeTab])
            : []
        }
        searchValue={searchValue}
        activeTab={activeTab}
        isLoading={isLoading}
      />
    </div>
  );
};

const MockTabitem: FC = () => {
  return (
    <div data-testid="mock-tab-item" className="tabs__bloc">
      {alphabet.map((key) => (
        <TabItem key={key} label={key} count={null} />
      ))}
    </div>
  );
};

export default Tabs;
