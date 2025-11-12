interface NamedEntity {
  name: string;
  type: "Organization" | "Person" | "Credential" | "Location" | "Email";
  count: number;
}

interface NamedEntitiesListProps {
  data: NamedEntity[];
}

function getTypeBadgeColor(type: string): string {
  switch (type) {
    case "Organization":
      return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400";
    case "Person":
      return "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400";
    case "Credential":
      return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400";
    case "Location":
      return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400";
    case "Email":
      return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export function NamedEntitiesList({ data }: NamedEntitiesListProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Top Named Entities
        </h3>
      </div>

      <div className="space-y-3">
        {data.map((entity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-sm text-foreground font-medium truncate">
                {entity.name}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap ${getTypeBadgeColor(entity.type)}`}
              >
                {entity.type}
              </span>
            </div>
            <span className="text-sm font-semibold text-foreground ml-3">
              {entity.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
