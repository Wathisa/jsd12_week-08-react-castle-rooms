import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext/MessageContext";
import Castle from "./01_Castle";

export default function CastleRooms() {
  const { question, answer, handleQuestion } = useContext(MessageContext);

  return (
    <section className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 px-8 py-10 shadow-2xl">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
          Castle Rooms
        </p>
        <h2 className="text-3xl font-bold text-white">Message to the Secret Room</h2>

        {/* This input sends the message from the outside into the castle */}
        <textarea
          value={question}
          onChange={handleQuestion}
          className="min-h-28 w-full max-w-xl rounded-2xl border border-slate-700 bg-white px-4 py-3 text-black outline-none"
          placeholder="Type your message here..."
        />

        <p className="text-yellow-300">
          {question ? question : "Waiting for a message..."}
        </p>

        <p className="text-green-300">Reply from the Secret Room:</p>
        <p className="text-yellow-300">
          {answer ? answer : "Waiting for a reply..."}
        </p>
      </div>

      {/* Keep the original castle structure below the message box */}
      <div className="mt-10">
        <Castle />
      </div>
    </section>
  );
}
