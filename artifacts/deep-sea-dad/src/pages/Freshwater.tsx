const FISH = [
  {
    emoji: "\uD83E\uDE9D",
    name: "Largemouth Bass",
    description:
      "Structure is king. Topwater frog near lily pads at dawn will make them explode. I'm proud of you if you land your first one this season.",
    season: "May\u2013September",
    gear: "10-12 lb line",
    gear_pick: "Booyah Pad Crasher Topwater Frog",
  },
  {
    emoji: "\uD83C\uDFA3",
    name: "Smallmouth Bass",
    description:
      "Pound for pound the best fighter in freshwater. Crayfish patterns or tubes bounced along rocky points. They jump, they pull, they earn your respect every time.",
    season: "May\u2013October",
    gear: "Medium-light",
    gear_pick: "Ned Rig Z-Man TRD 2.75\"",
  },
  {
    emoji: "\uD83D\uDC1F",
    name: "Rainbow Trout",
    description:
      "Match the hatch. Small fly or spinner in clear cold water. Take your time \u2014 they're smarter than they look. A wild rainbow in a mountain stream is pure therapy.",
    season: "Spring & Fall",
    gear: "Light tackle / Fly",
    gear_pick: "Mepps Aglia Spinner Size 2",
  },
  {
    emoji: "\uD83D\uDC1F",
    name: "Brown Trout",
    description:
      "The professor of the stream. Wary and selective \u2014 they didn't get big by being dumb. Fish the low light hours with streamers or nymphs. Patience is the whole game here.",
    season: "Spring & Fall",
    gear: "Light tackle / Fly",
    gear_pick: "Woolly Bugger Streamer Size 8",
  },
  {
    emoji: "\u2744\uFE0F",
    name: "Brook Trout",
    description:
      "The jewel of the cold creeks. Those orange bellies and red spots? Nothing prettier in freshwater. Small streams, tiny flies. If you find 'em, keep the spot to yourself.",
    season: "Spring & Fall",
    gear: "Ultralight / Fly",
    gear_pick: "Orvis Clearwater 4wt Fly Rod Outfit",
  },
  {
    emoji: "\uD83C\uDFD4\uFE0F",
    name: "Lake Trout",
    description:
      "The deep dwellers of the Finger Lakes and mountain reservoirs. Troll deep with spoons or jig the thermocline. In winter, they come shallow \u2014 that's when it gets fun.",
    season: "Fall & Winter",
    gear: "Medium-heavy / Trolling",
    gear_pick: "Williams Whitefish Spoon Gold",
  },
  {
    emoji: "\uD83D\uDC1F",
    name: "Channel Catfish",
    description:
      "Chicken liver or nightcrawler. Sit back and wait for that telltale tug. Night fishing on the riverbank is pure peace. Best company you'll ever have is a catfish rod and the stars.",
    season: "Best at night",
    gear: "Heavy sinkers",
    gear_pick: "Team Catfish Dip Bait Treble Hook",
  },
  {
    emoji: "\u2600\uFE0F",
    name: "Bluegill",
    description:
      "The bread and butter of freshwater. A worm under a bobber is how every angler gets started. Perfect for teaching the kids. Zack caught his first fish on a bluegill rig.",
    season: "Year-round",
    gear: "Ultralight",
    gear_pick: "Zebco 33 Spincast Combo",
  },
  {
    emoji: "\u2600\uFE0F",
    name: "Sunfish (Pumpkinseed)",
    description:
      "Those copper and turquoise colors? Like nature painted a masterpiece on a panfish. Small hooks, tiny worms. They're everywhere and they always cooperate. God bless 'em.",
    season: "Spring\u2013Fall",
    gear: "Ultralight",
    gear_pick: "Eagle Claw Panfish Hook Assortment",
  },
  {
    emoji: "\uD83D\uDC7B",
    name: "Walleye",
    description:
      "The ghost of the deep. Jig tipped with a minnow, bounced slow along the bottom. Low light is key \u2014 dawn, dusk, overcast. They reward patience like nothing else.",
    season: "Spring & Fall",
    gear: "Medium-light",
    gear_pick: "Rapala Jigging Rap Size 5",
  },
  {
    emoji: "\uD83C\uDF38",
    name: "Crappie",
    description:
      "Find the brush piles and you'll find them stacked up like cordwood. Small jigs in chartreuse or white. Bring a cooler \u2014 they're the best-eating panfish in the lake.",
    season: "Spring",
    gear: "Light tackle",
    gear_pick: "Bobby Garland Baby Shad 2\"",
  },
  {
    emoji: "\uD83D\uDC1F",
    name: "Yellow Perch",
    description:
      "The workhorses of the Northeast lakes. Small minnow or worm on a drop-shot. When you find the school, you can fill a bucket. Perch fry is a Finger Lakes tradition.",
    season: "Year-round",
    gear: "Ultralight / Light",
    gear_pick: "Swedish Pimple 1/4oz Gold",
  },
  {
    emoji: "\uD83D\uDC09",
    name: "Northern Pike",
    description:
      "The water wolf. Big spinnerbaits or jerkbaits near the weed edges. Wire leader or they'll bite you off. That toothy grin is the last thing a lot of lures ever see.",
    season: "Spring & Fall",
    gear: "Medium-heavy / Wire leader",
    gear_pick: "Mepps Musky Killer Bucktail Spinner",
  },
  {
    emoji: "\uD83D\uDC09",
    name: "Musky (Muskellunge)",
    description:
      "The fish of 10,000 casts \u2014 and worth every single one. Giant bucktails or glide baits, figure-eight at the boat. When one finally hits, you'll be shaking. Trust me.",
    season: "Fall (prime)",
    gear: "Heavy / Wire leader",
    gear_pick: "Musky Innovations Bull Dawg 10\"",
  },
  {
    emoji: "\uD83D\uDD25",
    name: "Chain Pickerel",
    description:
      "The little pike of the ponds and creeks. Aggressive and explosive on topwater. They'll hit anything that moves through their territory. Great fun on a light rod.",
    season: "Year-round",
    gear: "Light-medium / Wire leader",
    gear_pick: "Heddon Zara Spook Topwater",
  },
  {
    emoji: "\uD83D\uDCAA",
    name: "Carp",
    description:
      "Don't sleep on the common carp. Corn, dough balls, or boilies on a hair rig. These golden submarines will test your tackle and your patience. European anglers know what's up.",
    season: "Spring\u2013Fall",
    gear: "Medium-heavy",
    gear_pick: "Method Feeder Hair Rig Kit",
  },
  {
    emoji: "\uD83C\uDF0A",
    name: "Striped Bass (Freshwater / Landlocked)",
    description:
      "The same powerful striper, just landlocked in reservoirs. Trolling umbrella rigs or live bait near the dam. A 20-pounder in fresh water hits just as hard as one in the surf.",
    season: "Spring & Fall",
    gear: "Medium-heavy",
    gear_pick: "Umbrella Rig 5-Arm with Shad Bodies",
  },
  {
    emoji: "\uD83E\uDDAC",
    name: "White Bass",
    description:
      "When the spring run hits, they stack up in the river mouths. Cast small swimbaits into the boil and hang on. Non-stop action \u2014 perfect for putting a smile on anyone's face.",
    season: "Spring (run)",
    gear: "Light-medium",
    gear_pick: "Strike King KVD Swim-N-Shiner 3.5\"",
  },
  {
    emoji: "\uD83C\uDF1F",
    name: "Rock Bass",
    description:
      "Red-eyed and always hungry. Drop a worm near any rocky shoreline and they'll show up. Not trophies, but they're honest fun and they teach you to feel the bite.",
    season: "Spring\u2013Fall",
    gear: "Ultralight",
    gear_pick: "Berkley PowerBait Micro Crawler",
  },
  {
    emoji: "\uD83C\uDF19",
    name: "Bullhead Catfish",
    description:
      "The night shift of the pond. Nightcrawlers on the bottom, a lantern and a lawn chair. They're not glamorous, but frying up a mess of bullheads at camp \u2014 that's living.",
    season: "Spring\u2013Summer (night)",
    gear: "Light / Bottom rig",
    gear_pick: "Eagle Claw Catfish Rig 1/0 Circle Hook",
  },
  {
    emoji: "\uD83C\uDFDE\uFE0F",
    name: "Steelhead",
    description:
      "Lake-run rainbow trout with attitude. Drift eggs or swing flies through the runs in the tributary creeks. Cold fingers, fast water, chrome fish. Worth every frozen morning.",
    season: "Fall\u2013Spring",
    gear: "Medium / Fly / Centerpin",
    gear_pick: "Raven Float & Centerpin Setup Kit",
  },
];

