import { useEffect, useState } from "react";
import { InputWithButton } from "./components/ui/InputWithButton";
import { HabitCard } from "./components/habitCard";

type listOfHabitsType = {
  habitTitle: string;
  isDoneToday: boolean;
}[];

function App() {
  const [newHabit, setNewHabit] = useState("");
  const [listOfHabits, setListOfHabits] = useState<listOfHabitsType>([]);
  useEffect(() => {
    if (newHabit)
      setListOfHabits((prev) => [
        { habitTitle: newHabit, isDoneToday: false },
        ...prev,
      ]);
  }, [newHabit]);

  const habitToggle = (index: number) => {
    setListOfHabits((habits) =>
      habits.map((habit, i) =>
        i === index ? { ...habit, isDoneToday: !habit.isDoneToday } : habit,
      ),
    );
  };
  return (
    <div className="flex flex-col gap-4 p-4 items-center justify-center h-screen bg-zinc-900 text-zinc-300">
      <InputWithButton setInputText={setNewHabit} />
      <div className="flex gap-2">
        {listOfHabits.map((habit, index) =>
          habit ? (
            <div key={index} onClick={() => habitToggle(index)}>
              <HabitCard habitTitle={habit.habitTitle} />
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}

export default App;
