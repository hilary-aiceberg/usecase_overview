import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface SignalCategory {
  name: string;
  value: number;
  color: string;
}

interface SignalsChartProps {
  data: SignalCategory[];
}

export function SignalsDoughnutChart({ data }: SignalsChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Risk Surface Coverage
        </h3>
        <p className="text-sm text-muted-foreground">
          Security categories active in this workflow
        </p>
      </div>

      <ChartContainer config={{}} className="h-[200px] w-full mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-sm text-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              {item.value}
            </span>
          </div>
        ))}

        {/* Code - Not monitored entry */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-muted-foreground/30" />

            <span className="text-sm text-foreground">Code</span>
          </div>
          <span className="text-sm text-muted-foreground/60">
            Not monitored
          </span>
        </div>
      </div>
    </div>
  );
}
