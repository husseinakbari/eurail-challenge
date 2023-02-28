import { FC } from "react";
import classNames from "classnames";

import "./styles.scss";

interface TabItemProps {
  label: string;
  count: number | null;
  isActive?: boolean;
  onClick?: (key: string) => void;
}

const TabItem: FC<TabItemProps> = ({
  label,
  count,
  isActive = false,
  onClick,
}) => {
  const tabItemClassNames = classNames("tabItem", {
    "tabItem--active": isActive,
    "tabItem--disable": !count,
  });

  return (
    <li className={tabItemClassNames} onClick={() => onClick && onClick(label)}>
      <span data-testid="tabItem-label" className="tabItem__label">{label}</span>
      <span data-testid="tabItem-count" className="tabItem__count">{count}</span>
    </li>
  );
};

export default TabItem;
