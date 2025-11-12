interface EventType {
  type: string;
  count: number;
  percentage: number;
}

interface EventTypeDistributionProps {
  totalEvents: number;
  events: EventType[];
}

const eventColors = [
  "#3b82f6", // blue
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#f59e0b", // amber
  "#10b981", // emerald
  "#06b6d4", // cyan
];

export function EventTypeDistribution({
  totalEvents,
  events,
}: EventTypeDistributionProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Event Type Distribution
      </h3>

      <div className="mb-6">
        <div className="text-4xl font-bold text-foreground">
          {totalEvents.toLocaleString()}
        </div>
        <div className="text-sm text-muted-foreground mt-1">Total Events</div>
      </div>

      <div className="space-y-0">
        {/* Header Row */}
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 pb-3 border-b border-border">
          <div className="text-sm font-medium text-muted-foreground">
            Event Type
          </div>
          <div className="text-sm font-medium text-muted-foreground text-right">
            Count
          </div>
          <div className="text-sm font-medium text-muted-foreground text-right">
            Percentage
          </div>
        </div>

        {/* Data Rows */}
        {events.map((event, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr,1fr,1fr] gap-4 py-3 border-b border-border last:border-b-0"
          >
            <div className="flex items-center gap-2 text-sm text-foreground">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: eventColors[index % eventColors.length],
                }}
              />

              {event.type}
            </div>
            <div className="text-sm text-foreground text-right font-medium">
              {event.count.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground text-right">
              {event.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
