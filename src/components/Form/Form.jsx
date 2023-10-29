import './Form.css';
import Select from '../Select/Select';
import departments from '../../data/departments';
import states from '../../data/states';
import { useState } from 'react';
import addUser from '../../assets/users-add.svg';
const Form = () => {
  const departmentOptions = departments;
  const stateOptions = states;
  const [selectValue, setSelectValue] = useState('');
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  // const modalBtn = document.querySelector('.save-button');
  const handleSubmit = (e) => {
    e.preventDefault();
    // modalBtn.click();
    console.log('formulaire soumis avec succes : ', selectValue);
  };
  return (
    <>
      <form action="#" id="create-employee">
        <img
          className="create-employee--ico"
          src={addUser}
          alt="create employee icon"
        />
        <fieldset>
          <legend className="legend-personal">Personal</legend>
          <section className="create-employee-input-first-name">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input-last-name">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input-date-of-birth">
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

        <fieldset>
          <legend className="legend-adress">Address</legend>

          <section className="create-employee-input-street">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input-state">
            <label htmlFor="state">State</label>
            <Select
              label="State"
              value={selectValue}
              options={stateOptions}
              onChange={handleSelectChange}
            />
          </section>

          <section className="create-employee-input-zipCode">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>
        </fieldset>
        <fieldset>
          <legend className="legend-hr">HR infos</legend>
          <section className="create-employee-input-start-date">
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              id="start-date"
              autoComplete="off"
              aria-required="true"
              // onChange={handleInputChange}
            />
          </section>

          <section className="create-employee-input-department">
            <label htmlFor="department">Department</label>
            <Select
              label="Department"
              value={selectValue}
              options={departmentOptions}
              onChange={handleSelectChange}
            />
          </section>
        </fieldset>

        <button type="submit" className="save-button" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </>
  );
};

export default Form;
