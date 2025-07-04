import { lazy } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const GeoMap = lazy(() => import("../charts/GeoMap"));

const GeoChart = () => {
  return (
    <Box m={2}>
      <Typography variant="h3">Geography Chart</Typography>
      <Box height="75vh" mt={4}>
        <GeoMap />
      </Box>
    </Box>
  );
};

export default GeoChart;