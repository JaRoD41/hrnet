
const Form = () => {
  return (
    <>
      <div className="flex-col">
        <form action="#" id="create-employee">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <fieldset className="flex-col bg-gray-200 mb-6 md:w-1/2">
              <legend className="pb-8">Personal Information</legend>
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

              <label htmlFor="start-date">Start Date</label>
              <input
                id="start-date"
                type="text"
                className="mt-1 w-full rounded-md bg-green-300 sm:text-sm"
                // onChange={handleInputChange}
              />
            </fieldset>

            <fieldset className="flex-col bg-gray-200 mb-6 md:w-1/2">
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

              <label htmlFor="state">State</label>
              {/* <select name="state" id="state" className="mt-1 w-full rounded-md bg-blue-300 sm:text-sm"></select> */}
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

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            className="mt-1 w-full rounded-md bg-pink-300 sm:text-sm"
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
      </div>
      
    </>
  );
}

export default Form