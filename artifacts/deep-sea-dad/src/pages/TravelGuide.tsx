const REGIONS = [
  {
    name: "Northeast",
    emoji: "🗽",
    description:
      "From Montauk Point to the rocky coast of Maine, the Northeast is where I cut my teeth. Cold water, strong fish, and the best clam chowder you'll ever taste.",
    charters: [
      {
        name: "Montauk Point Charters",
        location: "Montauk, NY",
        blurb:
          "Captain Mike runs a tight ship out of Montauk Harbor. He knows where the stripers stack up in the fall run better than anyone. Tell him Russell sent you — he'll put you on fish.",
        button: "Book This Trip",
      },
      {
        name: "Long Island Sound Guide Service",
        location: "Port Jefferson, NY",
        blurb:
          "Light tackle specialists in the Sound. Great for fluke, blackfish, and porgy trips. Family-friendly crew that'll teach the kids how to bait a hook proper.",
        button: "Book This Trip",
      },
      {
        name: "Peconic Star Fleet",
        location: "Greenport, NY",
        blurb:
          "Captain Speedy's Peconic Star is back in Greenport for 2026 and I couldn't be happier. Party boat fishing off the North Fork for porgies, sea bass, and weakfish — I was the webmaster for this fleet for years. Go support them!",
        button: "Get Tickets",
        link: "https://peconicstarfishing.com/fishing-tickets/",
      },
      {
        name: "Cape Cod Sportfishing",
        location: "Chatham, MA",
        blurb:
          "The Chatham rips are no joke — big stripers, big blues, and the occasional tuna. These guys have been running the rip for decades. Worth every penny.",
        button: "Book This Trip",
      },
    ],
    lodges: [
      {
        name: "Kennebec River Lodge",
        location: "Maine Coast",
        blurb:
          "Rustic, cozy, and right on the river. Wake up to stripers crashing bait outside your window. The owner is a fly fisherman who knows every pool.",
        button: "Check Rates",
      },
      {
        name: "Block Island Fishing Resort",
        location: "Block Island, RI",
        blurb:
          "Take the ferry over, cast the surf at sunrise, then relax at the lodge. It's the kind of trip that recharges your soul. The bluefish blitz in October is legendary.",
        button: "Check Rates",
      },
    ],
    hotels: [
      {
        name: "Montauk Harbour Inn",
        location: "Montauk, NY",
        blurb:
          "Clean rooms, walking distance to the docks. Nothing fancy, but you're not there for the hotel — you're there for the fish. Good coffee in the lobby at 4 AM.",
        button: "Check Rates",
      },
      {
        name: "Chatham Tides Motel",
        location: "Chatham, MA",
        blurb:
          "Right near the harbor. Fall asleep to the sound of the ocean. The owner's a fisherman himself, so he doesn't mind if you clean fish in the back.",
        button: "Check Rates",
      },
    ],
    restaurants: [
      {
        name: "Gosman's Dock",
        location: "Montauk, NY",
        blurb:
          "Best lobster roll on the East End, hands down. Sit outside, watch the boats come in, and order the fried clam strips. That's a perfect end to a fishing day.",
        button: "View Menu",
      },
      {
        name: "The Lobster Pot",
        location: "Provincetown, MA",
        blurb:
          "If you're up on the Cape, you gotta stop here. The chowder is thick, the lobster is fresh, and the view of the harbor is something else. Mom loved this place.",
        button: "View Menu",
      },
      {
        name: "Five Islands Lobster Co.",
        location: "Georgetown, ME",
        blurb:
          "A shack on the dock in Maine. You pick your lobster, they cook it, you eat it overlooking the water. Doesn't get more honest than that.",
        button: "View Menu",
      },
    ],
  },
  {
    name: "Southeast & Florida",
    emoji: "🌴",
    description:
      "Warm water, year-round fishing, and more species than you can count. The Keys, the Gulf, the Outer Banks — every trip down south is an adventure.",
    charters: [
      {
        name: "Keys Backcountry Charters",
        location: "Islamorada, FL",
        blurb:
          "Captain Danny poles the flats like he was born on a skiff. Tarpon, permit, bonefish — the grand slam is possible if the tides are right. Bring polarized glasses and patience.",
        button: "Book This Trip",
      },
      {
        name: "Gulf Coast Offshore Adventures",
        location: "Destin, FL",
        blurb:
          "Deep water grouper, snapper, and amberjack. These boys run far offshore and come back with coolers full. The red snapper season is worth planning your whole vacation around.",
        button: "Book This Trip",
      },
      {
        name: "Outer Banks Surf & Sound Charters",
        location: "Hatteras, NC",
        blurb:
          "Drum fishing on the Outer Banks is a spiritual experience. Big reds in the fall surf, or drum and cobia in Pamlico Sound. Captain Ricky is the real deal.",
        button: "Book This Trip",
      },
    ],
    lodges: [
      {
        name: "Islamorada Fishing Club",
        location: "Islamorada, FL",
        blurb:
          "Old Florida charm with dockside rooms. Roll out of bed and onto a skiff. The tiki bar at sunset after a day on the flats? That's the good life, kiddo.",
        button: "Check Rates",
      },
      {
        name: "Crystal River Manatee Lodge",
        location: "Crystal River, FL",
        blurb:
          "Snook, redfish, and manatees. The spring-fed rivers here are gin-clear. The lodge is simple but the fishing is world-class. Great for a family winter escape.",
        button: "Check Rates",
      },
    ],
    hotels: [
      {
        name: "Hatteras Island Oceanfront Suites",
        location: "Hatteras, NC",
        blurb:
          "Steps from the beach. Surf fish at dawn, hit the charter in the afternoon. The rooms have kitchenettes so you can cook up your catch right there.",
        button: "Check Rates",
      },
      {
        name: "Marathon Key Waterfront Inn",
        location: "Marathon, FL",
        blurb:
          "In the heart of the Keys with a dock out back. Tie up your rental boat and walk to dinner. The sunsets over the Gulf from the pool deck are unreal.",
        button: "Check Rates",
      },
    ],
    restaurants: [
      {
        name: "Alabama Jack's",
        location: "Key Largo, FL",
        blurb:
          "A floating bar and grill at the top of the Keys. Conch fritters, cold beer, and live music on the weekends. Stop here on your way down to Islamorada — it's a tradition.",
        button: "View Menu",
      },
      {
        name: "The Wreck of the Richard & Charlene",
        location: "Cape Hatteras, NC",
        blurb:
          "No menus, no reservations, just whatever's fresh off the boats. Best fried fish platter on the Outer Banks. Cash only and worth the wait in line.",
        button: "View Menu",
      },
      {
        name: "Dockside Dave's",
        location: "Madeira Beach, FL",
        blurb:
          "Grouper sandwich the size of your head. They'll cook your catch too if you bring it in. Waterfront tables and sweet tea that's actually sweet. That's Florida.",
        button: "View Menu",
      },
    ],
  },
  {
    name: "Alaska",
    emoji: "🏔️",
    description:
      "Alaska is the last frontier of fishing. Salmon runs that turn rivers silver, halibut the size of doors, and scenery that'll make you forget everything else. Every angler needs to go at least once.",
    charters: [
      {
        name: "Kenai River Guides",
        location: "Kenai Peninsula, AK",
        blurb:
          "King salmon that'll bend your rod in half. Drift the upper Kenai for chrome silvers in August or go for the big kings in July. These guides know every seam in the river.",
        button: "Book This Trip",
      },
      {
        name: "Southeast Alaska Sportfishing",
        location: "Ketchikan, AK",
        blurb:
          "Halibut, kings, silvers, lingcod — all in one day if you're lucky. The Inside Passage is as beautiful as anywhere on Earth. Bring rain gear, trust me.",
        button: "Book This Trip",
      },
    ],
    lodges: [
      {
        name: "The Cedars Lodge",
        location: "Southeast Alaska",
        blurb:
          "This is the one from the photos. Remote, pristine, and the fishing is out of this world. Fly-out trips to streams where the bears are the only other anglers. A once-in-a-lifetime experience.",
        button: "Check Rates",
      },
      {
        name: "Kenai Riverside Lodge",
        location: "Cooper Landing, AK",
        blurb:
          "Right on the banks of the upper Kenai. Fall asleep listening to the river, wake up to eagles. The guides here have been fishing these waters for generations. First class.",
        button: "Check Rates",
      },
    ],
    hotels: [
      {
        name: "Soldotna River Lodge",
        location: "Soldotna, AK",
        blurb:
          "Comfortable cabins near the combat fishing zone. When the kings are running, you can walk from your room to world-class fishing in five minutes. Book early — it fills up fast.",
        button: "Check Rates",
      },
      {
        name: "Ketchikan Harbor Inn",
        location: "Ketchikan, AK",
        blurb:
          "Downtown Ketchikan, close to the charter docks and the fish market. Grab smoked salmon at the market for the flight home. The rooms are clean and the town has character.",
        button: "Check Rates",
      },
    ],
    restaurants: [
      {
        name: "The Saltry",
        location: "Halibut Cove, AK",
        blurb:
          "You take a boat to get there. Fresh halibut, local oysters, and views of Kachemak Bay. It's the most Alaskan dining experience you can have. Worth the ferry ride.",
        button: "View Menu",
      },
      {
        name: "Kenai Joe's Seafood",
        location: "Kenai, AK",
        blurb:
          "No-frills fish house where the locals eat. The salmon chowder and halibut fish & chips are outstanding. After a long day on the river, this is exactly what you need.",
        button: "View Menu",
      },
    ],
  },
  {
    name: "California & Pacific",
    emoji: "🌅",
    description:
      "From San Diego's yellowtail to the Pacific Northwest's salmon rivers, the West Coast has a whole different flavor of fishing. Kelp beds, sea lions, and some of the prettiest coastline in America.",
    charters: [
      {
        name: "San Diego Long Range Fleet",
        location: "San Diego, CA",
        blurb:
          "Multi-day trips to the offshore banks for yellowfin, yellowtail, and bluefin tuna. Pack light, bring your own pillow, and be ready to fish from sunup to sundown. It's intense and it's incredible.",
        button: "Book This Trip",
      },
      {
        name: "Channel Islands Sportfishing",
        location: "Oxnard, CA",
        blurb:
          "Run out to the islands for white sea bass, calico bass, and lingcod. The kelp forests are teeming with life. Half-day or full-day — either way, you'll be hooked.",
        button: "Book This Trip",
      },
      {
        name: "Pacific Northwest Salmon Charters",
        location: "Westport, WA",
        blurb:
          "Kings and silvers on the Columbia Bar. The Pacific Northwest salmon runs are legendary. These captains troll the offshore reefs where the big ones stage up before heading upriver.",
        button: "Book This Trip",
      },
    ],
    lodges: [
      {
        name: "Rogue River Fishing Lodge",
        location: "Gold Beach, OR",
        blurb:
          "Jet boat up the Rogue to the lodge, fish for steelhead and salmon all day, eat a steak dinner by the fire. Three days here will change your whole perspective on life.",
        button: "Check Rates",
      },
      {
        name: "Catalina Island Fishing Camp",
        location: "Catalina Island, CA",
        blurb:
          "Camp on Catalina and fish the lee side for calicos and yellowtail. Crystal clear water, starry nights, and fishing that rivals the tropics. California's best-kept secret.",
        button: "Check Rates",
      },
    ],
    hotels: [
      {
        name: "Point Loma Sportfisher's Inn",
        location: "San Diego, CA",
        blurb:
          "Walking distance to the long-range fleet docks. Crash here the night before your trip and grab breakfast at the tackle shop at 3 AM. They've been fueling fishing trips for decades.",
        button: "Check Rates",
      },
      {
        name: "Astoria Waterfront Hotel",
        location: "Astoria, OR",
        blurb:
          "Gateway to Columbia River fishing. Watch the bar pilots guide ships in while you plan your next day's drift. Historic town with great restaurants and a real fishing heritage.",
        button: "Check Rates",
      },
    ],
    restaurants: [
      {
        name: "Point Loma Seafoods",
        location: "San Diego, CA",
        blurb:
          "The smoked fish counter alone is worth the trip. Grab a smoked albacore sandwich and eat it at the picnic tables overlooking the marina. Fresh, simple, perfect.",
        button: "View Menu",
      },
      {
        name: "Tony's Crab Shack",
        location: "Bandon, OR",
        blurb:
          "Dungeness crab straight from the boat. Garlic butter, a roll of paper towels, and an ocean view. Oregon coast fishing and this crab shack — name a better combo.",
        button: "View Menu",
      },
      {
        name: "The Fish Market",
        location: "San Diego, CA",
        blurb:
          "Sit upstairs for the harbor view. The sashimi platter and cioppino are legendary. After a long-range trip, this is where you celebrate with the crew. Tradition.",
        button: "View Menu",
      },
    ],
  },
];

