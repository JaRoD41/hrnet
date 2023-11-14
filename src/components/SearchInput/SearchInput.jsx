// import { useEffect } from 'react';
import searchIcon from '../../assets/search-icon.svg';
import { useEmployees } from '../../utils/useEmployees';

const SearchInput = () => {
  // Get the employee list, addEmployee function, searchEmployee function and searchValue
  const { employeeList, addEmployee, searchEmployee, searchValue } =
    useEmployees();

  const handleSearchChange = (event) => {
    searchEmployee(event.target.value);
  };

  // useEffect(() => {
  //   const filteredList = employeeList.filter((employee) => {
  //     if (employee) {
  //       return employee.firstName.includes(searchValue);
  //     }
  //     return false;
  //   });
  //   setFilteredResults(filteredList);
  // }, [employeeList, searchValue]);

  // console.log('liste filtrée : ', filteredResults);

  // Display the filteredEmployeeList in the table
  return (
    <>
      <span className="searchBar-container">
        <input
          id="searchBar"
          type="search"
          role="searchbox"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <img src={searchIcon} alt="search icon" className="search-icon" />
      </span>
    </>
  );
};

export default SearchInput;
