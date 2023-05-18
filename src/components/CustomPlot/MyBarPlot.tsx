import { CustomPlot } from "./CustomPlot";

export function MyBarPlot() {
  return (
    <CustomPlot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "bar",
          mode: "lines+markers",
          marker: { color: "#0079fa" },
          opacity: 0.5
        },
      ]}
      title="My Bar Plot"
      subtitle="my subtitle"
    ></CustomPlot>
  );
}
