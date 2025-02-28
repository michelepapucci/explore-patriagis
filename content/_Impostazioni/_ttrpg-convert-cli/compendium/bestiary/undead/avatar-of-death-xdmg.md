---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xdmg
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Avatar of Death"]
---
# [Avatar of Death](compendium/bestiary/undead/avatar-of-death-xdmg.md)
*Source: Dungeon Master's Guide (2024) p. 252*  

```statblock
"name": "Avatar of Death (XDMG)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "60 ft., fly 60 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](rules/conditions.md#Charmed), [exhaustion](rules/conditions.md#Exhaustion),\
  \ [frightened](rules/conditions.md#Frightened), [paralyzed](rules/conditions.md#Paralyzed),\
  \ [petrified](rules/conditions.md#Petrified), [poisoned](rules/conditions.md#Poisoned),\
  \ [unconscious](rules/conditions.md#Unconscious)"
"senses": "truesight 60 ft., passive Perception 13"
"languages": "all languages known to its summoner"
"traits":
- "desc": "The avatar can move through other creatures and objects as if they were\
    \ Difficult Terrain. It takes dice:1d10|noform|avg|text(5) (1d10) Force damage\
    \ if it ends its turn inside an object."
  "name": "Incorporeal Movement"
"actions":
- "desc": "The avatar makes a number of Reaping Scythe attacks equal to half the summoner's\
    \ Proficiency Bonus (rounded up)."
  "name": "Multiattack"
- "desc": "Melee Attack: Automatic hit, reach 5 ft. Hit: dice:1d8+3|noform|avg|text(7)\
    \ (1d8 + 3) Slashing damage plus dice:1d8|noform|avg|text(4) (1d8) Necrotic\
    \ damage."
  "name": "Reaping Scythe"
"source":
- "XDMG"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XDMG/Avatar%20of%20Death.webp"
```
^statblock