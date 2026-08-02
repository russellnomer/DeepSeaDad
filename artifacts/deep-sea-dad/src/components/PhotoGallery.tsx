import { useState, useCallback } from "react";

import halibut from "@assets/image_1775965433589.png";
import bass from "@assets/image_1775965445601.png";
import tuna from "@assets/image_1775965455693.png";
import grouper from "@assets/image_1775965468569.png";
import stripedBass from "@assets/image_1775965488524.png";
import rockfish from "@assets/image_1775965527907.png";
import snapper from "@assets/image_1775965544434.png";
import jack from "@assets/image_1775965568140.png";
import triggerfish from "@assets/image_1775965595065.png";
import dockShark from "@assets/image_1775965635699.png";
import wahooDock from "@assets/image_1775965653707.png";
import queenTrigger from "@assets/image_1775965688897.png";
import redSnapper from "@assets/image_1775965774348.png";
import groupCatch from "@assets/image_1775965795249.png";
import familyFish from "@assets/image_1775965861885.png";
import fighting from "@assets/image_1775965892188.png";
import sharkBuddy from "@assets/image_1775965924567.png";
import wahooMarina from "@assets/image_1775965976905.png";
import mahiMahi from "@assets/image_1775966010847.png";
import troutHaul from "@assets/image_1775966071376.png";
import bigTunaBoat from "@assets/image_1775966117383.png";
import porgy from "@assets/image_1775966215822.png";
import surfSelfie from "@assets/image_1775966230151.png";
import seaBass from "@assets/image_1775966256724.png";
import flounder from "@assets/image_1775966297030.png";
import jackBuddy from "@assets/image_1775966324242.png";
import youngRussell from "@assets/image_1775966354353.png";
import sunfish from "@assets/image_1775966410429.png";
import shadowMan from "@assets/image_1775966533722.png";
import flyRodLighthouse from "@assets/image_1775966606816.png";
import bluefishMouth from "@assets/image_1775966708752.png";
import flukePartyBoat from "@assets/image_1775966764305.png";
import boatRods from "@assets/image_1775966847556.png";
import pierBluefish from "@assets/image_1775966999080.png";
import marshCast from "@assets/image_1775967036134.png";
import lakeFamilyFish from "@assets/image_1775967067558.png";
import captreeWeighIn from "@assets/image_1775967096303.png";
import captRodFluke from "@assets/image_1775967118088.png";
import shoreStriper from "@assets/image_1775967151648.png";
import miniStriper from "@assets/image_1775967189303.png";
import duskFishing from "@assets/image_1775967240919.png";
import sunsetCouple from "@assets/image_1775967258058.png";
import walleyeStringer from "@assets/image_1775967363374.png";
import aluminumBoat from "@assets/image_1775967381238.png";
import lakePike from "@assets/image_1775967402555.png";
import pikeTwo from "@assets/image_1775967434267.png";
import bigFluke from "@assets/image_1775967461583.png";
import beachCatchVintage from "@assets/image_1775967498671.png";
import kidRussellStripers from "@assets/image_1775967515775.png";
import blueCrab from "@assets/image_1775967751206.png";
import flukeBuddy from "@assets/image_1775967791821.png";
import blackfishDouble from "@assets/image_1775967870082.png";
import zoeBluefish from "@assets/image_1775967895980.png";
import pufferHand from "@assets/image_1775967981667.png";
import aquariumSelfie from "@assets/image_1775968164509.png";
import boxfishDock from "@assets/image_1775968219601.png";
import tarponsSwimming from "@assets/image_1775968375364.png";
import tunaDeck from "@assets/image_1775968719912.png";
import bassSelfie from "@assets/image_1775968827284.png";
import bluegillSelfie from "@assets/image_1775968851901.png";
import daughterCatch from "@assets/image_1775968994340.png";
import pufferBoat from "@assets/image_1775969019521.png";
import flukeGloves from "@assets/image_1775969074328.png";
import triggerBoat from "@assets/image_1775969106011.png";
import pierSunset from "@assets/image_1775969143151.png";
import porgySpread from "@assets/image_1775969167995.png";
import alaskaLodge from "@assets/image_1775969246708.png";
import wahooPhoto from "@assets/image_1775970761018.png";
import zackBluefishKid from "@assets/image_1775970915213.png";
import dadDaughterBluegill from "@assets/Screenshot_2026-04-12_at_1.27.42_PM_1776023346402.png";
import dadDaughterBeach from "@assets/IMG_9674_1776023346402.jpeg";

