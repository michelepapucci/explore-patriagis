---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Swarm of Bats"]
---
# [Swarm of Bats](compendium/bestiary/beast/swarm-of-bats-xmm.md)
*Source: Monster Manual (2024) p. 370*  

```statblock
"name": "Swarm of Bats (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d10"
"stats":
- !!int "5"
- !!int "15"
- !!int "10"
- !!int "2"
- !!int "12"
- !!int "4"
"speed": "5 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](rules/conditions.md#Charmed), [frightened](rules/conditions.md#Frightened),\
  \ [grappled](rules/conditions.md#Grappled), [paralyzed](rules/conditions.md#Paralyzed),\
  \ [petrified](rules/conditions.md#Petrified), [prone](rules/conditions.md#Prone),\
  \ [restrained](rules/conditions.md#Restrained), [stunned](rules/conditions.md#Stunned)"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny bat. The swarm can't regain\
    \ [Hit Points](rules/variant-rules/hit-points-xphb.md) or gain [Temporary Hit\
    \ Points](rules/variant-rules/temporary-hit-points-xphb.md)."
  "name": "Swarm"
"actions":
- "desc": "Melee Attack: dice:1d20+4|noform|text(+4), reach 5 ft. Hit: dice:2d4|noform|avg|text(5)\
    \ (2d4) Piercing damage, or dice:1d4|noform|avg|text(2) (1d4) Piercing damage\
    \ if the swarm is [Bloodied](rules/variant-rules/bloodied-xphb.md)."
  "name": "Bites"
"source":
- "XMM"
```
^statblock

## Environment

forest, mountain, underdark, urban