'use client';

import { useButtonMachine } from '@/hooks/useButtonMachine';
import Button from '@/components/Button';

interface ButtonWithStateProps {
  variant?: 'primary' | 'secondary';
}

const ButtonWithState = ({ variant = 'primary' }: ButtonWithStateProps) => {
  const { currentState, clickButton, resetButton } = useButtonMachine();

  return (
    <Button
      variant={variant}
      onClick={currentState === 'idle' ? clickButton : resetButton}
    >
      {currentState === 'idle' ? 'Click me' : 'Clicked!'}
    </Button>
  );
};

export default ButtonWithState;
