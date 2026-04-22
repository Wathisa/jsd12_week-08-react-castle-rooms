import { useEffect, useState } from "react";

export default function SecretRoom({ question, answer, handleAnswer }) {
  const [message, setMessage] = useState(answer || "");
  const [emotion, setEmotion] = useState("");
  const [step, setStep] = useState("idle");

  useEffect(() => {
    const text = message.trim().toLowerCase();

    if (!text) {
      setEmotion("");
      setStep("idle");
      return;
    }

    if (text.includes("เหนื่อย") || text.includes("tired")) {
      setEmotion("tired");
      setStep("support");
      return;
    }

    if (text.includes("เศร้า") || text.includes("sad")) {
      setEmotion("sad");
      setStep("support");
      return;
    }

    if (text.includes("เครียด") || text.includes("stress")) {
      setEmotion("stress");
      setStep("support");
      return;
    }

    if (text.includes("ดีใจ") || text.includes("happy")) {
      setEmotion("happy");
      setStep("support");
      return;
    }

    setEmotion("");
    setStep("idle");
  }, [message]);

  const handleMessageChange = (event) => {
    const nextMessage = event.target.value;
    setMessage(nextMessage);
    handleAnswer(nextMessage);
  };

  const handleBetter = () => {
    setStep("better");
  };

  const handleReset = () => {
    setMessage("");
    setEmotion("");
    setStep("idle");
    handleAnswer("");
  };

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
      <p className="text-purple-300">Message from the outside:</p>
      <p className="text-yellow-300">
        {question ? question : "Waiting for a message..."}
      </p>
      <p className="text-green-300">Reply to the outside:</p>
      <textarea
        value={message}
        onChange={handleMessageChange}
        className="bg-white text-black rounded px-2 py-1 "
        placeholder="Type your reply here..."
      />

      {step === "idle" ? (
        <p className="text-yellow-300">
          {message ? message : "Waiting for a message..."}
        </p>
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
