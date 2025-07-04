import { ResponsiveChoropleth } from '@nivo/geo';
import { useTheme } from "@mui/material";
import { palette } from "../theme";
import { GEO_DATA, GEO_FEATURES } from "../constants";

const GeoMap = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    return (
        <ResponsiveChoropleth
            data={GEO_DATA}
            features={GEO_FEATURES.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            fillColor="#eeeeee"
            colors="nivo"
            projectionScale={isDashboard ? 49 : 150}
            projectionTranslation={isDashboard ? [0.5, 0.65] : [0.5, 0.5]}
            domain={[0, 1000000]}
            unknownColor="#bcd38e"
            label="properties.name"
            valueFormat=".2s"
            enableGraticule={isDashboard ? false : true}
            graticuleLineColor={colors.grey[700]}
            borderWidth={0.5}
            borderColor="#152538"
            legends={
                !isDashboard
                    ? [
                        {
                            anchor: "bottom-left",
                            direction: "column",
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 22,
                            itemDirection: "left-to-right",
                            itemTextColor: colors.grey[400],
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemTextColor: colors.grey[300],
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]
                    : undefined
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

export default GeoMap;