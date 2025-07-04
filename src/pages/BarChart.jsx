import { lazy } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Bar = lazy(() => import("../charts/Bar"));

const BarChart = () => {
  return (
    <Box m={2}>
      <Typography variant="h3"> Bar Chart </Typography>
      <Box height="75vh">
        <Bar />
      </Box>
    </Box>
  );
};

export default BarChart;