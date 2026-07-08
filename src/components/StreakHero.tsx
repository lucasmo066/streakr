type StreakHeroProps = {
  currentStreak: number;
  longestStreak: number;
  completedToday: number;
  totalHabits: number;
};

export function StreakHero({
  currentStreak,
  longestStreak,
  completedToday,
  totalHabits,
}: StreakHeroProps) {
  const progress =
    totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0;

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-streak to-streak-dark p-6 text-white shadow-lg shadow-streak/20">
      <div className="absolute -right-6 -top-6 size-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -left-4 size-24 rounded-full bg-white/5" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-white/80">Current streak</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight">
                {currentStreak}
              </span>
              <span className="text-lg font-medium text-white/80">days</span>
            </div>
          </div>
          <span className="text-4xl" role="img" aria-label="fire">
            🔥
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-medium text-white/70">Longest streak</p>
            <p className="mt-0.5 text-xl font-bold">{longestStreak} days</p>
          </div>
          <div className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs font-medium text-white/70">Today</p>
            <p className="mt-0.5 text-xl font-bold">
              {completedToday}/{totalHabits}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-white/80">
            <span>Daily progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
