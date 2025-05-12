import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<h1>Welcome</h1>);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
