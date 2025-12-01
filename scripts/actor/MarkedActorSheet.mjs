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
          // match skills.hbs: class="skills-sub-tabs" and class="skills-sub-body"
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

    // --------------------------------
    // ATTRIBUTE GROUP ROLLS (Body/Mind/Soul AVG)
    // --------------------------------
    html.on("click", ".roll-attribute-group, .roll-attribute", ev => {
      ev.preventDefault();
      const button = ev.currentTarget;

      // Support both data-attr-group and data-attr
      const groupKey =
        button.dataset.attrGroup ||
        button.dataset.attr;

      if (!groupKey) return;

      if (typeof this.actor.rollAttributeGroup === "function") {
        this.actor.rollAttributeGroup(groupKey);
      } else {
        console.warn("MarkedActorSheet | rollAttributeGroup helper not found on actor.");
      }
    });

    // --------------------------------
    // SKILL ROLLS
    //  - Buttons: .roll-skill data-skill="might.athletics" etc.
    //  - We infer body/mind/soul from the surrounding tab.
    // --------------------------------
    html.on("click", ".roll-skill", ev => {
      ev.preventDefault();
      const button = ev.currentTarget;
      let skillKey = button.dataset.skill;
      if (!skillKey) return;

      // If the skillKey is already fully qualified (body.* / mind.* / soul.*),
      // just use it directly.
      let fullPath = skillKey;

      const alreadyQualified =
        skillKey.startsWith("body.") ||
        skillKey.startsWith("mind.") ||
        skillKey.startsWith("soul.");

      if (!alreadyQualified) {
        // Determine which primary group we are in: body / mind / soul
        let primary = null;

        // Find closest tab wrapper
        const bodyTab = button.closest('.tab[data-tab="body-skills"]');
        const mindTab = button.closest('.tab[data-tab="mind-skills"]');
        const soulTab = button.closest('.tab[data-tab="soul-skills"]');

        if (bodyTab) primary = "body";
        else if (mindTab) primary = "mind";
        else if (soulTab) primary = "soul";

        if (primary) {
          fullPath = `${primary}.${skillKey}`;
        }
      }

      if (typeof this.actor.rollSkill === "function") {
        this.actor.rollSkill(fullPath);
      } else {
        console.warn("MarkedActorSheet | rollSkill helper not found on actor.");
      }
    });
  }
}
