"use client";

import { useState, useRef, useEffect } from "react";

interface ChatInputProps {
  onSend: (message: string, feelingFilter?: string) => void;
  isLoading: boolean;
}

const FEELING_OPTIONS = [
  "Anxiety", "Fear", "Hope", "Encouragement",
  "Guidance", "Strength", "Grief", "Gratitude",
];

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [feelingFilter, setFeelingFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as user types
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
  }, [value]);

  function handleSend() {
    if (!value.trim() || isLoading) return;
    onSend(value.trim(), feelingFilter || undefined);
    setValue("");
    setFeelingFilter("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Send on Enter, new line on Shift+Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="chat-input-wrap">

      {/* Feeling filter chips */}
      <div className={`filter-row ${showFilters ? "filter-row--open" : ""}`}>
        <button
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
          type="button"
        >
          {showFilters ? "Hide filters ↑" : "Filter by feeling ↓"}
        </button>

        {showFilters && (
          <div className="filter-chips">
            {FEELING_OPTIONS.map((f) => (
              <button
                key={f}
                type="button"
                className={`chip ${feelingFilter === f ? "chip--active" : ""}`}
                onClick={() => setFeelingFilter(feelingFilter === f ? "" : f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input row */}
      <div className="input-row">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Share what's on your heart…"
          disabled={isLoading}
          rows={1}
          className="chat-textarea"
        />
        <button
          onClick={handleSend}
          disabled={!value.trim() || isLoading}
          className="send-btn"
          type="button"
          aria-label="Send message"
        >
          {isLoading ? (
            <span className="send-spinner" />
          ) : (
            <SendIcon />
          )}
        </button>
      </div>

      <p className="input-hint">
        Press <kbd>Enter</kbd> to send · <kbd>Shift+Enter</kbd> for new line
      </p>
    </div>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
