import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { BAR_DATA } from "../constants";
import { palette } from "../theme";

const Bar = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = palette(theme.palette.mode);

  return (
    <ResponsiveBar
      data={BAR_DATA}
      indexBy="country"
      padding={0.3}
      enableLabel={isDashboard ? false : true}
      enableGridY={isDashboard ? false : true}
      labelSkipWidth={4}
      labelSkipHeight={12}
      borderColor={{ from: 'color', modifiers: [["darker", "1.6"]] }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      legends={
        isDashboard ? undefined :
          [{
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 20,
            itemOpacity: 0.85,
            toggleSerie: true,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ]
          }
          ]}
      axisBottom={{ legend: 'Country', legendOffset: 40 }}
      axisLeft={{ legend: 'Food', legendOffset: -45, tickSize: 5, tickPadding: 5, tickValues: 5}}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      valueFormat=" >-$"
      role="application"
      ariaLabel="bar chart"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
      theme={{
        // added
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
            fill: colors.grey[400],
          },
        },
        tooltip: {
          container: {
            color: colors.blue[500]
          }
        },
        grid: {
          line: { 
            stroke: colors.grey[700],
            strokeOpacity: 0.8,
            strokeWidth: 0.5
          }
        }
      }}
    />
  )
}

export default Bar;