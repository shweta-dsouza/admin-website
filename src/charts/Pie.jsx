import { ResponsivePie } from '@nivo/pie'
import { useTheme } from "@mui/material";
import { palette } from "../theme";
import { PIE_DATA } from "../constants";

const Pie = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    return (
        <ResponsivePie
            data={PIE_DATA}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={1}
            cornerRadius={isDashboard ? 2 : 3}
            enableArcLabels={isDashboard ? false : true}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.grey[400]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 5]] }}
            animate={true}
            colors={{ scheme: 'tableau10' }}
            legends={
                isDashboard ? undefined :
                [{
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 20,
                    symbolShape: 'circle',
                    symbolSize: 18,
                    toggleSerie: true,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: colors.grey[300],
                            },
                        },
                    ],
                }]
            }
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[500],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[400],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[500],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[400],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
                tooltip: {
                    container: {
                        color: colors.blue[500],
                    },
                },
            }}
        />
    )
}

export default Pie;