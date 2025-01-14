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
module.exports = antidoteIngredient;