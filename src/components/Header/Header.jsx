import { Link } from 'react-router-dom';
import logo from '../../assets/flowerLogo.png';
import employeeTableLogo from '../../assets/users-list.svg';
import addEmployeeLogo from '../../assets/users-add.svg';

import './Header.css';
const Header = ({ page }) => {
  return page === 'list' ? (
    <header>
      <section className="brand">
        <img src={logo} alt="wealthHealth logo" className="brand-logo" />
        <p className="brand-text">HRNet</p>
      </section>
      <nav aria-label="main navigation" className="nav-links">
        <Link to="/" className="nav-link">
          <img
            src={addEmployeeLogo}
            alt="add employee logo"
            className="add-employee--ico"
          />
        </Link>
      </nav>
    </header>
  ) : (
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
