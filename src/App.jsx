import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeMode, ColorContext } from "./theme";
import Topbar from "./components/TopBar";
import SideBar from "./components/SideBar";
import SkeletonLoader from "./components/Skeleton";

const App = () => {
  const client = new QueryClient();
  const [theme, themeMode] = useThemeMode();
  const [sideBar, setSideBar] = useState(true);

  return (
    <ColorContext.Provider value={themeMode}>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBar />
            <main className="content">
              <Topbar setSideBar={setSideBar} />
              <Suspense fallback={<SkeletonLoader />}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </ColorContext.Provider>
  )
}

export default App
