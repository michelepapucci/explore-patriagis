---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Mammoth"]
---
# [Mammoth](compendium/bestiary/beast/mammoth-xmm.md)
*Source: Monster Manual (2024) p. 365*  

```statblock
"name": "Mammoth (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "24"
- !!int "9"
- !!int "21"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "50 ft."
"saves":
  "Strength": !!int "10"
  "Constitution": !!int "8"
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"actions":
- "desc": "The mammoth makes two Gore attacks."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+10|noform|text(+10), reach 10 ft. Hit: dice:2d10+7|noform|avg|text(18)\
    \ (2d10 + 7) Piercing damage. If the target is a Huge or smaller creature and\
    \ the mammoth moved 20+ feet straight toward it immediately before the hit, the\
    \ target has the [Prone](rules/conditions.md#Prone) condition."
  "name": "Gore"
"bonus_actions":
- "desc": "Dexterity Saving Throw: DC 18, one creature within 5 feet that has the\
    \ [Prone](rules/conditions.md#Prone) condition. Failure: dice:4d10+7|noform|avg|text(29)\
    \ (4d10 + 7) Bludgeoning damage. Success: Half damage."
  "name": "Trample"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Mammoth.webp"
```
^statblock

## Environment

arctic