// scripts/actor/MarkedActorSheet.mjs

import { MarkedConfig } from "../config.mjs";

export class MarkedActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["marked", "sheet", "actor"],
      template: "systems/the-marked-system/templates/actors/actor-sheet.hbs",
      width: 900,
      height: 700,

      tabs: [
        // TOP-LEVEL TABS (Information / Attributes & Status / Abilities / Skills)
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attr-status"
        },

        // SUBTABS: Attributes & Status
        {
          navSelector: ".sub-tabs",
          contentSelector: ".sub-body",
          initial: "attributes"
        },

        // SUBTABS: Abilities (Marks, later more)
        {
          navSelector: ".abilities-subtabs",
          contentSelector: ".abilities-subbody",
          initial: "marks"
        },

        // SUBTABS: Skills (Body / Mind / Soul)
        {
          // 🔹 match skills.hbs: class="skills-sub-tabs" and class="skills-sub-body"
          navSelector: ".skills-sub-tabs",
          contentSelector: ".skills-sub-body",
          initial: "body-skills"
        }
      ],

      submitOnChange: true,
      submitOnClose: true
    });
  }

  getData(options = {}) {
    const data = super.getData(options);

    // Foundry v10/11 compatibility: some versions use data.data.system
    data.system = data.data?.system ?? data.system;
    data.config = MarkedConfig;

    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // --------------------------------
    // RACE-DEPENDENT EXTRA DROPDOWNS
    // --------------------------------
    const raceSelect = html.find('select[name="system.details.race"]');
    const tribeField = html.find(".tribe-field");
    const clanField  = html.find(".clan-field");

    // Show/hide tribe & clan based on race key ("mythrian", "draconian")
    const updateRaceDependentFields = () => {
      const raceKey = raceSelect.val();

      // Mythrian → show Tribe
      if (raceKey === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show Clan
      if (raceKey === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        this.object.update({ "system.details.clan": "" });
      }
    };

    // Apply racial STATUS + ATTRIBUTE bonuses when race changes
    const applyRaceData = () => {
      const raceKey = raceSelect.val();
      if (!raceKey) return;

      // e.g. "human" → "Human"
      const raceLabel = MarkedConfig.races?.[raceKey] ?? raceKey;

      const raceStatus     = MarkedConfig.raceStatus?.[raceLabel];
      const raceAttributes = MarkedConfig.raceAttributes?.[raceLabel];

      const update = {};

      // 1) STATUS: copy racial status into system.status.*
      if (raceStatus?.status) {
        for (const [path, value] of Object.entries(raceStatus.status)) {
          update[`system.status.${path}`] = value;
        }

        // Optionally set current = max for V/M/S
        if (raceStatus.status["vitality.max"] !== undefined) {
          update["system.status.vitality.value"] = raceStatus.status["vitality.max"];
        }
        if (raceStatus.status["mana.max"] !== undefined) {
          update["system.status.mana.value"] = raceStatus.status["mana.max"];
        }
        if (raceStatus.status["stamina.max"] !== undefined) {
          update["system.status.stamina.value"] = raceStatus.status["stamina.max"];
        }
      }

      // 2) ATTRIBUTES: apply racial modifiers to sub-attributes
      if (raceAttributes) {
        for (const [path, bonus] of Object.entries(raceAttributes)) {
          // path like "body.might" → system.attributes.body.might.value
          const attrPath = `system.attributes.${path}.value`;
          const current  = foundry.utils.getProperty(this.actor.system, attrPath) ?? 0;
          update[attrPath] = Number(current) + Number(bonus);
        }
      }

      update["system.details.race"] = raceKey;

      if (Object.keys(update).length > 0) {
        this.object.update(update);
      }
    };

    // Initial state
    updateRaceDependentFields();

    // When race changes
    raceSelect.on("change", () => {
      updateRaceDependentFields();
      applyRaceData();
    });
  }
}

