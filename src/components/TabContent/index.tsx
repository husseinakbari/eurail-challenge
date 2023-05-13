import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { User } from 'models/interfaces';
import { generateFullname, generateId } from 'utils/global';
import UserInfo from 'components/UserInfo';
import './styles.scss';

interface TabContentProps {
  users: User[];
  activeTab: string;
  isLoading: boolean;
  searchValue: string;
}

function TabContent({
  users,
  activeTab,
  isLoading,
  searchValue,
}: TabContentProps) {
  const [selectedUserIndex, setSelectedUserIndex] = useState<number>(-1);

  const tabContentClassName = classNames('tab-content', {
    'tab-content--grided': selectedUserIndex > -1,
  });

  useEffect(() => {
    setSelectedUserIndex(-1);
  }, [activeTab]);

  useEffect(() => {
    setSelectedUserIndex(-1);
  }, [searchValue]);

  // Show skeleton when loading is true
  if (isLoading) {
    return (
      <div data-testid="tab-content-skeleton" className="tab-content">
        <ul className="tab-content__list">
          {Array(10)
            .fill('')
            .map(() => (
              <li
                key={generateId()}
                className="tab-content__list-item--skeleton"
              />
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={tabContentClassName}>
      {users.length ? (
        <>
          {selectedUserIndex > -1 && users[selectedUserIndex] && (
            <div className="tab-content__user-info">
              <UserInfo
                user={users[selectedUserIndex]}
                onClose={() => setSelectedUserIndex(-1)}
              />
            </div>
          )}
          <ul className="tab-content__list">
            {users.map((user, index) => (
              <li key={generateId()}>
                <button
                  type="button"
                  onClick={() => setSelectedUserIndex(index)}
                >
                  <span
                    className={classNames('tab-content__list-item', {
                      'tab-content__list-item--active':
                        selectedUserIndex === index,
                    })}
                  >
                    {generateFullname(user)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="tab-content__list--empty">
          {searchValue ? `No Results for "${searchValue}"` : 'List is Empty'}
        </p>
      )}
    </div>
  );
}

export default TabContent;
