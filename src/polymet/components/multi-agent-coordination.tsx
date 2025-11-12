interface AgentDistribution {
  range: string;
  percentage: number;
}

interface AgentStats {
  uniqueAgentsPerSession: number;
  peakConcurrentAgents: number;
  agentHandoffs: number;
}

interface MultiAgentCoordinationProps {
  distribution: AgentDistribution[];
  stats: AgentStats;
}

export function MultiAgentCoordination({
  distribution,
  stats,
}: MultiAgentCoordinationProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-1">
        Multi-Agent Coordination
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Agent interaction and collaboration
      </p>

      {/* Agents per Session Table */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-4">
          Agents per Session
        </h4>
        <div className="space-y-3">
          {distribution.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground">{item.range}</span>
                <span className="text-muted-foreground">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-muted/30 rounded-lg p-3">
          <div className="text-2xl font-bold text-foreground">
            {stats.uniqueAgentsPerSession}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Unique Agents per Session
          </div>
        </div>
        <div className="bg-muted/30 rounded-lg p-3">
          <div className="text-2xl font-bold text-foreground">
            {stats.peakConcurrentAgents}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Peak Concurrent Agents
          </div>
        </div>
        <div className="bg-muted/30 rounded-lg p-3">
          <div className="text-2xl font-bold text-foreground">
            {stats.agentHandoffs}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Agent Handoffs
          </div>
        </div>
      </div>
    </div>
  );
}
