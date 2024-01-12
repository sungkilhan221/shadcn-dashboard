"use client";

import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

type Props = {};

const data = [
  { name: "Jan", total: 1400 },
  { name: "Feb", total: 5000 },
  { name: "Mar", total: 7000 },
  { name: "Apr", total: 6000 },
  { name: "May", total: 1200 },
  { name: "Jun", total: 5000 },
  { name: "Jul", total: 8000 },
  { name: "Aug", total: 5000 },
  { name: "Sep", total: 9000 },
  { name: "Oct", total: 3000 },
  { name: "Nov", total: 7000 },
  { name: "Dec", total: 6000 },
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#88888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#88888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
