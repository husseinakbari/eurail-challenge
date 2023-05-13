import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserInfo from 'components/UserInfo';
import { fetchMockUsers } from 'utils/global';

describe('UserInfo component', () => {
  const onClose = jest.fn();

  it('renders the user information', async () => {
    const users = await fetchMockUsers();
    const user = users[0];
    render(<UserInfo user={user} onClose={onClose} />);

    const fullName = `${user.name.last.toUpperCase()}, ${user.name.first}`;

    expect(screen.getByRole('heading')).toHaveTextContent(fullName);
    expect(screen.getByTestId('e-mail')).toHaveTextContent(user.email);
    expect(screen.getByTestId('phone')).toHaveTextContent(user.phone);
    expect(screen.getByTestId('street')).toHaveTextContent(
      `${user.location.street.number} ${user.location.street.name}`
    );
    expect(screen.getByTestId('city')).toHaveTextContent(user.location.city);
    expect(screen.getByTestId('state')).toHaveTextContent(user.location.state);
    expect(screen.getByTestId('postcode')).toHaveTextContent(
      user.location.postcode
    );
    expect(screen.getByTestId('username')).toHaveTextContent(
      user.login.username
    );
  });

  it('renders a lazy image and display placeholder', async () => {
    const users = await fetchMockUsers();
    const user = users[0];
    const { queryByRole, getByTestId } = render(
      <UserInfo user={user} onClose={onClose} />
    );

    expect(queryByRole('img')).toBeNull();
    expect(getByTestId('image-placeholder')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    const users = await fetchMockUsers();
    const user = users[0];
    render(<UserInfo user={user} onClose={onClose} />);

    const closeButton = screen.getByTestId('close-button');
    userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
