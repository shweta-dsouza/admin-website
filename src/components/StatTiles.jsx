import { useTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { palette } from "../theme";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

const StatTiles = ({ icon, title, total, subtitle, increase, decrease }) => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    return (
        <Box width="100%" sx={{ my: 1, mx: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Typography
                    variant="h5"
                    sx={{ color: colors.accent[300] }}
                >
                    {title}
                </Typography>
                {icon}

            </Box>
            <Typography
                variant="h2"
                fontWeight={300}
                sx={{ color: colors.grey[100], mt: 1 }}
            >
                {total}
            </Typography>

            <Typography fontWeight={300} fontStyle="italic" sx={{ color: colors.accent[700] }}>
                {subtitle}
            </Typography>

            <Box display="flex" justifyContent="start" alignItems="center" mt={1}>
                {increase ?
                    <>
                        <TrendingUpOutlinedIcon sx={{ color: colors.extra.success }} />
                        <Typography sx={{ fontSize: 12, ml: 1, color: colors.extra.success }}> {increase} % </Typography>
                    </>
                    :
                    <>
                        <TrendingDownOutlinedIcon sx={{ color: "red" }} />
                        <Typography sx={{ fontSize: 12, ml: 1, color: "red" }}> {decrease} % </Typography>
                    </>
                }
            </Box>

        </Box>
    )
}

export default StatTiles; 