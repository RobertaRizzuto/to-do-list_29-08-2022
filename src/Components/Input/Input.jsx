import "./index.css";

const Input = ({ placeholder, setNewVoice, type, value }) => {
  const onChange = (e) => setNewVoice(e.target.value);
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
