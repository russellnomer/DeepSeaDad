import type { MoonPhase } from "./moon";

export interface ScoreResult {
  score: number;
  label: string;
  className: string;
  explanation: string;
  summary: string;
}

export function calculateFishingScore(
  tempF: number,
  windMph: number,
  precipitation: number,
  moon: MoonPhase
): ScoreResult {
  let score = 7;

  if (tempF >= 60 && tempF <= 75) score += 1;
  if (tempF > 85) score -= 2;
  else if (tempF > 75) score -= 1;
  if (tempF < 40) score -= 2;
  else if (tempF < 50) score -= 1;

  if (windMph <= 5) score += 1;
  else if (windMph > 20) score -= 3;
  else if (windMph > 15) score -= 2;
  else if (windMph > 10) score -= 1;

  if (precipitation > 0 && precipitation < 2) score += 1;
  if (precipitation > 5) score -= 1;

  if (moon.name === "New Moon") score += 2;
  if (moon.name === "Full Moon") score += 1;

  score = Math.max(1, Math.min(10, score));

  const label =
    score >= 8 ? "Excellent" :
    score >= 6 ? "Good" :
    score >= 4 ? "Fair" : "Tough";

  const className =
    score >= 8 ? "score-excellent" :
    score >= 6 ? "score-good" :
    score >= 4 ? "score-fair" : "score-poor";

  const explanation =
    score >= 8 ? "Excellent conditions \u2014 fish are feeding hard today." :
    score >= 6 ? "Good day on the water. Go early or late." :
    score >= 4 ? "Fair conditions. Focus on structure and patience." :
    "Tough day. Bundle up and keep it simple.";

  const summary =
    score >= 8 ? "Excellent bite today. Get out early." :
    score >= 6 ? "Good conditions. Aim for dawn or dusk." :
    score >= 4 ? "Fair day. Fish slow and patient." :
    "Tough conditions. Keep expectations steady, kiddo.";

  return { score, label, className, explanation, summary };
}
