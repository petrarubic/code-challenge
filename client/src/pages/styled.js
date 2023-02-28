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

  @media (max-width: 768px) {
    width: 90%;
    height: 70%;
  }
`;

export const Heading = styled.h1`
  font-family: "Montserrat";
  font-size: 32px;
  padding-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-family: "Golos Text";
  font-size: 14px;
`;

export const EncodeButton = styled.button`
  font-family: "Montserrat";
  font-weight: 800;
  width: 120px;
  font-size: 12px;
  color: #5c94ab;
  border: 1px solid #5c94ab;
  background-color: white;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    color: #abdbe3;
  }
`;
