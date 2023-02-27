import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  padding: 40px 80px;
  color: #1e2f38;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeader = styled.div`
  text-align: center;
`;

export const FormBody = styled.div`
  margin-top: 20px;
`;

export const FormHeading = styled.h1`
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 36px;
`;

export const FormSubheading = styled.p`
  font-weight: 500;
  font-family: "Golos Text";
`;

export const SubmitButton = styled.button`
  font-family: "Montserrat";
  font-weight: 800;
  width: 180px;
  font-size: 16px;
  color: white;
  border: none;
  background-color: #5c94ab;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    color: #1e2f38;
  }
`;