const CATEGORY_ICONS: Record<string, string> = {
  charters: "⚓",
  lodges: "🏕️",
  hotels: "🏨",
  restaurants: "🍽️",
};

const CATEGORY_LABELS: Record<string, string> = {
  charters: "Charter Boats",
  lodges: "Fishing Lodges",
  hotels: "Where to Stay",
  restaurants: "Where to Eat",
};

type Recommendation = {
  name: string;
  location: string;
  blurb: string;
  button: string;
  link?: string;
};

export default function TravelGuide() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-display text-4xl sm:text-5xl mb-4 flex items-center gap-4 text-ocean">
        <span>🧭</span> Fishing Travel Guide
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl mb-10 text-ocean/80">
        Over the years I've fished from Montauk to Alaska and everywhere in
        between. Here are the charters, lodges, and local spots I'd send my own
        family to. Every recommendation comes from personal experience — if it's
        on this list, I vouch for it.
      </p>

      <div className="space-y-16">
        {REGIONS.map((region, ri) => (
          <div
            key={region.name}
            className={`animate-fade-in-up animate-delay-${(ri % 4 + 1) * 100}`}
          >
            <div className="mb-6 border-b-2 border-sunset/30 pb-4">
              <h2 className="font-display text-3xl sm:text-4xl text-ocean flex items-center gap-3">
                <span>{region.emoji}</span> {region.name}
              </h2>
              <p className="mt-2 text-ocean/70 max-w-2xl">{region.description}</p>
            </div>

            <div className="space-y-10">
              {(["charters", "lodges", "hotels", "restaurants"] as const).map(
                (category) => {
                  const items = region[category] as Recommendation[];
                  if (!items || items.length === 0) return null;
                  return (
                    <div key={category}>
                      <h3 className="font-display text-xl sm:text-2xl text-sunset mb-4 flex items-center gap-2">
                        <span>{CATEGORY_ICONS[category]}</span>{" "}
                        {CATEGORY_LABELS[category]}
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, i) => (
                          <div
                            key={item.name}
                            className={`bg-white rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl flex flex-col animate-fade-in-up animate-delay-${(i % 6 + 1) * 100}`}
                          >
                            <h4 className="font-display text-xl sm:text-2xl mb-1 text-ocean">
                              {item.name}
                            </h4>
                            <p className="text-xs text-ocean/50 mb-3">
                              {item.location}
                            </p>
                            <p className="text-ocean/70 leading-relaxed flex-1">
                              {item.blurb}
                            </p>
                            <a
                              href={item.link || "#"}
                              target={item.link ? "_blank" : undefined}
                              rel={item.link ? "noopener noreferrer" : undefined}
                              onClick={item.link ? undefined : (e) => e.preventDefault()}
                              className={`mt-6 inline-block text-center bg-sunset text-canvas font-medium px-6 py-3 rounded-2xl hover:bg-sunset/90 transition-colors duration-200 text-sm ${!item.link ? 'opacity-60 cursor-not-allowed' : ''}`}
                            >
                              {item.button}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
