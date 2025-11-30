// scripts/data/races.mjs

// Central store for long-form race lore / info.
// Keys MUST match the race keys in MarkedConfig.races
//   (e.g. "anthozoan", "human", "draconian", etc.)

export const MarkedRaceDescriptions = {
 anthozoan: {
  label: "Anthozoan",
  img: "systems/the-marked-system/assets/races/anthozoan.webp",
  description: `
<h2>Anthozoan</h2>

<h3>Physical Attributes</h3>
<p>
Anthozoans are living embodiments of oceanic coral—beautiful, resilient, and deeply 
connected to the rhythms of the sea. Their skin resembles the flexible yet durable 
structure of coral polyps, forming natural patterns and ridges that can range from soft 
pastels to the vibrant warning colors of toxic reef species.
</p>

<p>
Their coloration is not random; the hues that flow across their surface reflect emotional 
states, environmental changes, or even social signals within their communities. The “hair” 
of an Anthozoan is not hair at all, but a mass of sensory tendrils capable of detecting 
currents, temperature shifts, and even faint electrical fields produced by nearby creatures. 
These tendrils move like strands of drifting seaweed and offer Anthozoans unparalleled 
awareness beneath the waves.
</p>

<h3>Culture & Society</h3>
<p>
Anthozoan society is built around the concept of harmony, both environmentally and socially. 
Their communities—called <strong>Groves</strong>—are made up of individuals who grow, shape, 
and maintain coral structures as naturally as other races build cities.
</p>

<p>
Every Anthozoan contributes to the ecosystem they inhabit, mirroring the intricate symbiosis 
of real coral reefs. Art, music, and storytelling reflect oceanic themes, with tales passed 
down through mesmerizing bioluminescent displays and rhythmic, flowing songs that mimic 
the natural movement of underwater life.
</p>

<p>
Their architecture is grown rather than built, shaped from living coral formations that 
blend seamlessly with the surrounding reef. They value cooperation, balance, and 
environmental stewardship, believing that the health of the sea and the health of 
their people are inseparable.
</p>
    `
},


  // 🔹 Placeholders for other races you’ll add later:
  human: {
  label: "Human",
  img: "systems/the-marked-system/assets/races/human.webp",
  description: `
<h2>Human</h2>

<h3>Appearance</h3>
<p>
Humans in Mezoria display an astonishing breadth of physical diversity, unmatched by any
other race. Their features vary widely based on lineage, geography, climate, and culture.
Some are <strong>short and stocky</strong>, shaped by labor or harsh environments. Others grow
<strong>tall and lean</strong>, formed by generations of athleticism or nomadic life. Body shape ranges
from <strong>gaunt and underfed</strong> to <strong>robustly muscular</strong> or even <strong>excessively corpulent</strong>.
</p>

<p>
Skin tones span the natural spectrum—from alabaster to deep umber—while hair textures
range from pin-straight to thick coils, in colors from pale flaxen to fiery red to pitch black.
Eye colors are equally varied: browns, greens, blues, hazels, grays, and rare striking anomalies
such as gold or violet.
</p>

<p>
This physical variation is not merely aesthetic; it reflects humanity’s greatest strength:
<strong>adaptability</strong>. Humans thrive in nearly every environment of Mezoria, from frozen tundras
and rolling plains to volcanic islands and dense forests.
</p>

<h3>Religion and Beliefs</h3>
<p>
No race in Mezoria is as deeply entwined with spirituality as humans. They cling fervently
to the worship of the <strong>Aspects</strong>—divine embodiments of fundamental principles such as
Wisdom, War, Mercy, Fate, Shadow, and countless others. Humans believe that the Aspects
shape the course of their lives, guide their destinies, and watch over the balance of the world.
</p>

<p>
Human religious practice is rich and varied. Shrines appear in nearly every settlement; temples
stand as centers of community life. Rituals can be elaborate ceremonies led by priests or simple
daily gestures of gratitude. Pilgrimages, offerings, omens, prayers, and festivals mark the human
calendar, reinforcing their reliance on divine insight in a world filled with uncertainty.
</p>

<p>
Even humans who reject formal worship often carry amulets or mutter prayers “just in case.”
Faith—whether devoted or doubtful—is woven into the core of the human experience.
</p>
    `
},

  etherean:    { name: "Etherean",    description: "" },
  mythrian:    { name: "Mythrian",    description: "" },
  sylvan:      { name: "Sylvan",      description: "" },
 sprite: {
  label: "Sprite",
  img: "systems/the-marked-system/assets/races/sprite.webp",
  description: `
<h2>Sprite</h2>

<h3>Appearance</h3>
<p>
Sprites are <strong>small, radiant woodland beings</strong> whose presence seems to carry the very
essence of enchantment. Standing no taller than a child, their delicate frames are
light and graceful, built for effortless movement through both forest and sky.
</p>

<p>
Their most striking feature is their <strong>multi-colored, mothlike or butterflylike wings</strong>,
each pair glowing softly with hues of pinks, greens, blues, golds, or lilacs. When
Sprites gather, their wings cast prismatic arrays of light across the forest floor,
creating natural spectacles revered by other woodland creatures.
</p>

<p>
Their eyes shimmer like morning dew, and their hair often reflects the tones of wild
flowers or moonlit streams. Everything about a Sprite feels alive, vibrant, and
joyfully unpredictable.
</p>

<h3>Origin</h3>
<p>
Sprites originate from the <strong>Fae Realms</strong>—a place of boundless whimsy, ancient magic,
and unpredictable wonder. They crossed into Mezoria during the earliest age of
interplanar thinning, and unlike many fae, they chose to stay.  
To this day, their spirits carry the strange logic and wild beauty of their homeland.
</p>

<h3>Culture & Nature</h3>
<p>
Sprites are famously <strong>frivolous, curious, and playful</strong>. They treasure games, pranks,
music, dance, and exploration. Their attention is fleeting, their laughter infectious,
and their view of the world eternally optimistic. Yet beneath their whimsical exterior
lies a profound reverence for <strong>nature’s rhythms</strong>.
</p>

<p>
They act as caretakers of glades, flowers, mushrooms, streams, and hidden woodland
groves. Sprites believe every rock, root, and raindrop contains a soul worth respecting.
They form small, communal circles that dance beneath moonlight, draw runes of harmony
into the soil, and sing songs that help the forest grow.
</p>

<h3>Society & Bonds</h3>
<p>
Sprite settlements are hidden within glimmering clearings, mushroom rings, treetop
villages, or small fae thickets where magical energy runs wild. They rarely appoint
leaders; instead, they follow whoever seems the most interesting at the moment.
Tradition, to a Sprite, is whatever hasn’t gotten boring yet.
</p>

<p>
Though gentle in spirit, they are fiercely protective of their homes. A grove blessed
by Sprites is often shielded by charms, illusions, and unpredictable fae tricks.
Those who harm the forest quickly discover the wrath of a thousand tiny wings.
</p>

<h3>Role in Mezoria</h3>
<p>
Sprites serve as <strong>messengers of the wild</strong>, <strong>keepers of fae secrets</strong>, and
<strong>ambassadors of wonder</strong>. Their natural magical talent, boundless curiosity,
and innate connection to life make them invaluable companions—and unpredictable foes.
</p>

<p>
Above all else, Sprites adventure for one reason:  
<strong>to see something new.</strong>
</p>
    `
},

  auramine: {
    label: "Auramine",
    img: "systems/the-marked-system/assets/races/auramine.webp",
    description: `
<h2>Auramine</h2>

<h3>Appearance</h3>
<p>
The Aurumine are a majestic and enigmatic race whose appearance mirrors the very essence 
of the cosmos. Their skin carries a natural metallic sheen, ranging from pale, starlit 
alabaster to deep, rich bronzes and obsidians. Under sunlight, their skin reflects a soft 
celestial glow; under moonlight, they gleam like figures carved from the night sky itself.
</p>

<p>
Their hair flows like liquid metal—golden, silver, coppery, or shimmering blends that ripple 
with reflected light. At night, their hair takes on an ethereal luminescence, faintly 
mirroring constellations or drifting in gleams like falling star-dust.
Their eyes are deep wells of cosmic color, swirling with metallic depth, 
as if containing their own starlight.
</p>

<h3>Culture & Society</h3>
<p>
Aurumine culture is built on the foundations of arcane scholarship and celestial reverence. 
They believe their souls are tied to the cosmic order, and thus they strive to embody harmony, 
discipline, and an unending pursuit of knowledge.
</p>

<p>
Their cities and sanctuaries are architectural marvels aligned to celestial bodies—places 
where starlight is captured, reflected, and channeled into ritual magic. Leaders among the 
Aurumine are chosen not by birthright but by wisdom and mastery over cosmic forces. 
Many Aurumine dedicate themselves to artistry, crafting tools and relics inscribed 
with intricate glyphs and symbols that channel astral and arcane energies.
</p>

<p>
To the Aurumine, beauty and purpose are inseparable. Every craft, structure, and ritual 
is both a work of art and a conduit of their connection to the celestial realms.
</p>
    `
  },

 draconian: {
  label: "Draconian",
  img: "systems/the-marked-system/assets/races/draconian.webp",
  description: `
<h2>Draconian</h2>

<h3>Physical Appearance</h3>
<p>
Draconians are towering, formidable beings—typically standing between 
<strong>7 and 9 feet</strong> tall once they reach adulthood at around 200 years. Their bodies 
are sheathed in scale-plates whose colors and patterns reflect their ancestral lineage. 
These scales shimmer like polished stone, volcanic glass, glacial ice, or living forest bark, 
depending on their clan. Their eyes glow with a primal inner fire, radiant and piercing, 
as if holding the memory of ancient dragons.
</p>

<h3>Lifespan & Growth</h3>
<p>
A Draconian matures slowly compared to other races, reaching full physical and magical 
development only at <strong>200 years</strong>. Their lives may span <strong>up to 600 years</strong>, granting 
them centuries of mastery over the disciplines, traditions, and power systems of their clan. 
This longevity supports a culture deeply rooted in heritage, patience, and accumulated wisdom.
</p>

<h3>Clans & World Lineage</h3>
<p>
Draconians organize their society into powerful 
<strong>World Clans</strong>—lineages defined not by elemental affinity, but by the terrain and 
environments from which their ancient progenitors emerged. These clans embody the raw power 
of Mezoria itself, shaped by stone, storms, tides, forests, and fire.
</p>

<h4>Mountain Clan</h4>
<p>
Stalwart and immovable, the Mountain Clan embodies the unyielding strength of the peaks.  
Their scales resemble granite, obsidian, or slate, granting them natural resilience.  
They value endurance, discipline, and unshakeable resolve.
</p>

<h4>Sea Clan</h4>
<p>
Graceful and adaptive, the Sea Clan draws power from currents, tides, and the deep.  
Their colors evoke coral reefs, ocean depths, or shimmering surf.  
They are intuitive, strategic thinkers, capable of fluid motion and swift adaptation.
</p>

<h4>Forest Clan</h4>
<p>
Connected to the pulse of living nature, the Forest Clan displays organic patterns 
resembling bark, leaves, or moss. They excel in stealth, harmony, and survival, often 
serving as scouts, trackers, and lore-keepers.
</p>

<h4>Desert Clan</h4>
<p>
Hardened by harsh sun and shifting sands, the Desert Clan embodies endurance through adversity.  
Their scales resemble sandstone, sun-bleached bone, or golden dunes.  
They possess unparalleled stamina, cunning, and heat resistance.
</p>

<h4>Volcano Clan</h4>
<p>
Fierce and relentless, the Volcano Clan channels the destructive and creative force of magma.  
Their scales glow with ember-bright cracks or resemble cooled volcanic glass.  
They are passionate warriors, artisans, and wielders of explosive physical might.
</p>

<h3>Lost Clans</h3>
<p>
Ancient Draconian lore whispers of <strong>World Clans long faded</strong>—those shaped by 
forgotten regions: colossal canyons, deep caverns, arctic wastes, storm plateaus, 
or even now-vanished landscapes. These myths speak of powers untapped and bloodlines hidden, 
fueling endless speculation among scholars and wanderers.
</p>

<h3>Role in Mezoria</h3>
<p>
Respected and feared in equal measure, Draconians stand as one of Mezoria’s most influential 
peoples. Though their clans often hold differing philosophies, they share a powerful bond of 
heritage and unity in times of need. Their presence shifts the balance of any conflict, and 
their wisdom shapes the political, martial, and cultural fabric of the world.
</p>
    `
},

 embergiest: {
  label: "Embergeist",
  img: "systems/the-marked-system/assets/races/embergeist.webp",
  description: `
<h2>Embergeist</h2>

<h3>Origins and Ancestry</h3>
<p>
The Embergeist are a race born from the primordial union of <strong>earth and fire</strong>.
Their arrival in Mezoria began thousands of years ago, when an <strong>Astral Gate</strong>
tore open between realms and deposited them across the land. Though their first bodies 
were shaped by elemental power, the Embergeist long ago adapted and evolved into a 
fully self-sustaining people, carrying within them the legacy of the volatile forces 
that forged their ancestors.
</p>

<h3>Physical Characteristics</h3>
<p>
An Embergeist's appearance is a living embodiment of molten creation. Their skin resembles 
<strong>stone, obsidian, or cooled lava</strong>, but beneath the surface burns a visible inner flame. 
Many Embergeist have cracks or channels in their skin that glow with 
<strong>fiery light</strong>, shifting from ember-orange to brilliant magma-white depending on emotion or health.  
Their eyes simmer like smoldering coals, casting a warm, almost hypnotic glow in dim spaces.
</p>

<p>
Despite their rough exterior, their movements carry surprising grace, the heat within 
their bodies granting them fluidity and bursts of explosive physical force.
</p>

<h3>Society and Culture</h3>
<p>
The Embergeist build their lives deep beneath Mezoria—in colossal underground cities 
carved into mountain roots, volcanic caverns, and subterranean magma chambers.  
These cities are illuminated by natural lava flows, geothermal crystal formations, 
and the inner radiance of the Embergeist themselves.
</p>

<p>
Their culture venerates <strong>strength, craftsmanship, and endurance</strong>. Forges are sacred 
spaces where stone and flame are shaped in ritual harmony. Embergeist artisans are 
renowned across Mezoria for their unmatched mastery of <strong>metalwork, smithing, 
geoforging</strong>, and the creation of magical equipment infused with elemental fire.
</p>

<p>
Among their people, the ability to work seamlessly with both stone and flame is considered 
a mark of maturity and spiritual clarity. As such, Embergeist societies often blend 
artisanship with philosophy, creating a culture where creation and identity are deeply intertwined.
</p>
    `
},

  earthen:     { name: "Earthen",     description: "" },
  prismatic: {
  label: "Prismatic",
  img: "systems/the-marked-system/assets/races/prismatic.webp",
  description: `
<h2>Prismatic</h2>

<h3>Appearance</h3>
<p>
Prismatics are beings of breathtaking beauty—humanoid in silhouette, yet formed entirely
of <strong>translucent, faceted crystal</strong>. Their bodies refract light into shimmering rainbows
with every movement, casting prismatic patterns across their surroundings. Each facet
glitters with internal luminescence, giving the impression of a living gem infused
with magical radiance.
</p>

<p>
Despite appearing delicate, their bodies are surprisingly resilient. Their crystalline forms
can withstand great force, yet their elegant, angular structure conveys both <strong>fragility
and eternal strength</strong>. Roughly human-sized, they move with a graceful, otherworldly
fluidity, as though guided by inner harmonic vibrations.
</p>

<h3>Origin</h3>
<p>
Prismatics were crafted by a <strong>lost civilization</strong> over 10,000 years ago—an advanced people
whose mastery of magic blurred the line between art, science, and soulcraft.  
Whether intended as guardians, vessels, or successors, none now remember.
</p>

<p>
When their creators vanished, the Prismatics awoke collectively into sentience.  
Legends claim their minds hold <strong>the remnants of their makers’ collective memory</strong>,
yet fragmented beyond repair. Echoes of ancient knowledge remain, but the clarity
of their origin fades a little more with every passing millennium.
</p>

<h3>Society & Integration</h3>
<p>
Despite their ancient and mysterious past, the Prismatics have integrated well into
the modern societies of Mezoria. Their innate connection to magical currents makes
them natural practitioners of arcane arts, rune-sculpting, and crystalline enchantment.
</p>

<p>
Communities across Mezoria value Prismatics not only for their magical insight,
but for their <strong>balanced, contemplative worldview</strong>. Their perspective—shaped by
fragments of lost ages—often provides clarity in political, spiritual, and arcane matters.
</p>

<h3>Role in Mezoria</h3>
<p>
Prismatics serve as <strong>living artifacts</strong> of the ancient world, their glowing forms
bridging forgotten epochs with the present age. Their bodies resonate with magical
frequencies unique to them, making them highly sought after as scholars, diplomats,
mages, and guardians of arcane lore.
</p>

<p>
Ever searching for the truth of their origin, the Prismatics explore the world with
quiet determination, seeking meaning in the fragments of memory they carry.
Their existence safeguards the balance of Mezoria, for within each Prismatic lies
a spark of ancient creation—and the potential for future revelation.
</p>
    `
},

};
