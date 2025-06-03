import { render, screen, fireEvent } from '@testing-library/react';
import FileControls from '@/components/FileControls';

describe('FileControls', () => {
  test('calls onDownload when download icon is clicked', () => {
    const handleDownload = jest.fn();
    render(<FileControls onDownload={handleDownload} onDelete={() => {}} />);
    fireEvent.click(screen.getByTestId('download-button'));
    expect(handleDownload).toHaveBeenCalled();
  });

  test('calls onDelete when delete icon is clicked', () => {
    const handleDelete = jest.fn();
    render(<FileControls onDownload={() => {}} onDelete={handleDelete} />);
    fireEvent.click(screen.getByTestId('delete-button'));
    expect(handleDelete).toHaveBeenCalled();
  });

  test('disables delete button when disableDelete is true', () => {
    render(
      <FileControls
        onDownload={() => {}}
        onDelete={() => {}}
        disableDelete={true}
      />
    );

    const deleteButton = screen.getByTestId('delete-button');
    expect(deleteButton).toBeDisabled();
  });
});
