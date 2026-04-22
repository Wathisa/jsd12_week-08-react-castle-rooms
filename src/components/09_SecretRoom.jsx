export default function SecretRoom({
  message,
  emotion,
  step,
  handleMessage,
  handleBetter,
  handleReset,
}) {
  let supportContent = null;

  if (emotion === "tired") {
    supportContent = {
      emoji: "🌙",
      text: "You’ve done enough today. Take a rest.",
    };
  } else if (emotion === "sad") {
    supportContent = {
      emoji: "🌧️",
      text: "It’s okay to feel this way.",
    };
  } else if (emotion === "stress") {
    supportContent = {
      emoji: "🌿",
      text: "Take a deep breath.",
    };
  } else if (emotion === "happy") {
    supportContent = {
      emoji: "🎉",
      text: "That’s wonderful!",
    };
  }

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-[90%] ${
        step === "better" ? "bg-slate-500" : "bg-slate-600"
      }`}
    >
      <h1>SecretRoom</h1>
      {step === "idle" ? (
        <>
          <p className="text-purple-300">How are you feeling today?</p>
          <textarea
            value={message}
            onChange={handleMessage}
            className="mt-4 bg-white text-black rounded px-2 py-1 "
            placeholder="Type your message here..."
          />
        </>
      ) : null}

      {step === "support" && supportContent ? (
        <div className="mt-4 flex flex-col items-center gap-3 rounded-lg bg-slate-700 px-6 py-4 text-center">
          <p className="text-3xl">{supportContent.emoji}</p>
          <p className="text-yellow-200">{supportContent.text}</p>
          <button
            type="button"
            onClick={handleBetter}
            className="rounded bg-yellow-300 px-4 py-2 text-black"
          >
            I&apos;m okay now
          </button>
        </div>
      ) : null}

      {step === "better" ? (
        <div className="mt-4 flex flex-col items-center gap-3 rounded-lg bg-slate-400 px-6 py-4 text-center text-slate-900">
          <p>You&apos;re doing great 💛</p>
          <button
            type="button"
            onClick={handleReset}
            className="rounded bg-white px-4 py-2 text-black"
          >
            Start again
          </button>
        </div>
      ) : null}

      {/* {Chamber} */}
    </div>
  );
}
