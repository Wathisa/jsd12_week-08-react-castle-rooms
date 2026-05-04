const navItems = [
  "Home",
  "Mood Tracker",
  "Todo List",
  "Light Switch",
  "Message Box",
  "Counter",
  "Castle Rooms",
];

export default function Navbar({ currentPage, onNavigate }) {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
            My Daily Life App
          </p>
          <h1 className="text-2xl font-bold text-white">Daily Pages</h1>
        </div>

        <nav className="flex flex-wrap gap-3">
          {navItems.map((item) => {
            const isActive = currentPage === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => onNavigate(item)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-amber-300 text-slate-950"
                    : "bg-slate-800 text-slate-100 hover:bg-slate-700"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
