import { FC } from "react";
import classNames from "classnames";

import "./styles.scss";

interface TabItemProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: (key: string) => void;
}

const TabItem: FC<TabItemProps> = ({
  label,
  count,
  isActive = false,
  onClick,
}) => {
  const tabItemClassNames = classNames("tabItem", {
    "tabItem--active": isActive,
    "tabItem--disable": count === 0,
  });

  return (
    <li className={tabItemClassNames} onClick={() => onClick(label)}>
      <span className="tabItem__label">{label}</span>
      <span className="tabItem__count">{count}</span>
    </li>
  );
};

export default TabItem;
