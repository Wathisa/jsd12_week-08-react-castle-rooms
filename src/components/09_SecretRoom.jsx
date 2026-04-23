import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function SecretRoom() {
  const { question, answer, handleAnswer } = useContext(MessageContext);

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-slate-600 w-[90%]">
      <h1>SecretRoom</h1>
      <p className="text-purple-300">Message from the outside:</p>
      <p className="text-yellow-300">
        {question ? `✅ ${question}` : "Waiting for a message..."}
      </p>
      <p className="text-green-300">Reply to the outside:</p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1 "
        placeholder="Type your reply here..."
      />
      <p className="text-green-300">
        Reply to the outside:{" "}
        <span className="text-yellow-300">
          {" "}
          {answer ? `✅ ${answer}` : "Waiting for a reply..."}
        </span>
      </p>
    </div>
  );
}
