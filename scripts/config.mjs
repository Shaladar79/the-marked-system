// scripts/config.mjs

export const MarkedConfig = {};

// -------------------------------------
// ATTRIBUTE CATEGORIES
// -------------------------------------
MarkedConfig.attributes = {
  body: { label: "Body" },
  mind: { label: "Mind" },
  soul: { label: "Soul" }
};

// -------------------------------------
// SIMPLE RANK MAP (key → label)
// -------------------------------------
MarkedConfig.ranks = {
  normal:    "Normal",
  quartz:    "Quartz",
  topaz:     "Topaz",
  garnet:    "Garnet",
  emerald:   "Emerald",
  sapphire:  "Sapphire",
  ruby:      "Ruby",
  diamond:   "Diamond",
  mythrite:  "Mythrite",
  celestite: "Celestite"
};

// -------------------------------------
// RACES (simple key → label)
// -------------------------------------
MarkedConfig.races = {
  human:       "Human",
  etherean:    "Etherean",
  mythrian:    "Mythrian",
  anthozoan:   "Anthozoan",
  sylvan:      "Sylvan",
  sprite:      "Sprite",
  auramine:    "Auramine",
  draconian:   "Draconian",
  embergiest:  "Embergiest",
  earthen:     "Earthen",
  prismatic:   "Prismatic"
};

// -------------------------------------
// MYTHRIAN TRIBES
// -------------------------------------
MarkedConfig.mythrianTribes = {
  lion: "Lion Tribe",
  wolf: "Wolf Tribe",
  bear: "Bear Tribe"
};

// -------------------------------------
// DRACONIAN CLANS (placeholder names)
// You can replace/expand these anytime.
// -------------------------------------
MarkedConfig.draconianClans = {
  flame: "Flame Clan",
  storm: "Storm Clan",
  stone: "Stone Clan"
};

// -------------------------------------
// BACKGROUND TYPES
// -------------------------------------
MarkedConfig.backgroundTypes = {
  common:  "Common Professions",
  skilled: "Skilled Trades & Crafts",
  street:  "Street-Level Backgrounds",
  social:  "Social & Cultural Backgrounds"
};

// -------------------------------------
// BACKGROUNDS BY TYPE
// -------------------------------------
MarkedConfig.backgroundsByType = {
  common: {
    farmer:        "Farmer",
    hunter:        "Hunter",
    fisher:        "Fisher",
    laborer:       "Laborer",
    merchant:      "Merchant",
    shepherd:      "Shepherd",
    gravedigger:   "Gravedigger",
    stable_hand:   "Stable Hand",
    messenger:     "Messenger",
    woodcutter:    "Woodcutter",
    milkmaid:      "Milkmaid / Dairyman",
    field_hand:    "Field Hand",
    field_guide:   "Field Guide",
    cook:          "Cook"
  },

  skilled: {
    blacksmith_app:  "Blacksmith’s Apprentice",
    herbalist:       "Herbalist",
    scribe:          "Scribe",
    tanner:          "Tanner",
    glassblower:     "Glassblower",
    weaver:          "Weaver",
    potter:          "Potter",
    chandler:        "Chandler (Candle Maker)",
    mason:           "Mason",
    bowyer_fletcher: "Bowyer/Fletcher",
    brewer:          "Brewer",
    tailor:          "Tailor",
    shipwright:      "Shipwright",
    jeweler:         "Jeweler",
    carpenter:       "Carpenter",
    calligrapher:    "Calligrapher",
    miner:           "Miner",
    tinker:          "Tinker",
    butcher:         "Butcher",
    cobbler:         "Cobbler",
    bookbinder:      "Bookbinder",
    painter:         "Painter",
    ropemaker:       "Ropemaker",
    armorer:         "Armorer",
    perfumer:        "Perfumer"
  },

  street: {
    urchin:          "Urchin",
    beggar:          "Beggar",
    street_perf:     "Street Performer",
    drudge:          "Drudge",
    pickpocket:      "Pickpocket",
    lookout:         "Lookout",
    runner:          "Runner",
    fence:           "Fence",
    rat_catcher:     "Rat Catcher",
    dockhand:        "Dockhand",
    scavenger:       "Scavenger",
    alley_healer:    "Alley Healer",
    street_preacher: "Street Preacher"
  },

  social: {
    noble_courtier:        "Noble Courtier",
    temple_acolyte:        "Temple Acolyte",
    clan_heir:             "Clan Heir",
    diplomatic_envoy:      "Diplomatic Envoy",
    wandering_pilgrim:     "Wandering Pilgrim",
    tribal_nomad:          "Tribal Nomad",
    scholars_ward:         "Scholar’s Ward",
    exiled_bloodline:      "Exiled Bloodline",
    cultural_artisan:      "Cultural Artisan",
    temple_foundling:      "Temple Foundling",
    guildborn:             "Guildborn",
    cult_survivor:         "Cult Survivor",
    diplomatic_hostage:    "Diplomatic Hostage",
    festival_child:        "Festival Child",
    marked_prophecy:       "Marked by Prophecy",
    monastic_disciple:     "Monastic Disciple",
    political_dissident:   "Political Dissident",
    archivists_kin:        "Archivist’s Kin",
    hearth_storykeeper:    "Hearth-Bound Storykeeper",
    oath_retainer:         "Oath-Bound Retainer"
  }
};

