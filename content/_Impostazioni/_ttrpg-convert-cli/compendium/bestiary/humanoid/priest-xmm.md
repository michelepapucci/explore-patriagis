---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Priest"]
---
# [Priest](compendium/bestiary/humanoid/priest-xmm.md)
*Source: Monster Manual (2024) p. 248*  

Priests draw on their beliefs to heal the needful and smite their foes. They can channel their faith as spells and empower their weapons with divine might.

## Priests

*Arbiters of the Mortal and the Divine*

- **Habitat.** Any  
- **Treasure.** Individual, Relics  

Priests harness the power of faith to work miracles. These religious adherents are as diverse as the faiths they follow. Some obey gods and their servants, while others live by age-old creeds. Belief guides priests' actions and their magic, which they use to shape the world in line with their ideologies.

Roll on or choose a result from the Priest Roles table to inspire different sorts of priests.

**Priest Roles**

`dice: [](priest-xmm.md#^priest-roles)`

| dice: 1d10 | The Priest Is... |
|------------|------------------|
| 1 | An ascetic who keeps wicked spirits at bay. |
| 2 | An elder who speaks for the dead. |
| 3 | An exorcist who hunts wicked spirits. |
| 4 | A follower of a god no one has heard of. |
| 5 | A mediator and teacher of traditional ways. |
| 6 | A philosopher devoted to a concept, multiversal view, or plane of existence. |
| 7 | The reincarnation of an ancient faith leader. |
| 8 | A ritualist who uses tinctures and performances to access the divine. |
| 9 | A shaman whose medicines ease many ills. |
| 10 | A zealot who wages war for a divine cause. |
^priest-roles

> [!quote]  
> 
> Shining One, light my hours. Enkindle my soul, and inspire my deeds. Chase the shadows from my path, and let me walk in your brilliance.


```statblock
"name": "Priest (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common plus one other language"
"cr": "2"
"traits":
- "desc": "The priest casts one of the following spells, using Wisdom as the spellcasting\
    \ ability:\n\nAt will: [Light](compendium/spells/light-xphb.md), [Thaumaturgy](compendium/spells/thaumaturgy-xphb.md)\n\
    \n1/day: [Spirit Guardians](compendium/spells/spirit-guardians-xphb.md)"
  "name": "Spellcasting"
- "desc": "The priest casts [Bless](compendium/spells/bless-xphb.md), [Dispel Magic](compendium/spells/dispel-magic-xphb.md),\
    \ [Healing Word](compendium/spells/healing-word-xphb.md), or [Lesser Restoration](compendium/spells/lesser-restoration-xphb.md),\
    \ using the same spellcasting ability as Spellcasting.\n\n3/day: [Bless](compendium/spells/bless-xphb.md),\
    \ [Dispel Magic](compendium/spells/dispel-magic-xphb.md), [Healing Word](compendium/spells/healing-word-xphb.md),\
    \ [Lesser Restoration](compendium/spells/lesser-restoration-xphb.md)"
  "name": "Divine Aid (3/Day)"
"actions":
- "desc": "The priest makes two attacks, using Mace or Radiant Flame in any combination."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+5|noform|text(+5), reach 5 ft. Hit: dice:1d6+3|noform|avg|text(6)\
    \ (1d6 + 3) Bludgeoning damage plus dice:2d4|noform|avg|text(5) (2d4) Radiant\
    \ damage."
  "name": "Mace"
- "desc": "Ranged Attack: dice:1d20+5|noform|text(+5), range 60 ft. Hit: dice:2d10|noform|avg|text(11)\
    \ (2d10) Radiant damage."
  "name": "Radiant Flame"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Priest.webp"
```
^statblock

## Environment

any