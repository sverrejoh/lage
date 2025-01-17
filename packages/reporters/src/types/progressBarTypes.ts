import type { LogEntry } from "@lage-run/logger";
import type { SchedulerRunSummary } from "@lage-run/scheduler-types";

export interface Progress {
  waiting: number;
  completed: number;
  total: number;
}

export interface ThreadInfo {
  [threadId: string]: string;
}

export interface SummaryWithLogs {
  schedulerRunSummary: SchedulerRunSummary;
  logEntries: Map<string, LogEntry[]>;
}
