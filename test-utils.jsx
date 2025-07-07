import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorContext, useThemeMode } from './src/theme';
import '@testing-library/jest-dom'; // adds custom jest matchers
import { afterEach } from 'vitest';

// Optional: Automatically clean up after each test
afterEach(() => {
  cleanup();
});

// Custom wrapper to include all context providers
const AllProviders = ({ children }) => {
  const client = new QueryClient();
  const [theme, themeMode] = useThemeMode();

  return (
    <ColorContext.Provider value={themeMode}>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ColorContext.Provider>
  );
};

// Custom render method that wraps components with the above
const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

// Re-export everything from RTL
export * from '@testing-library/react';

// Override render with custom one
export { customRender as render };
