import { createMachine } from "xstate";

export const buttonMachine = createMachine({
  id: "buttonMachine",
  initial: "idle",
  states: {
    idle: {
      on: {
        CLICK: "clicked",
      },
    },
    clicked: {
      on: {
        RESET: "idle",
      },
    },
  },
});
