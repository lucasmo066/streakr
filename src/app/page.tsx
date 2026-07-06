import { AppShell } from "@/components/AppShell";
import { HabitList } from "@/components/HabitList";
import { StreakHero } from "@/components/StreakHero";

const mockHabits = [
  { id: "1", name: "Morning workout", emoji: "💪", streak: 12, completed: true },
  { id: "2", name: "Read 30 minutes", emoji: "📚", streak: 8, completed: true },
  { id: "3", name: "Drink 8 glasses of water", emoji: "💧", streak: 21, completed: false },
  { id: "4", name: "Meditate", emoji: "🧘", streak: 5, completed: false },
  { id: "5", name: "No social media before noon", emoji: "📵", streak: 3, completed: false },
];

export default function Home() {
  const completedToday = mockHabits.filter((h) => h.completed).length;

  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <StreakHero
          currentStreak={12}
          longestStreak={21}
          completedToday={completedToday}
          totalHabits={mockHabits.length}
        />
        <HabitList habits={mockHabits} />
      </div>
    </AppShell>
  );
}
