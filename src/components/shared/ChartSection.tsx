import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useTheme } from 'next-themes';
// helper
import { data } from "@/lib/helper";
import { CustomTooltip } from "./CustomToolTip";

export default function ChartSection() {
  const { theme } = useTheme();

  const lineColor = theme === 'dark' ? '#ffffff' : '#113b47';
  return (
    <div className="bg-card-foreground p-6 rounded-2xl">
      <h2 className="text-foreground mb-4 text-base font-semibold">
        Monthly Earnings
      </h2>

      <ResponsiveContainer width="100%" height={230}>
        <LineChart
          width={500}
          height={230}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="text-base" />
          <YAxis className="text-base" />
          <Tooltip
            content={<CustomTooltip/>}
          />
          <Line
            connectNulls
            type="monotone"
            dataKey="earnings"
            stroke={lineColor}
            fill={lineColor}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
