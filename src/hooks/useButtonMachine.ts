import { useMachine } from "@xstate/react";
import { buttonMachine } from "@/state/buttonMachine";

export function useButtonMachine() {
  const [state, send] = useMachine(buttonMachine);

  const clickButton = () => {
    send({ type: "CLICK" });
  };

  const resetButton = () => {
    send({ type: "RESET" });
  };

  return {
    currentState: state.value,
    clickButton,
    resetButton,
  };
}
