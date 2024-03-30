import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieActiveArc({ userData }) {
  // Check if userData exists and has expenses array before mapping
  const data =
    userData?.[0]?.expenses?.map((item, index) => ({
      id: index,
      value: item.amount,
      label: item.source,
    })) || [];
  return (
    <div>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
    </div>
  );
}
