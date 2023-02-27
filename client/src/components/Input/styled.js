import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.6);
  font-family: "Golos Text";
  padding: 10px 20px;
  border-radius: 10px;
  width: 250px;
  margin: 20px 0px;

  label {
    font-size: 14px;
    padding-bottom: 5px;
    color: #5c94ab;
  }

  input {
    border: none;
    outline: none;
    background: none;
    color: #1e2f38;
  }
`;
