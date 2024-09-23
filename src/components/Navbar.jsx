import { Link } from "react-router-dom";
import { isAdmin as checkIsAdmin, isAuthenticated as checkIsAuthenticated, logout } from "../service/users.service";

export const Navbar = () => {
  const isAuthenticated = checkIsAuthenticated();
  const isAdmin = checkIsAdmin();

  const handleLogout = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to logout this user?"
    );
    if (confirmDelete) {
      logout();
    }
  };

  return (
    <nav>
      <ul>
        {!isAuthenticated && (
          <li>
            <Link to="/">Phegon Dev</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/admin/user-management">User Management</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};