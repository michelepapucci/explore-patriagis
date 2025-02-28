---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Knight"]
---
# [Knight](compendium/bestiary/humanoid/knight-xmm.md)
*Source: Monster Manual (2024) p. 184*  

Knights frequently lead troops in combat or work in units that dominate the battlefield. They're often attended by squires, who might be less skilled soldiers or commoners.

## Knights

*Battle Masters and Heroic Wanderers*

- **Habitat.** Any  
- **Treasure.** Armaments, Individual  

Knights are skilled warriors trained for war and tested in battle. Many serve the rulers of a realm, a religion, or an order devoted to a cause.

```statblock
"name": "Knight (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"condition_immunities": "[frightened](rules/conditions.md#Frightened)"
"senses": "passive Perception 10"
"languages": "Common plus one other language"
"cr": "3"
"actions":
- "desc": "The knight makes two attacks, using Greatsword or Heavy Crossbow in any\
    \ combination."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+5|noform|text(+5), reach 5 ft. Hit: dice:2d6+3|noform|avg|text(10)\
    \ (2d6 + 3) Slashing damage plus dice:1d8|noform|avg|text(4) (1d8) Radiant\
    \ damage."
  "name": "Greatsword"
- "desc": "Ranged Attack: dice:1d20+2|noform|text(+2), range 100/400 ft. Hit:\
    \ dice:2d10|noform|avg|text(11) (2d10) Piercing damage plus dice:1d8|noform|avg|text(4)\
    \ (1d8) Radiant damage."
  "name": "Heavy Crossbow"
"reactions":
- "desc": "Trigger: The knight is hit by a melee attack roll while holding a weapon.\
    \ Response: The knight adds 2 to its AC against that attack, possibly causing\
    \ it to miss."
  "name": "Parry"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Knight.webp"
```
^statblock

## Environment

any