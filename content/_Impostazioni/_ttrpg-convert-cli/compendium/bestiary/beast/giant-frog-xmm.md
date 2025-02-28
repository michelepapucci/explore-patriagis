---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Frog"]
---
# [Giant Frog](compendium/bestiary/beast/giant-frog-xmm.md)
*Source: Monster Manual (2024) p. 357*  

```statblock
"name": "Giant Frog (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"stats":
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "2"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The frog can breathe air and water."
  "name": "Amphibious"
- "desc": "The frog's [Long Jump](rules/variant-rules/long-jump-xphb.md) is up to\
    \ 20 feet and its [High Jump](rules/variant-rules/high-jump-xphb.md) is up to\
    \ 10 feet with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Melee Attack: dice:1d20+3|noform|text(+3), reach 5 ft. Hit: dice:1d6+2|noform|avg|text(5)\
    \ (1d6 + 2) Piercing damage. If the target is a Medium or smaller creature,\
    \ it has the [Grappled](rules/conditions.md#Grappled) condition (escape DC 11)."
  "name": "Bite"
- "desc": "The frog swallows a Small or smaller target it is grappling. While swallowed,\
    \ the target isn't [Grappled](rules/conditions.md#Grappled) but has the [Blinded](rules/conditions.md#Blinded)\
    \ and [Restrained](rules/conditions.md#Restrained) conditions, and it has [Cover](rules/variant-rules/cover-xphb.md)\
    \ against attacks and other effects outside the frog. While swallowing the target,\
    \ the frog can't use Bite, and if the frog dies, the swallowed target is no longer\
    \ [Restrained](rules/conditions.md#Restrained) and can escape from the corpse\
    \ using 5 feet of movement, exiting with the [Prone](rules/conditions.md#Prone)\
    \ condition.\n\nAt the end of the frog's next turn, the swallowed target takes\
    \ dice:2d4|noform|avg|text(5) (2d4) Acid damage. If that damage doesn't kill\
    \ it, the frog disgorges it, causing it to exit [Prone](rules/conditions.md#Prone)."
  "name": "Swallow"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Giant%20Frog.webp"
```
^statblock

## Environment

forest, swamp