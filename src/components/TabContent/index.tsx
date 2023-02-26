import { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { User } from "~/models/interfaces";
import { generateId } from "~/utils/global";
import UserInfo from "../UserInfo";
import "./styles.scss";

interface TabContentProps {
  users: User[];
  activeTab: string;
}

const TabContent: FC<TabContentProps> = ({ users, activeTab }) => {
  const [selectedUserIndex, setSelectedUserIndex] = useState<number>(-1);

  const tabContentClassName = classNames("tab-content", {
    "tab-content--grided": selectedUserIndex > -1,
  });

  useEffect(() => {
    setSelectedUserIndex(-1);
  }, [activeTab]);

  return (
    <div className={tabContentClassName}>
      {users.length ? (
        <>
          {selectedUserIndex > -1 && users[selectedUserIndex] && (
            <UserInfo
              user={users[selectedUserIndex]}
              onClose={() => setSelectedUserIndex(-1)}
            />
          )}
          <ul className="tab-content__list">
            {users.map((user, index) => (
              <li
                key={generateId()}
                className={classNames("tab-content__list-item", {
                  "tab-content__list-item--active": selectedUserIndex === index,
                })}
                onClick={() => setSelectedUserIndex(index)}
              >
                {user.name.first}, {user.name.last}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="tab-content__list--empty">List is empty</p>
      )}
    </div>
  );
};

export default TabContent;
