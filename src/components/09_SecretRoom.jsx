import { useState } from "react";

export default function SecretRoom({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-slate-600 w-[90%]">
      <h1>SecretRoom</h1>
      <p>
        Message from outside:
        <span>{question ? question : "Waiting for a message..."}</span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1 "
        placeholder="Type your message here..."
      />
      <p>
        Reply to the outside:
        <span className="text-yellow-300">
          {" "}
          {answer ? answer : "Waiting for a reply..."}{" "}
        </span>
      </p>

      {/* {Chamber} */}
    </div>
  );
}
