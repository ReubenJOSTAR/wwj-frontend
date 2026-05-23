"use client";

const PROMPTS = [
  "I feel overwhelmed with anxiety about my future",
  "I'm struggling with fear and don't know what to do",
  "I need strength to get through today",
  "I feel lost and need direction in life",
];

interface EmptyStateProps {
  onPrompt: (text: string) => void;
}

export function EmptyState({ onPrompt }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-cross">✝</div>
      <h2 className="empty-title">Walk With Jesus</h2>
      <p className="empty-subtitle">
        Share what&apos;s on your heart. Receive scripture-grounded guidance
        and compassionate encouragement.
      </p>

      <div className="prompt-grid">
        {PROMPTS.map((p) => (
          <button
            key={p}
            className="prompt-chip"
            onClick={() => onPrompt(p)}
            type="button"
          >
            &ldquo;{p}&rdquo;
          </button>
        ))}
      </div>
    </div>
  );
}
