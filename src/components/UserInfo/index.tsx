import { FC, useMemo } from "react";

import { Info, User } from "models/interfaces";
import { generateId } from "utils/global";
import { CloseIcon } from "components/Icons";

import "./styles.scss";

interface UserInfoProps {
  user: User;
  onClose: () => void;
}

const UserInfo: FC<UserInfoProps> = ({ user, onClose }) => {
  const userInfo = useMemo<Info[]>(() => {
    return [
      {
        label: "e-mail",
        value: user.email || "",
      },
      {
        label: "phone",
        value: user.phone || "",
      },
      {
        label: "street",
        value:
          `${user.location?.street?.number} ${user.location?.street?.name}` ||
          "",
      },
      {
        label: "city",
        value: user.location?.city || "",
      },
      {
        label: "state",
        value: user.location?.state || "",
      },
      {
        label: "postcode",
        value: user.location?.postcode || "",
      },
    ];
  }, [user]);

  return (
    <div className="user-info">
      <CloseIcon
        data-testid="close-button"
        className="user-info__close-icon"
        width={30}
        height={30}
        onClick={onClose}
      />
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="user-info__picture"
        loading="lazy"
      />
      <div className="user-info__content">
        <h4>
          {user.name.last.toUpperCase()}, {user.name.first}
        </h4>

        {userInfo.map((item) => (
          <div className="user-info__content__section" key={generateId()}>
            <span className="user-info__content__section__label">
              {item.label}
            </span>
            <span
              data-testid={item.label}
              className="user-info__content__section__value"
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <div className="user-info__username">
        <span className="user-info__username__label">USERNAME</span>
        <span data-testid="username">{user.login.username}</span>
      </div>
    </div>
  );
};

export default UserInfo;
