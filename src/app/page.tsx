"use client";

// WHY "use client":
// This page uses React hooks (useState, useRef) and browser events.
// Next.js App Router is server-first — we must opt into client rendering
// only where interactivity is needed. The layout and metadata stay server-rendered.

import { useChat } from "@/hooks/useChat";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { ChatInput } from "@/components/chat/ChatInput";
import { EmptyState } from "@/components/chat/EmptyState";
import { Header } from "@/components/layout/Header";

export default function ChatPage() {
  const { messages, isLoading, sendMessage, clearMessages, bottomRef } =
    useChat();

  const hasMessages = messages.length > 0;

  return (
    <div className="app-shell">
      <Header onClear={clearMessages} hasMessages={hasMessages} />

      <main className="chat-main">
        <div className="messages-container">
          {!hasMessages ? (
            <EmptyState onPrompt={(text) => sendMessage(text)} />
          ) : (
            <div className="messages-list">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
              {/* Invisible anchor for auto-scroll */}
              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </main>

      <footer className="chat-footer">
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
        <p className="footer-disclaimer">
          WalkWithJesus uses AI and may make mistakes.
          Not a substitute for pastoral care or professional support.
        </p>
      </footer>
    </div>
  );
}
