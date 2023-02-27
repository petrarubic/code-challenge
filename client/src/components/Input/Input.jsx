import { InputWrapper } from "./styled";

const Input = ({ type, label, onChange, value }) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <input type={type} onChange={onChange} value={value} />
    </InputWrapper>
  );
};

export default Input;
