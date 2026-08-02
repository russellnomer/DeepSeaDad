export interface Recipe {
  species: string;
  source: "freshwater" | "saltwater";
  emoji: string;
  cleaningTips: string;
  wholeFishVsFillet: string;
  cookingMethod: string;
  ingredients: string[];
  instructions: string[];
  dadSays: string;
}

const RECIPES: Recipe[] = [
  {
    species: "Largemouth Bass",
    source: "freshwater",
    emoji: "\uD83E\uDE9D",
    cleaningTips:
      "Scale 'em right away — bass scales get tough once they dry. Use the back of your knife if you don't have a scaler. Gut and rinse in cold water. Keep the skin on for pan-frying — it crisps up beautifully.",
    wholeFishVsFillet:
      "Fillet these guys. Bass fillets are thick and forgiving, perfect for learning your knife work. But don't throw away the carcass — toss it in a pot with onion and celery for fish stock.",
    cookingMethod: "Pan-Fried Bass Fillets",
    ingredients: [
      "2 bass fillets, skin on",
      "1/2 cup cornmeal",
      "1/4 cup flour",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "Salt and pepper",
      "2 tbsp butter",
      "1 lemon, cut into wedges",
    ],
    instructions: [
      "Pat fillets dry with paper towels — this is the secret to a good crust.",
      "Mix cornmeal, flour, garlic powder, paprika, salt, and pepper in a shallow dish.",
      "Press fillets into the coating, both sides.",
      "Heat butter in a cast iron skillet over medium-high heat until it just starts to foam.",
      "Lay fillets skin-side up and cook 3–4 minutes until golden.",
      "Flip carefully and cook another 3 minutes.",
      "Squeeze lemon over top and serve hot. That's it. Simple is best.",
    ],
    dadSays:
      "Eat slow, kiddo. Bass have small pin bones along the lateral line — run your finger down the fillet before you bite and you'll feel 'em. Pull 'em out with pliers or just eat carefully. No rush at the table.",
  },
  {
    species: "Rainbow Trout",
    source: "freshwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Trout are delicate — handle 'em gently. Gut immediately and keep on ice. The slime coat comes off easy under running water. Leave the head on if you're cooking whole — trust me on this one.",
    wholeFishVsFillet:
      "Cook these whole whenever you can. A whole trout on the grill or in a pan is easier than filleting and you get every bit of meat. The bones lift right out after cooking. Filleting a small trout wastes half the fish.",
    cookingMethod: "Whole Grilled Trout with Herbs",
    ingredients: [
      "2 whole rainbow trout, gutted and cleaned",
      "4 sprigs fresh dill or thyme",
      "1 lemon, thinly sliced",
      "2 cloves garlic, sliced",
      "2 tbsp olive oil",
      "Salt and pepper",
      "Aluminum foil",
    ],
    instructions: [
      "Score the fish with 3 diagonal cuts on each side — helps it cook even.",
      "Rub olive oil all over, inside and out. Season with salt and pepper.",
      "Stuff the cavity with lemon slices, garlic, and herbs.",
      "Wrap loosely in foil or place directly on a well-oiled grill grate.",
      "Grill over medium heat 5–6 minutes per side.",
      "The meat should flake easily and the bones will lift right out in one piece.",
      "Serve on the foil — less dishes, more fishing time.",
    ],
    dadSays:
      "Trout bones are your friends if you cook it whole — the spine and ribs come out in one clean pull. But the little ones near the belly? Take your time. No fish is worth choking over. Chew slow and enjoy.",
  },
  {
    species: "Channel Catfish",
    source: "freshwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Watch those spines — dorsal and pectoral fins will stick you good. Use pliers to grip and a sharp knife to skin. Catfish don't have scales, so you're skinning, not scaling. Nail the head to a board and pull the skin off with pliers like peeling a glove.",
    wholeFishVsFillet:
      "Fillet these unless they're small. Small ones you can fry whole after skinning and gutting. The belly meat on a big catfish is the best part — don't trim it off like most people do. That's where the flavor lives.",
    cookingMethod: "Southern Fried Catfish",
    ingredients: [
      "2 lbs catfish fillets",
      "1 cup yellow cornmeal",
      "1/2 cup flour",
      "1 tsp cayenne pepper",
      "1 tsp onion powder",
      "Salt and black pepper",
      "1 cup buttermilk",
      "Vegetable oil for frying",
    ],
    instructions: [
      "Soak fillets in buttermilk for 30 minutes — takes out any muddy taste.",
      "Mix cornmeal, flour, cayenne, onion powder, salt, and pepper.",
      "Heat oil to 350°F in a deep skillet or Dutch oven — about an inch deep.",
      "Pull fillets from buttermilk, shake off excess, dredge in cornmeal mix.",
      "Fry 4–5 minutes per side until golden and crispy.",
      "Drain on paper towels or a wire rack.",
      "Serve with coleslaw and hush puppies if you really want to do it right.",
    ],
    dadSays:
      "Catfish bones are big and easy to spot, but they hide in the thick part of the fillet. Cut your pieces bite-sized before you eat and check each one. A bone in a piece of fried catfish can ruin your whole evening.",
  },
  {
    species: "Walleye",
    source: "freshwater",
    emoji: "\uD83D\uDC7B",
    cleaningTips:
      "Walleye have a perfect fillet structure — two clean boneless fillets if you do it right. Use a flexible fillet knife and follow the backbone. Remove the Y-bones by making a shallow V-cut along the lateral line. Keep everything ice cold.",
    wholeFishVsFillet:
      "Always fillet walleye. They're built for it — clean, boneless fillets every time. The cheeks are the hidden treasure though. Pop those out with a spoon — two little medallions of the best fish meat you'll ever taste. Don't waste 'em.",
    cookingMethod: "Beer-Battered Walleye",
    ingredients: [
      "1.5 lbs walleye fillets",
      "1 cup flour",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "1 cup cold beer (lager works best)",
      "Oil for deep frying",
      "Tartar sauce for serving",
      "Lemon wedges",
    ],
    instructions: [
      "Cut fillets into 3-inch pieces. Pat dry.",
      "Mix flour, baking powder, and salt. Pour in cold beer and stir until just combined — lumps are fine.",
      "Heat oil to 375°F.",
      "Dip fillets in batter, let excess drip off.",
      "Fry 3–4 minutes until deep golden brown.",
      "Don't overcrowd the pot — cook in batches.",
      "Drain on a rack, hit with a pinch of salt while still hot. Serve with tartar and lemon.",
    ],
    dadSays:
      "Walleye is one of the cleanest-eating fish you'll find. But if you rushed the filleting and left a Y-bone in there, you'll know when you bite down. Always run your fingers over the fillet before battering. Slow hands save teeth.",
  },
  {
    species: "Crappie",
    source: "freshwater",
    emoji: "\uD83C\uDF38",
    cleaningTips:
      "Crappie are small, so you need a lot of 'em. Sharp fillet knife is essential — a dull knife on a crappie is a disaster. Scale first if you're keeping skin on, or just skin the fillets. Gut immediately on the water and keep 'em in a mesh bag in the lake to stay cool.",
    wholeFishVsFillet:
      "Fillet these. I know they're small and it feels like a lot of work, but the fillets are sweet and boneless. Some folks scale and pan-fry 'em whole — that works too if they're big enough. Just watch for the rib bones.",
    cookingMethod: "Crispy Crappie Fillets",
    ingredients: [
      "1.5 lbs crappie fillets",
      "1 cup seasoned fish fry mix",
      "1 egg, beaten",
      "1/4 cup milk",
      "Vegetable oil",
      "Hot sauce for serving",
      "Lemon wedges",
    ],
    instructions: [
      "Mix egg and milk in a shallow dish.",
      "Pour fish fry mix into another dish.",
      "Dip fillets in egg wash, then press into the fry mix.",
      "Heat 1/2 inch oil in a skillet to 350°F.",
      "Fry fillets 2–3 minutes per side — they're thin, so don't overcook.",
      "Golden brown and flaky means done. Any longer and they dry out.",
      "Serve on white bread with hot sauce if you want the real experience.",
    ],
    dadSays:
      "Crappie fillets are thin enough that bones aren't usually a problem. But when they're small, sometimes a rib bone sneaks through. Take small bites and pay attention. Good food deserves your full attention anyway.",
  },
  {
    species: "Yellow Perch",
    source: "freshwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Perch are the easiest fish to clean once you get a rhythm. Scale, head off, gut, fillet. The skin peels right off. Do 'em assembly-line style when you've got a pile — set up a station and knock 'em out.",
    wholeFishVsFillet:
      "Fillet 'em. Perch fillets are tiny but sweet. Some old-timers scale and fry 'em whole — head, tail, and all. If you're feeling old-school, go for it. The bones are soft enough to eat if you crisp 'em up good.",
    cookingMethod: "Perch Fry — Finger Lakes Style",
    ingredients: [
      "2 lbs perch fillets",
      "1 cup flour",
      "1 tsp Old Bay seasoning",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
      "2 eggs, beaten",
      "1 cup panko breadcrumbs",
      "Butter and oil for frying",
    ],
    instructions: [
      "Set up three dishes: flour with Old Bay, beaten eggs, panko crumbs.",
      "Dredge fillets in flour, dip in egg, press into panko.",
      "Heat a mix of butter and oil in a skillet — butter for flavor, oil for heat.",
      "Fry 2 minutes per side until golden. These cook fast.",
      "Don't walk away from the stove — perch goes from perfect to overdone in 30 seconds.",
      "Serve piled high on a plate with malt vinegar and thick-cut fries.",
    ],
    dadSays:
      "Perch are practically boneless once filleted right, but the little guys can surprise you. This is the fish that taught me to eat slow — a bone in a perch fry at the church supper when I was eight years old. Never forgot it.",
  },
  {
    species: "Northern Pike",
    source: "freshwater",
    emoji: "\uD83D\uDC09",
    cleaningTips:
      "Pike have Y-bones — that's why people avoid eating them, but don't. Learn the 5-fillet method: two boneless sides, two belly strips, and a back strap. Watch a video if you need to, then practice. Once you learn it, you'll never waste a pike again.",
    wholeFishVsFillet:
      "Always fillet pike, and always use the 5-fillet method to get around those Y-bones. Never try to cook a pike whole unless you want a mouthful of needles. The work is worth it — pike meat is white, flaky, and delicious.",
    cookingMethod: "Pike Cakes",
    ingredients: [
      "1 lb pike fillets, Y-bones removed",
      "1/3 cup breadcrumbs",
      "1 egg",
      "2 tbsp mayo",
      "1 tbsp Dijon mustard",
      "2 green onions, chopped",
      "1 tsp lemon zest",
      "Salt and pepper",
      "Butter for frying",
    ],
    instructions: [
      "Chop pike fillets finely or pulse in a food processor — don't make paste, keep some texture.",
      "Mix with breadcrumbs, egg, mayo, mustard, green onions, lemon zest, salt, and pepper.",
      "Form into patties about 3 inches across. Chill 15 minutes so they hold together.",
      "Melt butter in a skillet over medium heat.",
      "Cook patties 3–4 minutes per side until golden brown.",
      "Serve with a squeeze of lemon and some tartar sauce on the side.",
    ],
    dadSays:
      "If you did the 5-fillet method right, these should be bone-free. But pike Y-bones are sneaky — feel each piece before it goes in the bowl. One bone in a pike cake and everybody at the table gets nervous. Do the work up front.",
  },
  {
    species: "Carp",
    source: "freshwater",
    emoji: "\uD83D\uDCAA",
    cleaningTips:
      "Most Americans don't eat carp, but they're missing out. Bleed it immediately by cutting the gills — this is non-negotiable for good-tasting carp. Scale thoroughly. The mud vein (dark strip along the fillet) — cut it out. It's where the off-flavor lives.",
    wholeFishVsFillet:
      "Fillet and remove the mud vein. In many cultures, carp is cooked whole for celebrations — if the fish is from clean water, go for it. Score the flesh deeply to cut through the small bones, then deep-fry until they're crispy enough to eat.",
    cookingMethod: "Smoked Carp Dip",
    ingredients: [
      "1 lb carp fillets, mud vein removed",
      "8 oz cream cheese, softened",
      "2 tbsp sour cream",
      "1 tbsp horseradish",
      "1 tsp smoked paprika",
      "2 green onions, chopped",
      "1 tbsp lemon juice",
      "Salt and pepper",
      "Crackers for serving",
    ],
    instructions: [
      "Smoke the carp fillets low and slow — 225°F for 2 hours with apple or cherry wood. Or bake at 300°F with liquid smoke if you don't have a smoker.",
      "Let cool and flake the meat, checking carefully for bones.",
      "Mix cream cheese, sour cream, horseradish, paprika, lemon juice, salt, and pepper.",
      "Fold in the flaked carp and green onions.",
      "Chill for an hour to let flavors marry.",
      "Serve with crackers. Watch people's faces when you tell 'em it's carp.",
    ],
    dadSays:
      "Carp have a LOT of small bones. When you flake the smoked meat, go through it like you're looking for gold — slow and thorough. Every piece gets a finger check. This is the fish that demands the most patience at the table.",
  },
  {
    species: "Bluegill",
    source: "freshwater",
    emoji: "\u2600\uFE0F",
    cleaningTips:
      "Bluegill are small but the meat is sweet. Scale 'em with a spoon — works better than a scaler on little fish. The trick is keeping them ice cold so the flesh stays firm for filleting. A sharp knife and steady hands — that's all you need.",
    wholeFishVsFillet:
      "Cook these whole if they're hand-sized or bigger. Score the sides, season, and pan-fry until crispy. The bones practically fall off the meat. If you try to fillet a bluegill, you'll end up with a postage stamp of meat. Not worth it.",
    cookingMethod: "Whole Pan-Fried Bluegill",
    ingredients: [
      "6–8 whole bluegill, scaled and gutted",
      "1/2 cup cornmeal",
      "1/2 cup flour",
      "1 tsp garlic salt",
      "1/2 tsp black pepper",
      "Vegetable oil or bacon grease",
      "Lemon wedges",
    ],
    instructions: [
      "Score both sides of each fish with 2–3 diagonal cuts.",
      "Mix cornmeal, flour, garlic salt, and pepper.",
      "Coat each fish thoroughly in the mix.",
      "Heat oil or bacon grease (if you've got it) in a big skillet until shimmering.",
      "Fry fish 3–4 minutes per side until the tail is crispy and the coating is deep gold.",
      "The meat lifts right off the bones when they're cooked right.",
      "Eat 'em with your fingers, right off the plate. That's how we do it.",
    ],
    dadSays:
      "Whole bluegill means bones, so this is an 'eat with your hands' situation. Pull the meat off in sections, starting from the back. The ribs fan out — work around 'em. Teach the kids to eat like this and they'll learn patience for life.",
  },
  {
    species: "Striped Bass",
    source: "saltwater",
    emoji: "\uD83C\uDF0A",
    cleaningTips:
      "Stripers have big, easy-to-remove scales. Use a fish scaler or a sturdy spoon and work from tail to head. Rinse well. The bloodline (dark red strip down the center of each fillet) — cut it out completely. That's what makes striper taste fishy.",
    wholeFishVsFillet:
      "Fillet big ones, cook small schoolies whole. On a big striper, don't forget the collar — the horseshoe-shaped piece behind the head is pure gold. Season it and grill it. The cheeks too — pop 'em out with a spoon. Don't leave meat on the table.",
    cookingMethod: "Grilled Striper with Lemon Butter",
    ingredients: [
      "2 striper fillets, bloodline removed",
      "3 tbsp butter, melted",
      "2 cloves garlic, minced",
      "Juice of 1 lemon",
      "1 tbsp fresh parsley, chopped",
      "Salt and pepper",
      "Olive oil for the grill",
    ],
    instructions: [
      "Mix melted butter, garlic, lemon juice, and parsley.",
      "Brush fillets with olive oil and season with salt and pepper.",
      "Grill skin-side down over medium-high heat for 5–6 minutes.",
      "Flip carefully (skin should be crispy) and cook 3–4 more minutes.",
      "Brush with the lemon butter in the last minute of cooking.",
      "The fillet should flake with a fork but still be moist in the center.",
      "Drizzle remaining butter over top and serve immediately.",
    ],
    dadSays:
      "Striper fillets are mostly boneless if you cut right, but the pin bones near the front of the fillet are real. Run your fingers along the fillet before cooking and pull any you find with pliers. Eat slow — enjoy the fish you earned.",
  },
  {
    species: "Bluefish",
    source: "saltwater",
    emoji: "\uD83C\uDF0A",
    cleaningTips:
      "Bluefish spoil FAST. Bleed and ice immediately — I mean within minutes. Fillet and trim all dark meat and bloodline aggressively. The lighter the meat you keep, the better it'll taste. Fresh bluefish is completely different from bluefish that sat around.",
    wholeFishVsFillet:
      "Always fillet bluefish and remove every bit of dark meat. Small snappers (baby blues) can be cooked whole — they're mild enough. But big choppers? Fillet only. The dark meat on a big bluefish is what gives them a bad reputation. Trim it and the flavor changes completely.",
    cookingMethod: "Broiled Bluefish with Mustard Glaze",
    ingredients: [
      "2 bluefish fillets, dark meat trimmed",
      "2 tbsp Dijon mustard",
      "1 tbsp mayo",
      "1 tbsp lemon juice",
      "1 tsp dried dill",
      "1/2 tsp garlic powder",
      "Salt and pepper",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Preheat broiler to high. Line a sheet pan with foil.",
      "Mix mustard, mayo, lemon juice, dill, garlic powder, salt, and pepper.",
      "Place fillets skin-side down on the pan.",
      "Spread the mustard glaze generously over each fillet.",
      "Broil 6–8 minutes, 6 inches from the heat, until the top is bubbly and the fish flakes.",
      "Don't flip — the skin will crisp on the bottom from the pan heat.",
      "Garnish with parsley. Serve with rice and a simple salad.",
    ],
    dadSays:
      "Bluefish have bigger bones that are easy to see, but the small ones near the belly can sneak up on you. The mustard glaze makes you want to wolf it down, but slow down. Feel each bite. A bluefish bone is no joke.",
  },
  {
    species: "Fluke (Summer Flounder)",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Fluke give you 4 fillets — two from the top (dark side), two from the bottom (white side). The white side fillets are thinner but just as good. Use a flexible fillet knife and stay flat against the bones. Rinse fillets in cold salt water.",
    wholeFishVsFillet:
      "Fillet fluke every time. They're flat fish built for filleting — four clean fillets with barely any waste. Some restaurants roast the frame (skeleton) after filleting and pick the remaining meat for fish cakes. Nothing wasted.",
    cookingMethod: "Fluke Piccata",
    ingredients: [
      "4 fluke fillets",
      "1/4 cup flour",
      "2 tbsp butter",
      "2 tbsp olive oil",
      "1/4 cup white wine",
      "2 tbsp capers",
      "Juice of 1 lemon",
      "2 tbsp fresh parsley",
      "Salt and pepper",
    ],
    instructions: [
      "Season fillets with salt and pepper. Dust lightly with flour.",
      "Heat butter and oil in a large skillet over medium-high heat.",
      "Cook fillets 2 minutes per side — fluke is thin, don't overdo it.",
      "Remove fillets to a plate.",
      "Add wine to the pan, scraping up any brown bits. Let reduce by half.",
      "Add capers, lemon juice, and a knob of butter. Swirl until the sauce comes together.",
      "Pour over fillets, top with parsley. Restaurant quality from your own kitchen.",
    ],
    dadSays:
      "Fluke fillets are almost always bone-free if you filleted properly. But the thin belly section sometimes has tiny pin bones. Worth a quick finger check before cooking. And eat gently — the meat is delicate and deserves your respect.",
  },
  {
    species: "Blackfish (Tautog)",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Tautog have tough, thick skin and heavy scales. You'll need a strong scaler and a sharp knife. The fillets are firm and white — some of the best eating in the ocean. Watch out for the teeth when handling — they're designed to crush shells.",
    wholeFishVsFillet:
      "Fillet blackfish. They're compact and muscular, so the fillets are thick and meaty. But the head and frame make incredible chowder stock — don't throw it away. Simmer with onion, bay leaf, and peppercorns for an hour. Liquid gold.",
    cookingMethod: "Blackfish Chowder",
    ingredients: [
      "1.5 lbs blackfish fillets, cubed",
      "4 slices bacon, chopped",
      "1 onion, diced",
      "2 stalks celery, diced",
      "3 potatoes, cubed",
      "2 cups fish stock or clam juice",
      "1 cup heavy cream",
      "1 tsp thyme",
      "Salt and pepper",
      "Oyster crackers for serving",
    ],
    instructions: [
      "Cook bacon in a heavy pot until crispy. Remove and set aside.",
      "Sauté onion and celery in the bacon fat until soft.",
      "Add potatoes and fish stock. Simmer until potatoes are just tender, about 12 minutes.",
      "Add blackfish pieces and cook 5 minutes — don't stir too much or they'll fall apart.",
      "Pour in heavy cream and thyme. Heat through but don't boil.",
      "Season with salt and pepper. Top with crumbled bacon.",
      "Serve with oyster crackers. This is the kind of meal that makes the whole trip worth it.",
    ],
    dadSays:
      "Blackfish fillets are firm and mostly boneless, but check near the collar area — there can be a few stubborn bones. In chowder, a bone hides easily in the thick broth. Spoon through each bite before it goes in your mouth.",
  },
  {
    species: "Red Snapper",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Red snapper scales are sharp — wear gloves if you've got 'em. Scale thoroughly from tail to head. The skin is edible and delicious when crisped up. Gut carefully and save the liver if it looks clean — some cultures consider it a delicacy.",
    wholeFishVsFillet:
      "Cook whole whenever possible. A whole roasted red snapper is one of the most impressive dishes you can put on a table. The bones keep the meat moist and add flavor. Filleting works too, but you lose that dramatic presentation.",
    cookingMethod: "Whole Roasted Red Snapper",
    ingredients: [
      "1 whole red snapper (3–4 lbs), scaled and gutted",
      "1 lemon, sliced",
      "1 lime, sliced",
      "4 cloves garlic, sliced",
      "Fresh cilantro, a big handful",
      "2 tbsp olive oil",
      "1 tsp cumin",
      "Salt and pepper",
      "Hot sauce for serving",
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Score the fish on both sides with deep diagonal cuts, about 2 inches apart.",
      "Rub with olive oil, cumin, salt, and pepper — inside and out, and into the cuts.",
      "Stuff the cavity with lemon, lime, garlic, and cilantro.",
      "Place on a lined sheet pan. Roast 25–30 minutes until the eye turns white and flesh flakes.",
      "The cheeks are the chef's reward — don't forget them.",
      "Serve whole at the table. Let everyone pick from the fish. That's how family meals should be.",
    ],
    dadSays:
      "Whole fish means bones, and snapper has plenty. But they're big and easy to see. Work the meat off in sections using a fork and spoon. The spine lifts out clean. Teach the kids the technique — it's a life skill. And for heaven's sake, eat slow.",
  },
  {
    species: "Mahi-Mahi",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Mahi skin is tough and not great for eating, so peel it off after filleting. The fillets are thick and boneless — about the easiest fish to clean in the ocean. Bleed immediately after catching for the whitest, cleanest meat.",
    wholeFishVsFillet:
      "Always fillet mahi. The fillets are big, thick, and completely boneless. Perfect for grilling, pan-searing, or making tacos. The frame is bony and not worth much, but the belly flaps make good ceviche if you trim 'em right.",
    cookingMethod: "Mahi-Mahi Fish Tacos",
    ingredients: [
      "1.5 lbs mahi fillets",
      "2 tbsp olive oil",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "1/2 tsp garlic powder",
      "Corn tortillas",
      "Shredded cabbage",
      "Diced avocado",
      "Lime crema (sour cream + lime juice)",
      "Fresh cilantro",
      "Lime wedges",
    ],
    instructions: [
      "Mix chili powder, cumin, garlic powder, salt, and pepper. Rub on fillets.",
      "Heat olive oil in a skillet over high heat.",
      "Sear fillets 3–4 minutes per side until charred and cooked through.",
      "Let rest 2 minutes, then break into large chunks with a fork.",
      "Warm tortillas on the open flame or in a dry skillet.",
      "Load tortillas with cabbage, fish, avocado, crema, and cilantro.",
      "Squeeze lime over everything. Taco Tuesday just got an upgrade.",
    ],
    dadSays:
      "Mahi is about as boneless as it gets, but never let your guard down completely. Run your fingers over the fillet out of habit — it's a good practice with ANY fish. Eat slow, taste everything. Rushing through a good taco is a crime.",
  },
  {
    species: "Cod",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Cod are straightforward — big fish, big fillets. Scale if keeping the skin on, though most people skin cod fillets. The flesh is snow white and delicate, so handle with care after filleting. Keep ice cold and cook within a day or two.",
    wholeFishVsFillet:
      "Fillet cod. The fillets are thick, white, and perfect for almost any cooking method. The tongue and cheeks are delicacies in Newfoundland — fried cod tongues are worth trying if you can get 'em. The frame makes excellent stock for chowder.",
    cookingMethod: "Classic Fish and Chips",
    ingredients: [
      "2 lbs cod fillets, cut into portions",
      "1.5 cups flour, divided",
      "1 cup cold sparkling water",
      "1 tsp baking powder",
      "1 tsp salt",
      "Oil for deep frying",
      "Malt vinegar",
      "Lemon wedges",
      "Tartar sauce",
    ],
    instructions: [
      "Mix 1 cup flour, baking powder, and salt. Stir in sparkling water until just combined.",
      "Heat oil to 375°F in a deep pot — at least 3 inches deep.",
      "Dust cod portions in remaining flour, shake off excess.",
      "Dip in batter, let excess drip off, and carefully lower into oil.",
      "Fry 5–6 minutes until deep golden brown and crispy.",
      "Drain on a wire rack, not paper towels — keeps the bottom crispy.",
      "Serve with thick-cut fries, malt vinegar, and tartar sauce. Friday night done right.",
    ],
    dadSays:
      "Cod is one of the most forgiving fish for bones — big fillets, big bones that are easy to remove. But near the pin bone line, there can be small ones. Check before battering. And eat each piece slowly. Hot batter hides everything, including bones.",
  },
  {
    species: "Black Sea Bass",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Sea bass have sharp dorsal spines — clip them off first with kitchen shears. Scale carefully, as the scales are small and tight. The skin is edible and delicious when crisped. Fillets are small but the meat is firm and sweet.",
    wholeFishVsFillet:
      "Cook whole if they're plate-sized — the presentation is beautiful and the bones keep the meat juicy. Bigger ones can be filleted. Don't skip the collars — season, grill, and gnaw on 'em. Some of the best eating on the whole fish.",
    cookingMethod: "Whole Steamed Sea Bass — Asian Style",
    ingredients: [
      "1 whole black sea bass (1.5–2 lbs), scaled and gutted",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp rice vinegar",
      "1 inch ginger, julienned",
      "2 green onions, sliced",
      "1 tbsp vegetable oil",
      "Fresh cilantro",
    ],
    instructions: [
      "Score the fish on both sides with 3 diagonal cuts.",
      "Place on a heatproof plate that fits in your steamer or wok.",
      "Steam over boiling water for 10–12 minutes until the flesh flakes.",
      "While fish steams, mix soy sauce, sesame oil, and rice vinegar.",
      "When done, top fish with ginger and green onions.",
      "Heat vegetable oil until smoking and pour over the aromatics — it'll sizzle and smell incredible.",
      "Drizzle the sauce over top. Garnish with cilantro. This is a meal that respects the fish.",
    ],
    dadSays:
      "Steamed whole fish is one of the best ways to eat — but it means bones. Use chopsticks or a fork to gently lift the meat in sections. The spine pulls out clean after the top fillet is eaten. Go slow. This isn't fast food, it's good food.",
  },
  {
    species: "King Mackerel",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "King mackerel (smoker kings) need to be bled immediately — cut the gills or the tail. Fillet and remove the dark bloodline completely. The lighter the meat you keep, the milder the flavor. Work fast — mackerel spoils quicker than most fish.",
    wholeFishVsFillet:
      "Always fillet kings, and always remove the bloodline and dark meat. Small kings can be steaked — cut into 1-inch cross-sections right through the bone. But the real move is smoking. A whole side on the smoker is the best thing you'll eat all summer.",
    cookingMethod: "Smoked King Mackerel",
    ingredients: [
      "2 king mackerel fillet sides, bloodline removed",
      "1/4 cup brown sugar",
      "2 tbsp kosher salt",
      "1 tsp black pepper",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "Wood chips (hickory or pecan)",
      "Crackers and hot sauce for serving",
    ],
    instructions: [
      "Mix brown sugar, salt, pepper, garlic, and onion powder. Rub generously on both sides of fillets.",
      "Refrigerate uncovered for 2–4 hours — this forms the pellicle (tacky surface) that catches the smoke.",
      "Set smoker to 225°F with wood chips.",
      "Smoke fillets skin-side down for 2–3 hours until the internal temp hits 145°F.",
      "The edges should be dark golden and the meat should flake with a fork.",
      "Let rest 10 minutes before serving.",
      "Flake onto crackers with hot sauce, or eat it straight. This is the reason people go offshore.",
    ],
    dadSays:
      "Smoked mackerel is addictive, but those small bones in the belly area will find you if you're not careful. When you flake the smoked meat, feel every piece. The smoke makes the bones soft but they're still there. Patience at the table, kiddo.",
  },
  {
    species: "Redfish (Red Drum)",
    source: "saltwater",
    emoji: "\uD83D\uDC1F",
    cleaningTips:
      "Redfish have incredibly tough scales — some people don't even bother scaling and just cook on the half shell (skin and scales on). Fillet with the skin on, then you've got a built-in cooking vessel. The scales protect the meat from direct heat.",
    wholeFishVsFillet:
      "The half-shell method is king for redfish. Fillet with the skin and scales still on, season the meat side, and grill scale-side down. The scales act like a shield, steaming the meat perfectly. When it's done, the meat lifts right off the skin.",
    cookingMethod: "Redfish on the Half Shell",
    ingredients: [
      "2 redfish fillets, skin and scales on",
      "4 tbsp butter",
      "2 cloves garlic, minced",
      "1 lemon, juiced",
      "1 tsp Cajun seasoning",
      "1 tsp paprika",
      "Salt and pepper",
      "Fresh parsley",
    ],
    instructions: [
      "Heat grill to medium-high.",
      "Season the flesh side of fillets with Cajun seasoning, paprika, salt, and pepper.",
      "Place fillets scale-side down directly on the grill grate.",
      "Melt butter with garlic and lemon juice in a small pan.",
      "Spoon butter mixture over the fillets as they cook, 8–10 minutes.",
      "Don't flip — the scales protect the bottom while the top cooks.",
      "The meat is done when it flakes and turns opaque. Scoop right off the skin with a spatula. Pure magic.",
    ],
    dadSays:
      "Redfish fillets done this way are basically boneless — the half-shell method leaves all the bones in the skin. But always check. One bone that makes it through can ruin the experience. And eat slow — this is too good to rush.",
  },
];

export default RECIPES;
