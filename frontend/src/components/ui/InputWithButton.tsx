import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type inputWithButtonProps = {
  setInputText: (text: string) => void;
};

export function InputWithButton({ setInputText }: inputWithButtonProps) {
  const [text, setText] = useState("");
  const onClickHandle = () => {
    setInputText(text);
    setText("");
  };
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input
        type="email"
        placeholder="Add a Habit to follow"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="outline" onClick={() => onClickHandle()}>
        Add Habit for streaking
      </Button>
    </div>
  );
}
