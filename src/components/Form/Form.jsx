import './Form.css';
import Select from '../Select/Select';
import DatePicker from '../DatePicker/DatePicker';
import departments from '../../data/departments';
import states from '../../data/states';
import { useEmployees } from '../../utils/useEmployees';
import { isAlphabet } from '../../utils/checkUser';
import { isNumber } from '../../utils/checkUser';

const Form = ({ onSubmit }) => {
  const departmentOptions = departments;
  const stateOptions = states;
  // I use the custom hook to get the employee list and the add employee function
  const { addEmployee } = useEmployees();

  // I create a function to handle form submission
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

    // I add the state abbreviation to the employee object before adding it to the employee list
    const shortState = handleStateSelection(newEmployee.state);
    newEmployee.state = shortState;

    // I capitalize the first letter of each word in the employee object before adding it to the employee list
    newEmployee.firstName = capitalize(newEmployee.firstName);
    newEmployee.lastName = capitalize(newEmployee.lastName);
    newEmployee.street = capitalize(newEmployee.street);
    newEmployee.city = capitalize(newEmployee.city);
    addEmployee(newEmployee);

    // I reset the form
    e.currentTarget.reset();

    // Call the onSubmit callback after form submission
    onSubmit();
  };

  // I create a function to get the state abbreviation from the state name
  const handleStateSelection = (choice) => {
    const selectedState = stateOptions.find((state) => state.name === choice);
    return selectedState ? selectedState.abbreviation : '';
  };

  // I create a function to capitalize the first letter of each word in a string

  const capitalize = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
              required
              onKeyDown={(e) => {
                if (!isAlphabet(e.key)) {
                  e.preventDefault();
                }
              }}
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
              required
              onKeyDown={(e) => {
                if (!isAlphabet(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </section>

          <DatePicker
            id="date-of-birth"
            name="dateOfBirth"
            label="Date of Birth"
          />
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
              required
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
              required
              onKeyDown={(e) => {
                if (!isAlphabet(e.key)) {
                  e.preventDefault();
                }
              }}
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
              required
              onKeyDown={(e) => {
                if (!isNumber(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </section>

          <section className="create-employee-select">
            <Select
              label="State"
              name="state"
              options={stateOptions}
              onChange={handleStateSelection}
            />
          </section>
        </fieldset>
        <fieldset name="hr" form="create-employee">
          <legend className="legend-hr">HR infos</legend>

          <DatePicker id="start-date" name="startDate" label="Start Date" />

          <section className="create-employee-select">
            <Select
              label="Department"
              name="department"
              options={departmentOptions}
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
