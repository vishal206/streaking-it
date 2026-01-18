import { useState } from "react";
import { InputWithButton } from "./components/ui/InputWithButton";

function App() {
  const [newHabit, setNewHabit] = useState("");
  console.log("New Habit Added: ", newHabit);
  return (
    <div className="">
      <InputWithButton setInputText={setNewHabit} />
    </div>
  );
}

export default App;
