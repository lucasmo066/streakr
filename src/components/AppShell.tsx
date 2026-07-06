import { BottomNav } from "./BottomNav";
import { Header } from "./Header";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col px-5 pb-24 pt-6">
        <Header />
        <main className="mt-6 flex-1">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
