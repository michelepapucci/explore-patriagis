---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Brown Bear"]
---
# [Brown Bear](compendium/bestiary/beast/brown-bear-xmm.md)
*Source: Monster Manual (2024) p. 350, Player's Handbook (2024) p. 347*  

```statblock
"name": "Brown Bear (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"stats":
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"actions":
- "desc": "The bear makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+5|noform|text(+5), reach 5 ft. Hit: dice:1d8+3|noform|avg|text(7)\
    \ (1d8 + 3) Piercing damage."
  "name": "Bite"
- "desc": "Melee Attack: dice:1d20+5|noform|text(+5), reach 5 ft. Hit: dice:1d4+3|noform|avg|text(5)\
    \ (1d4 + 3) Slashing damage. If the target is a Large or smaller creature, it\
    \ has the [Prone](rules/conditions.md#Prone) condition."
  "name": "Claw"
"source":
- "XMM"
- "XPHB"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Brown%20Bear.webp"
```
^statblock

## Environment

arctic, forest, hill