const PHOTOS = [
  { src: tuna, alt: "Russell with a massive yellowfin tuna", caption: "Yellowfin Tuna", category: "saltwater" },
  { src: bass, alt: "Russell with a largemouth bass on a lily pad lake", caption: "Largemouth Bass", category: "freshwater" },
  { src: halibut, alt: "Russell holding a halibut in the Pacific Northwest", caption: "Pacific Halibut", category: "saltwater" },
  { src: grouper, alt: "Russell and a friend with a nice grouper", caption: "Grouper", category: "saltwater" },
  { src: wahooDock, alt: "Russell with a wahoo at the dock", caption: "Wahoo", category: "saltwater" },
  { src: jack, alt: "Russell holding a jack crevalle", caption: "Jack Crevalle", category: "saltwater" },
  { src: rockfish, alt: "Russell with a beautiful rockfish", caption: "Rockfish", category: "saltwater" },
  { src: snapper, alt: "Russell with a mutton snapper", caption: "Mutton Snapper", category: "saltwater" },
  { src: familyFish, alt: "Russell fishing with friends and family, holding a wahoo", caption: "Wahoo with the crew", category: "memories" },
  { src: stripedBass, alt: "Russell holding two striped bass at night", caption: "Striped Bass double", category: "saltwater" },
  { src: fighting, alt: "Russell fighting a fish on the open ocean", caption: "Fish on!", category: "memories" },
  { src: queenTrigger, alt: "Russell with a queen triggerfish", caption: "Queen Triggerfish", category: "saltwater" },
  { src: triggerfish, alt: "Russell at the dock with a triggerfish", caption: "Triggerfish", category: "saltwater" },
  { src: dockShark, alt: "Russell with a small shark caught from the dock at sunset", caption: "Dock shark at sunset", category: "saltwater" },
  { src: redSnapper, alt: "Russell with a bright red snapper", caption: "Red Snapper", category: "saltwater" },
  { src: groupCatch, alt: "Russell and friends with a haul of striped bass", caption: "The boys with stripers", category: "memories" },
  { src: sharkBuddy, alt: "Russell and a friend with a shark", caption: "Shark catch", category: "memories" },
  { src: wahooMarina, alt: "Russell with a wahoo at the marina", caption: "Wahoo", category: "saltwater" },
  { src: mahiMahi, alt: "Russell with a mahi-mahi at the marina", caption: "Mahi-Mahi", category: "saltwater" },
  { src: troutHaul, alt: "Russell and a friend showing off a trout haul with pelicans nearby", caption: "Trout haul", category: "memories" },
  { src: bigTunaBoat, alt: "The crew with a giant tuna on the Speedy Express II", caption: "Giant tuna on Speedy Express II", category: "memories" },
  { src: porgy, alt: "Russell with a porgy on a party boat", caption: "Porgy", category: "saltwater" },
  { src: surfSelfie, alt: "Russell surf fishing on the beach", caption: "Surf fishing", category: "memories" },
  { src: seaBass, alt: "Russell with a black sea bass", caption: "Black Sea Bass", category: "saltwater" },
  { src: flounder, alt: "Russell with a nice summer flounder", caption: "Summer Flounder", category: "saltwater" },
  { src: jackBuddy, alt: "Russell and a buddy with a big jack crevalle", caption: "Jack Crevalle with a buddy", category: "memories" },
  { src: youngRussell, alt: "Young Russell on the lake with a rod — the early days", caption: "The early days", category: "memories" },
  { src: sunfish, alt: "Russell with a sunfish caught from a bridge", caption: "Sunfish", category: "freshwater" },
  { src: shadowMan, alt: "Russell's shadow on the pavement — Fishing for Answers", caption: "Fishing for Answers", category: "memories" },
  { src: flyRodLighthouse, alt: "Russell with a fly rod at the lighthouse beach", caption: "Fly fishing at the lighthouse", category: "memories" },
  { src: bluefishMouth, alt: "Close-up of a bluefish showing its teeth on the boat", caption: "Bluefish teeth", category: "saltwater" },
  { src: flukePartyBoat, alt: "Russell with a big fluke on a party boat", caption: "Fluke on the party boat", category: "saltwater" },
  { src: boatRods, alt: "Russell on the boat ready with rods rigged up", caption: "Rods up, lines out", category: "memories" },
  { src: pierBluefish, alt: "Russell on the pier holding a bluefish in a sweater", caption: "Pier bluefish", category: "saltwater" },
  { src: marshCast, alt: "Russell casting from a dock into the marsh", caption: "Marsh casting", category: "freshwater" },
  { src: lakeFamilyFish, alt: "Russell fishing at the lake with the kids", caption: "Teaching the kids", category: "memories" },
  { src: captreeWeighIn, alt: "Russell and a buddy at the Captree State Park weigh-in", caption: "Captree weigh-in", category: "saltwater" },
  { src: captRodFluke, alt: "Russell with a fluke at Capt. Rod's dock", caption: "Fluke at Capt. Rod's", category: "saltwater" },
  { src: shoreStriper, alt: "Russell with a striped bass at the shore", caption: "Shore striper", category: "saltwater" },
  { src: miniStriper, alt: "Russell holding a small striped bass on the line", caption: "Little striper", category: "saltwater" },
  { src: duskFishing, alt: "Russell fishing from the boat at dusk", caption: "Dusk run", category: "memories" },
  { src: sunsetCouple, alt: "Russell and his partner on the boat at sunset", caption: "Sunset on the water", category: "memories" },
  { src: walleyeStringer, alt: "Young Russell with a walleye on a stringer", caption: "Walleye on the stringer", category: "freshwater" },
  { src: aluminumBoat, alt: "Russell and a friend in an aluminum boat on the lake", caption: "Tin boat days", category: "memories" },
  { src: lakePike, alt: "Young Russell with a northern pike on the lake", caption: "Northern Pike", category: "freshwater" },
  { src: pikeTwo, alt: "Russell admiring a pike catch on the lake", caption: "Pike number two", category: "freshwater" },
  { src: bigFluke, alt: "Russell with a doormat fluke", caption: "Doormat fluke", category: "saltwater" },
  { src: beachCatchVintage, alt: "Russell on the beach with a catch — vintage days", caption: "Beach fishing throwback", category: "memories" },
  { src: kidRussellStripers, alt: "Kid Russell sitting with giant striped bass on the lawn", caption: "Where it all started", category: "memories" },
  { src: blueCrab, alt: "Russell holding a blue crab on the pier at sunset", caption: "Blue crab at sunset", category: "saltwater" },
  { src: flukeBuddy, alt: "Russell and a buddy with a fluke on the boat", caption: "Fluke with the captain", category: "saltwater" },
  { src: blackfishDouble, alt: "Young Russell with two blackfish on a winter trip", caption: "Blackfish double", category: "saltwater" },
  { src: zoeBluefish, alt: "Russell and Zoë holding a sunfish together", caption: "Zoë's sunfish", category: "freshwater" },
  { src: pufferHand, alt: "A pufferfish puffed up in hand on the boat", caption: "Pufferfish", category: "saltwater" },
  { src: aquariumSelfie, alt: "Russell posing with a grouper at the aquarium", caption: "Aquarium vibes", category: "memories" },
  { src: boxfishDock, alt: "A spotted boxfish on the dock planks at night", caption: "Boxfish on the dock", category: "saltwater" },
  { src: tarponsSwimming, alt: "Tarpon swimming in the clear green water", caption: "Tarpon cruising", category: "saltwater" },
  { src: tunaDeck, alt: "A massive tuna on the deck of the charter boat", caption: "Tuna on deck", category: "saltwater" },
  { src: bassSelfie, alt: "Russell with a largemouth bass selfie", caption: "Largemouth selfie", category: "freshwater" },
  { src: bluegillSelfie, alt: "Russell with a beautiful bluegill on the line", caption: "Bluegill beauty", category: "freshwater" },
  { src: daughterCatch, alt: "Russell's daughter with her catch on the beach", caption: "Like father, like daughter", category: "memories" },
  { src: pufferBoat, alt: "Russell holding a pufferfish on the boat", caption: "Puffer on the boat", category: "saltwater" },
  { src: flukeGloves, alt: "Russell with a big fluke on the boat wearing gloves", caption: "Fluke with gloves", category: "saltwater" },
  { src: triggerBoat, alt: "Russell with a triggerfish by the fish finder", caption: "Triggerfish by the sonar", category: "saltwater" },
  { src: pierSunset, alt: "A friend with a catch on the pier at sunset", caption: "Pier fishing at sunset", category: "memories" },
  { src: porgySpread, alt: "A full spread of porgy lined up on the table", caption: "Porgy haul", category: "saltwater" },
  { src: alaskaLodge, alt: "Russell and a buddy at The Cedars Alaska fishing lodge with a stringer of salmon and halibut", caption: "Alaska lodge haul", category: "saltwater" },
  { src: wahooPhoto, alt: "Russell holding a wahoo at the marina", caption: "Wahoo catch", category: "saltwater" },
  { src: zackBluefishKid, alt: "Young Zack proudly holding a bluefish", caption: "Zack's first bluefish", category: "memories" },
  { src: dadDaughterBluegill, alt: "Russell and his daughter with a bluegill on the grass", caption: "Her first catch", category: "memories" },
  { src: dadDaughterBeach, alt: "Russell teaching his daughter to cast on the beach", caption: "Teaching her to cast", category: "memories" },
];