export default function Freshwater() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-display text-4xl sm:text-5xl mb-4 flex items-center gap-4 text-ocean">
        <span>{"\uD83C\uDFDE\uFE0F"}</span> Freshwater Fishing
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl mb-10 text-ocean/80">
        Now what you gotta understand is... lakes and rivers are where the real magic
        happens. From Finger Lakes trout to farm pond bluegill, here's what I've
        learned over the decades.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {FISH.map((fish, i) => (
          <div
            key={fish.name}
            className={`bg-white rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl animate-fade-in-up animate-delay-${(i % 6 + 1) * 100}`}
          >
            <div className="text-5xl sm:text-6xl mb-4">{fish.emoji}</div>
            <h3 className="font-display text-2xl sm:text-3xl mb-3 text-ocean">{fish.name}</h3>
            <p className="text-ocean/70 leading-relaxed">{fish.description}</p>
            <div className="mt-6 text-xs bg-canvas p-3 sm:p-4 rounded-2xl text-ocean/60">
              {fish.season} &bull; {fish.gear}
            </div>
            {fish.gear_pick && (
              <div className="mt-4 pt-4 border-t border-ocean/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-sunset bg-sunset/10 px-2 py-0.5 rounded-full">Dad's Pick</span>
                </div>
                <p className="text-sm text-ocean/80 font-medium mb-2">{fish.gear_pick}</p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-sunset hover:bg-sunset/90 px-3 py-1.5 rounded-full transition-colors"
                >
                  Check Price &rarr;
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
