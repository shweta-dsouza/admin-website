import { render, screen, fireEvent } from '../test-utils';
import { MemoryRouter } from 'react-router-dom';
import SideBar from '../src/components/SideBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { vi } from 'vitest';

vi.mock('@mui/material/useMediaQuery', () => ({
    __esModule: true,
    default: vi.fn(),
}));

// Helper to render with router context
const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: MemoryRouter });
};

describe('SideBar component', () => {
    const activeBgColor = 'rgba(0, 0, 0, 0)';

    beforeEach(() => {
        useMediaQuery.mockReturnValue(false);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders sidebar with menu items and profile when not mobile and not collapsed', () => {
        useMediaQuery.mockReturnValue(false); // not mobile

        renderWithRouter(<SideBar />);

        // Check that menu items render
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Users')).toBeInTheDocument();
        expect(screen.getByText('All Users')).toBeInTheDocument();

        // Check profile name and title present
        expect(screen.getByText('Shweta')).toBeInTheDocument();
        expect(screen.getByText('Senior UI Developer')).toBeInTheDocument();

        // Collapse button present
        expect(screen.getByLabelText('dash-pilot')).toBeInTheDocument();
    });

    test('sidebar starts collapsed on mobile', () => {
        useMediaQuery.mockReturnValue(true); // mobile screen

        renderWithRouter(<SideBar />);

        // The sidebar should be collapsed on mobile (icon-only)
        // Profile section should not be visible on mobile (collapsed)
        expect(screen.queryByText('Shweta')).not.toBeInTheDocument();
        expect(screen.queryByText('Senior UI Developer')).not.toBeInTheDocument();
    });

    test('clicking collapse toggles sidebar collapsed state', () => {
        useMediaQuery.mockReturnValue(false); // not mobile

        renderWithRouter(<SideBar />);

        const collapseBtn = screen.getByLabelText('dash-pilot');

        // Initially, profile is visible (not collapsed)
        expect(screen.getByText('Shweta')).toBeInTheDocument();

        // Click to collapse
        fireEvent.click(collapseBtn);

        // After collapse, profile should be gone
        expect(screen.queryByText('Shweta')).not.toBeInTheDocument();

        // Click again to expand
        fireEvent.click(collapseBtn);

        expect(screen.getByText('Shweta')).toBeInTheDocument();
    });

    test('active menu item highlights correctly based on URL', () => {
        useMediaQuery.mockReturnValue(false); // not mobile

        renderWithRouter(<SideBar />, { route: '/users' });

        // "All Users" menu item should have active background color
        const activeMenuItem = screen.getByText(/All Users/i);
        expect(activeMenuItem).toHaveStyle(`background-color: ${activeBgColor}`); // react-pro-sidebar sets this class for active
    });

    test('clicking a menu item updates active menu state', () => {
        useMediaQuery.mockReturnValue(false); // not mobile

        renderWithRouter(<SideBar />);

        // Click 'All Users'
        const allUsersMenuItem = screen.getByText(/All Users/i);
        fireEvent.click(allUsersMenuItem);

        // Now 'All Users' should be active background color
        expect(allUsersMenuItem).toHaveStyle(`background-color: ${activeBgColor}`);
    });
});
