const antidoteIngredient = [
	{
		_id: "6702b44f76863c206a48ccdf",
		name: "Healing Ointment",
		description: "A soothing ointment that effectively restores hit points.",
		value: 65,
		effects: [
			"restore_hit_points"
		],
		image: "/images/equipment/ingredients/restore_10.png",
		type: "ingredient"
	},
	{
		_id: "6702b44f76863c206a48cce1",
		name: "Tranquility Flower",
		description: "A tranquil flower that helps to alleviate insanity and calm the mind.",
		value: 5,
		effects: [
			"least_restore_insanity"
		],
		image: "/images/equipment/ingredients/restore_12.png",
		type: "ingredient"
	},
	{
		_id: "6702b44f76863c206a48cce7",
		name: "Silver Petal",
		description: "A delicate petal that enhances charisma, making interactions smoother.",
		value: 30,
		effects: [
			"lesser_restore_charisma"
		],
		image: "/images/equipment/ingredients/restore_18.png",
		type: "ingredient"
	},
	{
		_id: "6702b44f76863c206a48ccd9",
		name: "Fortitude Root",
		description: "A potent root that strengthens the constitution and fortifies the body.",
		value: 270,
		effects: [
			"greater_restore_constitution"
		],
		image: "/images/equipment/ingredients/restore_4.png",
		type: "ingredient"
	},
]

const poisonIngredients = [
	{
		_id: "6702b46b76863c206a48ccfe",
		name: "Elixir of Despair",
		description: "An elixir that heightens feelings of insanity, shattering sanity.",
		value: 40,
		effects: [
			"lesser_damage_insanity"
		],
		image: "/images/equipment/ingredients/damage_12.png",
		type: "ingredient"
	},
	{
		_id: "6702b46b76863c206a48ccff",
		name: "Charm's Demise",
		description: "An ingredient that diminishes charisma, making one less appealing.",
		value: 40,
		effects: [
			"lesser_damage_charisma"
		],
		image: "/images/equipment/ingredients/damage_13.png",
		type: "ingredient"
	},
]

const failedPoisonIngredients = [
	{
		_id: "6702b46b76863c206a48ccfe",
		name: "Elixir of Despair",
		description: "An elixir that heightens feelings of insanity, shattering sanity.",
		value: 40,
		effects: [
			"lesser_insanity"
		],
		image: "/images/equipment/ingredients/damage_12.png",
		type: "ingredient"
	},
	{
		_id: "6702b46b76863c206a48ccff",
		name: "Charm's Demise",
		description: "An ingredient that diminishes charisma, making one less appealing.",
		value: 40,
		effects: [
			"lesser_damage_charisma"
		],
		image: "/images/equipment/ingredients/damage_13.png",
		type: "ingredient"
	},
]

const boostIngredients = [
	{
		_id: "6702b4f876863c206a48cd20",
		name: "Radiant Petal",
		description: "A petal that enhances charisma with its ethereal glow.",
		value: 9,
		effects: [
			"least_boost_charisma"
		],
		image: "/images/ingredients/boost/boost_13.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd20",
		name: "Radiant Petal",
		description: "A petal that enhances charisma with its ethereal glow.",
		value: 9,
		effects: [
			"least_boost_charisma"
		],
		image: "/images/ingredients/boost/boost_13.webp",
		type: "ingredient"
	},
]

const boostLesserIngredients = [
	{
		_id: "6702b4f876863c206a48cd25",
		name: "Mosscap",
		description: "A mushroom that enhances constitution when brewed into tea.",
		value: 32,
		effects: [
			"lesser_boost_constitution"
		],
		image: "/images/ingredients/boost/boost_18.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd25",
		name: "Mosscap",
		description: "A mushroom that enhances constitution when brewed into tea.",
		value: 32,
		effects: [
			"lesser_boost_constitution"
		],
		image: "/images/ingredients/boost/boost_18.webp",
		type: "ingredient"
	},
]

const boostNormalIngredients = [
	{
		_id: "6702b4f876863c206a48cd26",
		name: "Dreamer's Dew",
		description: "A dewdrop that enhances charisma and inspires dreams.",
		value: 72,
		effects: [
			"boost_charisma"
		],
		image: "/images/ingredients/boost/boost_19.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd26",
		name: "Dreamer's Dew",
		description: "A dewdrop that enhances charisma and inspires dreams.",
		value: 72,
		effects: [
			"boost_charisma"
		],
		image: "/images/ingredients/boost/boost_19.webp",
		type: "ingredient"
	},
]

const boostGreaterIngredients = [
	{
		_id: "6702b4f876863c206a48cd1e",
		name: "Titan Vine",
		description: "A sturdy vine that grants the strength of a titan.",
		value: 230,
		effects: [
			"greater_boost_strength"
		],
		image: "/images/ingredients/boost/boost_11.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd1e",
		name: "Titan Vine",
		description: "A sturdy vine that grants the strength of a titan.",
		value: 230,
		effects: [
			"greater_boost_strength"
		],
		image: "/images/ingredients/boost/boost_11.webp",
		type: "ingredient"
	}
]

