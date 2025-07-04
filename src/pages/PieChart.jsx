import { lazy } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Pie = lazy(() => import("../charts/Pie"));

const PieChart = () => {
  return (
    <Box m={2}>
      <Typography variant="h3">Pie Chart</Typography>
      <Box height="75vh" >
        <Pie />
      </Box>
    </Box>
  );
};

export default PieChart;