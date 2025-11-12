interface SessionAutonomyScoreProps {
  score: number;
  autonomous: number;
  userDirected: number;
  averageActions: number;
}

export function SessionAutonomyScore({
  score,
  autonomous,
  userDirected,
  averageActions,
}: SessionAutonomyScoreProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-1">
        Session Autonomy Score
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        How independently agents operate
      </p>

      {/* Score */}
      <div className="mb-4">
        <div className="text-5xl font-bold text-foreground mb-2">{score}%</div>
        <div className="text-sm text-muted-foreground">
          {autonomous.toLocaleString()} autonomous |{" "}
          {userDirected.toLocaleString()} user-directed
        </div>
      </div>

      {/* Stacked Bar */}
      <div className="mb-3">
        <div className="flex items-center h-8 rounded-md overflow-hidden border border-border">
          <div
            className="h-full bg-blue-500 flex items-center justify-center"
            style={{ width: `${score}%` }}
          >
            <span className="text-xs font-medium text-white px-2">
              Agent-driven
            </span>
          </div>
          <div
            className="h-full bg-muted"
            style={{ width: `${100 - score}%` }}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
        <span>0% (Supervised)</span>
        <span>50% (Collaborative)</span>
        <span>100% (Autonomous)</span>
      </div>

      {/* Description */}
      <div className="text-sm text-muted-foreground leading-relaxed">
        Higher scores mean agents handle more work independently. Scores &gt;70%
        indicate mature agentic workflows. Agents chain avg {averageActions}{" "}
        actions before human input.
      </div>
    </div>
  );
}