type Category = "all" | "saltwater" | "freshwater" | "memories";

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "saltwater", label: "Saltwater" },
  { id: "freshwater", label: "Freshwater" },
  { id: "memories", label: "Memories" },
];

export default function PhotoGallery() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.category === filter);

  const openLightbox = useCallback((idx: number) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  return (
    <div className="mt-16 sm:mt-20">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ocean mb-3">
          Years on the Water
        </h2>
        <p className="text-ocean/60 max-w-xl mx-auto">
          A lifetime of catches, memories, and moments that keep me coming back every dawn.
        </p>
      </div>

      <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === f.id
                ? "bg-ocean text-canvas shadow-md"
                : "bg-white text-ocean/70 border border-wood/15 hover:border-sunset/30 hover:text-ocean"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
        {filtered.map((photo, idx) => (
          <button
            key={photo.src}
            onClick={() => openLightbox(idx)}
            className="block w-full break-inside-avoid group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
              <span className="text-canvas text-sm sm:text-base font-medium">
                {photo.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-ocean/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-canvas/80 hover:text-canvas text-3xl sm:text-4xl z-10 focus:outline-none"
            aria-label="Close"
          >
            {"\u2715"}
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-canvas/60 hover:text-canvas text-4xl sm:text-5xl z-10 focus:outline-none"
            aria-label="Previous photo"
          >
            {"\u2039"}
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-canvas/60 hover:text-canvas text-4xl sm:text-5xl z-10 focus:outline-none"
            aria-label="Next photo"
          >
            {"\u203A"}
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            <p className="text-canvas mt-4 text-center text-lg font-display">
              {filtered[lightbox].caption}
            </p>
            <p className="text-canvas/50 text-sm mt-1">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
