import { useState, useMemo } from "react";

interface StateRegulation {
  name: string;
  abbreviation: string;
  type: "Freshwater" | "Saltwater" | "Both" | "Great Lakes";
  licenseUrl: string;
  freshwaterUrl: string;
  saltwaterUrl?: string;
}

const STATES: StateRegulation[] = [
  {
    name: "Alabama",
    abbreviation: "AL",
    type: "Both",
    licenseUrl: "https://www.outdooralabama.com/licenses/fishing-licenses",
    freshwaterUrl: "https://www.outdooralabama.com/freshwater-fishing/freshwater-fishing-regulations",
    saltwaterUrl: "https://www.outdooralabama.com/saltwater-fishing/saltwater-fishing-regulations",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    type: "Both",
    licenseUrl: "https://www.adfg.alaska.gov/index.cfm?adfg=license.main",
    freshwaterUrl: "https://www.adfg.alaska.gov/index.cfm?adfg=fishregulations.sportmain",
    saltwaterUrl: "https://www.adfg.alaska.gov/index.cfm?adfg=fishregulations.saltwater",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    type: "Freshwater",
    licenseUrl: "https://www.azgfd.com/license/",
    freshwaterUrl: "https://www.azgfd.com/fishing/regulations/",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    type: "Freshwater",
    licenseUrl: "https://www.agfc.com/en/licensing/",
    freshwaterUrl: "https://www.agfc.com/en/fishing/regulations/",
  },
  {
    name: "California",
    abbreviation: "CA",
    type: "Both",
    licenseUrl: "https://www.wildlife.ca.gov/Licensing/Fishing",
    freshwaterUrl: "https://www.wildlife.ca.gov/Fishing/Inland",
    saltwaterUrl: "https://www.wildlife.ca.gov/Fishing/Ocean",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    type: "Freshwater",
    licenseUrl: "https://cpw.state.co.us/buyapply/Pages/Fishing.aspx",
    freshwaterUrl: "https://cpw.state.co.us/thingstodo/Pages/FishingRegulations.aspx",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    type: "Both",
    licenseUrl: "https://portal.ct.gov/deep/fishing/general-information/fishing-licenses-and-permits",
    freshwaterUrl: "https://portal.ct.gov/deep/fishing/freshwater/freshwater-fishing",
    saltwaterUrl: "https://portal.ct.gov/deep/fishing/saltwater/saltwater-fishing-in-connecticut",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    type: "Both",
    licenseUrl: "https://dnrec.delaware.gov/fish-wildlife/licenses/",
    freshwaterUrl: "https://dnrec.delaware.gov/fish-wildlife/fishing/freshwater-fishing/",
    saltwaterUrl: "https://dnrec.delaware.gov/fish-wildlife/fishing/saltwater-fishing/",
  },
  {
    name: "Florida",
    abbreviation: "FL",
    type: "Both",
    licenseUrl: "https://myfwc.com/license/recreational/",
    freshwaterUrl: "https://myfwc.com/fishing/freshwater/regulations/",
    saltwaterUrl: "https://myfwc.com/fishing/saltwater/regulations/",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    type: "Both",
    licenseUrl: "https://georgiawildlife.com/licenses-permits-passes",
    freshwaterUrl: "https://georgiawildlife.com/fishing/regulations",
    saltwaterUrl: "https://georgiawildlife.com/fishing/regulations-saltwater",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    type: "Both",
    licenseUrl: "https://dlnr.hawaii.gov/dar/fishing/fishing-licenses/",
    freshwaterUrl: "https://dlnr.hawaii.gov/dar/fishing/freshwater-fishing/",
    saltwaterUrl: "https://dlnr.hawaii.gov/dar/fishing/marine-fishing/",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    type: "Freshwater",
    licenseUrl: "https://idfg.idaho.gov/licenses",
    freshwaterUrl: "https://idfg.idaho.gov/fish/rules",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    type: "Great Lakes",
    licenseUrl: "https://www.ifishillinois.org/profiles/LicenseInfo.php",
    freshwaterUrl: "https://www.ifishillinois.org/regulations/",
    saltwaterUrl: "https://www.ifishillinois.org/regulations/LakeMichigan.php",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    type: "Great Lakes",
    licenseUrl: "https://www.in.gov/dnr/fish-and-wildlife/fishing/fishing-licenses-and-trout-stamps/",
    freshwaterUrl: "https://www.in.gov/dnr/fish-and-wildlife/fishing/fishing-regulations/",
    saltwaterUrl: "https://www.in.gov/dnr/fish-and-wildlife/fishing/lake-michigan-fishing/",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    type: "Freshwater",
    licenseUrl: "https://www.iowadnr.gov/Fishing/Fishing-Licenses",
    freshwaterUrl: "https://www.iowadnr.gov/Fishing/Fishing-Regulations",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    type: "Freshwater",
    licenseUrl: "https://ksoutdoors.com/Fishing/Fishing-Licenses",
    freshwaterUrl: "https://ksoutdoors.com/Fishing/Fishing-Regulations",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    type: "Freshwater",
    licenseUrl: "https://fw.ky.gov/Fish/Pages/Fishing-Licenses-and-Permits.aspx",
    freshwaterUrl: "https://fw.ky.gov/Fish/Pages/Fishing-Regulations.aspx",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    type: "Both",
    licenseUrl: "https://www.wlf.louisiana.gov/page/recreational-fishing-licenses",
    freshwaterUrl: "https://www.wlf.louisiana.gov/page/freshwater-fishing-regulations",
    saltwaterUrl: "https://www.wlf.louisiana.gov/page/saltwater-fishing-regulations",
  },
  {
    name: "Maine",
    abbreviation: "ME",
    type: "Both",
    licenseUrl: "https://www.maine.gov/ifw/fishing-wildlife/fishing/licenses-permits.html",
    freshwaterUrl: "https://www.maine.gov/ifw/fishing-wildlife/fishing/laws-rules/",
    saltwaterUrl: "https://www.maine.gov/dmr/fisheries/recreational",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    type: "Both",
    licenseUrl: "https://dnr.maryland.gov/fisheries/Pages/licenses.aspx",
    freshwaterUrl: "https://dnr.maryland.gov/fisheries/Pages/regulations/freshwater.aspx",
    saltwaterUrl: "https://dnr.maryland.gov/fisheries/Pages/regulations/tidal.aspx",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    type: "Both",
    licenseUrl: "https://www.mass.gov/how-to/get-a-fishing-license",
    freshwaterUrl: "https://www.mass.gov/freshwater-fishing-regulations",
    saltwaterUrl: "https://www.mass.gov/saltwater-fishing-regulations",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    type: "Great Lakes",
    licenseUrl: "https://www.michigan.gov/dnr/buy-and-apply/fishing-license",
    freshwaterUrl: "https://www.michigan.gov/dnr/things-to-do/fishing/regulations",
    saltwaterUrl: "https://www.michigan.gov/dnr/things-to-do/fishing/great-lakes",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    type: "Great Lakes",
    licenseUrl: "https://www.dnr.state.mn.us/fishing/licenses.html",
    freshwaterUrl: "https://www.dnr.state.mn.us/fishing/regs.html",
    saltwaterUrl: "https://www.dnr.state.mn.us/fishing/lakesuperior.html",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    type: "Both",
    licenseUrl: "https://www.mdwfp.com/license/fishing-licenses/",
    freshwaterUrl: "https://www.mdwfp.com/fishing-boating/freshwater-fishing/fishing-regulations/",
    saltwaterUrl: "https://www.dmr.ms.gov/fishing-regulations/",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    type: "Freshwater",
    licenseUrl: "https://mdc.mo.gov/fishing/permits",
    freshwaterUrl: "https://mdc.mo.gov/fishing/regulations",
  },
  {
    name: "Montana",
    abbreviation: "MT",
    type: "Freshwater",
    licenseUrl: "https://fwp.mt.gov/buymt/licensing",
    freshwaterUrl: "https://fwp.mt.gov/fish/regulations",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    type: "Freshwater",
    licenseUrl: "https://outdoornebraska.gov/fishing-guide/permits/",
    freshwaterUrl: "https://outdoornebraska.gov/fishing-guide/regulations/",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    type: "Freshwater",
    licenseUrl: "https://www.ndow.org/licensing/",
    freshwaterUrl: "https://www.ndow.org/fish/regulations/",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    type: "Both",
    licenseUrl: "https://www.wildlife.nh.gov/fishing/licenses",
    freshwaterUrl: "https://www.wildlife.nh.gov/fishing/freshwater-fishing",
    saltwaterUrl: "https://www.wildlife.nh.gov/fishing/saltwater-fishing",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    type: "Both",
    licenseUrl: "https://www.nj.gov/dep/fgw/licenseinfo.htm",
    freshwaterUrl: "https://www.nj.gov/dep/fgw/fishregs.htm",
    saltwaterUrl: "https://www.nj.gov/dep/fgw/marinefish_regs.htm",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    type: "Freshwater",
    licenseUrl: "https://www.wildlife.state.nm.us/fishing/licenses-permits/",
    freshwaterUrl: "https://www.wildlife.state.nm.us/fishing/game-fish-rules-and-info/",
  },
  {
    name: "New York",
    abbreviation: "NY",
    type: "Both",
    licenseUrl: "https://dec.ny.gov/regulatory/permits-licenses/sporting-and-use/sporting",
    freshwaterUrl: "https://dec.ny.gov/things-to-do/freshwater-fishing/freshwater-fishing-regulations",
    saltwaterUrl: "https://dec.ny.gov/things-to-do/saltwater-fishing/recreational-fishing-regulations",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    type: "Both",
    licenseUrl: "https://www.ncwildlife.org/Licensing",
    freshwaterUrl: "https://www.ncwildlife.org/Fishing/Regulations",
    saltwaterUrl: "https://deq.nc.gov/about/divisions/marine-fisheries/rules-regulations-and-proclamations",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    type: "Freshwater",
    licenseUrl: "https://gf.nd.gov/licensing",
    freshwaterUrl: "https://gf.nd.gov/fishing/regulations",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    type: "Great Lakes",
    licenseUrl: "https://ohiodnr.gov/buy-and-apply/fishing-license",
    freshwaterUrl: "https://ohiodnr.gov/fishing/regulations",
    saltwaterUrl: "https://ohiodnr.gov/fishing/lake-erie-fishing",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    type: "Freshwater",
    licenseUrl: "https://www.wildlifedepartment.com/fishing/licenses",
    freshwaterUrl: "https://www.wildlifedepartment.com/fishing/regulations",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    type: "Both",
    licenseUrl: "https://www.dfw.state.or.us/resources/licenses_regs/",
    freshwaterUrl: "https://www.dfw.state.or.us/resources/fishing/",
    saltwaterUrl: "https://www.dfw.state.or.us/MRP/regulations/",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    type: "Great Lakes",
    licenseUrl: "https://www.fishandboat.com/Fish/FishingLicenses/Pages/default.aspx",
    freshwaterUrl: "https://www.fishandboat.com/Fish/FishingRegulations/Pages/default.aspx",
    saltwaterUrl: "https://www.fishandboat.com/Fish/FishingRegulations/Pages/LakeErieRegulations.aspx",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    type: "Both",
    licenseUrl: "https://dem.ri.gov/programs/fish-wildlife/freshwater-fisheries/licenses",
    freshwaterUrl: "https://dem.ri.gov/programs/fish-wildlife/freshwater-fisheries/regulations",
    saltwaterUrl: "https://dem.ri.gov/programs/fish-wildlife/marine-fisheries/recreational-saltwater-regulations",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    type: "Both",
    licenseUrl: "https://www.dnr.sc.gov/licenses.html",
    freshwaterUrl: "https://www.dnr.sc.gov/fishing/regulations.html",
    saltwaterUrl: "https://www.dnr.sc.gov/marine/regulations.html",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    type: "Freshwater",
    licenseUrl: "https://gfp.sd.gov/fishing-licenses/",
    freshwaterUrl: "https://gfp.sd.gov/fishing-regulations/",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    type: "Freshwater",
    licenseUrl: "https://www.tn.gov/twra/license-sales.html",
    freshwaterUrl: "https://www.tn.gov/twra/fishing/fishing-regulations.html",
  },
  {
    name: "Texas",
    abbreviation: "TX",
    type: "Both",
    licenseUrl: "https://tpwd.texas.gov/business/licenses/recreational/fishing/",
    freshwaterUrl: "https://tpwd.texas.gov/regulations/outdoor-annual/fishing/freshwater-fishing/",
    saltwaterUrl: "https://tpwd.texas.gov/regulations/outdoor-annual/fishing/saltwater-fishing/",
  },
  {
    name: "Utah",
    abbreviation: "UT",
    type: "Freshwater",
    licenseUrl: "https://wildlife.utah.gov/fishing/licenses.html",
    freshwaterUrl: "https://wildlife.utah.gov/fishing/guidebooks.html",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    type: "Freshwater",
    licenseUrl: "https://vtfishandwildlife.com/fish/fishing-licenses-and-laws",
    freshwaterUrl: "https://vtfishandwildlife.com/fish/fishing-regulations",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    type: "Both",
    licenseUrl: "https://dwr.virginia.gov/licenses/",
    freshwaterUrl: "https://dwr.virginia.gov/fishing/regulations/",
    saltwaterUrl: "https://mrc.virginia.gov/recreational-fishing/",
  },
  {
    name: "Washington",
    abbreviation: "WA",
    type: "Both",
    licenseUrl: "https://wdfw.wa.gov/licenses",
    freshwaterUrl: "https://wdfw.wa.gov/fishing/regulations",
    saltwaterUrl: "https://wdfw.wa.gov/fishing/regulations/saltwater",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    type: "Freshwater",
    licenseUrl: "https://wvdnr.gov/fishing/fishing-licenses/",
    freshwaterUrl: "https://wvdnr.gov/fishing/fishing-regulations/",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    type: "Great Lakes",
    licenseUrl: "https://dnr.wisconsin.gov/permits/fishing",
    freshwaterUrl: "https://dnr.wisconsin.gov/topic/Fishing/regulations",
    saltwaterUrl: "https://dnr.wisconsin.gov/topic/Fishing/greatlakes",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    type: "Freshwater",
    licenseUrl: "https://wgfd.wyo.gov/Fishing-and-Boating/Fishing-Licenses",
    freshwaterUrl: "https://wgfd.wyo.gov/Fishing-and-Boating/Fishing-Regulations",
  },
];

