import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center text-white shadow-2xl">
      <h1 className="mb-6 text-center text-3xl font-bold">Counter</h1>

      <p className="mb-8 text-4xl font-bold">{count}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-lg bg-red-500 px-5 py-3 text-xl font-bold"
        >
          -
        </button>

        <button
          onClick={() => setCount(0)}
          className="rounded-lg bg-slate-500 px-5 py-3 text-xl"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-green-500 px-5 py-3 text-xl font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}
