import searchIcon from '../../assets/search-icon.svg';
import { useEmployees } from '../../utils/useEmployees';

const SearchInput = () => {
  // Get the searchValue and setSearchValue from the context
  const { searchValue, setSearchValue } = useEmployees();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

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
        <img src={searchIcon} alt="search icon" className="search-icon" width={19} height={19}/>
      </span>
    </>
  );
};

export default SearchInput;
