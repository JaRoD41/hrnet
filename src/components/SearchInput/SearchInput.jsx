import { useState, useEffect } from 'react';
import searchIcon from '../../assets/search-icon.svg';
import { useEmployees } from '../../utils/useEmployees';

const SearchInput = () => {
  // Get the employee list
  const { employeeList } = useEmployees();

  // I create a state to store the search value
  const [searchValue, setSearchValue] = useState('');

  // I create a state to store the filtered results
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const filteredList = employeeList.filter((employee) => {
      if (employee) {
        return employee.firstName.includes(searchValue);
      }
      return false;
    });
    setFilteredResults(filteredList);
  }, [employeeList, searchValue]);

  console.log('liste filtrée : ', filteredResults);

  // Display the filteredEmployeeList in the table
  return (
    <>
      <span className="searchBar-container">
        <input
          id="searchBar"
          type="search"
          role="searchbox"
          placeholder="Search"
          onChange={handleSearchChange}
        />
        <img src={searchIcon} alt="search icon" className="search-icon" />
      </span>
    </>
  );
};

export default SearchInput;
