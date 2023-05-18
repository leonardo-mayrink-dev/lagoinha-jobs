import { Data } from "plotly.js";
import Plot from "react-plotly.js";
import { ThemeContext, getTheme } from "../../Theme";
import { Box, Paper } from "@mui/material";
import { useContext } from "react";

type TCustomPlotProps = {
  data: Data[];
  title: string;
  subtitle: string;
  displayModeBar?: boolean;
};

export function CustomPlot(props: TCustomPlotProps) {
  const { mode } = useContext(ThemeContext);

  return (
    <Paper elevation={0} sx={{ borderRadius: 2 }}>
      <Box p={2}>
        <Plot
          data={props.data}
          layout={{
            title: {
              text: props.title,
              font: {
                size: 20,
                color: getTheme(mode).palette.primary.main,
              },
              xanchor: "left",
              xref: "paper",
              x: 0,
            },
            margin: {
              l: 48,
              t: 100,
              r: 24,
              b: 48,
            },
            hoverlabel: {
              font: {
                color: getTheme(mode).palette.primary.contrastText,
              },
            },
            paper_bgcolor: getTheme(mode).palette.background.paper,
            plot_bgcolor: getTheme(mode).palette.background.paper,

            xaxis: {
              tickfont: {
                color: getTheme(mode).palette.text.secondary
              }
            },
            yaxis: {
              tickfont: {
                color: getTheme(mode).palette.text.secondary
              }
            },
            autosize: true,

            annotations: [
              {
                xref: "paper",
                yref: "paper",
                xanchor: "left",
                x: 0,
                y: 1.15,
                showarrow: false,
                text: props.subtitle,
                font: {
                  color: getTheme(mode).palette.text.disabled,
                },
              },
            ],
          }}
          config={{
            responsive: true,
            autosizable: true,
            displayModeBar: props.displayModeBar,
          }}
          useResizeHandler={true}
          style={{ width: "100%", height: "300px" }}
        />
      </Box>
    </Paper>
  );
}
