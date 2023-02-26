import { FC, useState } from "react";

import { Contacts } from "../../models/interfaces";
import TabContent from "../TabContent";
import TabItem from "../TabItem";
import "./style.scss";

interface TabsProps {
  contacts: Contacts | null;
  isLoading: boolean;
}

const Tabs: FC<TabsProps> = ({ contacts, isLoading }) => {
  const [activeTab, setActiveTab] = useState("a");

  return !isLoading && contacts ? (
    <div className="tabs">
      <ul className="tabs__bloc">
        {Object.keys(contacts).map((key) => (
          <TabItem
            key={key}
            label={key}
            count={contacts[key].length}
            isActive={activeTab === key}
            onClick={() => setActiveTab(key)}
          />
        ))}
      </ul>
      <TabContent users={contacts[activeTab]} activeTab={activeTab} />
    </div>
  ) : (
    <span>Loading</span>
  );
};

export default Tabs;
