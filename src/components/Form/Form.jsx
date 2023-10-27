import './Form.css';
import Select from '../Select/Select';
import departments from '../../data/departments';
import { useState } from 'react';
const Form = () => {
  const departmentOptions = departments;
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
      <div className="form-container">
        <form action="#" id="create-employee">
          <div className="form-fields">
            <fieldset>
              <legend className="pb-8">Personal</legend>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                autoComplete="first-name"
                className="mt-1 w-full rounded-md bg-green-300 sm:text-sm "
                // onChange={handleInputChange}
              />

              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                className="mt-1 w-full rounded-md bg-green-300 sm:text-sm"
                // onChange={handleInputChange}
              />

              <label htmlFor="date-of-birth">Date of Birth</label>
              <input
                id="date-of-birth"
                type="text"
                className="mt-1 w-full rounded-md bg-green-300 sm:text-sm"
                // onChange={handleInputChange}
              />
            </fieldset>

            <fieldset>
              <legend className="pb-8">Address</legend>

              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                className="mt-1 w-full rounded-md bg-blue-300 sm:text-sm"
                // onChange={handleInputChange}
              />

              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                className="mt-1 w-full rounded-md bg-blue-300 sm:text-sm"
                // onChange={handleInputChange}
              />

              {/* <label htmlFor="state">State</label>
              <select name="state" id="state" className="state-select"></select> */}

              <Select />
              {/* <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
                className="mt-1 w-full rounded-md bg-blue-300 sm:text-sm"
              /> */}

              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                className="mt-1 w-full rounded-md bg-blue-300 sm:text-sm"
                // onChange={handleInputChange}
              />
            </fieldset>
          </div>
          <fieldset>
            <legend className="pb-8">HR infos</legend>
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="text"
              className="mt-1 w-full rounded-md bg-green-300 sm:text-sm"
              // onChange={handleInputChange}
            />

            <Select
              label="Department"
              value={selectValue}
              options={departmentOptions}
              onChange={handleSelectChange}
            />
          </fieldset>
          <button type="submit" className="save-button" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
