import { FC, useState } from "react";

import { Contacts } from "~/models/interfaces";
import { alphabet } from "~/utils/global";
import TabContent from "../TabContent";
import TabItem from "../TabItem";
import "./style.scss";

interface TabsProps {
  contacts: Contacts | null;
  isLoading: boolean;
}

const Tabs: FC<TabsProps> = ({ contacts, isLoading }) => {
  const [activeTab, setActiveTab] = useState("a");

  return (
    <div className="tabs">
      <ul className="tabs__bloc">
        {isLoading
          ? alphabet.map((key) => (
              <TabItem key={key} label={key} count={null} />
            ))
          : contacts &&
            Object.keys(contacts).map((key) => (
              <TabItem
                key={key}
                label={key}
                count={contacts[key].length}
                isActive={activeTab === key}
                onClick={() => setActiveTab(key)}
              />
            ))}
      </ul>
      <TabContent
        users={contacts ? contacts[activeTab] : []}
        activeTab={activeTab}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Tabs;
