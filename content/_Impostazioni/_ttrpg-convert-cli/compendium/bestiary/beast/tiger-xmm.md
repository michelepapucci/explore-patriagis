---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Tiger"]
---
# [Tiger](compendium/bestiary/beast/tiger-xmm.md)
*Source: Monster Manual (2024) p. 371, Player's Handbook (2024) p. 358*  

```statblock
"name": "Tiger (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d10 + 8"
"stats":
- !!int "17"
- !!int "16"
- !!int "14"
- !!int "3"
- !!int "12"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1"
"actions":
- "desc": "Melee Attack: dice:1d20+5|noform|text(+5), reach 5 ft. Hit: dice:2d6+3|noform|avg|text(10)\
    \ (2d6 + 3) Slashing damage. If the target is a Large or smaller creature, it\
    \ has the [Prone](rules/conditions.md#Prone) condition."
  "name": "Rend"
"bonus_actions":
- "desc": "The tiger takes the Disengage or Hide action."
  "name": "Nimble Escape"
"source":
- "XMM"
- "XPHB"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Tiger.webp"
```
^statblock

## Environment

forest, grassland