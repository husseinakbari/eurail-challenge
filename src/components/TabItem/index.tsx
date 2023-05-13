import classNames from 'classnames';

import './styles.scss';

interface TabItemProps {
  label: string;
  count: number | null;
  isActive?: boolean;
  onClick?: (key: string) => void;
}

function TabItem({
  label,
  count,
  isActive = false,
  onClick,
}: TabItemProps) {
  const tabItemClassNames = classNames('tabItem', {
    'tabItem--active': isActive,
    'tabItem--disable': !count,
  });

  return (
    <button type="button" onClick={() => onClick && onClick(label)}>
      <li className={tabItemClassNames}>
        <span data-testid="tabItem-label" className="tabItem__label">
          {label}
        </span>
        <span data-testid="tabItem-count" className="tabItem__count">
          {count}
        </span>
      </li>
    </button>
  );
}

TabItem.defaultProps = {
  isActive: false,
  onClick: undefined,
};

export default TabItem;
