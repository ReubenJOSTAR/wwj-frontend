"use client";

// WHY a custom hook:
// The chat page component should only care about rendering.
// All state (messages, loading, errors), all side effects (API calls),
// and all business logic (building messages, scrolling) live here.
// This means you can reuse this hook on a mobile page, a modal, or a sidebar
// without touching any of the logic.

import { useState, useCallback, useRef } from "react";
import { sendChatMessage } from "@/lib/api";
import type { Message, ChatState } from "@/types";

function generateId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  // Ref for auto-scroll — doesn't cause re-renders when it changes
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = useCallback(() => {
    // requestAnimationFrame ensures the DOM has updated before we scroll
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  const sendMessage = useCallback(
    async (content: string, feelingFilter?: string) => {
      if (!content.trim() || state.isLoading) return;

      // 1. Add user message immediately (optimistic UI)
      const userMessage: Message = {
        id: generateId(),
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };

      // 2. Add assistant placeholder with loading state
      const loadingMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isLoading: true,
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage, loadingMessage],
        isLoading: true,
        error: null,
      }));

      scrollToBottom();

      try {
        const response = await sendChatMessage({
          query: content.trim(),
          feeling_filter: feelingFilter || undefined,
        });

        // 3. Replace loading placeholder with real response
        setState((prev) => ({
          ...prev,
          messages: prev.messages.map((msg) =>
            msg.isLoading
              ? {
                  ...msg,
                  content: response.response,
                  scriptures: response.scriptures,
                  isLoading: false,
                }
              : msg
          ),
          isLoading: false,
        }));
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Something went wrong.";

        // 4. Replace loading placeholder with error state
        setState((prev) => ({
          ...prev,
          messages: prev.messages.map((msg) =>
            msg.isLoading
              ? {
                  ...msg,
                  content:
                    "I'm sorry, I had trouble responding. Please try again.",
                  isLoading: false,
                }
              : msg
          ),
          isLoading: false,
          error: errorMsg,
        }));
      }

      scrollToBottom();
    },
    [state.isLoading, scrollToBottom]
  );

  const clearMessages = useCallback(() => {
    setState({ messages: [], isLoading: false, error: null });
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
    clearMessages,
    bottomRef,
  };
}
