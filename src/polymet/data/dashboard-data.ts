export interface MetricData {
  value: number | string;
  label: string;
  change: string;
  changeType: "positive" | "negative" | "negative-up";
}

export interface SessionVolumeData {
  date: string;
  sessions: number;
}

export interface PolicyData {
  successRate: number;
  succeeded: number;
  failed: number;
  failures: Array<{
    type: string;
    count: number;
  }>;
}

export interface SignalCategory {
  name: string;
  value: number;
  color: string;
}

export interface RadarData {
  category: string;
  value: number;
}

export interface ProfileAssignment {
  eventType: string;
  assignedProfile: string;
  eventsProcessed: number;
}

export interface ToolInvocation {
  toolName: string;
  count: number;
  successRate: number;
}

export interface NamedEntity {
  name: string;
  type: "Organization" | "Person" | "Credential" | "Location" | "Email";
  count: number;
}

export interface EventType {
  type: string;
  count: number;
  percentage: number;
}

export interface EventChain {
  chain: string[];
  description: string;
}

export interface AgentDistribution {
  range: string;
  percentage: number;
}

export interface AgentStats {
  uniqueAgentsPerSession: number;
  peakConcurrentAgents: number;
  agentHandoffs: number;
}

export interface AutonomyScore {
  score: number;
  autonomous: number;
  userDirected: number;
  averageActions: number;
}

export const topMetrics: MetricData[] = [
  {
    label: "Sessions",
    value: "4,847",
    change: "+18%",
    changeType: "positive",
  },
  {
    label: "Success Rate",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive",
  },
  {
    label: "Unique Users",
    value: "3,247",
    change: "+12%",
    changeType: "positive",
  },
  {
    label: "Alerts Sent",
    value: 89,
    change: "+15%",
    changeType: "negative-up",
  },
];

export const sessionVolumeData: SessionVolumeData[] = [
  { date: "Nov 4", sessions: 680 },
  { date: "Nov 5", sessions: 720 },
  { date: "Nov 6", sessions: 650 },
  { date: "Nov 7", sessions: 750 },
  { date: "Nov 8", sessions: 710 },
  { date: "Nov 9", sessions: 780 },
  { date: "Nov 10", sessions: 847 },
];

export const sessionStats = {
  peak: { value: 780, date: "Nov 9" },
  average: 734,
  growth: { value: "+18%", trend: "week over week" },
};

export const policyData: PolicyData = {
  successRate: 94.2,
  succeeded: 4847,
  failed: 292,
  failures: [
    { type: "Tool execution timeout", count: 87 },
    { type: "External API unavailable", count: 64 },
    { type: "Agent loop exceeded", count: 42 },
    { type: "User cancelled", count: 58 },
    { type: "Safety intervention", count: 41 },
  ],
};

export const signalCategories: SignalCategory[] = [
  { name: "Information", value: 89, color: "#5eead4" },
  { name: "Safety", value: 72, color: "#3b82f6" },
  { name: "Security", value: 95, color: "#ef4444" },
];

export const signalStatus = [
  { text: "✓ Listen mode active", status: "success" },
  { text: "3 profiles in use", status: "info" },
  { text: "Enforcement: Mixed", status: "warning" },
];

export const radarData: RadarData[] = [
  { category: "Code present", value: 8 },
  { category: "Code requested", value: 12 },
  { category: "Illegality", value: 10 },
  { category: "PII/PHI/PCI", value: 4 },
  { category: "Secrets", value: 3 },
  { category: "Toxicity", value: 5 },
];

export const profileAssignments: ProfileAssignment[] = [
  {
    eventType: "User to Agent",
    assignedProfile: "Customer_Support_Strict",
    eventsProcessed: 2847,
  },
  {
    eventType: "Agent to LLM",
    assignedProfile: "Agent_Reasoning_Standard",
    eventsProcessed: 5234,
  },
  {
    eventType: "Agent to Tool",
    assignedProfile: "Tool_Access_Permissive",
    eventsProcessed: 3891,
  },
  {
    eventType: "Planning Step",
    assignedProfile: "Planning_Monitor",
    eventsProcessed: 571,
  },
];

export const toolInvocations: ToolInvocation[] = [
  { toolName: "web_search", count: 8234, successRate: 95.3 },
  { toolName: "code_executor", count: 3891, successRate: 92.4 },
  { toolName: "file_reader", count: 3204, successRate: 98.1 },
  { toolName: "database_query", count: 2876, successRate: 94.7 },
  { toolName: "api_caller", count: 2543, successRate: 89.3 },
  { toolName: "image_analyzer", count: 1987, successRate: 91.2 },
  { toolName: "text_summarizer", count: 1654, successRate: 97.5 },
  { toolName: "data_transformer", count: 1432, successRate: 93.8 },
  { toolName: "email_sender", count: 1209, successRate: 95.6 },
  { toolName: "calendar_manager", count: 987, successRate: 96.2 },
];

export const toolDistribution = {
  mcp: 45,
  api: 35,
  dataSource: 20,
};

export const namedEntities: NamedEntity[] = [
  { name: "AWS", type: "Organization", count: 342 },
  { name: "John Smith", type: "Person", count: 287 },
  { name: "api_key_prod", type: "Credential", count: 234 },
  { name: "New York", type: "Location", count: 198 },
  { name: "OpenAI", type: "Organization", count: 176 },
  { name: "admin@example.com", type: "Email", count: 165 },
  { name: "Google Cloud", type: "Organization", count: 143 },
  { name: "Sarah Johnson", type: "Person", count: 128 },
  { name: "database_password", type: "Credential", count: 112 },
  { name: "London", type: "Location", count: 98 },
];

export const totalEvents = 21090;

export const eventTypes: EventType[] = [
  { type: "User to Agent", count: 2847, percentage: 13.5 },
  { type: "User to LLM", count: 1923, percentage: 9.1 },
  { type: "Agent to LLM", count: 8581, percentage: 40.7 },
  { type: "Agent to Tool", count: 4523, percentage: 21.4 },
  { type: "Agent to Agent", count: 1876, percentage: 8.9 },
  { type: "Agent to Memory", count: 1340, percentage: 6.4 },
];

export const eventChains: EventChain[] = [
  {
    chain: ["user_agent", "agent_llm", "agent_tool", "agent_llm"],
    description: "standard execution: 412 sessions (32%)",
  },
  {
    chain: ["user_agent", "agent_llm", "agent_llm", "agent_tool"],
    description: "planning-first approach: 287 sessions (22%)",
  },
  {
    chain: ["user_agent", "agent_llm"],
    description: "simple responses: 178 sessions (14%)",
  },
];

export const agentDistribution: AgentDistribution[] = [
  { range: "1 agent", percentage: 25 },
  { range: "2-3 agents", percentage: 45 },
  { range: "4-5 agents", percentage: 22 },
  { range: "6+ agents", percentage: 8 },
];

export const agentStats: AgentStats = {
  uniqueAgentsPerSession: 3.2,
  peakConcurrentAgents: 5,
  agentHandoffs: 147,
};

export const autonomyScore: AutonomyScore = {
  score: 76,
  autonomous: 3847,
  userDirected: 1234,
  averageActions: 8.2,
};
