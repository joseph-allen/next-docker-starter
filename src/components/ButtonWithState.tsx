"use client";

import { useButtonMachine } from "@/hooks/useButtonMachine";
import Button from "@/components/Button";

const ButtonWithState = () => {
  const { currentState, clickButton, resetButton } = useButtonMachine();

  return (
    <div>
      <Button
        variant={currentState === "idle" ? "primary" : "secondary"}
        onClick={currentState === "idle" ? clickButton : resetButton}
      >
        {currentState === "idle" ? `Click me` : `Clicked!`}
      </Button>
    </div>
  );
};

export default ButtonWithState;
