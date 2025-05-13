import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<h1>Welcome!</h1>);
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });
});
