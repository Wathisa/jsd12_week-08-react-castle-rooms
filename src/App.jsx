import { useState } from "react";
import Castle from "./components/castle";

export default function App() {
  // creating state variables
  const [question, setQuestion] = useState("");
  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message for JSD12:
        <span className="text-yellow-300">
          {/* {question or waiting for message} */}
        </span>
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1 "
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from secret room:
        <span className="text-yellow-300">
          {/* {answer or waiting for reply} */}
        </span>
      </p>
      <Castle question={question} />
    </div>
  );
}
