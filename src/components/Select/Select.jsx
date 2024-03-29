import { nanoid } from 'nanoid';
import './Select.css';
// I use nanoid to generate unique key id for each select option

/**
 * Renders a select input field with options.
 *
 * @param {string} label - The label for the select input field.
 * @param {string} value - The current value of the select input field.
 * @param {Array} options - The array of options for the select input field.
 * @param {function} onChange - The function to be called when the select input field value changes.
 * @return {JSX.Element} - The JSX element representing the select input field.
 */
const Select = ({ label, name, options }) => {
  return (
    <>
      <label htmlFor={`${label}-select`} className={`${label}-label`}>
        {label}
        <select
          id={`${label}-select`}
          name={name}
          className={`${label}-select`}
          autoComplete="off"
          aria-required="true"
          required
        >
          {options &&
            options.map((option) => (
              <option key={nanoid()} value={option.name}>
                {option.name}
              </option>
            ))}
        </select>
      </label>
    </>
  );
};

export default Select;
