import { ArrowRightIcon } from "lucide-react";

interface EventChain {
  chain: string[];
  description: string;
}

interface EventChainsListProps {
  chains: EventChain[];
}

const eventTypeColors: Record<string, string> = {
  user_agent: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
  agent_llm:
    "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
  agent_tool:
    "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300",
  agent_agent:
    "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300",
  user_llm: "bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300",
  agent_memory: "bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300",
};

export function EventChainsList({ chains }: EventChainsListProps) {
  const formatEventType = (type: string) => {
    return type.replace(/_/g, " ");
  };

  const getEventTypeColor = (type: string) => {
    return eventTypeColors[type] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Most Common Event Chains
      </h3>

      <div className="space-y-4">
        {chains.map((chain, index) => (
          <div key={index} className="p-4 bg-muted/30 rounded-lg space-y-2">
            {/* Event Chain */}
            <div className="flex items-center gap-2 flex-wrap">
              {chain.chain.map((event, eventIndex) => (
                <div key={eventIndex} className="flex items-center gap-2">
                  <div
                    className={`px-3 py-1.5 rounded-md ${getEventTypeColor(event)}`}
                  >
                    <span className="text-xs font-medium">
                      {formatEventType(event)}
                    </span>
                  </div>
                  {eventIndex < chain.chain.length - 1 && (
                    <ArrowRightIcon className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="text-xs text-muted-foreground pl-1">
              {chain.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
