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
        // Top-level tabs: "Attributes & Status" and "Abilities"
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attr-status"
        },
        // Inner subtabs inside the Attributes & Status tab
        {
          navSelector: ".sub-tabs",
          contentSelector: ".sub-body",
          initial: "attributes"
        }
      ],
      submitOnChange: true,
      submitOnClose: true
    });
  }

  getData(options) {
    const context = super.getData(options);

    // Give partials direct access to system and config
    context.system = context.data.system;
    context.config = MarkedConfig;

    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // ----- Race-dependent extra dropdowns -----
    const raceSelect = html.find('select[name="system.details.race"]');
    const tribeField = html.find(".tribe-field");
    const clanField  = html.find(".clan-field");

    const updateRaceDependentFields = () => {
      const race = raceSelect.val();

      // Mythrian → show tribe, hide clan
      if (race === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show clan, hide tribe
      if (race === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        this.object.update({ "system.details.clan": "" });
      }
    };

    // Initial state
    updateRaceDependentFields();

    // Live update when race changes
    raceSelect.on("change", updateRaceDependentFields);
  }
}
