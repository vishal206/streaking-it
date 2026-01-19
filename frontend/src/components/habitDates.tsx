export const HabitDates = () => {
  const today = new Date();

  // Today
  const date = today.getDate(); // 1–31
  const year = today.getFullYear();

  const monthShort = today.toLocaleString("en-US", { month: "short" });
  // Last date of the current month
  const lastDateOfMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  return (
    <div className="flex flex-col gap-2">
      <div className="uppercase text-xs">{monthShort}</div>
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: lastDateOfMonth }, (_, i) => (
          <div
            key={i + 1}
            className={`group flex flex-col items-center justify-center text-xs cursor-default rounded-full w-6 h-6 ${
              i + 1 === date
                ? "hover:bg-green-600 bg-gray-500 text-white  cursor-pointer"
                : i + 1 < date
                  ? "bg-green-600 text-white"
                  : "border border-zinc-800 text-zinc-700"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
