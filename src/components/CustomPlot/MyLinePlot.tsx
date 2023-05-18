import { useContext } from "react";
import { ThemeContext, getTheme } from "../../Theme";
import { CustomPlot } from "./CustomPlot";

export function MyLinePlot() {
  // use axios get generic method to get data and display in this custom component
  // you can create other components like this one in case you need a custom behavior 
  const { mode } = useContext(ThemeContext);

  return (
    <CustomPlot
      data={[
        {
          x: ['JAN', 'FEV','MAR','APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          y: [100,70,90,70,85,60,80,60,90,85,110,100],
          type: "scatter",
          mode: "lines+markers",
          line:{
            shape: 'spline',
          },
          marker: { color: getTheme(mode).palette.primary.main },
          fill: 'tozeroy'
        },
      ]}
      title="Performance"
      subtitle="Total shipment"
      displayModeBar
    ></CustomPlot>
  );
}
