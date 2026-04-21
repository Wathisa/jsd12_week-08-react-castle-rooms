import { useState } from "react";

export default function SecretRoom({ question }) {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-slate-600 w-[90%]">
      <h1>SecretRoom</h1>
      <p>
        Message frome outside:
        <span>{question ? question : "Waiting for a message..."}</span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1 "
        placeholder="Type your message here..."
      />
      <p></p>

      {/* {Chamber} */}
    </div>
  );
}
