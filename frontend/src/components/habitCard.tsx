import { HabitDates } from "./habitDates";

type HabitCardProps = {
  habitTitle: string;
};

export const HabitCard = ({ habitTitle }: HabitCardProps) => {
  return (
    <div className="border border-zinc-800 py-8 px-8 flex flex-col gap-8 rounded">
      <div className="group flex gap-2 cursor-pointer capitalize w-full">
        <div className="text-2xl font-bold text-end flex items-center justify-start border-r border-zinc-800 pr-2 w-full">
          {habitTitle}
        </div>
        <div className="flex flex-col items-center justify-center border-r border-zinc-800 pr-2 w-full">
          <div className="text-xs font-extralight">Current Streak</div>
          <div className="text-4xl font-bold">18</div>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="text-xs font-extralight">Max Streak</div>
          <div className="text-4xl font-bold">18</div>
        </div>
      </div>
      <div className="mx-12">
        <HabitDates />
      </div>
    </div>
  );
};
