---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Constrictor Snake"]
---
# [Constrictor Snake](compendium/bestiary/beast/constrictor-snake-xmm.md)
*Source: Monster Manual (2024) p. 351, Player's Handbook (2024) p. 348*  

```statblock
"name": "Constrictor Snake (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
- "desc": "Melee Attack: dice:1d20+4|noform|text(+4), reach 5 ft. Hit: dice:1d8+2|noform|avg|text(6)\
    \ (1d8 + 2) Piercing damage."
  "name": "Bite"
- "desc": "Strength Saving Throw: DC 12, one Medium or smaller creature the snake\
    \ can see within 5 feet. Failure: dice:3d4|noform|avg|text(7) (3d4) Bludgeoning\
    \ damage, and the target has the [Grappled](rules/conditions.md#Grappled) condition\
    \ (escape DC 12)."
  "name": "Constrict"
"source":
- "XMM"
- "XPHB"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Constrictor%20Snake.webp"
```
^statblock

## Environment

desert, forest, swamp, underwater