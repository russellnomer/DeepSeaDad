import russellPhoto from "@assets/image_1775971611836_no_bg.png";
import captainBadge from "@assets/image_1775965037017.png";
import rodWallPortrait from "@assets/IMG_8353_1776357639246.jpeg";
import PhotoGallery from "@/components/PhotoGallery";

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-full bg-ocean/10 hover:bg-sunset text-ocean hover:text-canvas flex items-center justify-center transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sunset hover:text-sunset/80 underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  );
}

const CAPTAINS = [
  {
    name: "Captain Bouncer Smith",
    note: "IGFA Legendary Captain. Bouncer taught me more about reading the water than anyone. He's retired now, but his legacy runs deep.",
    link: "https://igfa.org/legendary-captains-crew-bouncer-smith/",
    linkLabel: "IGFA Hall of Fame",
  },
  {
    name: "Captain Abie",
    note: "Took the helm after Bouncer retired and runs Go Hard Fishing out of South Florida. Still putting anglers on fish every day.",
    link: "https://www.gohardfishing.com/",
    linkLabel: "Go Hard Fishing",
  },
  {
    name: "Captain Russell",
    note: "A true Long Island legend. Countless trips together chasing whatever was biting.",
    link: "https://liveliner.net/",
    linkLabel: "Liveliner Charters",
  },
  {
    name: 'Captain Arnold "Speedy" Hubert',
    note: "I was the webmaster for his boat for many years. Speedy knew every wreck and reef like the back of his hand. Thrilled to see the Peconic Star Fleet return to Greenport for the 2026 season — go fish with them!",
    link: "https://peconicstarfishing.com/about/",
    linkLabel: "Peconic Star Fleet",
  },
  {
    name: "Sonny Campbell",
    note: "An unforgettable fishing experience in Alaska. Last I heard, Sonny's retired now — but the memories of those salmon runs will last forever.",
    link: "https://www.alaska.org/detail/sonny-campbell-fishing-charters#about",
    linkLabel: "Sonny Campbell Charters",
  },
];

