import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <h1>HRNet</h1>
          <p>WealthHealth</p>
        </div>
        <nav aria-label="main navigation" className="nav-links">
          
          <Link to="/employees" className="nav-link">
            Employees List
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