// Optional: flat map of all backgrounds, if anything still uses it
MarkedConfig.backgrounds = {
  ...MarkedConfig.backgroundsByType.common,
  ...MarkedConfig.backgroundsByType.skilled,
  ...MarkedConfig.backgroundsByType.street,
  ...MarkedConfig.backgroundsByType.social
};


// Marks of Purpose
MarkedConfig.markOfPurpose = {
  none:       "No Mark",     // default placeholder
  alchemist:  "Alchemist",
  arcanist:   "Arcanist",
  berserker:  "Berserker",
  charlatan:  "Charlatan",
  defender:   "Defender",
  duelist:    "Duelist",
  enchanter:  "Enchanter",
  guardian:   "Guardian",
  hexer:      "Hexer",
  inquisitor: "Inquisitor",
  marksman:   "Marksman",
  mender:     "Mender",
  oracle:     "Oracle",
  pathfinder: "Pathfinder",
  psion:      "Psion",
  runesmith:  "Runesmith",
  skirmisher: "Skirmisher",
  spellblade: "Spellblade",
  striker:    "Striker",
  warden:     "Warden"
};

// Marks of Purpose descriptions
MarkedConfig.markOfPurposeDescriptions = {
  none: "This character has not yet received a Mark of Purpose.",
  striker:    "Front-line damage dealer; decisive finishers.",
  defender:   "Line-holder; blocks lanes and peels pressure.",
  charlatan:  "Deception and ambush; trick-play specialist.",
  marksman:   "Ranged control and precision pickoffs.",
  skirmisher: "Mobile flanker; hit-and-run harassment.",
  enchanter:  "Buffs, wards, and battlefield shaping.",
  guardian:   "Wards and shielding; magical bodyguard.",
  mender:     "Field medicine, cleansing, stabilization.",
  arcanist:   "Direct spellcraft and measured counterspells.",
  spellblade: "Melee–magic hybrid imbuing steel.",
  pathfinder: "Scout/tracker; terrain and route control.",
  alchemist:  "Bombs, tonics, counters, and prep.",
  oracle:     "Foresight, omen-reading, protective wards.",
  warden:     "Nature sentinel; terrain control and protection.",
  inquisitor: "Witch-hunter; exposes and pressures casters.",
  hexer:      "Ailments, binds, and weakening curses.",
  duelist:    "Single-combat control; ripostes and tempo theft.",
  runesmith:  "Traps, wards, and placed battlefield devices.",
  berserker:  "Burst offense under pain; shock entry.",
  psion:      "Mind-force and perception edge; subtle control."
};