const boostDifferentIngredients = [
	{
		_id: "6702b4f876863c206a48cd19",
		name: "Astral Herb",
		description: "A mystical herb that enhances intelligence during spells.",
		value: 210,
		effects: [
			"greater_boost_intelligence"
		],
		image: "/images/ingredients/boost/boost_6.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd25",
		name: "Mosscap",
		description: "A mushroom that enhances constitution when brewed into tea.",
		value: 32,
		effects: [
			"lesser_boost_constitution"
		],
		image: "/images/ingredients/boost/boost_18.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd15",
		name: "Sageleaf",
		description: "A leaf that sharpens the mind and boosts intelligence.",
		value: 34,
		effects: [
			"lesser_boost_intelligence"
		],
		image: "/images/ingredients/boost/boost_2.webp",
		type: "ingredient"
	},
]

const boostDifferentAttributeIngredients = [
	{
		_id: "6702b4f876863c206a48cd15",
		name: "Sageleaf",
		description: "A leaf that sharpens the mind and boosts intelligence.",
		value: 34,
		effects: [
			"lesser_boost_intelligence"
		],
		image: "/images/ingredients/boost/boost_2.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd23",
		name: "Amber Bloom",
		description: "A glowing bloom that enhances dexterity",
		value: 50,
		effects: [
			"boost_dexterity"
		],
		image: "/images/ingredients/boost/boost_16.webp",
		type: "ingredient"
	},
]

const calmLeastIngredients = [
	{
		_id: "6702b56a76863c206a48cd46",
		name: "Quieting Root",
		description: "A root that brings about a gentle peace of mind with every consumption.",
		value: 6,
		effects: [
			"least_calm"
		],
		image: "/images/ingredients/calm/calm_4.webp",
		type: "ingredient"
	},
	{
		_id: "6702b56a76863c206a48cd46",
		name: "Quieting Root",
		description: "A root that brings about a gentle peace of mind with every consumption.",
		value: 6,
		effects: [
			"least_calm"
		],
		image: "/images/ingredients/calm/calm_4.webp",
		type: "ingredient"
	},
]

const calmLesserIngredients = [
	{
		_id: "6702b4f876863c206a48cd25",
		name: "Mosscap",
		description: "A mushroom that enhances constitution when brewed into tea.",
		value: 32,
		effects: [
			"lesser_boost_constitution"
		],
		image: "/images/ingredients/boost/boost_18.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd25",
		name: "Mosscap",
		description: "A mushroom that enhances constitution when brewed into tea.",
		value: 32,
		effects: [
			"lesser_boost_constitution"
		],
		image: "/images/ingredients/boost/boost_18.webp",
		type: "ingredient"
	},
]

const calmNormalIngredients = [
	{
		_id: "6702b4f876863c206a48cd26",
		name: "Dreamer's Dew",
		description: "A dewdrop that enhances charisma and inspires dreams.",
		value: 72,
		effects: [
			"boost_charisma"
		],
		image: "/images/ingredients/boost/boost_19.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd26",
		name: "Dreamer's Dew",
		description: "A dewdrop that enhances charisma and inspires dreams.",
		value: 72,
		effects: [
			"boost_charisma"
		],
		image: "/images/ingredients/boost/boost_19.webp",
		type: "ingredient"
	},
]

const calmGreaterIngredients = [
	{
		_id: "6702b4f876863c206a48cd1e",
		name: "Titan Vine",
		description: "A sturdy vine that grants the strength of a titan.",
		value: 230,
		effects: [
			"greater_boost_strength"
		],
		image: "/images/ingredients/boost/boost_11.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd1e",
		name: "Titan Vine",
		description: "A sturdy vine that grants the strength of a titan.",
		value: 230,
		effects: [
			"greater_boost_strength"
		],
		image: "/images/ingredients/boost/boost_11.webp",
		type: "ingredient"
	}
]

const calmDifferentIngredients = [
	{
		_id: "6702b4f876863c206a48cd19",
		name: "Astral Herb",
		description: "A mystical herb that enhances intelligence during spells.",
		value: 210,
		effects: [
			"greater_boost_intelligence"
		],
		image: "/images/ingredients/boost/boost_6.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd25",
		name: "Mosscap",
		description: "A mushroom that enhances constitution when brewed into tea.",
		value: 32,
		effects: [
			"lesser_boost_constitution"
		],
		image: "/images/ingredients/boost/boost_18.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd15",
		name: "Sageleaf",
		description: "A leaf that sharpens the mind and boosts intelligence.",
		value: 34,
		effects: [
			"lesser_boost_intelligence"
		],
		image: "/images/ingredients/boost/boost_2.webp",
		type: "ingredient"
	},
]

const calmDifferentAttributeIngredients = [
	{
		_id: "6702b4f876863c206a48cd15",
		name: "Sageleaf",
		description: "A leaf that sharpens the mind and boosts intelligence.",
		value: 34,
		effects: [
			"lesser_boost_intelligence"
		],
		image: "/images/ingredients/boost/boost_2.webp",
		type: "ingredient"
	},
	{
		_id: "6702b4f876863c206a48cd23",
		name: "Amber Bloom",
		description: "A glowing bloom that enhances dexterity",
		value: 50,
		effects: [
			"boost_dexterity"
		],
		image: "/images/ingredients/boost/boost_16.webp",
		type: "ingredient"
	},
]

module.exports = {
	antidoteIngredient,
	poisonIngredients,
	failedPoisonIngredients,
	boostIngredients,
	boostLesserIngredients,
	boostNormalIngredients,
	boostGreaterIngredients,
	boostDifferentIngredients,
	boostDifferentAttributeIngredients,
	calmLeastIngredients,
	calmLesserIngredients,
	calmNormalIngredients,
	calmGreaterIngredients,
	calmDifferentIngredients,
	calmDifferentAttributeIngredients
};