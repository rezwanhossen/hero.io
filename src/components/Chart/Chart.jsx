import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ ratings }) => {
  const reversedData = [...ratings].reverse();
  return (
    <div>
      <div className=" p-10 w-full h-70">
        <h3 style={{ marginBottom: "20px", fontFamily: "sans-serif" }}>
          Ratings
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={reversedData}
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis
              type="number"
              hide={false}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 14 }}
            />

            <Tooltip cursor={{ fill: "transparent" }} />

            <Bar
              dataKey="count"
              fill="#ff8c1a"
              barSize={25}
              radius={[0, 2, 2, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