//RACE Values
MarkedConfig.raceStatus = {
  "Human": {
    status: {
      "vitality.max": 10,
      "mana.max": 10,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 5,
      "armor.max": 0,
      "shielding.value": 0
    }
  },
  "Etherean": {
    status: {
      "vitality.max": 8,
      "mana.max": 12,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 0,
      "shielding.value": 1
    }
  },
  "Mythrian": {
    status: {
      "vitality.max": 12,
      "mana.max": 8,
      "stamina.max": 12,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 1,
      "shielding.value": 0
    }
  },
  "Anthozoan": {
    status: {
      "vitality.max": 14,
      "mana.max": 8,
      "stamina.max": 10,
      "defense.value": 1,
      "reaction.value": 0,
      "trauma.max": 3,
      "pace.value": 4,
      "armor.max": 2,
      "shielding.value": 0
    }
  },
  "Sylvan": {
    status: {
      "vitality.max": 10,
      "mana.max": 10,
      "stamina.max": 12,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 0,
      "shielding.value": 0
    }
  },
  "Sprite": {
    status: {
      "vitality.max": 8,
      "mana.max": 12,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 1,
      "trauma.max": 1,
      "pace.value": 4,
      "armor.max": 0,
      "shielding.value": 1
    }
  },
  "Auramine": {
    status: {
      "vitality.max": 9,
      "mana.max": 13,
      "stamina.max": 9,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 6,
      "armor.max": 0,
      "shielding.value": 2
    }
  },
  "Draconian": {
    status: {
      "vitality.max": 13,
      "mana.max": 9,
      "stamina.max": 11,
      "defense.value": 1,
      "reaction.value": 0,
      "trauma.max": 3,
      "pace.value": 5,
      "armor.max": 2,
      "shielding.value": 0
    }
  },
  "Embergiest": {
    status: {
      "vitality.max": 9,
      "mana.max": 13,
      "stamina.max": 9,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 5,
      "armor.max": 0,
      "shielding.value": 2
    }
  },
  "Earthen": {
    status: {
      "vitality.max": 13,
      "mana.max": 8,
      "stamina.max": 11,
      "defense.value": 1,
      "reaction.value": 0,
      "trauma.max": 3,
      "pace.value": 4,
      "armor.max": 2,
      "shielding.value": 0
    }
  },
  "Prismatic": {
    status: {
      "vitality.max": 10,
      "mana.max": 12,
      "stamina.max": 10,
      "defense.value": 0,
      "reaction.value": 0,
      "trauma.max": 2,
      "pace.value": 5,
      "armor.max": 0,
      "shielding.value": 2
    }
  }
};

// RACE Attribute Modifiers
// These are % bonuses applied on top of the character's assigned sub-attributes.
MarkedConfig.raceAttributes = {
  "Human": {
    "body.might": 2,
    "body.swiftness": 2,
    "mind.insight": 2,
    "mind.willpower": 2,
    "soul.presence": 2,
    "soul.resolve": 2
  },
  "Etherean": {
    "mind.insight": 2,
    "mind.focus": 2,
    "soul.grace": 4,
    "soul.resonance": 4
  },
  "Mythrian": {
    "body.might": 4,
    "body.swiftness": 2,
    "body.endurance": 4,
    "mind.insight": 2
  },
  "Anthozoan": {
    "body.might": 2,
    "body.fortitude": 4,
    "body.endurance": 4,
    "soul.resolve": 2
  },
  "Sylvan": {
    "body.swiftness": 4,
    "body.endurance": 2,
    "mind.insight": 2,
    "soul.grace": 4
  },
  "Sprite": {
    "body.swiftness": 4,
    "mind.insight": 2,
    "mind.quickness": 2,
    "soul.grace": 4
  },
  "Auramine": {
    "mind.insight": 2,
    "soul.presence": 4,
    "soul.grace": 2,
    "soul.resonance": 4
  },
  "Draconian": {
    "body.might": 4,
    "body.fortitude": 4,
    "body.endurance": 2,
    "soul.presence": 2
  },
  "Embergiest": {
    "body.endurance": 2,
    "mind.focus": 2,
    "soul.presence": 2,
    "soul.resolve": 4,
    "soul.resonance": 2
  },
  "Earthen": {
    "body.might": 2,
    "body.fortitude": 4,
    "body.endurance": 4,
    "mind.willpower": 2
  },
  "Prismatic": {
    "mind.focus": 4,
    "mind.quickness": 2,
    "soul.resonance": 4,
    "soul.presence": 2
  }
};

// ------------------------------------------------------
// Legacy aliases so old templates keep working
// ------------------------------------------------------

// Old names used in templates: config.tribes and config.clans
MarkedConfig.tribes = MarkedConfig.mythrianTribes;
MarkedConfig.clans  = MarkedConfig.draconianClans;

// Old names used in templates for Marks of Purpose
// (covers markOfPurpose, marksOfPurpose, marksPurpose)
MarkedConfig.marksOfPurpose = MarkedConfig.markOfPurpose;
MarkedConfig.marksPurpose   = MarkedConfig.markOfPurpose;

