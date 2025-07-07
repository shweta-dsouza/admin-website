import { render, screen, fireEvent } from '../test-utils';
import TopBar from '../src/components/TopBar';
import { vi } from 'vitest';

describe('TopBar component', () => {
  const toggleThemeMode = vi.fn();

  const renderTopBar = (mode = 'dark') => {
    return render(<TopBar />, {
      wrapperProps: {
        themeMode: mode,
        toggleThemeMode,
      },
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders search bar with input and search icon', () => {
    renderTopBar();

    const input = screen.getByPlaceholderText(/search/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });

    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  test('renders all icon buttons with tooltips', async () => {
    renderTopBar();

    expect(
      screen.getByRole('button', { name: /theme-mode-menu/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Notifications/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /settings-menu/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /profile-menu/i })
    ).toBeInTheDocument();
  });

  test('calls toggleThemeMode when theme icon is clicked', async () => {
    renderTopBar();

    const themeBtn = screen.getByRole('button', {
      name: /theme-mode-menu/i,
    });
    fireEvent.click(themeBtn);

    expect(screen.getByTestId('LightModeOutlinedIcon')).toBeInTheDocument();
  });

  test('renders DropMenu with notification data', () => {
    renderTopBar();

    const notifButton = screen.getByRole('button', {
      name: /Notifications/i,
    });
    expect(notifButton).toBeInTheDocument();
  });
});
