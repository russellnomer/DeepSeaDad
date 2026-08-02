const FISH = [
  {
    name: "Striped Bass",
    description:
      "The king of the Northeast surf. Bucktails on the rip or live eels at night. A 40-pounder will change your whole outlook on life. Every angler should feel that pull at least once.",
    tag: "Surf / Inshore",
    gear: "Medium-heavy",
    gear_pick: "Penn Battle III 4000 Spinning Combo",
  },
  {
    name: "Bluefish",
    description:
      "Choppers, snappers, gators — whatever you call 'em, they fight like demons. Wire leader is a must or they'll cut you off. Cast metals into a blitz and hold on tight.",
    tag: "Surf / Nearshore",
    gear: "Medium-heavy",
    gear_pick: "Kastmaster 2oz Silver Spoon",
  },
  {
    name: "Fluke (Summer Flounder)",
    description:
      "Bounce a bucktail with a strip of squid or gulp along the bottom. Drift the channels and sandbars. When you feel that thump, wait a beat before you set the hook.",
    tag: "Nearshore / Inshore",
    gear: "Medium tackle",
    gear_pick: "SPRO Prime Bucktail Jig 1oz",
  },
  {
    name: "Winter Flounder",
    description:
      "Patience, kiddo. Small hooks, clam or worm on the bottom in harbors and bays in early spring. They're not flashy, but they're delicious and honest work.",
    tag: "Inshore / Bays",
    gear: "Light tackle",
    gear_pick: "Eagle Claw Flounder Rig",
  },
  {
    name: "Blackfish (Tautog)",
    description:
      "The bulldogs of the reef. Green crab or Asian crab on a jig head, fished right on the rocks. When they bite, set the hook hard or they'll pull you into the structure.",
    tag: "Nearshore / Reefs",
    gear: "Medium-heavy",
    gear_pick: "Hogy Tog Jig 1.5oz",
  },
  {
    name: "Porgy (Scup)",
    description:
      "The party boat favorite. Drop a piece of clam or squid on a hi-lo rig and you'll be busy all day. Great for kids and beginners — steady action and good eating.",
    tag: "Nearshore / Reefs",
    gear: "Light tackle",
    gear_pick: "Hi-Lo Rig with Size 4 Virginia Hooks",
  },
  {
    name: "Black Sea Bass",
    description:
      "Aggressive little guys with great taste. Squid strips on the bottom near structure. They'll hit anything that moves. Fun for the whole family.",
    tag: "Nearshore / Wrecks",
    gear: "Medium tackle",
    gear_pick: "Berkley Gulp! Swimming Mullet 4\"",
  },
  {
    name: "Weakfish",
    description:
      "The comeback kid of the Northeast. Soft mouth, so easy on the drag. Bucktails with a teaser or live spot. Handle 'em gentle — they earned the name.",
    tag: "Inshore / Surf",
    gear: "Light-medium",
    gear_pick: "Tsunami Holographic Bucktail 3/4oz",
  },
  {
    name: "Redfish (Red Drum)",
    description:
      "Sight fishing in the shallows with a gold spoon or shrimp. That copper flash in the water will make your heart race. When it hits, the whole rod bends over.",
    tag: "Inshore / Flats",
    gear: "Light tackle",
    gear_pick: "Johnson Silver Minnow Gold Spoon",
  },
  {
    name: "Snook",
    description:
      "The lineside ambushers. Fish the mangrove edges on the outgoing tide with live pilchards. They'll test your drag and your nerves. A true Florida trophy.",
    tag: "Inshore",
    gear: "Medium-heavy",
    gear_pick: "DOA Baitbuster Soft Bait",
  },
  {
    name: "Tarpon",
    description:
      "The silver king. When a 100-pounder goes airborne, time stops. Live crab or mullet under the bridges at night. This is the fish that makes grown men cry happy tears.",
    tag: "Inshore / Bridges",
    gear: "Heavy tackle",
    gear_pick: "Penn Slammer IV 6500 Spinning Reel",
  },
  {
    name: "Bonefish",
    description:
      "The grey ghost of the flats. Stalking them in ankle-deep water with a fly rod is as good as fishing gets. Patience and a quiet approach — that's the whole game.",
    tag: "Flats",
    gear: "Fly / Light tackle",
    gear_pick: "Orvis Clearwater 8wt Fly Rod",
  },
  {
    name: "Permit",
    description:
      "The PhD of flats fishing. A crab pattern on a fly rod, presented perfectly, and you'll still get refused nine out of ten times. But that tenth time? Pure magic.",
    tag: "Flats / Reefs",
    gear: "Fly / Medium tackle",
    gear_pick: "Umpqua Merkin Crab Fly",
  },
  {
    name: "Sheepshead",
    description:
      "Those teeth are no joke — they crunch barnacles and fiddler crabs like candy. Fish tight to the pilings with small hooks. Subtle bite, so stay sharp.",
    tag: "Inshore / Pilings",
    gear: "Medium tackle",
    gear_pick: "Owner Mosquito Hook Size 1",
  },
  {
    name: "Cobia",
    description:
      "Big, curious, and strong. Sight cast to them cruising near rays or buoys. A live eel or crab will get their attention. The fight is all muscle.",
    tag: "Nearshore / Inshore",
    gear: "Medium-heavy",
    gear_pick: "Shimano Saragosa 5000 Spinning Reel",
  },
  {
    name: "Triggerfish",
    description:
      "Tough little characters with a sneaky bite. Cut squid on a small hook, fished near the reef. Don't underestimate them — pound for pound, they punch above their weight.",
    tag: "Nearshore / Reefs",
    gear: "Medium tackle",
    gear_pick: "Gamakatsu Octopus Hook Size 2",
  },
  {
    name: "Red Snapper",
    description:
      "Drop a cut bait or live cigar minnow down to the structure and wait for that solid thump. Reel fast — they'll head straight for the rocks if you give 'em an inch.",
    tag: "Offshore / Reefs",
    gear: "Medium-heavy",
    gear_pick: "Penn Squall II Lever Drag Reel",
  },
  {
    name: "Grouper",
    description:
      "The brawlers of the deep reef. Heavy jig or live bait, and when they hit, you better be ready to horse them up before they hole up in a cave.",
    tag: "Offshore / Reefs",
    gear: "Heavy tackle",
    gear_pick: "Shimano Talica 16 Lever Drag",
  },
  {
    name: "Amberjack",
    description:
      "Reef donkeys. They live deep and pull like a truck. Vertical jig or live bait near the wrecks. Your arms will be sore and your smile will be permanent.",
    tag: "Offshore / Wrecks",
    gear: "Heavy tackle",
    gear_pick: "Shimano Butterfly Flat-Fall Jig 250g",
  },
  {
    name: "King Mackerel",
    description:
      "Speed machines. Slow-troll live bait with a wire leader or they'll slice right through. When they hit, the reel screams. Nothing beats a smoker king on the grill.",
    tag: "Nearshore / Offshore",
    gear: "Medium-heavy",
    gear_pick: "American Fishing Wire #7 Trolling Wire",
  },
  {
    name: "Spanish Mackerel",
    description:
      "Smaller cousins, but just as feisty. Cast a silver spoon into a school and hang on. Fast and fun — a great way to spend a morning.",
    tag: "Nearshore",
    gear: "Light tackle",
    gear_pick: "Clark Spoon Size 0",
  },
  {
    name: "Wahoo",
    description:
      "The fastest fish in the ocean. High-speed trolling with skirted lures or rigged ballyhoo. That first run will empty your spool if your drag isn't set right. Incredible eating.",
    tag: "Offshore / Deep water",
    gear: "Heavy trolling",
    gear_pick: "Rapala X-Rap Magnum 30 Trolling Lure",
  },
  {
    name: "Mahi-Mahi",
    description:
      "Find the weed lines and floating debris. These acrobats light up like neon when they're hooked. Best eating fish in the ocean — period.",
    tag: "Offshore",
    gear: "Medium tackle",
    gear_pick: "Williamson Wahoo Catcher Rigged Lure",
  },
  {
    name: "Yellowfin Tuna",
    description:
      "Speed demons. Fast boat and a strong back. Chunking or popping, when you bring one up, the whole crew cheers. I'm proud of you already.",
    tag: "Deep water",
    gear: "Heavy tackle",
    gear_pick: "Shimano Stella SW 8000 Spinning Reel",
  },
  {
    name: "Bigeye Tuna",
    description:
      "The night shift of tuna fishing. Deep dropping at the canyons after dark. These bruisers pull harder than yellowfin and the sashimi is out of this world.",
    tag: "Deep water / Canyons",
    gear: "Heavy stand-up",
    gear_pick: "Lindgren-Pitman S-1200 Electric Reel",
  },
  {
    name: "Bluefin Tuna",
    description:
      "The ultimate prize. These giants can top 1,000 pounds. Trolling or chunking at the canyons. Land one and you've earned your stripes for life.",
    tag: "Deep water / Canyons",
    gear: "Heavy stand-up",
    gear_pick: "Penn International VISX 50 Stand-Up Reel",
  },
  {
    name: "Swordfish",
    description:
      "Daytime deep dropping or nighttime drifting. A broadbill on the line is the fight of a lifetime. They jump, they dive, they test everything you've got.",
    tag: "Deep water",
    gear: "Heavy tackle",
    gear_pick: "Electralite 12V Deep Drop Rig Kit",
  },
  {
    name: "Marlin (Blue & White)",
    description:
      "Big game, big respect. Live bait or a good teaser spread. Stay calm and let the rod do the work. Catching one is a story you'll tell forever.",
    tag: "Offshore / Deep water",
    gear: "Heavy trolling",
    gear_pick: "Penn International VI 80W Two-Speed Reel",
  },
  {
    name: "Sailfish",
    description:
      "The most beautiful fish in the ocean. Kite fishing or slow-trolling live bait. When they light up and tail-walk across the surface, your jaw will drop.",
    tag: "Offshore",
    gear: "Medium-heavy",
    gear_pick: "SFE Kite Fishing Complete Kit",
  },
  {
    name: "Sharks",
    description:
      "From dockside bonnetheads to offshore makos — respect them all. Heavy leader, fresh bait, and patience. Tag and release when you can. They keep the ocean in balance.",
    tag: "Inshore to Offshore",
    gear: "Heavy tackle",
    gear_pick: "Mustad Demon Circle Hook 16/0",
  },
  {
    name: "Cod",
    description:
      "A Northeast classic. Jig the wrecks and hard bottom with diamond jigs or clam bait. Cold weather, cold water, hot coffee, and a cooler full of cod. That's a good day.",
    tag: "Nearshore / Wrecks",
    gear: "Medium-heavy",
    gear_pick: "AVA A27 Diamond Jig 8oz",
  },
  {
    name: "Tilefish",
    description:
      "Deep dropping in the canyons — 500 to 1,000 feet down. Clam or squid on circle hooks. Not glamorous, but the meat is sweet and buttery. Worth every crank.",
    tag: "Deep water / Canyons",
    gear: "Electric reel / Heavy",
    gear_pick: "Banax Kaigen 1000 Electric Reel",
  },
  {
    name: "Pacific Halibut",
    description:
      "Alaska's barn doors. Herring or octopus on big circle hooks on the bottom. When a 100-pounder comes up, the whole boat gets excited. Life-list fish.",
    tag: "Nearshore / Deep",
    gear: "Heavy tackle",
    gear_pick: "Mustad 39960D Circle Hook 14/0",
  },
  {
    name: "King Salmon (Chinook)",
    description:
      "The king of the Pacific. Trolling with downriggers or drifting eggs in the rivers. Chrome bright and full of fight. Smoke it or grill it — you can't go wrong.",
    tag: "Nearshore / Rivers",
    gear: "Medium-heavy",
    gear_pick: "Scotty 1106 Depthpower Electric Downrigger",
  },
  {
    name: "Silver Salmon (Coho)",
    description:
      "Acrobatic and aggressive. They'll hit spinners and spoons hard and go airborne. Great for fly rods too. A perfect fish for someone learning the salt.",
    tag: "Nearshore / Rivers",
    gear: "Medium tackle",
    gear_pick: "Blue Fox Vibrax Spinner 3/8oz",
  },
  {
    name: "Lingcod",
    description:
      "Ugly, toothy, and absolutely delicious. Jig the rocky bottom or send down a live bait. They're ambush predators — sometimes they grab your rockfish on the way up.",
    tag: "Nearshore / Rocky bottom",
    gear: "Medium-heavy",
    gear_pick: "Savage Gear 3D Minnow Swimbait 6\"",
  },
  {
    name: "Rockfish (Pacific)",
    description:
      "Dozens of species from copper to vermilion. Drop a shrimp fly or metal jig near the rocks. Some of the best fish tacos you'll ever eat come from these guys.",
    tag: "Nearshore / Reefs",
    gear: "Medium tackle",
    gear_pick: "Shrimp Fly Sabiki Rig Size 6",
  },
  {
    name: "Yellowtail",
    description:
      "California's prize. Live sardine on a flyline or iron jigs. When the school moves through, it's chaos in the best way. Fast, strong, and beautiful.",
    tag: "Nearshore / Offshore",
    gear: "Medium-heavy",
    gear_pick: "Salas 6X Jr. Iron Jig Blue/White",
  },
  {
    name: "White Sea Bass",
    description:
      "The ghost of the kelp beds. Live squid or sardines near the kelp line. Quiet boat, soft approach. Landing one is a real accomplishment on the West Coast.",
    tag: "Nearshore / Kelp",
    gear: "Medium-heavy",
    gear_pick: "Owner Mutu Light Circle Hook 4/0",
  },
  {
    name: "Black Cod (Sablefish)",
    description:
      "Deep water and cold currents. They're not flashy, but smoked sablefish is the best thing you'll ever eat. Worth the trip to Alaska for this alone.",
    tag: "Deep water",
    gear: "Heavy / Electric reel",
    gear_pick: "Daiwa Tanacom 750 Power Assist Reel",
  },
  {
    name: "Barracuda",
    description:
      "Fast, toothy, and fearless. Cast a shiny spoon near the surface and strip it fast. They'll chase down anything that looks like a fleeing baitfish.",
    tag: "Nearshore / Offshore",
    gear: "Medium tackle / Wire leader",
    gear_pick: "Krocodile Casting Spoon 2oz Chrome",
  },
];

export default function Saltwater() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-display text-4xl sm:text-5xl mb-4 flex items-center gap-4 text-ocean">
        <span>{"\uD83C\uDF0A"}</span> Saltwater & Deep Sea
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl mb-10 text-ocean/80">
        The ocean is a whole different beast, but the same rules apply: patience
        and respect. Here's what I've learned from the surf to the canyons.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {FISH.map((fish, i) => (
          <div
            key={fish.name}
            className={`bg-white rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl animate-fade-in-up animate-delay-${(i % 6 + 1) * 100}`}
          >
            <h3 className="font-display text-2xl sm:text-3xl mb-4 text-ocean">{fish.name}</h3>
            <p className="text-ocean/70 leading-relaxed mb-6">{fish.description}</p>
            <div className="text-xs bg-canvas px-4 py-2 rounded-2xl inline-block text-ocean/60">
              {fish.tag} &bull; {fish.gear}
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
