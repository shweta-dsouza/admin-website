import { render, screen } from '../test-utils';
import SnackBar from '../src/components/SnackBar';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('SnackBar component', () => {
    const message = 'Test Snackbar';
    const handleClose = vi.fn();

    // Helper function to render the component with default props
    const renderSnackBar = (props = {}) => {
        return render(
            <SnackBar
                open={true}
                handleClose={handleClose}
                message={message}
                {...props}
            />
        );
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders Snackbar with message when open is true', () => {
        renderSnackBar();

        // The message should be visible
        expect(screen.getByText(message)).toBeInTheDocument();

        // The Snackbar container should have the aria-label (message)
        expect(screen.getByLabelText(message)).toBeVisible();
    });

    test('does not render Snackbar when open is false', () => {
        renderSnackBar({ open: false });

        expect(screen.queryByText(message)).not.toBeInTheDocument();
    });

    test('calls handleClose when close button is clicked', async () => {
        renderSnackBar();

        const closeBtn = screen.getByLabelText(/close/i);
        await userEvent.click(closeBtn);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('auto hides after autoHideDuration', () => {
        vi.useFakeTimers();

        renderSnackBar();

        // Fast-forward time past autoHideDuration (5000ms)
        vi.advanceTimersByTime(5000);

        // Expect handleClose to be called automatically
        expect(handleClose).toHaveBeenCalled();

        vi.useRealTimers();
    });
});
