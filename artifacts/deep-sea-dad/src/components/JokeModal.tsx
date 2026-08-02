import { useEffect, useRef, useCallback } from "react";

interface JokeModalProps {
  isOpen: boolean;
  joke: string;
  onClose: () => void;
}

export default function JokeModal({ isOpen, joke, onClose }: JokeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-ocean/75 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Dad's fishing joke"
    >
      <div
        ref={modalRef}
        className="bg-canvas rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl animate-scale-in"
      >
        <div className="text-6xl mb-6">{"\uD83C\uDFA3"}</div>
        <p className="text-2xl text-ocean font-display leading-relaxed mb-8">{joke}</p>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="px-8 py-3 bg-sunset text-white rounded-2xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-sunset focus-visible:outline-offset-2"
        >
          Back to the dock {"\u2192"}
        </button>
      </div>
    </div>
  );
}
