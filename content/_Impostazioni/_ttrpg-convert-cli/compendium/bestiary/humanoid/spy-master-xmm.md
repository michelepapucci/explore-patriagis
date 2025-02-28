---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Spy Master"]
---
# [Spy Master](compendium/bestiary/humanoid/spy-master-xmm.md)
*Source: Monster Manual (2024) p. 295*  

Spy masters have extensive experience in gathering secrets while leaving no evidence of their presence.

## Spies

*Infiltrators and Informants*

- **Habitat.** Any  
- **Treasure.** Implements, Individual  

Spies gather information and disseminate lies, manipulating people to gain the results the spies' patrons desire. They're trained to manipulate, infiltrate, and—when necessary—escape in a hurry. Many adopt disguises, aliases, or code names to maintain anonymity. Roll on or choose a result from the Spy Personas table to inspire a spy's disguise.

**Spy Personas**

`dice: [](spy-master-xmm.md#^spy-personas)`

| dice: 1d4 | The Spy Disguises Themself As... |
|-----------|----------------------------------|
| 1 | A bard or traveling performer. |
| 2 | A captive or servant of a monster or villain. |
| 3 | A dignitary or traveler from a distant land. |
| 4 | A visitor from a different time or world. |
^spy-personas

```statblock
"name": "Spy Master (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "137"
"hit_dice": "25d8 + 25"
"stats":
- !!int "10"
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "16"
- !!int "16"
"speed": "30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
  "Intelligence": !!int "8"
  "Constitution": !!int "5"
"skillsaves":
  "Sleight of Hand": !!int "9"
  "Deception": !!int "7"
  "Stealth": !!int "13"
  "Investigation": !!int "8"
  "Insight": !!int "7"
  "Perception": !!int "11"
"senses": "passive Perception 21"
"languages": "Common plus two other languages"
"cr": "10"
"actions":
- "desc": "The spy makes three attacks, using Rapier or Hand Crossbow in any combination."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+9|noform|text(+9), reach 5 ft. Hit: dice:2d8+5|noform|avg|text(14)\
    \ (2d8 + 5) Piercing damage plus dice:2d6|noform|avg|text(7) (2d6) Poison\
    \ damage."
  "name": "Rapier"
- "desc": "Ranged Attack: dice:1d20+9|noform|text(+9), range 30/120 ft. Hit:\
    \ dice:2d6+5|noform|avg|text(12) (2d6 + 5) Piercing damage plus dice:2d8|noform|avg|text(9)\
    \ (2d8) Poison damage."
  "name": "Hand Crossbow"
- "desc": "The spy throws a bomb to a point it can see within 30 feet of itself. Constitution\
    \ Saving Throw: DC 16, each creature in a 20-foot-radius [Sphere [Area of Effect]](rules/variant-rules/sphere-area-of-effect-xphb.md)\
    \ centered on that point. Failure: dice:8d6|noform|avg|text(28) (8d6) Poison\
    \ damage, and the target has the [Blinded](rules/conditions.md#Blinded) condition\
    \ until the end of the spy's next turn. Success: Half damage only."
  "name": "Smoke Bomb (1/Day)"
"bonus_actions":
- "desc": "The spy takes the Dash, Disengage, or Hide action."
  "name": "Cunning Action"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Spy%20Master.webp"
```
^statblock

## Environment

any