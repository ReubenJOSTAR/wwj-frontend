"use client";

import type { Scripture } from "@/types";

interface ScriptureCardProps {
  scripture: Scripture;
  index: number;
}

export function ScriptureCard({ scripture, index }: ScriptureCardProps) {
  return (
    <div
      className="scripture-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="scripture-card-header">
        <span className="scripture-reference">{scripture.reference}</span>
        {scripture.feeling && (
          <span className="scripture-tag">{scripture.feeling}</span>
        )}
      </div>

      {/* Show the actual verse text if the content contains "Verse:" */}
      <p className="scripture-content">
        {extractVerseText(scripture.content)}
      </p>

      <div className="scripture-score">
        <span className="score-bar-wrap">
          <span
            className="score-bar-fill"
            style={{ width: `${Math.round(scripture.similarity_score * 100)}%` }}
          />
        </span>
        <span className="score-label">
          {Math.round(scripture.similarity_score * 100)}% match
        </span>
      </div>
    </div>
  );
}

// Extracts just the verse text from the rich embedding content block
function extractVerseText(content: string): string {
  const verseMatch = content.match(/Verse:\s*([\s\S]*?)(?:\n\n|Emotional Keywords:|$)/);
  if (verseMatch) return verseMatch[1].trim();
  // Fallback: return first 200 chars
  return content.slice(0, 200).trim();
}
