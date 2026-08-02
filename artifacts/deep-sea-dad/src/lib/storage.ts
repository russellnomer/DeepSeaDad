const LOCATION_KEY = "deepseadad_location";
const MODE_KEY = "deepseadad_mode";

export interface SavedLocation {
  lat: number;
  lon: number;
  label: string;
  mode: string;
}

export function saveLocation(data: SavedLocation): void {
  try {
    localStorage.setItem(LOCATION_KEY, JSON.stringify(data));
  } catch {}
}

export function getSavedLocation(): SavedLocation | null {
  try {
    const raw = localStorage.getItem(LOCATION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedLocation;
  } catch {
    return null;
  }
}

export function saveMode(mode: string): void {
  try {
    localStorage.setItem(MODE_KEY, mode);
  } catch {}
}

export function getSavedMode(): string {
  try {
    return localStorage.getItem(MODE_KEY) || "fresh";
  } catch {
    return "fresh";
  }
}
