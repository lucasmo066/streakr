"use client";

import { useState } from "react";

type HabitItemProps = {
  id: string;
  name: string;
  emoji: string;
  streak: number;
  completed?: boolean;
};

export function HabitItem({
  name,
  emoji,
  streak,
  completed: initialCompleted = false,
}: HabitItemProps) {
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <button
      type="button"
      onClick={() => setCompleted((prev) => !prev)}
      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
        completed
          ? "border-success/30 bg-success/5"
          : "border-border bg-surface hover:border-streak/30 hover:bg-surface-elevated"
      }`}
    >
      <span className="text-2xl" role="img" aria-hidden>
        {emoji}
      </span>

      <div className="min-w-0 flex-1">
        <p
          className={`font-medium ${completed ? "text-muted line-through" : "text-foreground"}`}
        >
          {name}
        </p>
        <p className="mt-0.5 text-sm text-muted">
          {streak} day streak
        </p>
      </div>

      <div
        className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
          completed
            ? "border-success bg-success text-white"
            : "border-border bg-background"
        }`}
      >
        {completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
