const Input = ({ className, id, label, type, value, handleInputChange }) => {
  return (
    <section className="input">
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        className="mt-1 w-full rounded-md bg-green-300 sm:text-sm"
        // onChange={handleInputChange}
      />
    </section>
  );
};

// {
//   INPUT_DATA.map((data, index) => (
//     <Input
//       key={index}
//       type={data.type}
//       className={data.className}
//       htmlFor={data.id}
//       label={data.label}
//       id={data.id}
//       value={newEmployee[index]}
//       handleChange={handleChange}
//       autoComplete="off"
//     />
//   ));
// }

export default Input;
