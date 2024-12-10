import "./Input.scss";

function Input({
  label,
  type,
  customClass,
  name,
  handleChange,
  defaultValue,
  disabled,
  maxLength,
}) {
  const id = `input-${name}`; // Generera ett unikt id baserat på name

  return (
    <section className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id} // Sätt id på input
        type={type}
        className={`input__field ${customClass ? customClass : ""}`}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue : ""}
        maxLength={maxLength}
        disabled={disabled}
      />
    </section>
  );
}

export default Input;