export default function About() {
  return (
    <section className="animate-fade-in">
      <div className="grid md:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sunset/20 to-ocean/10 rounded-3xl transform rotate-2" />
            <div className="relative z-10 rounded-3xl shadow-2xl border-8 border-wood overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#e07a3f]/30 via-[#0b1f3a]/40 to-[#0b1f3a]/80">
              <img
                src={russellPhoto}
                alt="Russell Nomer - the real Deep Sea Dad"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-20">
              <img
                src={captainBadge}
                alt="Deep Sea Dad badge"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-xl border-4 border-canvas"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-7 mt-8 md:mt-0">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 text-ocean">
            Hi, I'm Russell.
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-6 sm:mb-8 text-ocean/80">
            Most folks know me as Deep Sea Dad. Been out on the water since I was
            a little guy. Nothing beats handing a rod to someone new and watching
            their eyes light up when they feel that first tug.
          </p>
          <p className="text-xl sm:text-2xl leading-relaxed text-ocean/80">
            I'm patient. I'm proud of every beginner who tries. And I still get
            excited every single time I see a fish break the surface. Teaching
            and mentoring is what drives me — come fish with me anytime, kiddo.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-sunset rounded-full mr-3" />
              Decades on the water
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-sunset rounded-full mr-3" />
              Passionate about teaching & mentoring
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-sunset rounded-full mr-3" />
              Still learning every trip
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-wood font-semibold mb-3">Follow the Adventure</p>
            <div className="flex gap-3">
              <SocialLink href="https://youtube.com/@russellnomermusic" label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </SocialLink>
              <SocialLink href="https://instagram.com/russellnomer" label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </SocialLink>
              <SocialLink href="https://www.facebook.com/share/1BH6KvnPFw/?mibextid=wwXIfr" label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </SocialLink>
              <SocialLink href="https://tiktok.com/@russellnomermusic" label="TikTok">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </SocialLink>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-2xl p-6 border border-wood/10">
            <p className="uppercase text-xs tracking-widest text-wood mb-3 font-semibold">
              Russell's Philosophy
            </p>
            <blockquote className="text-lg italic text-ocean/80 leading-relaxed">
              "The best fishing advice I ever got was from my own dad: 'It ain't
              about the fish, son. It's about the quiet.' That stuck with me my
              whole life. I hope it sticks with you too."
            </blockquote>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <h2 className="font-display text-3xl sm:text-4xl text-ocean mb-3 text-center">
          My Fishing Journey
        </h2>
        <p className="text-ocean/60 max-w-2xl mx-auto text-center mb-10">
          From a kid on a bike chasing bluegill to fishing offshore with legendary captains — here's how I got here.
        </p>

        <ol className="max-w-3xl mx-auto space-y-8 list-none p-0 m-0">
          <li className="relative pl-8 border-l-4 border-sunset/30">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-sunset rounded-full border-4 border-canvas" aria-hidden="true" />
            <h3 className="font-display text-xl sm:text-2xl text-ocean mb-2">The Early Days</h3>
            <p className="text-ocean/70 leading-relaxed">
              I grew up in Horseheads, New York, and I can't remember a time when I wasn't fishing.
              As a kid, I'd hop on my bike and ride to every pond, creek, and stream I could find.
              My dad would take us up to Canada to fish The Thousand Islands and The Rideau River — those
              were some of the best trips of my childhood. We'd also hit The Finger Lakes, Catherine Creek,
              and The Chemung River. That's where I fell in love with the water.
            </p>
          </li>

          <li className="relative pl-8 border-l-4 border-sunset/30">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-sunset rounded-full border-4 border-canvas" aria-hidden="true" />
            <h3 className="font-display text-xl sm:text-2xl text-ocean mb-2">Jersey Days</h3>
            <p className="text-ocean/70 leading-relaxed">
              When the family moved to Wyckoff, New Jersey, I didn't skip a beat. I found fishing
              spots all over the state — freshwater ponds and rivers, and then saltwater at the
              beaches, the shores, and the party boats. That's when I got my first real taste of
              the ocean, and there was no going back.
            </p>
          </li>

          <li className="relative pl-8 border-l-4 border-sunset/30">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-sunset rounded-full border-4 border-canvas" aria-hidden="true" />
            <h3 className="font-display text-xl sm:text-2xl text-ocean mb-2">Long Island & Beyond</h3>
            <p className="text-ocean/70 leading-relaxed">
              After college, I settled in Bethpage, New York, and Long Island became my home
              water. I spent years finding every spot, every boat, every run. From the surf to
              the canyons, from the bays to the wrecks — I fished it all. I also had an
              unforgettable trip to Alaska with{" "}
              <ExternalLink href="https://www.alaska.org/detail/sonny-campbell-fishing-charters#about">
                Sonny Campbell
              </ExternalLink>
              {" "}— salmon runs and halibut that'll make your arms sore just thinking about it.
            </p>
          </li>

          <li className="relative pl-8 border-l-4 border-sunset/30">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-sunset rounded-full border-4 border-canvas" aria-hidden="true" />
            <h3 className="font-display text-xl sm:text-2xl text-ocean mb-2">A Lifetime on the Water</h3>
            <p className="text-ocean/70 leading-relaxed">
              I cannot remember a time when fishing was not my happy place — a way to connect
              with the outdoors, clear my head, and recharge my soul. Whether I'm teaching
              my kids to cast, chasing bluefish in the surf, or dropping jigs on the wrecks,
              every trip reminds me why I love this. I'm proud to fish with rods
              from brands I believe in, like{" "}
              <ExternalLink href="https://www.starrods.com/">Star Rods</ExternalLink>
              {" "}(
              <ExternalLink href="https://www.instagram.com/starrods">@starrods</ExternalLink>
              ) — a company that builds gear as tough and honest as the anglers who use it.
            </p>
          </li>
        </ol>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-wood/10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-square md:aspect-auto md:min-h-[400px] overflow-hidden">
              <img
                src={rodWallPortrait}
                alt="Russell smiling in front of his wall of fishing rods"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-wood font-semibold mb-3">
                Where the Magic Happens
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-ocean mb-4">
                Dad's Rod Wall
              </h3>
              <p className="text-ocean/70 leading-relaxed mb-3">
                Every rod back there has a story — a fish, a trip, a kid who caught
                their first one with it. Light spinning setups for fluke and porgy,
                heavier conventionals for the wrecks, and a few old favorites I'll
                never retire.
              </p>
              <p className="text-ocean/70 leading-relaxed italic">
                Pick the right tool for the job, take care of your gear, and it'll
                take care of you. That's the deal, kiddo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <h2 className="font-display text-3xl sm:text-4xl text-ocean mb-3 text-center">
          Captains & Mentors
        </h2>
        <p className="text-ocean/60 max-w-2xl mx-auto text-center mb-10">
          No angler gets here alone. These are the captains who shaped me, taught me,
          and put me on fish when I needed it most.
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto list-none p-0 m-0">
          {CAPTAINS.map((captain, i) => (
            <li
              key={captain.name}
              className={`bg-white rounded-2xl p-6 border border-wood/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 animate-fade-in-up animate-delay-${(i % 6 + 1) * 100}`}
            >
              <h3 className="font-display text-lg sm:text-xl text-ocean mb-2">
                {captain.name}
              </h3>
              <p className="text-ocean/70 text-sm leading-relaxed mb-3">
                {captain.note}
              </p>
              <a
                href={captain.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sunset hover:text-sunset/80 transition-colors"
              >
                {captain.linkLabel} <span aria-hidden="true">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <PhotoGallery />
    </section>
  );
}
