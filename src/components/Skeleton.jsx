import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { palette } from "../theme";

const SkeletonLoader = () => {
  const theme = useTheme();
  const colors = palette(theme.palette.mode);

  return (
    <Stack p={4} spacing={2} sx={{ backgroundColor: colors.blue[50] }} width={window.innerWidth} height={window.innerHeight}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '2rem', backgroundColor: colors.blue[200] }} width={"90vw"} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={90} height={90} sx={{ backgroundColor: colors.blue[200] }} />
      <Skeleton variant="rectangular" width={"90vw"} height={60} sx={{ backgroundColor: colors.blue[200] }} />
      <Skeleton variant="rectangular" width={"90vw"} height={60} sx={{ backgroundColor: colors.blue[200] }} />
      <Skeleton variant="rectangular" width={"90vw"} height={60} sx={{ backgroundColor: colors.blue[200] }} />
      <Skeleton variant="rectangular" width={"90vw"} height={60} sx={{ backgroundColor: colors.blue[200] }} />
    </Stack>
  );
}

export default SkeletonLoader;