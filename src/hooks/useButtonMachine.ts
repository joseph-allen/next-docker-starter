import { useMachine } from "@xstate/react";
import { buttonMachine } from "@/state/buttonMachine";

export function useButtonMachine() {
  const [state, send] = useMachine(buttonMachine);

  const clickButton = () => {
    send({ type: "CLICK" }); // Send CLICK event to transition to 'clicked'
  };

  const resetButton = () => {
    send({ type: "RESET" }); // Send RESET event to transition back to 'idle'
  };

  return {
    currentState: state.value, // The current state of the machine ('idle' or 'clicked')
    clickButton,
    resetButton,
  };
}
