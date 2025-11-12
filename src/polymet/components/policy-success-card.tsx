interface PolicySuccessCardProps {
  successRate: number;
  succeeded: number;
  failed: number;
  failures: Array<{
    type: string;
    count: number;
  }>;
}

export function PolicySuccessCard({
  successRate,
  succeeded,
  failed,
  failures,
}: PolicySuccessCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Success Rate Detail
        </h3>
        <p className="text-sm text-muted-foreground">
          Why sessions don't complete successfully
        </p>
      </div>

      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-green-600 dark:text-green-500 mb-3">
          {successRate}%
        </div>
        <p className="text-sm text-muted-foreground">
          {succeeded.toLocaleString()} succeeded • {failed.toLocaleString()}{" "}
          failed
        </p>
      </div>

      <div className="space-y-3">
        {failures.map((failure, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
          >
            <span className="text-sm text-foreground">{failure.type}</span>
            <span className="text-sm font-semibold text-red-600 dark:text-red-500">
              {failure.count} failures
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
