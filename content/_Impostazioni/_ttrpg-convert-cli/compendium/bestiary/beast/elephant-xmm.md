---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Elephant"]
---
# [Elephant](compendium/bestiary/beast/elephant-xmm.md)
*Source: Monster Manual (2024) p. 353, Player's Handbook (2024) p. 349*  

```statblock
"name": "Elephant (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"stats":
- !!int "22"
- !!int "9"
- !!int "17"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"actions":
- "desc": "The elephant makes two Gore attacks."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+8|noform|text(+8), reach 5 ft. Hit: dice:2d8+6|noform|avg|text(15)\
    \ (2d8 + 6) Piercing damage. If the target is a Huge or smaller creature and\
    \ the elephant moved 20+ feet straight toward it immediately before the hit, the\
    \ target has the [Prone](rules/conditions.md#Prone) condition."
  "name": "Gore"
"bonus_actions":
- "desc": "Dexterity Saving Throw: DC 16, one creature within 5 feet that has the\
    \ [Prone](rules/conditions.md#Prone) condition. Failure: dice:2d10+6|noform|avg|text(17)\
    \ (2d10 + 6) Bludgeoning damage. Success: Half damage."
  "name": "Trample"
"source":
- "XMM"
- "XPHB"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Elephant.webp"
```
^statblock

## Environment

grassland