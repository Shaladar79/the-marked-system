// scripts/config.mjs

// Single config object for The Marked System
export const MarkedConfig = {};

// Core attribute groups (you can expand this later if you want)
MarkedConfig.attributes = {
  body: { label: "Body" },
  mind: { label: "Mind" },
  soul: { label: "Soul" }
};

// Rank list (Option A)
// Keys are capitalized so they match your current default "Normal"
// stored at system.details.rank in template.json
MarkedConfig.ranks = {
  Normal:    { label: "Normal" },
  Quartz:    { label: "Quartz" },
  Topaz:     { label: "Topaz" },
  Garnet:    { label: "Garnet" },
  Emerald:   { label: "Emerald" },
  Sapphire:  { label: "Sapphire" },
  Ruby:      { label: "Ruby" },
  Diamond:   { label: "Diamond" },
  Mythrite:  { label: "Mythrite" },
  Celestite: { label: "Celestite" }
};

// Later we can add:
// MarkedConfig.races = { ... }
// MarkedConfig.backgrounds = { ... }
// MarkedConfig.marks = { ... }
