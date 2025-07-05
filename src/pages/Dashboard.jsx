import { lazy } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { palette } from "../theme";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatTiles from '../components/StatTiles';
import { stats, transactions } from '../constants/dashboardConst';
const Line = lazy(() => import("../charts/Line"));
const Bar = lazy(() => import("../charts/Bar"));
const Pie = lazy(() => import("../charts/Pie"));
const GeoMap = lazy(() => import("../charts/GeoMap"));

const Dashboard = () => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    return (
        <Box m={2}>
            <Box my={3} display="flex" 
                justifyContent={{xs:"flex-start", sm:"space-between"}} 
                alignItems={{xs:"flex-start", sm:"center"}}
                flexDirection={{xs: 'column', sm:"row"}} 
            >
                <>
                    <Typography variant='h3'>Dashboard</Typography>
                    <Button aria-label='download all reports' 
                        sx={{ 
                            backgroundColor: colors.blue[300], 
                            color: colors.grey[100], 
                            padding: "8px 16px",
                            [theme.breakpoints.down('sm')]: {
                                padding: "4px",
                                mt: 1
                            }
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: 1 }} />
                        Download Reports
                    </Button>
                </>
            </Box>

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows={150} gap={2}>
                {/* FIRST ROW */}
                {stats.map((stat, idx) => (
                    <Box
                        key={idx}
                        gridColumn={{xs:"span 12", sm:"span 6", lg: "span 3"}}
                        backgroundColor={colors.blue[200]}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ borderRadius: 1, boxShadow: `2px 2px 5px 0px ${colors.extra.shadow}` }}
                    >
                        <StatTiles
                            icon={stat.icon}
                            title={stat.title}
                            total={stat.total}
                            subtitle={stat.subtitle}
                            increase={stat.increase}
                            decrease={stat.decrease}
                        />
                    </Box>
                ))}

                {/* SECOND ROW - REVENUE CHART BOX */}
                <Box gridColumn={{xs:"span 12", lg: "span 8"}} gridRow="span 2"
                    sx={{
                        borderRadius: 1,
                        boxShadow: `2px 2px 5px 0px ${colors.extra.shadow}`,
                        backgroundColor: colors.blue[200],
                        p: 2,
                        display: { xs: 'none', md: 'block' }
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="start">
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h5" color={colors.accent[300]}>
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight={400}
                                color={colors.grey[100]}
                                mt="4px"
                            >
                                $ 105,788
                            </Typography>
                        </Box>
                        <IconButton aria-label='download revenue generated report'>
                            <DownloadOutlinedIcon />
                        </IconButton>
                    </Box>
                    <Box height="270px" width="110%" mt={-3}>
                        <Line isDashboard={true} />
                    </Box>
                </Box>

                {/* SECOND ROW - TRANSACTIONS */}
                <Box
                    gridColumn={{xs:"span 12", lg: "span 4"}}
                    gridRow="span 2"
                    sx={{
                        borderRadius: 1,
                        boxShadow: `2px 2px 5px 0px ${colors.extra.shadow}`,
                        backgroundColor: colors.blue[200],
                        pt: 2,
                        overflow: "auto"
                    }}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.blue[50]}`}
                        colors={colors.grey[100]}
                        px={3} pb={1}
                    >
                        <Typography color={colors.accent[300]} variant="h5">
                            Recent Transactions
                        </Typography>
                        <Typography sx={{ textDecoration: "underline", fontStyle: "italic", fontSize: 12, cursor: "pointer" }}>
                            See all transactions
                        </Typography>
                    </Box>
                    {transactions.map((data) => (
                        <Box
                            key={data.id}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.blue[50]}`}
                            px={3} py={1}
                        >
                            <Box>
                                <Typography
                                    color={colors.accent[700]}
                                    variant="h6"
                                    fontWeight="300"
                                >
                                    {data.name}
                                </Typography>
                                <Typography color={colors.grey[400]} fontSize={12} >
                                    {data.time}
                                </Typography>
                            </Box>
                            <Chip
                                label={data.type}
                                variant="outlined"
                                sx={{ color: colors.extra[data.color], border: `1px solid ${colors.extra[data.color]}` }}
                            />
                            <Typography color={colors.grey[100]}>
                                {data.value}
                            </Typography>
                        </Box>))}
                </Box>

                {/* THIRD ROW - SALES BY PRODUCT */}
                <Box
                    gridColumn={{xs:"span 12",md:"span 6", lg: "span 4"}}
                    gridRow="span 2"
                    sx={{
                        borderRadius: 1,
                        boxShadow: `2px 2px 5px 0px ${colors.extra.shadow}`,
                        backgroundColor: colors.blue[200],
                        p: 2
                    }}>
                    <Typography variant="h5" color={colors.accent[300]}>
                        Sales By Product
                    </Typography>
                    <Box height="300px" width="100%">
                        <Pie isDashboard={true} />
                    </Box>
                </Box>

                {/* THIRD ROW - SALES QUANTITY */}
                <Box
                    gridColumn={{xs:"span 12", md:"span 6", lg: "span 4"}}
                    gridRow="span 2"
                    sx={{
                        borderRadius: 1,
                        boxShadow: `2px 2px 5px 0px ${colors.extra.shadow}`,
                        backgroundColor: colors.blue[200],
                        p: 2
                    }}>
                    <Typography variant="h5" color={colors.accent[300]}>
                        Sales By Region
                    </Typography>
                    
                    <Box height="280px" width="100%" mt={-3}>
                        <GeoMap isDashboard={true} />
                    </Box>
                </Box>

                {/* THIRD ROW - SALES BY REGION */}
                <Box
                    gridColumn={{xs:"span 12", lg: "span 4"}}
                    gridRow="span 2"
                    sx={{
                        borderRadius: 1,
                        boxShadow: `2px 2px 5px 0px ${colors.extra.shadow}`,
                        backgroundColor: colors.blue[200],
                        p: 2
                    }}>
                    <Typography variant="h5" color={colors.accent[300]}>
                        Sales Quantity
                    </Typography>
                    <Box height="270px" width={{xs:"130%", sm:"110%", lg:"130%"}} mt={-1}>
                        <Bar isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;