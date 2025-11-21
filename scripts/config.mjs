// scripts/config.mjs

// Single config object for The Marked System
export const MarkedConfig = {};

// ------------------------------
// Core Attribute Groups
// ------------------------------
MarkedConfig.attributes = {
  body: { label: "Body" },
  mind: { label: "Mind" },
  soul: { label: "Soul" }
};

// ------------------------------
// Rank List
// ------------------------------
// Keys are the stored values (system.details.rank)
// "label" is what the user sees in the dropdown
MarkedConfig.ranks = {
  normal:   { label: "Normal"   },
  quartz:   { label: "Quartz"   },
  topaz:    { label: "Topaz"    },
  garnet:   { label: "Garnet"   },
  emerald:  { label: "Emerald"  },
  sapphire: { label: "Sapphire" },
  ruby:     { label: "Ruby"     },
  diamond:  { label: "Diamond"  },
  mythrite: { label: "Mythrite" },
  celestite:{ label: "Celestite"}
};

// Later we can add:
// MarkedConfig.races = { ... };
// MarkedConfig.backgrounds = { ... };
// MarkedConfig.marks = { ... };
