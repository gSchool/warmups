/*
Today we're going to solve an age-old problem that has plagued mountain villages and startups alike.
Given two entities that have preferences for matching, how do you ensure that these matchups are "stable"?

When we talk about stability, we mean that if two entities prefer each other over the partner they are matched with, the arrangement is not stable.



Given a list of developers, match them to companies. Match them such that no developer prefers a company that also prefers that developer over the one they are matched with. 
The "preferences" property represents an ordered list of preferences, with the first element being the most preferred.

*/


var developers = [
	{
		name: "Liz",
		preferences : [
			"AirBnB",
			"Facebook",
			"Pivotal",
			"Amazon",
			"Lyft",
			"Uber"
		]
	},
	{
		name: "Tyler",
		preferences : [
			"Lyft",
			"Facebook",
			"Pivotal",
			"AirBnB",
			"Amazon",
			"Uber"
		]
	},
	{
		name: "Cho",
		preferences : [
			"Uber",
			"Amazon",
			"Facebook",
			"AirBnB",
			"Pivotal",
			"Lyft"
		]
	},
	{
		name: "Zubair",
		preferences : [
			"AirBnB",
			"Pivotal",
			"Facebook",
			"Amazon",
			"Lyft",
			"Uber"
		]
	},
	{
		name: "Rosa",
		preferences : [
			"AirBnB",
			"Lyft",
			"Uber",
			"Facebook",
			"Pivotal",
			"Amazon"
		]
	}
];

var companies = [
	{
		name: "AirBnB",
		preferences : [
			"Liz",
			"Tyler",
			"Cho",
			"Zubair",
			"Rosa"
		]
	},
	{
		name: "Facebook",
		preferences : [
			"Cho",
			"Liz",
			"Tyler",
			"Zubair",
			"Rosa"
		]
	},
	{
		name: "Pivotal",
		preferences : [
			"Tyler",
			"Zubair",
			"Liz",
			"Cho",
			"Rosa"
		]
	},
	{
		name: "Amazon",
		preferences : [
			"Rosa",
			"Tyler",
			"Cho",
			"Zubair",
			"Liz"
		]
	},
	{
		name: "Lyft",
		preferences : [
			"Rosa",
			"Cho",
			"Zubair",
			"Liz",
			"Tyler"
		]
	},
	{
		name: "Uber",
		preferences : [
			"Liz",
			"Tyler",
			"Cho",
			"Zubair",
			"Rosa"
		]
	}
];