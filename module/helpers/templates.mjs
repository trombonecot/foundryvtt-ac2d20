/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    "systems/ac2d20/templates/actor/parts/actor-header.html",
    "systems/ac2d20/templates/actor/parts/actor-abilities.html",
    "systems/ac2d20/templates/actor/parts/actor-talents.html",
    "systems/ac2d20/templates/actor/parts/actor-spells.html",
    "systems/ac2d20/templates/actor/parts/actor-weapons.html",
    "systems/ac2d20/templates/actor/parts/actor-effects.html",
    "systems/ac2d20/templates/actor/parts/actor-inventory.html",
    "systems/ac2d20/templates/actor/parts/actor-special_abilities.html",
    "systems/ac2d20/templates/item/parts/item-header.html",
    "systems/ac2d20/templates/item/parts/item-effects.html",
    "systems/ac2d20/templates/actor/parts/simple-expandable-item.html"
  ]);
};
