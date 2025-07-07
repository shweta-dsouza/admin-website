import { render, screen } from '../test-utils'; 
import StatTiles from '../src/components/StatTiles';

describe('StatTiles component', () => {
  const baseProps = {
    icon: <span data-testid="mock-icon">📊</span>,
    title: 'Revenue',
    total: '$12,000',
    subtitle: 'Since last month',
  };

  const renderStatTiles = (props = {}) =>
    render(<StatTiles {...baseProps} {...props} />);

  test('renders with increase data', () => {
    renderStatTiles({ increase: 12 });

    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('$12,000')).toBeInTheDocument();
    expect(screen.getByText('Since last month')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();

    // Check increase value
    expect(screen.getByText(/12 %/)).toBeInTheDocument();

    // Check that TrendingUp icon is in the document
    expect(screen.getByTestId('TrendingUpOutlinedIcon')).toBeInTheDocument();
  });

  test('renders with decrease data', () => {
    renderStatTiles({ decrease: 7 });

    expect(screen.getByText(/7 %/)).toBeInTheDocument();
    expect(screen.getByTestId('TrendingDownOutlinedIcon')).toBeInTheDocument();
  });
});
