import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface SessionVolumeChartProps {
  data: Array<{ date: string; sessions: number }>;
  stats: {
    peak: { value: number; date: string };
    average: number;
    growth: { value: string; trend: string };
  };
}

export function SessionVolumeChart({ data, stats }: SessionVolumeChartProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Session Volume Over Time
        </h3>
        <p className="text-sm text-muted-foreground">
          Daily session count for last 7 days
        </p>
      </div>

      <ChartContainer config={{}} className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />

            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />

            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Line
              type="monotone"
              dataKey="sessions"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ fill: "#2563eb", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-xs text-muted-foreground mb-1">Peak</div>
          <div className="text-lg font-bold text-foreground">
            {stats.peak.value}
          </div>
          <div className="text-xs text-muted-foreground">
            on {stats.peak.date}
          </div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-xs text-muted-foreground mb-1">Average</div>
          <div className="text-lg font-bold text-foreground">
            {stats.average}
          </div>
          <div className="text-xs text-muted-foreground">per day</div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <div className="text-xs text-muted-foreground mb-1">Growth</div>
          <div className="text-lg font-bold text-green-500">
            {stats.growth.value}
          </div>
          <div className="text-xs text-muted-foreground">
            {stats.growth.trend}
          </div>
        </div>
      </div>
    </div>
  );
}