const TYPE_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  Freshwater: { label: "Freshwater", color: "text-emerald-700", bg: "bg-emerald-100" },
  Saltwater: { label: "Saltwater", color: "text-blue-700", bg: "bg-blue-100" },
  Both: { label: "Freshwater & Saltwater", color: "text-purple-700", bg: "bg-purple-100" },
  "Great Lakes": { label: "Freshwater & Great Lakes", color: "text-cyan-700", bg: "bg-cyan-100" },
};

const FILTER_OPTIONS = [
  { value: "all", label: "All States" },
  { value: "Both", label: "Saltwater & Freshwater" },
  { value: "Great Lakes", label: "Great Lakes" },
  { value: "Freshwater", label: "Freshwater Only" },
];

export default function FishingRegulations() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return STATES.filter((state) => {
      const matchesSearch =
        state.name.toLowerCase().includes(search.toLowerCase()) ||
        state.abbreviation.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" || state.type === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <section className="animate-fade-in">
      <h1 className="font-display text-4xl sm:text-5xl mb-4 flex items-center gap-4 text-ocean">
        <span>📋</span> Fishing Regulations by State
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl mb-6 text-ocean/80">
        Always fish legal, kiddo — it protects the water for your kids and mine.
        Every state has its own rules about what you can keep, when you can fish,
        and what license you need. I put this directory together so you can find
        your state's official regulations in one click. No excuses for not
        knowing the rules.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 max-w-2xl">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ocean/40 text-lg">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search by state name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-ocean/15 bg-white text-ocean placeholder:text-ocean/40 focus:outline-none focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20 transition-all"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-3 rounded-2xl border-2 border-ocean/15 bg-white text-ocean focus:outline-none focus:border-sunset/50 focus:ring-2 focus:ring-sunset/20 transition-all cursor-pointer"
        >
          {FILTER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-ocean/50 mb-6">
        Showing {filtered.length} of {STATES.length} states
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((state, i) => {
          const typeInfo = TYPE_CONFIG[state.type];
          return (
            <div
              key={state.abbreviation}
              className={`bg-white rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl flex flex-col animate-fade-in-up animate-delay-${(i % 6 + 1) * 100}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl sm:text-2xl text-ocean">
                  {state.name}
                </h3>
                <span className="text-xs font-medium text-ocean/40 bg-canvas px-2 py-1 rounded-full">
                  {state.abbreviation}
                </span>
              </div>

              <span
                className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${typeInfo.bg} ${typeInfo.color}`}
              >
                {typeInfo.label}
              </span>

              <div className="flex flex-col gap-2 mt-auto">
                <a
                  href={state.freshwaterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition-colors"
                >
                  🏞️ Freshwater Regulations
                  <span className="ml-auto text-xs opacity-60">↗</span>
                </a>
                {state.saltwaterUrl && (
                  <a
                    href={state.saltwaterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors"
                  >
                    🌊 {state.type === "Great Lakes" ? "Great Lakes Regulations" : "Saltwater Regulations"}
                    <span className="ml-auto text-xs opacity-60">↗</span>
                  </a>
                )}
                <a
                  href={state.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-sunset hover:bg-sunset/90 px-4 py-2.5 rounded-xl transition-colors"
                >
                  🪪 Get Your License
                  <span className="ml-auto text-xs opacity-60">↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl mb-2">🎣</p>
          <p className="text-ocean/60 text-lg">
            No states match your search. Try a different name or filter.
          </p>
        </div>
      )}

      <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border-l-4 border-sunset/50">
        <h3 className="font-display text-lg sm:text-xl text-ocean mb-2">
          A Note About Federal Waters
        </h3>
        <p className="text-ocean/70 text-sm leading-relaxed mb-4">
          Once you head past state waters (typically 3-9 miles offshore), federal
          regulations from NOAA Fisheries apply. Check the{" "}
          <a
            href="https://www.fisheries.noaa.gov/topic/recreational-fishing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sunset hover:underline font-medium"
          >
            NOAA Recreational Fishing page
          </a>{" "}
          for current federal rules on offshore species.
        </p>
        <p className="text-ocean/50 text-xs italic leading-relaxed">
          Disclaimer: Fishing regulations change frequently. The links above
          point to official state agency websites, but seasons, bag limits, and
          size limits may have been updated since this page was last reviewed.
          Always verify current regulations with your state's fish and wildlife
          agency before heading out. Deep Sea Dad is not responsible for outdated
          information — when in doubt, check with the officials. Fish legal,
          fish smart.
        </p>
      </div>
    </section>
  );
}
