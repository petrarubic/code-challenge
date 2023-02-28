import { useState } from "react";
import { Navigate } from "react-router-dom";
import Input from "../components/Input/Input";
import { encodeText } from "../services/api";
import { useLoginDataStore } from "../store/login-data-store";
import { EncodeButton, Heading, Paragraph } from "./styled";

const Encoder = () => {
  const isAuthenticated = useLoginDataStore((state) => state.isAuthenticated);
  const [text, setText] = useState("");
  const [encodedText, setEncodedText] = useState("");

  async function handleEncode() {
    const encoded = await encodeText(text);
    setEncodedText(encoded);
  }

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div style={{ padding: "20px 40px" }}>
        <Heading>Encode data</Heading>
        <Paragraph>
          Enter a string of characters in the following input to encode it:
        </Paragraph>
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            background="#abdbe3"
            placeholder="XXXXYYYZZJ"
          />
          <EncodeButton onClick={handleEncode}>Encode text</EncodeButton>
        </div>

        {encodedText && (
          <Paragraph>
            Result: <b>{encodedText}</b>
          </Paragraph>
        )}
      </div>
    );
  }
};

export default Encoder;
