export default function Home() {
  return (
    <section className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 px-8 py-16 text-center shadow-2xl">
      <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Home</p>
      <h2 className="mt-4 text-4xl font-bold text-white">
        Welcome to My Daily Life App
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
        Use the navbar above to move between pages.
      </p>
    </section>
  );
}
