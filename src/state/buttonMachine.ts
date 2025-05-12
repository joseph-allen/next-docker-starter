import { createMachine } from "xstate";

// Define the machine logic for button click (no count anymore)
export const buttonMachine = createMachine({
  id: "buttonMachine",
  initial: "idle", // Starting state is 'idle'
  states: {
    idle: {
      on: {
        CLICK: "clicked", // On CLICK event, transition to 'clicked'
      },
    },
    clicked: {
      on: {
        RESET: "idle", // On RESET event, transition back to 'idle'
      },
    },
  },
});
