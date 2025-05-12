"use client";

import { useButtonMachine } from "@/hooks/useButtonMachine";
import Button from "@/components/Button"; // Assuming Button is a styled component

const ButtonWithState = () => {
  const { currentState, clickButton, resetButton } = useButtonMachine();

  // Log state and count for debugging purposes
  console.log("Current state:", currentState);

  return (
    <div>
      <Button
        variant={currentState === "idle" ? "primary" : "secondary"} // Toggle button color based on state
        onClick={currentState === "idle" ? clickButton : resetButton} // Handle click/reset based on state
      >
        {currentState === "idle" ? `Click me` : `Clicked!`}{" "}
        {/* Display the count */}
      </Button>
    </div>
  );
};

export default ButtonWithState;
