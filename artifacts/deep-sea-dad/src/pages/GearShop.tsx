/**
 * Dad's Gear Shop — affiliate-linked product recommendations.
 * Revenue model: Amazon Associates commissions (3–8% per category).
 * FTC disclosure shown prominently at top per 16 CFR § 255 requirements.
 * NOTE: Replace affiliate tag "russellnomerc-20" with your actual Amazon Associates tag.
 * Top Picks section features high-ticket items first (highest commission $.
 */

interface GearItem {
  name: string;
  blurb: string;
  price: string;
  russellsPick: boolean;
  link: string; // all items must have a link — use Amazon search if no direct ASIN
}

// High-ticket "Top Picks" shown in hero section — highest commission $ per sale
const TOP_PICKS: GearItem[] = [
  {
    name: "Humminbird Helix 7 CHIRP GPS G4N",
    blurb: "If you're serious about finding fish, this is the upgrade. Side imaging, down imaging, GPS mapping — the whole package. I wish I'd bought this years earlier.",
    price: "$500–$700",
    russellsPick: true,
    link: "https://www.amazon.com/s?k=Humminbird+Helix+7+CHIRP+GPS+G4N&tag=russellnomerc-20",
  },
  {
    name: "YETI Tundra 45 Cooler",
    blurb: "Keeps fish cold and beer colder. Is it expensive? Yes. Will it outlast everything else you own? Also yes. Worth every penny — and then some.",
    price: "$275–$325",
    russellsPick: true,
    link: "https://www.amazon.com/s?k=YETI+Tundra+45+Cooler&tag=russellnomerc-20",
  },
  {
    name: "Costa Del Mar Fantail Sunglasses (580P)",
    blurb: "You can't catch what you can't see. These cut the glare like nothing else. Worth the investment for sight fishing on the flats — non-negotiable.",
    price: "$150–$200",
    russellsPick: true,
    link: "https://www.amazon.com/s?k=Costa+Del+Mar+Fantail+580P&tag=russellnomerc-20",
  },
  {
    name: "Garmin Striker Vivid 5cv Fish Finder",
    blurb: "Affordable and easy to read. ClearVü scanning shows you the structure and the fish. Changed my boat fishing game completely — perfect for beginners.",
    price: "$200–$280",
    russellsPick: true,
    link: "https://www.amazon.com/s?k=Garmin+Striker+Vivid+5cv&tag=russellnomerc-20",
  },
];

