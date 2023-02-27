import { useEffect, useState } from "react";
import Input from "../Input/Input";
import {
  FormBody,
  FormHeader,
  FormHeading,
  FormSubheading,
  FormWrapper,
  SubmitButton,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";
import { useLoginDataStore } from "../../store/login-data-store";

const LoginForm = ({ heading, subheading }) => {
  const data = useLoginDataStore((state) => state.data);
  const [authWarningVisible, setAuthWarningVisible] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === data.email && password === data.password) {
      loginUser(email, password)
        .then((token) => {
          localStorage.setItem("authToken", token);
          setAuthWarningVisible(false);
          navigate("/encode");
        })
        .catch((error) => {
          setAuthWarningVisible(true);
          setWarningMessage(error);
        });
    } else {
      setAuthWarningVisible(true);
      setWarningMessage("Account with entered credentials doesn't exist.");
    }
  };

  return (
    <FormWrapper>
      <FormHeader>
        <img
          src="./images/login-profile.png"
          alt="Profile"
          style={{ height: "80px", width: "80px" }}
        ></img>
        <FormHeading>{heading}</FormHeading>
        <FormSubheading>{subheading}</FormSubheading>
      </FormHeader>
      <FormBody>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "12px",
            }}
          >
            <SubmitButton type="submit">Login</SubmitButton>
          </div>
        </form>
      </FormBody>
      {authWarningVisible && <p style={{ color: "white" }}>{warningMessage}</p>}
    </FormWrapper>
  );
};

export default LoginForm;
