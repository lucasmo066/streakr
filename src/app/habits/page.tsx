import { AppShell } from "@/components/AppShell";

export default function HabitsPage() {
  return (
    <AppShell>
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <span className="text-4xl">✅</span>
        <h2 className="text-xl font-semibold">Habits</h2>
        <p className="max-w-xs text-sm text-muted">
          Manage and organize all your habits here. Coming soon.
        </p>
      </div>
    </AppShell>
  );
}
