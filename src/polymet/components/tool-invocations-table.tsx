interface ToolInvocation {
  toolName: string;
  count: number;
  successRate: number;
}

interface ToolInvocationsTableProps {
  data: ToolInvocation[];
  distribution: {
    mcp: number;
    api: number;
    dataSource: number;
  };
}

function getSuccessRateColor(rate: number): string {
  if (rate >= 95) return "text-green-600 dark:text-green-500";
  if (rate >= 90) return "text-amber-600 dark:text-amber-500";
  return "text-orange-600 dark:text-orange-500";
}

export function ToolInvocationsTable({
  data,
  distribution,
}: ToolInvocationsTableProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Top Tool Invocations
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Tool Name
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">
                Count
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">
                Success Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="py-3 px-4 text-sm text-foreground font-mono">
                  {row.toolName}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground text-right">
                  {row.count.toLocaleString()}
                </td>
                <td
                  className={`py-3 px-4 text-sm text-right font-semibold ${getSuccessRateColor(row.successRate)}`}
                >
                  {row.successRate}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>MCP: {distribution.mcp}%</span>
          <span>•</span>
          <span>API: {distribution.api}%</span>
          <span>•</span>
          <span>Data Source: {distribution.dataSource}%</span>
        </div>
      </div>
    </div>
  );
}
