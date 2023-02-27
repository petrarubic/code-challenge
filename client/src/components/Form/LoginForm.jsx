import { useState } from "react";
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

const LoginForm = ({ heading, subheading }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);

    if (
      email === "optimus.prime@autobots.com" &&
      password === "validPassword1234!"
    ) {
      localStorage.setItem("authenticated", true);
      navigate("/encode");
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
    </FormWrapper>
  );
};

export default LoginForm;
