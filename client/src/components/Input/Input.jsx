import { InputWrapper } from "./styled";

const Input = ({ type, label, onChange, value, background, placeholder }) => {
  return (
    <InputWrapper background={background}>
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
