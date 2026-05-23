"use client";

import { ScriptureCard } from "./ScriptureCard";
import type { Message } from "@/types";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="message-row message-row--user">
        <div className="bubble bubble--user">
          <p>{message.content}</p>
        </div>
      </div>
    );
  }

  // Assistant message
  return (
    <div className="message-row message-row--assistant">
      <div className="assistant-avatar">✝</div>

      <div className="assistant-content">
        {/* Loading skeleton */}
        {message.isLoading ? (
          <div className="bubble bubble--assistant bubble--loading">
            <div className="loading-dots">
              <span /><span /><span />
            </div>
          </div>
        ) : (
          <>
            <div className="bubble bubble--assistant">
              {/* Render response with paragraph breaks */}
              {message.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Scripture cards — only shown when scriptures are present */}
            {message.scriptures && message.scriptures.length > 0 && (
              <div className="scripture-section">
                <p className="scripture-section-label">
                  <span>📖</span> Retrieved Scriptures
                </p>
                <div className="scripture-grid">
                  {message.scriptures.map((s, i) => (
                    <ScriptureCard key={s.reference} scripture={s} index={i} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
