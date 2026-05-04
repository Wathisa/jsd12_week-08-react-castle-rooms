import { useState } from "react";

export default function LightSwitch() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <section
      className={`w-full rounded-3xl border px-8 py-12 text-center shadow-2xl transition ${
        isLightOn
          ? "border-amber-200 bg-amber-100 text-slate-950"
          : "border-slate-800 bg-slate-900/80 text-slate-100"
      }`}
    >
      <h2 className="text-3xl font-bold">Light Switch</h2>

      <p
        className={`mt-8 text-3xl font-bold ${
          isLightOn ? "text-amber-500" : "text-red-400"
        }`}
      >
        {isLightOn ? "ON" : "OFF"}
      </p>

      <button
        type="button"
        onClick={() => setIsLightOn(!isLightOn)}
        className={`mx-auto mt-8 flex h-12 w-24 items-center rounded-full p-1 transition ${
          isLightOn ? "bg-amber-400" : "bg-slate-500"
        }`}
        aria-pressed={isLightOn}
        aria-label={isLightOn ? "Turn light off" : "Turn light on"}
      >
        <span
          className={`h-10 w-10 rounded-full bg-white shadow transition ${
            isLightOn ? "translate-x-12" : "translate-x-0"
          }`}
        />
      </button>
    </section>
  );
}
