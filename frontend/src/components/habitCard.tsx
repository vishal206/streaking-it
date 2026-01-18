type HabitCardProps = {
  habitTitle: string;
  isDoneToday: boolean;
};

export const HabitCard = ({ habitTitle, isDoneToday }: HabitCardProps) => {
  return (
    <div className="group flex gap-2 border p-2 cursor-pointer">
      <div>{habitTitle}</div>
      <div className="cursor-pointer">
        {isDoneToday ? (
          <span>🎉</span>
        ) : (
          <>
            <span className="group-hover:hidden">☑️</span>
            <span className="hidden group-hover:inline">✅</span>
          </>
        )}
      </div>
    </div>
  );
};
