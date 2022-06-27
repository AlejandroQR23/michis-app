import { FaCat } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/auth.context';

const Header = () => {
  const { token } = useAuthContext();

  return (
    <header>
      <nav className="navbar">
        <Link className="text-xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap text-white" to="/">
          <span className="flex items-center">
            Michis App
            <FaCat className="ml-4" />
          </span>
        </Link>
        <div className="flex-grow items-center flex">
          <ul className="flex flex-row ml-auto">
            {token ? (
              <li className="nav-item">
                <Link to="/new-michi" className="header-link">
                  <span className="ml-2">New Michi</span>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="header-link" to="/login">
                  <span className="ml-2">Login</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
