import { render, screen, fireEvent } from '../test-utils';
import DropMenu from '../src/components/DropMenu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NOTIFICATION_DATA } from '../src/constants';

describe('DropMenu Component', () => {
  const mockData = NOTIFICATION_DATA;

  const baseProps = {
    tooltipTitle: 'Notifications',
    menuName: 'notifications',
    icon: <NotificationsIcon data-testid="test-icon" />,
    data: mockData,
  };

  test('renders icon button with tooltip', async () => {
    render(<DropMenu {...baseProps} />);

    // Tooltip text appears only on hover in real DOM, so test icon presence
    const iconButton = screen.getByRole('button', { name: /notifications/i });
    expect(iconButton).toBeInTheDocument();

    // Test icon is rendered inside button
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  test('opens menu on icon click and displays items', async () => {
    render(<DropMenu {...baseProps} />);

    const button = screen.getByRole('button', { name: /notifications/i });
    fireEvent.click(button);

    // Menu should now be open
    const menu = screen.getByRole('menu');
    expect(menu).toBeVisible();

    // Each item title from mock data should be rendered
    mockData.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.desc)).toBeInTheDocument();
      expect(screen.getByText(item.time)).toBeInTheDocument();
    });
  });

  test('closes menu when a menu item is clicked', async () => {
    render(<DropMenu {...baseProps} />);

    const button = screen.getByRole('button', { name: /notifications/i });
    fireEvent.click(button);

    const firstItem = screen.getByText(mockData[0].title);
    fireEvent.click(firstItem);

    // Menu should now be closed
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
  });

  test('does not crash with empty data array', () => {
    render(<DropMenu {...baseProps} data={[]} />);

    const button = screen.getByRole('button', { name: /notifications/i });
    fireEvent.click(button);

    expect(screen.getByRole('menu')).toBeVisible();
    expect(screen.queryByRole('menuitem')).not.toBeInTheDocument();
  });
});
