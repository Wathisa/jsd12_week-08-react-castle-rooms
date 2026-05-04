import { useState } from "react";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setSubmittedMessage("");
      setError("Please enter a message before submitting.");
      return;
    }

    setSubmittedMessage(trimmedMessage);
    setMessage("");
    setError("");
  }

  return (
    <section className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 px-8 py-12 text-center shadow-2xl">
      <h2 className="text-3xl font-bold text-white">Message Box</h2>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-sm flex-col gap-4">
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type your message..."
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          Submit
        </button>
      </form>

      {error && <p className="mt-6 font-semibold text-red-400">{error}</p>}

      {submittedMessage && (
        <p className="mt-6 font-semibold text-emerald-400">
          Submitted: {submittedMessage}
        </p>
      )}
    </section>
  );
}
