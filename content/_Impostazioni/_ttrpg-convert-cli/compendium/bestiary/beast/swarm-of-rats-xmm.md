---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Swarm of Rats"]
---
# [Swarm of Rats](compendium/bestiary/beast/swarm-of-rats-xmm.md)
*Source: Monster Manual (2024) p. 370*  

```statblock
"name": "Swarm of Rats (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "14"
"hit_dice": "4d8 - 4"
"stats":
- !!int "9"
- !!int "11"
- !!int "9"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](rules/conditions.md#Charmed), [frightened](rules/conditions.md#Frightened),\
  \ [grappled](rules/conditions.md#Grappled), [paralyzed](rules/conditions.md#Paralyzed),\
  \ [petrified](rules/conditions.md#Petrified), [prone](rules/conditions.md#Prone),\
  \ [restrained](rules/conditions.md#Restrained), [stunned](rules/conditions.md#Stunned)"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny rat. The swarm can't regain\
    \ [Hit Points](rules/variant-rules/hit-points-xphb.md) or gain [Temporary Hit\
    \ Points](rules/variant-rules/temporary-hit-points-xphb.md)."
  "name": "Swarm"
"actions":
- "desc": "Melee Attack: dice:1d20+2|noform|text(+2), reach 5 ft. Hit: dice:2d4|noform|avg|text(5)\
    \ (2d4) Piercing damage, or dice:1d4|noform|avg|text(2) (1d4) Piercing damage\
    \ if the swarm is [Bloodied](rules/variant-rules/bloodied-xphb.md)."
  "name": "Bites"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Swarm%20of%20Rats.webp"
```
^statblock

## Environment

forest, swamp, underdark, urban