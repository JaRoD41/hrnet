import { useNavigate, Link } from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>EmployeeList</h1>
      <button onClick={() => navigate('/')}>Create Employee</button>
      <div className="link-create-employee">
        <Link to="/">-Employee registration form-</Link>
      </div>
    </>
  );
};

export default EmployeeList;
