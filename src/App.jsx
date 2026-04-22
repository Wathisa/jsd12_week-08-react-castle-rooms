import { useState } from "react";
import Castle from "./components/01_Castle";
// import SimpleAsyncAwait from "./examples/async/SimpleAsyncAwait";

export default function App() {
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
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message for the Secret Room:
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1 "
        placeholder="Type your message here..."
      />
      <p className="text-yellow-300">
        {question ? question : "Waiting for a message..."}
      </p>
      <p className="text-green-300">
        Reply from the Secret Room:
        <span className="text-yellow-300">
          {/* {question or waiting for message} */}
          {" "}
        </span>
      </p>
      <p className="text-yellow-300">
        {answer ? answer : "Waiting for a reply..."}
      </p>
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
      {/* <SimpleAsyncAwait /> */}
    </div>
  );
}
