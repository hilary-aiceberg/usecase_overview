interface ProfileAssignment {
  eventType: string;
  assignedProfile: string;
  eventsProcessed: number;
}

interface ProfileAssignmentTableProps {
  data: ProfileAssignment[];
}

export function ProfileAssignmentTable({ data }: ProfileAssignmentTableProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Profile Assignment
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Event Type
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Assigned Profile
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">
                Events Processed
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-muted/30" : "bg-transparent"}
              >
                <td className="py-3 px-4 text-sm text-foreground">
                  {row.eventType}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground font-mono">
                  {row.assignedProfile}
                </td>
                <td className="py-3 px-4 text-sm text-foreground text-right font-semibold">
                  {row.eventsProcessed.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
