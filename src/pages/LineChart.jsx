import { lazy } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Line = lazy(() => import("../charts/Line"));

const LineChart = () => {
  return (
    <Box m={2}>
      <Typography variant="h3">Line Chart</Typography>
      <Box height="75vh">
        <Line />
      </Box>
    </Box>
  );
};

export default LineChart;