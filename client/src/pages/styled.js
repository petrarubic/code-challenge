import styled from "styled-components";

export const PageLayout = styled.div`
  height: 100vh;

  .background {
    position: relative;
    background-image: url("./images/login-background.jpg");
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  width: 60%;
  height: 80%;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
