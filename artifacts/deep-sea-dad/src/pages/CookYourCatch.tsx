import { useState } from "react";
import RECIPES from "@/data/recipes";
import type { Recipe } from "@/data/recipes";

type Filter = "all" | "freshwater" | "saltwater";

function RecipeCard({ recipe, index }: { recipe: Recipe; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden transition-all duration-200 hover:shadow-xl animate-fade-in-up animate-delay-${(index % 6 + 1) * 100}`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 cursor-pointer"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl sm:text-4xl">{recipe.emoji}</span>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-ocean">
                  {recipe.species}
                </h3>
                <span
                  className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                    recipe.source === "freshwater"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {recipe.source}
                </span>
              </div>
            </div>
            <p className="text-ocean/60 text-sm mt-2 font-medium">
              {recipe.cookingMethod}
            </p>
          </div>
          <span
            className={`text-ocean/40 text-xl transition-transform duration-200 mt-2 ${expanded ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </div>
      </button>

      {expanded && (
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 animate-fade-in space-y-6">
          <div className="bg-canvas rounded-2xl p-4 sm:p-5">
            <h4 className="font-display text-lg text-ocean flex items-center gap-2 mb-2">
              <span>🔪</span> Cleaning & Prep
            </h4>
            <p className="text-ocean/70 text-sm leading-relaxed">
              {recipe.cleaningTips}
            </p>
          </div>

          <div className="bg-canvas rounded-2xl p-4 sm:p-5">
            <h4 className="font-display text-lg text-ocean flex items-center gap-2 mb-2">
              <span>🐟</span> Whole Fish vs. Fillets
            </h4>
            <p className="text-ocean/70 text-sm leading-relaxed">
              {recipe.wholeFishVsFillet}
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl text-ocean mb-3 flex items-center gap-2">
              <span>🍳</span> {recipe.cookingMethod}
            </h4>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-canvas rounded-2xl p-4 sm:p-5">
                <h5 className="font-semibold text-ocean text-sm uppercase tracking-wide mb-2">
                  What You Need
                </h5>
                <ul className="space-y-1">
                  {recipe.ingredients.map((item, i) => (
                    <li
                      key={i}
                      className="text-ocean/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-sunset mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-canvas rounded-2xl p-4 sm:p-5">
                <h5 className="font-semibold text-ocean text-sm uppercase tracking-wide mb-2">
                  How to Cook It
                </h5>
                <ol className="space-y-2">
                  {recipe.instructions.map((step, i) => (
                    <li
                      key={i}
                      className="text-ocean/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-sunset font-bold text-xs mt-0.5 shrink-0">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-sunset/10 border-2 border-sunset/20 rounded-2xl p-4 sm:p-5">
            <h4 className="font-display text-lg text-sunset flex items-center gap-2 mb-2">
              <span>👨‍🦳</span> Dad Says...
            </h4>
            <p className="text-ocean/80 text-sm leading-relaxed italic">
              "{recipe.dadSays}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CookYourCatch() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? RECIPES
      : RECIPES.filter((r) => r.source === filter);

  const freshwaterCount = RECIPES.filter((r) => r.source === "freshwater").length;
  const saltwaterCount = RECIPES.filter((r) => r.source === "saltwater").length;

  return (
    <section className="animate-fade-in">
      <h1 className="font-display text-4xl sm:text-5xl mb-4 flex items-center gap-4 text-ocean">
        <span>🍽️</span> Cook Your Catch
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl mb-6 text-ocean/80">
        You caught it, you cleaned it, now let's cook it right. Every fish
        deserves respect on the plate — here's how Dad does it, from cleaning
        hacks to the last bite.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            filter === "all"
              ? "bg-ocean text-canvas shadow-md"
              : "bg-white text-ocean/70 hover:bg-ocean/10"
          }`}
        >
          All Species ({RECIPES.length})
        </button>
        <button
          onClick={() => setFilter("freshwater")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            filter === "freshwater"
              ? "bg-emerald-600 text-white shadow-md"
              : "bg-white text-ocean/70 hover:bg-emerald-50"
          }`}
        >
          Freshwater ({freshwaterCount})
        </button>
        <button
          onClick={() => setFilter("saltwater")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            filter === "saltwater"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-ocean/70 hover:bg-blue-50"
          }`}
        >
          Saltwater ({saltwaterCount})
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        {filtered.map((recipe, i) => (
          <RecipeCard key={recipe.species} recipe={recipe} index={i} />
        ))}
      </div>

      <div className="mt-12 bg-sunset/10 border-2 border-sunset/20 rounded-3xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
        <div className="text-4xl mb-3">👨‍🦳</div>
        <h3 className="font-display text-2xl text-ocean mb-3">
          Dad's Universal Rule
        </h3>
        <p className="text-ocean/80 leading-relaxed italic">
          "Every fish has bones. Every single one. No matter how careful you are
          with the knife, no matter how clean the fillet looks — slow down when
          you eat. Chew carefully. Feel each bite. Good food deserves your full
          attention, and a bone in your throat will ruin an otherwise perfect
          meal. Eat slow, watch for bones, and enjoy every bite. I'm proud of
          you for cooking what you caught."
        </p>
      </div>
    </section>
  );
}
