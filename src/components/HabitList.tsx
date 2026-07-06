import { HabitItem } from "./HabitItem";

export type Habit = {
  id: string;
  name: string;
  emoji: string;
  streak: number;
  completed?: boolean;
};

type HabitListProps = {
  habits: Habit[];
};

export function HabitList({ habits }: HabitListProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Today&apos;s habits</h2>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full bg-streak/10 text-streak transition hover:bg-streak/20"
          aria-label="Add habit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {habits.map((habit) => (
          <HabitItem key={habit.id} {...habit} />
        ))}
      </div>
    </section>
  );
}
