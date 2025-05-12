import { render, fireEvent, screen } from '@testing-library/react';
import ButtonWithState from '@/components/ButtonWithState';
import { useButtonMachine } from '@/hooks/useButtonMachine';

jest.mock('@/hooks/useButtonMachine');

describe('ButtonWithState', () => {
  it('renders the correct button text and calls clickButton on first click', () => {
    (useButtonMachine as jest.Mock).mockReturnValue({
      currentState: 'idle',
      clickButton: jest.fn(),
      resetButton: jest.fn(),
    });

    render(<ButtonWithState />);

    // The button should have "Click me" text when currentState is 'idle'
    expect(screen.getByRole('button')).toHaveTextContent('Click me');

    // Simulate clicking the button
    fireEvent.click(screen.getByRole('button'));

    // Verify that clickButton was called
    expect(useButtonMachine().clickButton).toHaveBeenCalledTimes(1);
  });

  it('renders the correct button text and calls resetButton on second click', () => {
    (useButtonMachine as jest.Mock).mockReturnValue({
      currentState: 'clicked',
      clickButton: jest.fn(),
      resetButton: jest.fn(),
    });

    render(<ButtonWithState />);

    // The button should have "Clicked!" text when currentState is 'clicked'
    expect(screen.getByRole('button')).toHaveTextContent('Clicked!');

    // Simulate clicking the button
    fireEvent.click(screen.getByRole('button'));

    // Verify that resetButton was called
    expect(useButtonMachine().resetButton).toHaveBeenCalledTimes(1);
  });
});
