---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast/dinosaur
statblock: inline
aliases: ["Tyrannosaurus Rex"]
---
# [Tyrannosaurus Rex](compendium/bestiary/beast/tyrannosaurus-rex-xmm.md)
*Source: Monster Manual (2024) p. 372*  

```statblock
"name": "Tyrannosaurus Rex (XMM)"
"size": "Huge"
"type": "beast"
"subtype": "dinosaur"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "136"
"hit_dice": "13d12 + 52"
"stats":
- !!int "25"
- !!int "10"
- !!int "19"
- !!int "2"
- !!int "12"
- !!int "9"
"speed": "50 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "10"
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "8"
"actions":
- "desc": "The tyrannosaurus makes one Bite attack and one Tail attack."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+10|noform|text(+10), reach 10 ft. Hit: dice:4d12+7|noform|avg|text(33)\
    \ (4d12 + 7) Piercing damage. If the target is a Large or smaller creature,\
    \ it has the [Grappled](rules/conditions.md#Grappled) condition (escape DC 17).\
    \ While [Grappled](rules/conditions.md#Grappled), the target has the [Restrained](rules/conditions.md#Restrained)\
    \ condition and can't be targeted by the tyrannosaurus's Tail."
  "name": "Bite"
- "desc": "Melee Attack: dice:1d20+10|noform|text(+10), reach 15 ft. Hit: dice:4d8+7|noform|avg|text(25)\
    \ (4d8 + 7) Bludgeoning damage. If the target is a Huge or smaller creature,\
    \ it has the [Prone](rules/conditions.md#Prone) condition."
  "name": "Tail"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Tyrannosaurus%20Rex.webp"
```
^statblock

## Environment

grassland