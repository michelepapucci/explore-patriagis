---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Swarm of Dretches"]
---
# [Swarm of Dretches](compendium/bestiary/fiend/swarm-of-dretches-xmm.md)
*Source: Monster Manual (2024) p. 104*  

Swarms of dretches sometimes escape the Abyss onto other planes of existence, or they might be part of a demonic invasion. Without direction, these crude demons rampage and despoil with cruel enthusiasm.

## Dretches

*Demons of Frenzy and Vulgarity*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

The servants and victims of greater demons, dretches embody petty instincts, chaotic impulses, and violent urges. Dretches exist in unfathomable numbers in the depths of the Abyss, where their reeking throngs fill vast demonic hordes.

> [!quote] A quote from Jaranda, Expert on the Abyss  
> 
> Ah, the infinite wonders of the Abyss. If there's anything you don't like, you'll find it here.


```statblock
"name": "Swarm of Dretches (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "5"
- !!int "8"
- !!int "3"
"speed": "40 ft."
"damage_resistances": "bludgeoning, cold, fire, lightning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[charmed](rules/conditions.md#Charmed), [frightened](rules/conditions.md#Frightened),\
  \ [grappled](rules/conditions.md#Grappled), [paralyzed](rules/conditions.md#Paralyzed),\
  \ [petrified](rules/conditions.md#Petrified), [poisoned](rules/conditions.md#Poisoned),\
  \ [prone](rules/conditions.md#Prone), [restrained](rules/conditions.md#Restrained),\
  \ [stunned](rules/conditions.md#Stunned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Abyssal; telepathy 60 ft. (works only with creatures that understand\
  \ Abyssal)"
"cr": "4"
"traits":
- "desc": "Constitution Saving Throw: DC 12, any creature that starts its turn in\
    \ a 10-foot [Emanation [Area of Effect]](rules/variant-rules/emanation-area-of-effect-xphb.md)\
    \ originating from the swarm. Failure: The target has the [Poisoned](rules/conditions.md#Poisoned)\
    \ condition until the start of its next turn. While [Poisoned](rules/conditions.md#Poisoned),\
    \ the target can take either an action or a [Bonus Action](rules/variant-rules/bonus-action-xphb.md)\
    \ on its turn, not both, and it can't take Reactions."
  "name": "Fetid Aura"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Small creature. The swarm can't\
    \ regain [Hit Points](rules/variant-rules/hit-points-xphb.md) or gain [Temporary\
    \ Hit Points](rules/variant-rules/temporary-hit-points-xphb.md)."
  "name": "Swarm"
"actions":
- "desc": "The swarm makes two Rend attacks."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+4|noform|text(+4), reach 5 ft. Hit: dice:3d6+2|noform|avg|text(12)\
    \ (3d6 + 2) Slashing damage, or dice:3d4+2|noform|avg|text(9) (3d4 + 2)\
    \ Slashing damage if the swarm is [Bloodied](rules/variant-rules/bloodied-xphb.md)."
  "name": "Rend"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Swarm%20of%20Dretches.webp"
```
^statblock

## Environment

planar, abyss