export function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted">{today}</p>
        <h1 className="text-2xl font-bold tracking-tight">Streakr</h1>
      </div>
      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-full bg-surface-elevated text-sm font-semibold text-streak ring-1 ring-border transition hover:ring-streak/40"
        aria-label="Profile"
      >
        LM
      </button>
    </header>
  );
}
