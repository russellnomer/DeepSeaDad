export interface WeatherData {
  temperature_2m: number;
  wind_speed: number;
  wind_direction: number;
  precipitation: number;
  cloud_cover: number;
  sunrise?: string;
  sunset?: string;
}

export interface MarineData {
  water_temperature?: number;
  wave_height?: number;
}

export interface ConditionsData {
  weather: WeatherData;
  marine: MarineData;
  tempF: number;
  windMph: number;
  waterTempF: number | null;
  sunrise: string | null;
  sunset: string | null;
}

export async function fetchConditions(lat: number, lon: number): Promise<ConditionsData> {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,wind_direction_10m,precipitation,cloud_cover&daily=sunrise,sunset&timezone=auto&forecast_days=1`;
  const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=water_temperature,wave_height`;

  const [wRes, mRes] = await Promise.all([
    fetch(weatherUrl),
    fetch(marineUrl).catch(() => null),
  ]);

  if (!wRes.ok) throw new Error("Weather API failed");

  const weather = await wRes.json();
  const marine = mRes ? await mRes.json().catch(() => ({ current: {} })) : { current: {} };

  const current = weather.current;
  const tempC = current.temperature_2m;
  const tempF = Math.round(tempC * 1.8 + 32);
  const windKmh = current.wind_speed_10m || 0;
  const windMph = Math.round(windKmh * 0.621371);

  const waterTempC = marine?.current?.water_temperature;
  const waterTempF = waterTempC !== undefined ? Math.round(waterTempC * 1.8 + 32) : null;

  const sunrise = weather.daily?.sunrise?.[0] || null;
  const sunset = weather.daily?.sunset?.[0] || null;

  return {
    weather: {
      temperature_2m: current.temperature_2m,
      wind_speed: current.wind_speed_10m || 0,
      wind_direction: current.wind_direction_10m || 0,
      precipitation: current.precipitation || 0,
      cloud_cover: current.cloud_cover || 0,
      sunrise: sunrise ?? undefined,
      sunset: sunset ?? undefined,
    },
    marine: {
      water_temperature: marine?.current?.water_temperature,
      wave_height: marine?.current?.wave_height,
    },
    tempF,
    windMph,
    waterTempF,
    sunrise,
    sunset,
  };
}

export async function geocodeLocation(query: string): Promise<{ lat: number; lon: number; name: string } | null> {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`
  );
  const data = await res.json();

  if (data.results && data.results.length > 0) {
    const loc = data.results[0];
    return { lat: loc.latitude, lon: loc.longitude, name: loc.name };
  }
  return null;
}
