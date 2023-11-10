import './Form.css';
import Select from '../Select/Select';
import departments from '../../data/departments';
import states from '../../data/states';
import { useEmployees } from '../../utils/customHook';

// export const FormContext = createContext();
const Form = () => {
  const departmentOptions = departments;
  const stateOptions = states;
  const { addEmployee } = useEmployees();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      dateOfBirth: e.currentTarget.dateOfBirth.value,
      street: e.currentTarget.street.value,
      city: e.currentTarget.city.value,
      zipCode: e.currentTarget.zipCode.value,
      state: e.currentTarget.state.value,
      startDate: e.currentTarget.startDate.value,
      department: e.currentTarget.department.value,
    };

    addEmployee(newEmployee);
  };
  return (
    <>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <section className="form-header">
          <h2 id="page-role">Create an employee</h2>
        </section>

        <fieldset name="personal" form="create-employee">
          <legend className="legend-personal">Personal</legend>
          <section className="create-employee-input">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
              type="date"
              id="date-of-birth"
              name="dateOfBirth"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>
        </fieldset>

        <fieldset name="adress" form="create-employee">
          <legend className="legend-adress">Address</legend>

          <section className="create-employee-input">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-select">
            <Select
              label="State"
              name="state"
              options={stateOptions}
              // onChange={handleSelectChange}
            />
          </section>
        </fieldset>
        <fieldset name="hr" form="create-employee">
          <legend className="legend-hr">HR infos</legend>
          <section className="create-employee-input">
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              id="start-date"
              name="startDate"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-select">
            <Select
              label="Department"
              name="department"
              options={departmentOptions}
              // onChange={handleSelectChange}
            />
          </section>
        </fieldset>

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </>
  );
};

export default Form;
