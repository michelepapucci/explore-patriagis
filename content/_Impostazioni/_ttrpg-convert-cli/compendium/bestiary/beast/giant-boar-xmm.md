---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Boar"]
---
# [Giant Boar](compendium/bestiary/beast/giant-boar-xmm.md)
*Source: Monster Manual (2024) p. 355*  

```statblock
"name": "Giant Boar (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "17"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "7"
- !!int "5"
"speed": "40 ft."
"saves":
  "Strength": !!int "5"
"senses": "passive Perception 8"
"languages": ""
"cr": "2"
"traits":
- "desc": "The boar has [Advantage](rules/variant-rules/advantage-xphb.md) on melee\
    \ attack rolls while it is [Bloodied](rules/variant-rules/bloodied-xphb.md)."
  "name": "Bloodied Fury"
"actions":
- "desc": "Melee Attack: dice:1d20+5|noform|text(+5), reach 5 ft. Hit: dice:2d6+3|noform|avg|text(10)\
    \ (2d6 + 3) Piercing damage. If the target is a Large or smaller creature and\
    \ the boar moved 20+ feet straight toward it immediately before the hit, the target\
    \ takes an extra dice:2d6|noform|avg|text(7) (2d6) Piercing damage and has\
    \ the [Prone](rules/conditions.md#Prone) condition."
  "name": "Gore"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Giant%20Boar.webp"
```
^statblock

## Environment

forest, grassland, hill