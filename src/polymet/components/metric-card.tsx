import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: number | string;
  change: string;
  changeType: "positive" | "negative" | "negative-up";
}

export function MetricCard({
  label,
  value,
  change,
  changeType,
}: MetricCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="text-sm text-muted-foreground mb-2 text-center">
        {label}
      </div>
      <div className="text-3xl font-bold text-foreground mb-3 text-center">
        {value}
      </div>
      <div
        className={`flex items-center justify-center gap-1 text-sm ${
          changeType === "positive"
            ? "text-green-600 dark:text-green-500"
            : "text-red-600 dark:text-red-500"
        }`}
      >
        {changeType === "positive" ? (
          <TrendingUpIcon className="w-4 h-4" />
        ) : changeType === "negative-up" ? (
          <TrendingUpIcon className="w-4 h-4" />
        ) : (
          <TrendingDownIcon className="w-4 h-4" />
        )}
        <span>{change}</span>
      </div>
    </div>
  );
}
