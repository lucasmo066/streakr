import { AppShell } from "@/components/AppShell";

export default function StatsPage() {
  return (
    <AppShell>
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <span className="text-4xl">📊</span>
        <h2 className="text-xl font-semibold">Stats</h2>
        <p className="max-w-xs text-sm text-muted">
          Track your progress over time with charts and insights. Coming soon.
        </p>
      </div>
    </AppShell>
  );
}