const GEAR_CATEGORIES: { title: string; icon: string; items: GearItem[] }[] = [
  {
    title: "Rods",
    icon: "🎣",
    items: [
      {
        name: "Penn Battalion II Surf Spinning Rod 10'",
        blurb: "This is the rod I grab when the bluefish are blitzing in the surf. Casts a mile and handles anything the ocean throws at you.",
        price: "$169.95",
        russellsPick: true,
        link: "https://amzn.to/4tGAyAP",
      },
      {
        name: "St. Croix Triumph Spinning Rod 7'",
        blurb: "A great all-around freshwater rod. Light enough for trout, strong enough for bass. If you only buy one rod, make it this one.",
        price: "$169.99",
        russellsPick: true,
        link: "https://amzn.to/41tUefm",
      },
      {
        name: "Ugly Stik GX2 Casting Rod 6'6\"",
        blurb: "Indestructible. I've loaned this to beginners, kids, and clumsy buddies. It always comes back in one piece. Can't kill it.",
        price: "$59.95",
        russellsPick: false,
        link: "https://amzn.to/4tM5kIL",
      },
      {
        name: "Orvis Clearwater Fly Rod 5wt 9'",
        blurb: "My go-to fly rod for trout streams. Smooth casting, forgiving for beginners, and it won't break the bank.",
        price: "$200–$250",
        russellsPick: true,
        link: "https://amzn.to/47SLVxd",
      },
      {
        name: "Penn Carnage III Boat Rod 6'6\"",
        blurb: "When you're dropping jigs on the wrecks for cod and sea bass, this rod has the backbone to haul 'em up.",
        price: "$150–$200",
        russellsPick: false,
        link: "https://amzn.to/4dJyF1G",
      },
    ],
  },
  {
    title: "Reels",
    icon: "⚙️",
    items: [
      {
        name: "Penn Battle III 4000 Spinning Reel",
        blurb: "Smooth drag, tough as nails, and affordable. This reel has landed more stripers than I can count. A workhorse.",
        price: "$80–$110",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Penn+Battle+III+4000+Spinning+Reel&tag=russellnomerc-20",
      },
      {
        name: "Shimano Stradic FL 2500 Spinning Reel",
        blurb: "Silky smooth for finesse fishing. When you need sensitivity for walleye or trout, this is the one.",
        price: "$180–$230",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Shimano+Stradic+FL+2500&tag=russellnomerc-20",
      },
      {
        name: "Penn Squall II Lever Drag Conventional",
        blurb: "My bottom fishing workhorse. Grouper, snapper, tilefish — this reel has the guts to pull 'em all up from the deep.",
        price: "$120–$160",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Penn+Squall+II+Lever+Drag&tag=russellnomerc-20",
      },
      {
        name: "Orvis Battenkill Disc Fly Reel",
        blurb: "Classic click-and-pawl feel with a modern disc drag. Looks beautiful on a bamboo rod too, if you're into that.",
        price: "$130–$170",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Orvis+Battenkill+Disc+Fly+Reel&tag=russellnomerc-20",
      },
    ],
  },
  {
    title: "Line & Leader",
    icon: "🧵",
    items: [
      {
        name: "PowerPro Spectra Braided Line 30lb",
        blurb: "Zero stretch means you feel everything. I run this on almost all my spinning reels. Tie a good leader knot and you're golden.",
        price: "$20–$30",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=PowerPro+Spectra+Braided+Line+30lb&tag=russellnomerc-20",
      },
      {
        name: "Berkley Trilene XL Mono 10lb",
        blurb: "Old faithful. Great for beginners and anyone who wants a reliable, affordable mono that just works.",
        price: "$5–$10",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Berkley+Trilene+XL+Mono+10lb&tag=russellnomerc-20",
      },
      {
        name: "Seaguar Blue Label Fluorocarbon 20lb",
        blurb: "Invisible underwater. I use this as leader material for everything from fluke to weakfish. Worth every penny.",
        price: "$15–$25",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Seaguar+Blue+Label+Fluorocarbon+20lb&tag=russellnomerc-20",
      },
      {
        name: "American Fishing Wire Surflon Micro Supreme",
        blurb: "When bluefish or pike are on the menu, wire leader is non-negotiable. This stuff is flexible and strong.",
        price: "$8–$15",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=American+Fishing+Wire+Surflon+Micro+Supreme&tag=russellnomerc-20",
      },
    ],
  },
  {
    title: "Terminal Tackle",
    icon: "🪝",
    items: [
      {
        name: "Owner Mutu Light Circle Hooks (Assorted)",
        blurb: "Circle hooks save fish lives. These are sharp out of the box and the offset is perfect for live bait. I use 'em for everything.",
        price: "$5–$12",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Owner+Mutu+Light+Circle+Hooks&tag=russellnomerc-20",
      },
      {
        name: "Bullet Weights Bank Sinker Assortment",
        blurb: "Keep a variety in the tackle box. 1oz to 8oz covers everything from bay fishing to deep water bottom bouncing.",
        price: "$8–$15",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Bullet+Weights+Bank+Sinker+Assortment&tag=russellnomerc-20",
      },
      {
        name: "Spro Power Swivels (Barrel & Snap)",
        blurb: "Don't lose fish to a cheap swivel. These are rated way above their size and they spin smooth. Details matter, kiddo.",
        price: "$4–$8",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Spro+Power+Swivels&tag=russellnomerc-20",
      },
      {
        name: "VMC Neon Moon Eye Jig Head 1/4oz",
        blurb: "Perfect for walleye and crappie. The glow finish gives you an edge in stained water or low light. Deadly effective.",
        price: "$4–$7",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=VMC+Neon+Moon+Eye+Jig+Head&tag=russellnomerc-20",
      },
    ],
  },
  {
    title: "Lures & Baits",
    icon: "🐟",
    items: [
      {
        name: "Rapala Original Floater F11",
        blurb: "If I had to pick one lure for the rest of my life, this might be it. Works in salt, works in fresh. The wobble is irresistible.",
        price: "$8–$12",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Rapala+Original+Floater+F11&tag=russellnomerc-20",
      },
      {
        name: "Berkley Gulp! Saltwater Swimming Mullet 4\"",
        blurb: "Smells like low tide and catches like crazy. Fluke, sea bass, weakfish — they all eat it. Keep a jar in the cooler.",
        price: "$8–$12",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Berkley+Gulp+Saltwater+Swimming+Mullet&tag=russellnomerc-20",
      },
      {
        name: "Kastmaster 2oz Chrome/Blue",
        blurb: "Cast it into a bluefish blitz and hold on. Simple, heavy, and it flies like a bullet. Every surf bag needs a few.",
        price: "$6–$10",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Kastmaster+2oz+Chrome+Blue&tag=russellnomerc-20",
      },
      {
        name: "Z-Man ElaZtech Ned Rig TRD 2.75\"",
        blurb: "The smallmouth bass magic bait. Float it on a mushroom head jig and drag it slow. They can't resist it.",
        price: "$5–$8",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Z-Man+ElaZtech+Ned+Rig+TRD&tag=russellnomerc-20",
      },
      {
        name: "SPRO Prime Bucktail Jig 1oz White",
        blurb: "Bucktails catch everything. Stripers, fluke, weakfish. Tip it with a strip of pork rind or Gulp and bounce the bottom.",
        price: "$5–$9",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=SPRO+Prime+Bucktail+Jig+White&tag=russellnomerc-20",
      },
    ],
  },
  {
    title: "Electronics",
    icon: "📱",
    items: [
      {
        name: "Garmin Striker Vivid 5cv Fish Finder",
        blurb: "Affordable and easy to read. ClearVü scanning shows you the structure and the fish. Changed my boat fishing game completely.",
        price: "$200–$280",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Garmin+Striker+Vivid+5cv&tag=russellnomerc-20",
      },
      {
        name: "Humminbird Helix 7 CHIRP GPS G4N",
        blurb: "If you're serious about finding fish, this is the upgrade. Side imaging, down imaging, GPS mapping — the whole package.",
        price: "$500–$700",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Humminbird+Helix+7+CHIRP+GPS+G4N&tag=russellnomerc-20",
      },
    ],
  },
  {
    title: "Apparel & Accessories",
    icon: "🧢",
    items: [
      {
        name: "Costa Del Mar Fantail Sunglasses (580P)",
        blurb: "You can't catch what you can't see. These cut the glare like nothing else. Worth the investment for sight fishing on the flats.",
        price: "$150–$200",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Costa+Del+Mar+Fantail+Sunglasses+580P&tag=russellnomerc-20",
      },
      {
        name: "AFTCO Fishing Performance Shirt (UPF 50+)",
        blurb: "Sun protection that actually breathes. I wear these all summer on the boat. My dermatologist is finally happy with me.",
        price: "$35–$55",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=AFTCO+Fishing+Performance+Shirt+UPF+50&tag=russellnomerc-20",
      },
      {
        name: "Cuda Titanium Bonded Fishing Pliers 7.5\"",
        blurb: "Saltwater-proof, comfortable grip, built-in cutter. I've tried dozens of pliers and these are the ones I keep coming back to.",
        price: "$25–$40",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=Cuda+Titanium+Bonded+Fishing+Pliers&tag=russellnomerc-20",
      },
      {
        name: "YETI Tundra 45 Cooler",
        blurb: "Keeps fish cold and beer colder. Is it expensive? Yes. Will it outlast everything else you own? Also yes. Worth it.",
        price: "$275–$325",
        russellsPick: true,
        link: "https://www.amazon.com/s?k=YETI+Tundra+45+Cooler&tag=russellnomerc-20",
      },
      {
        name: "Simms G3 Guide Wading Boot",
        blurb: "When you're wading cold trout streams, good boots matter. These grip like glue and keep your feet dry. Your back will thank you.",
        price: "$180–$230",
        russellsPick: false,
        link: "https://www.amazon.com/s?k=Simms+G3+Guide+Wading+Boot&tag=russellnomerc-20",
      },
    ],
  },
];

