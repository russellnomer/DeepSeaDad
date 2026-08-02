export interface MoonPhase {
  emoji: string;
  name: string;
  index: number;
}

const PHASES: Omit<MoonPhase, "index">[] = [
  { emoji: "\u{1F311}", name: "New Moon" },
  { emoji: "\u{1F312}", name: "Waxing Crescent" },
  { emoji: "\u{1F313}", name: "First Quarter" },
  { emoji: "\u{1F314}", name: "Waxing Gibbous" },
  { emoji: "\u{1F315}", name: "Full Moon" },
  { emoji: "\u{1F316}", name: "Waning Gibbous" },
  { emoji: "\u{1F317}", name: "Last Quarter" },
  { emoji: "\u{1F318}", name: "Waning Crescent" },
];

export function getMoonPhase(date: Date = new Date()): MoonPhase {
  const CYCLE = 29.530588853;
  const KNOWN_NEW_MOON = new Date("2000-01-06T18:14:00Z").getTime();
  const diff = date.getTime() - KNOWN_NEW_MOON;
  const days = diff / 86400000;
  const normalizedDays = ((days % CYCLE) + CYCLE) % CYCLE;
  const phaseIndex = Math.floor((normalizedDays / CYCLE) * 8) % 8;

  return { ...PHASES[phaseIndex], index: phaseIndex };
}
