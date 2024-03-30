import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function SimpleLineChart({ userData }) {
  const expense = userData?.[0]?.expenses?.map((item) => item.amount) || [];
  const income = userData?.[0]?.incomes.map((item) => item.amount) || [];

  const xLabels = [0, 2000, 4000, 6000, 8000, 10000, 12000]; // Example data

  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: income, label: "Income" },
        { data: expense, label: "Expense" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
