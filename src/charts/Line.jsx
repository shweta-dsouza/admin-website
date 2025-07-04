import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { palette } from "../theme";
import { LINE_DATA } from "../constants";

const Line = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    return (
        <ResponsiveLine
            data={LINE_DATA}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            xScale={{ type: "point" }}
            curve="cardinal"
            axisBottom={{ legend: 'Transportation', legendOffset: 36 }}
            axisLeft={{ legend: 'Count', legendOffset: -40, tickValues: 5, tickSize: 3, tickPadding: 5 }}
            enableGridX={false}
            enableGridY={false}
            pointSize={6}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'seriesColor' }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            colors={theme.palette.mode === "dark" ? { scheme: 'nivo' } : { scheme: 'category10' }}
            legends={
                isDashboard ? undefined :
                    [{
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle',
                        itemOpacity: 0.75,
                        toggleSerie: true,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1,
                                },
                            },
                        ]
                    }
                    ]}
            enableSlices="x"
            ariaLabel="line chart"
            pointAriaLabel={(point) => { point.id + ":" + point.data.x + "transport count is" + point.data.y }}
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

export default Line;