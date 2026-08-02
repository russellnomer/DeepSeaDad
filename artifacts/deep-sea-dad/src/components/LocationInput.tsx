import { useState, useRef, useEffect } from "react";

interface LocationInputProps {
  isOpen: boolean;
  onSubmit: (query: string) => void;
  onClose: () => void;
}

export default function LocationInput({ isOpen, onSubmit, onClose }: LocationInputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-ocean/75 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Enter your location"
    >
      <div className="bg-canvas rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
        <h3 className="font-display text-2xl text-ocean mb-2">Where are you fishing?</h3>
        <p className="text-ocean/60 text-sm mb-6">Enter a town, city, or ZIP code and I'll check the conditions there.</p>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. Tampa, FL or 33602"
            className="flex-1 px-4 py-3 rounded-xl border border-wood/20 bg-white text-ocean focus:outline-none focus:ring-2 focus:ring-sunset"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-sunset text-white rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Check
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-ocean/50 hover:text-ocean transition-colors w-full text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