export default function GearShop() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-display text-4xl sm:text-5xl mb-4 flex items-center gap-4 text-ocean">
        <span>🛒</span> Dad's Gear Shop
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl mb-4 text-ocean/80">
        These are the rods, reels, lures, and gear I actually use and trust.
        No sponsorships, no gimmicks — just what works on the water.
      </p>
      {/* FTC required disclosure — Amazon Associates program */}
      <p className="max-w-2xl text-sm mb-10 text-ocean/50 italic">
        As an Amazon Associate, I earn from qualifying purchases. When you buy
        through these links, it helps support the site at no extra cost to you.
      </p>

      {/* Top Picks hero — highest-ticket items shown first for maximum commission $ */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sunset text-2xl">⭐</span>
          <h2 className="font-display text-2xl sm:text-3xl text-ocean">Dad's Top Picks</h2>
          <span className="text-xs bg-sunset text-white px-3 py-1 rounded-full font-bold ml-1">Russell's Favorites</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOP_PICKS.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-ocean to-ocean/80 rounded-3xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 text-white"
            >
              <div className="text-xs uppercase tracking-widest text-sunset font-bold mb-3">⭐ Russell's Pick</div>
              <h3 className="font-display text-lg mb-2 flex-1 leading-snug">{item.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">"{item.blurb}"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white/80">{item.price}</span>
                <span className="text-xs bg-sunset text-white px-3 py-1.5 rounded-full font-semibold group-hover:bg-sunset/80 transition-colors">
                  Buy on Amazon →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Full gear shop by category */}
      <div className="space-y-12">
        {GEAR_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h2 className="font-display text-2xl sm:text-3xl mb-6 text-ocean flex items-center gap-3">
              <span className="text-3xl">{category.icon}</span>
              {category.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.items.map((item, i) => (
                <div
                  key={item.name}
                  className={`bg-white rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl animate-fade-in-up animate-delay-${(i % 6 + 1) * 100} relative`}
                >
                  {item.russellsPick && (
                    <div className="absolute -top-3 right-4">
                      <span className="text-xs font-bold text-white bg-sunset px-3 py-1 rounded-full shadow-md">
                        Russell's Pick
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-xl sm:text-2xl mb-3 text-ocean pr-4">
                    {item.name}
                  </h3>
                  <p className="text-ocean/70 leading-relaxed text-sm mb-4">
                    "{item.blurb}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-ocean/60 bg-canvas px-3 py-1 rounded-full">
                      {item.price}
                    </span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-white bg-sunset hover:bg-sunset/90 px-4 py-2 rounded-full transition-colors"
                    >
                      Check Price &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
