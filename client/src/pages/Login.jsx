import LoginForm from "../components/Form/LoginForm";
import { ContentWrapper, ModalWrapper, PageLayout } from "./styled";

const Login = () => {
  return (
    <PageLayout>
      <div className="background" />
      <ContentWrapper>
        <ModalWrapper>
          <LoginForm
            heading="Welcome Back!"
            subheading="Please enter your credentials to access your account."
          />
        </ModalWrapper>
      </ContentWrapper>
    </PageLayout>
  );
};

export default Login;
