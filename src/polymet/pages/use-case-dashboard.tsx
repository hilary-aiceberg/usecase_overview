import { DashboardHeader } from "@/polymet/components/dashboard-header";
import { MetricCard } from "@/polymet/components/metric-card";
import { SessionVolumeChart } from "@/polymet/components/session-volume-chart";
import { PolicySuccessCard } from "@/polymet/components/policy-success-card";
import { SignalsDoughnutChart } from "@/polymet/components/signals-doughnut-chart";
import { TopSignalsRadar } from "@/polymet/components/top-signals-radar";
import { EventTypeDistribution } from "@/polymet/components/event-type-distribution";
import { EventChainsList } from "@/polymet/components/event-chains-list";
import { ToolInvocationsTable } from "@/polymet/components/tool-invocations-table";
import { NamedEntitiesList } from "@/polymet/components/named-entities-list";
import { MultiAgentCoordination } from "@/polymet/components/multi-agent-coordination";
import { SessionAutonomyScore } from "@/polymet/components/session-autonomy-score";
import {
  topMetrics,
  sessionVolumeData,
  sessionStats,
  policyData,
  signalCategories,
  radarData,
  totalEvents,
  eventTypes,
  eventChains,
  toolInvocations,
  toolDistribution,
  namedEntities,
  agentDistribution,
  agentStats,
  autonomyScore,
} from "@/polymet/data/dashboard-data";

export function UseCaseDashboard() {
  return (
    <div className="min-h-screen bg-muted/20">
      <div className="max-w-[1600px] mx-auto p-6 space-y-5">
        {/* Header Section */}
        <DashboardHeader
          title="Customer Support Agent"
          subtitle="Multi-profile agentic workflow monitoring"
        />

        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {topMetrics.map((metric, index) => (
            <MetricCard
              key={index}
              label={metric.label}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
            />
          ))}
        </div>

        {/* Main Chart Row - 60/40 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3">
            <SessionVolumeChart data={sessionVolumeData} stats={sessionStats} />
          </div>
          <div className="lg:col-span-2">
            <PolicySuccessCard
              successRate={policyData.successRate}
              succeeded={policyData.succeeded}
              failed={policyData.failed}
              failures={policyData.failures}
            />
          </div>
        </div>

        {/* Risk Analysis Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SignalsDoughnutChart data={signalCategories} />

          <TopSignalsRadar data={radarData} />
        </div>

        {/* Event Analysis Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <EventTypeDistribution
            totalEvents={totalEvents}
            events={eventTypes}
          />

          <EventChainsList chains={eventChains} />
        </div>

        {/* Multi-Agent Coordination Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <MultiAgentCoordination
            distribution={agentDistribution}
            stats={agentStats}
          />

          <SessionAutonomyScore
            score={autonomyScore.score}
            autonomous={autonomyScore.autonomous}
            userDirected={autonomyScore.userDirected}
            averageActions={autonomyScore.averageActions}
          />
        </div>

        {/* Tool/Entity Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ToolInvocationsTable
            data={toolInvocations}
            distribution={toolDistribution}
          />

          <NamedEntitiesList data={namedEntities} />
        </div>
      </div>
    </div>
  );
}
