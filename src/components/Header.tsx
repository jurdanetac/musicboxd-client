import { HeaderProps } from "../types";

const Header = ({ user }: HeaderProps) => {
  return (
    <header>
      <p>Logo</p>
      <nav>
        <ul>
          <li>{user.handle}</li>
          <li>Activity</li>
          <li>Albums</li>
          <li>Lists</li>
          <li>Members</li>
          <li>Journal</li>
          <li>Search</li>
          <li>Log</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
