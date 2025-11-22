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
        // ---------------------------
        // TOP-LEVEL TABS
        // ---------------------------
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attr-status"
        },

        // ---------------------------
        // SUBTABS: Attributes & Status
        // ---------------------------
        {
          navSelector: ".sub-tabs",
          contentSelector: ".sub-body",
          initial: "attributes"
        },

        // ---------------------------
        // SUBTABS: Abilities (Marks)
        // ---------------------------
        {
          navSelector: ".abilities-subtabs",
          contentSelector: ".abilities-subbody",
          initial: "marks"
        }
      ],

      submitOnChange: true,
      submitOnClose: true
    });
  }

  getData(options) {
    const context = super.getData(options);

    context.system = context.data.system;
    context.config = MarkedConfig;

    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // --------------------------------
    // RACE-DEPENDENT EXTRA DROPDOWNS
    // --------------------------------
    const raceSelect = html.find('select[name="system.details.race"]');
    const tribeField = html.find(".tribe-field");
    const clanField  = html.find(".clan-field");

    // Show/hide tribe/clan based on race
    const updateRaceDependentFields = () => {
      const race = raceSelect.val();

      // Mythrian → show Tribe
      if (race === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show Clan
      if (race === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        this.object.update({ "system.details.clan": "" });
      }
    };

    // Apply racial status values when the race changes
    const applyRaceStatus = () => {
      const raceKey = raceSelect.val();       // e.g. "human", "etherean"
      if (!raceKey) return;

      // Convert key → label, e.g. "human" → "Human"
      const raceLabel  = MarkedConfig.races?.[raceKey] ?? raceKey;
      const raceConfig = MarkedConfig.raceStatus?.[raceLabel];
      if (!raceConfig || !raceConfig.status) return;

      const update = {};

      // Copy racial status into system.status.*
      for (const [path, value] of Object.entries(raceConfig.status)) {
        update[`system.status.${path}`] = value;
      }

      // Optionally set current to max for vitality / mana / stamina on selection
      if (raceConfig.status["vitality.max"] !== undefined) {
        update["system.status.vitality.value"] = raceConfig.status["vitality.max"];
      }
      if (raceConfig.status["mana.max"] !== undefined) {
        update["system.status.mana.value"] = raceConfig.status["mana.max"];
      }
      if (raceConfig.status["stamina.max"] !== undefined) {
        update["system.status.stamina.value"] = raceConfig.status["stamina.max"];
      }

      this.object.update(update);
    };

    // On initial render, just fix tribe/clan visibility
    updateRaceDependentFields();

    // On change, update tribe/clan AND apply racial status
    raceSelect.on("change", () => {
      updateRaceDependentFields();
      applyRaceStatus();
    });
  }
}
