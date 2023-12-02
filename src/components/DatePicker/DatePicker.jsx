const DatePicker = ({ id, name, label }) => {
  return (
    <section className="create-employee-input">
      <label htmlFor={id}>{label}</label>
      <input
        type="date"
        id={id}
        name={name}
        autoComplete="off"
        aria-required="true"
        required
      />
    </section>
  );
};

export default DatePicker;
