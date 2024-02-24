elements.flavor_formula = {
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    color: ["#ff0000","#ff6400", "#ffff00", "#04ff00", "#00fff7", "#0400ff", "#b700ff", "#ff0099"],
    reactions: {},
};
elements.flavored_juice = {
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "solid",
    color: ["#ff0000","#ff6400", "#ffff00", "#04ff00", "#00fff7", "#0400ff", "#b700ff", "#ff0099"],
    reactions: {},
};
if (!elements.water.reactions) { elements.water.reactions = {} }
elements.water.reactions.flavor_formula = { "elem1":"flavored_juice", "elem2": "flavored_juice"};
