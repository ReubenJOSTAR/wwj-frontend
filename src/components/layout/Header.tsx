"use client";

interface HeaderProps {
  onClear: () => void;
  hasMessages: boolean;
}

export function Header({ onClear, hasMessages }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="header-cross">✝</span>
          <div>
            <span className="header-title">WalkWithJesus</span>
            <span className="header-tagline">Scripture-grounded guidance</span>
          </div>
        </div>

        {hasMessages && (
          <button
            onClick={onClear}
            className="clear-btn"
            type="button"
          >
            New conversation
          </button>
        )}
      </div>
    </header>
  );
}
