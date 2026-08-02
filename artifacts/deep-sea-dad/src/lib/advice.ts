export interface AdviceSet {
  outlook: string;
  window: string;
  behavior: string;
  tactic: string;
  gear: string;
  encourage: string;
}

function formatTime(isoString: string): string {
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch {
    return isoString;
  }
}

export function generateAdvice(
  tempF: number,
  windMph: number,
  precipitation: number,
  mode: string,
  sunrise: string | null,
  sunset: string | null
): AdviceSet {
  let outlook: string;
  if (tempF > 85) {
    outlook = "Hot day \u2014 fish are deep and sluggish. Hit the water before the heat sets in.";
  } else if (tempF > 75) {
    outlook = "Warm out there. Fish will be seeking shade and deeper water by midday.";
  } else if (tempF < 40) {
    outlook = "Cold one today. Fish are slow \u2014 use finesse presentations and be patient.";
  } else if (windMph > 15) {
    outlook = "Windy \u2014 stick to protected banks and points. Use heavier lures to maintain contact.";
  } else if (precipitation > 0) {
    outlook = "A little rain often gets the bite going. Overcast skies push fish shallow.";
  } else {
    outlook = "Solid conditions today. The fish should be cooperative if you put in the time.";
  }

  let windowText: string;
  if (sunrise && sunset) {
    const sunriseTime = formatTime(sunrise);
    const sunsetTime = formatTime(sunset);
    windowText = `Best windows are around sunrise (${sunriseTime}) and sunset (${sunsetTime}). Fish feed hardest during low-light transitions.`;
  } else {
    windowText = "Fish are most active around dawn and dusk. Plan your trip around those golden hours.";
  }

  let behavior: string;
  if (mode === "fresh") {
    if (tempF > 75) {
      behavior = "Bass and panfish will be holding tight to deep structure and shade. Look for submerged timber and rock ledges.";
    } else if (tempF < 50) {
      behavior = "Cold water means slow metabolism. Fish are hugging the bottom near deeper pools.";
    } else {
      behavior = "Fish are actively cruising looking for structure and shade. Work the transition zones between deep and shallow.";
    }
  } else {
    if (windMph > 10) {
      behavior = "Waves are stirring up bait. Predators will be feeding near current breaks and structure edges.";
    } else {
      behavior = "Calm water means fish can see you. Use longer leaders and more natural presentations.";
    }
  }

  let tactic: string;
  if (mode === "fresh") {
    if (tempF > 70) {
      tactic = "Try topwater early, then switch to soft plastics worked slow along structure as the sun gets high.";
    } else if (tempF < 50) {
      tactic = "Slow-roll a jig or use a drop shot. Let it sit \u2014 cold fish won't chase.";
    } else {
      tactic = "Match the hatch or use natural drift. Crankbaits and spinnerbaits cover water fast.";
    }
  } else {
    if (windMph > 10) {
      tactic = "Heavier jigs and bucktails cut through the chop. Work the leeward side of structure.";
    } else {
      tactic = "Live bait under a popping cork or a slow-retrieved paddle tail. Keep it natural.";
    }
  }

  let gear: string;
  if (tempF > 80) {
    gear = "Light breathable layers, polarized sunglasses, plenty of water, and sunscreen. The sun is brutal out there.";
  } else if (tempF < 45) {
    gear = "Layer up \u2014 base layer, fleece, and a wind-proof shell. Keep hand warmers in your tackle box.";
  } else if (precipitation > 0) {
    gear = "Rain jacket and waterproof bag for your phone. A little rain never hurt the fishing.";
  } else {
    gear = "Light layers you can adjust. Polarized sunglasses are your best tool for reading the water.";
  }

  const encouragements = [
    "I'm proud of you for checking conditions before you even left the house, kiddo.",
    "Remember \u2014 the best day of fishing is any day you're out on the water.",
    "You're doing great, kiddo. Every cast teaches you something new.",
    "Patience is what separates good anglers from great ones. You've got it.",
    "The fact that you're planning ahead tells me you're becoming a real angler.",
  ];
  const encourage = encouragements[Math.floor(Math.random() * encouragements.length)];

  return { outlook, window: windowText, behavior, tactic, gear, encourage };
}

export function generateFallbackAdvice(): AdviceSet {
  return {
    outlook: "Couldn't pull live data right now, but based on the season I'd still give it a shot.",
    window: "Early morning or late evening is usually your safest bet. The fish know the schedule.",
    behavior: "They'll still bite if you're patient. Fish don't check the internet.",
    tactic: "Use what you know works in your water. Trust your experience.",
    gear: "Just dress for the weather you can see. Check the sky before you check your phone.",
    encourage: "I'm proud of you for trying anyway, kiddo. We'll get live data next time.",
  };
}
