import { Link } from 'react-router-dom';
import logo from '../../assets/flowerLogo.png';
import employeeTableLogo from '../../assets/users-list.svg';
import './Header.css';
const Header = () => {
  return (
    <header>
      <section className="brand">
        <img src={logo} alt="wealthHealth logo" className="brand-logo" />
        <p className="brand-text">HRNet</p>
      </section>
      <nav aria-label="main navigation" className="nav-links">
        <Link to="/employees" className="nav-link">
          <img
            src={employeeTableLogo}
            alt="employee table logo"
            className="employee-list--ico"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
