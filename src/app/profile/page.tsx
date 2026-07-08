import { AppShell } from "@/components/AppShell";

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-streak/10 text-2xl font-bold text-streak">
          LM
        </div>
        <h2 className="text-xl font-semibold">Profile</h2>
        <p className="max-w-xs text-sm text-muted">
          Account settings and preferences. Supabase auth coming soon.
        </p>
      </div>
    </AppShell>
  );
}
