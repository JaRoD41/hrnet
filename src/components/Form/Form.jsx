import './Form.css';
import Select from '../Select/Select';
import departments from '../../data/departments';
import states from '../../data/states';
// import { useState } from 'react';
import addUser from '../../assets/users-add.svg';
const Form = () => {
  const departmentOptions = departments;
  const stateOptions = states;
  // const [selectValue, setSelectValue] = useState('');
  // const handleSelectChange = (e) => {
  //   setSelectValue(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stateValue = e.currentTarget.state.value;
    const departmentValue = e.currentTarget.department.value;
    console.log(
      'formulaire soumis avec succes : ',
      // selectValue,
      stateValue,
      departmentValue,
    );
  };
  return (
    <>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <section className="form-header">
          <h2 id="page-role">Create an employee</h2>
          {/* <img
            className="create-employee--ico"
            src={addUser}
            alt="create employee icon"
          /> */}
        </section>

        <fieldset name="personal" form="create-employee">
          <legend className="legend-personal">Personal</legend>
          <section className="create-employee-input">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
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
