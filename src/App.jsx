import { useEffect, useState } from "react";
import Castle from "./components/01_Castle";
// import SimpleAsyncAwait from "./examples/async/SimpleAsyncAwait";

export default function App() {
  const [view, setView] = useState("outside");
  const [message, setMessage] = useState("");
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

  const openDoor = () => {
    setView("inside");
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleBetter = () => {
    setStep("better");
  };

  const handleReset = () => {
    setView("outside");
    setMessage("");
    setEmotion("");
    setStep("idle");
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center px-6 py-10 text-white ${
        step === "better" ? "bg-slate-600" : "bg-gray-800"
      }`}
    >
      {view === "outside" ? (
        <div className="flex max-w-md flex-col items-center gap-6 text-center">
          <p className="text-2xl text-purple-200">
            Hey... you can come inside and talk with me.
          </p>
          <button
            type="button"
            onClick={openDoor}
            className="rounded bg-yellow-300 px-5 py-3 text-black"
          >
            Open the Door
          </button>
        </div>
      ) : (
        <Castle
          message={message}
          emotion={emotion}
          step={step}
          handleMessage={handleMessage}
          handleBetter={handleBetter}
          handleReset={handleReset}
        />
      )}
      {/* <SimpleAsyncAwait /> */}
    </div>
  );
}
