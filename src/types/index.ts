// ─────────────────────────────────────────────
// API Types — mirror your FastAPI response exactly
// ─────────────────────────────────────────────

export interface Scripture {
  reference: string;
  feeling?: string;
  categories?: string[];
  content: string;
  similarity_score: number;
}

export interface ChatRequest {
  query: string;
  feeling_filter?: string;
}

export interface ChatResponse {
  query: string;
  feeling_filter?: string;
  scriptures: Scripture[];
  response: string;
}

// ─────────────────────────────────────────────
// UI Types — internal chat state
// ─────────────────────────────────────────────

export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  scriptures?: Scripture[];   // only on assistant messages
  timestamp: Date;
  isLoading?: boolean;        // skeleton state while streaming
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}
