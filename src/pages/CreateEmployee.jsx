import { Link, useNavigate } from 'react-router-dom';
const CreateEmployee = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Create an Employee</h1>
      <button onClick={() => navigate('/employees')}>Employees</button>
      <div className="link-employee-list">
        <Link to="/employees">-Employees Table-</Link>
      </div>
    </>
  );
};

export default CreateEmployee;
