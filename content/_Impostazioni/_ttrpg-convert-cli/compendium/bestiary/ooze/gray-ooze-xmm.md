---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Gray Ooze"]
---
# [Gray Ooze](compendium/bestiary/ooze/gray-ooze-xmm.md)
*Source: Monster Manual (2024) p. 151*  

Gray oozes appear in areas affected by unpredictable magic. Magic-users who fail in their attempts to bind elemental spirits to the bodies of Constructs might also accidentally create gray oozes.

## Gray Oozes

*Hungry Slimes and Magical Failures*

- **Habitat.** Underdark  
- **Treasure.** None  

Gray oozes are predatory, corrosive slimes that blend in with stony surroundings.

```statblock
"name": "Gray Ooze (XMM)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "12"
- !!int "6"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "2"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "acid, cold, fire"
"condition_immunities": "[blinded](rules/conditions.md#Blinded), [charmed](rules/conditions.md#Charmed),\
  \ [deafened](rules/conditions.md#Deafened), [exhaustion](rules/conditions.md#Exhaustion),\
  \ [frightened](rules/conditions.md#Frightened), [grappled](rules/conditions.md#Grappled),\
  \ [prone](rules/conditions.md#Prone), [restrained](rules/conditions.md#Restrained)"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The ooze can move through a space as narrow as 1 inch without expending\
    \ extra movement to do so."
  "name": "Amorphous"
- "desc": "Nonmagical ammunition is destroyed immediately after hitting the ooze and\
    \ dealing any damage. Any nonmagical weapon takes a cumulative -1 penalty to attack\
    \ rolls immediately after dealing damage to the ooze and coming into contact with\
    \ it. The weapon is destroyed if the penalty reaches -5. The penalty can be removed\
    \ by casting the [Mending](compendium/spells/mending-xphb.md) spell on the weapon.\n\
    \nThe ooze can eat through 2-inch-thick, nonmagical metal or wood in 1 round."
  "name": "Corrosive Form"
"actions":
- "desc": "Melee Attack: dice:1d20+3|noform|text(+3), reach 5 ft. Hit: dice:2d8+1|noform|avg|text(10)\
    \ (2d8 + 1) Acid damage. Nonmagical armor worn by the target takes a -1 penalty\
    \ to the AC it offers. The armor is destroyed if the penalty reduces its AC to\
    \ 10. The penalty can be removed by casting the [Mending](compendium/spells/mending-xphb.md)\
    \ spell on the armor."
  "name": "Pseudopod"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Gray%20Ooze.webp"
```
^statblock

## Environment

underdark