import { useState } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState(null);

  const moods = ["😊", "😐", "😢", "😡"];

  return (
    <div className="w-full mx-auto rounded-3xl border border-slate-700 bg-slate-900 p-8 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">Mood Tracker</h1>

      <p className="mb-6 text-center text-slate-400">
        How are you feeling today?
      </p>

      <div className="flex justify-center gap-4 text-3xl">
        {moods.map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className={`rounded-2xl p-3 transition hover:scale-110 ${
              mood === m ? "bg-yellow-400 text-slate-950" : "bg-slate-800"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {mood && (
        <p className="mt-6 text-center text-lg">Today you feel: {mood}</p>
      )}
    </div>
  );
}
