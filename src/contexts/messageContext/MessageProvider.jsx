import { useState } from "react";
import { MessageContext } from "./MessageContext";

const MessageProvider = ({ children }) => {
  // creating state variables
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <MessageContext.Provider
      value={{ question, answer, handleQuestion, handleAnswer }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
