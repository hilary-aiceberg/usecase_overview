import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface RadarData {
  category: string;
  value: number;
}

interface TopSignalsRadarProps {
  data: RadarData[];
}

export function TopSignalsRadar({ data }: TopSignalsRadarProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Signal Distribution
        </h3>
      </div>

      <div className="flex gap-6">
        {/* Legend on the left */}
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-blue-500" />

            <span className="text-sm text-muted-foreground">Prompt</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-purple-500" />

            <span className="text-sm text-muted-foreground">Response</span>
          </div>
        </div>

        {/* Chart */}
        <ChartContainer config={{}} className="h-[300px] flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <PolarGrid stroke="hsl(var(--border))" />

              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }}
              />

              <PolarRadiusAxis
                angle={90}
                domain={[0, 15]}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
              />

              <Radar
                name="Prompt"
                dataKey="value"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
                strokeWidth={2}
              />

              <ChartTooltip content={<ChartTooltipContent />} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
