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
aliases: ["Druid"]
---
# [Druid](compendium/bestiary/humanoid/druid-xmm.md)
*Source: Monster Manual (2024) p. 106*  

## Druid

*Steward and Sage of Nature*

- **Habitat.** Any  
- **Treasure.** Individual, Relics  

Druids use primal magic, traditional teachings, and bonds with animals and eldritch beings to guard the natural world and heal its ills. These magic-users might be recluses devoted to a particular land, or they might be part of a mystic organization. Roll on or choose a result from the Druidic Traditions table to inspire a druid's magical practices.

**Druid Traditions**

`dice: [](druid-xmm.md#^druid-traditions)`

| dice: 1d6 | The Druid Is... |
|-----------|-----------------|
| 1 | An avenger who strikes against destructive civilizations and those who abuse nature. |
| 2 | A guide who aids travelers in navigating the realms of Beasts, Fey, or Plants. |
| 3 | A hermit who works alone to protect the lands, seas, or skies they call home. |
| 4 | A mender who travels the world healing natural, magical, or manufactured disasters. |
| 5 | Part of a loose organization that adheres to timeless rituals and guards natural secrets. |
| 6 | A warden who minds the underpinnings of reality and protects against extraplanar threats. |
^druid-traditions

```statblock
"name": "Druid (XMM)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "16"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "5"
  "Nature": !!int "3"
  "Perception": !!int "5"
"senses": "passive Perception 15"
"languages": "Common, Druidic, Sylvan"
"cr": "2"
"traits":
- "desc": "The druid casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [Druidcraft](compendium/spells/druidcraft-xphb.md),\
    \ [Speak with Animals](compendium/spells/speak-with-animals-xphb.md)\n\n1/day\
    \ each: [Animal Messenger](compendium/spells/animal-messenger-xphb.md), [Longstrider](compendium/spells/longstrider-xphb.md),\
    \ [Moonbeam](compendium/spells/moonbeam-xphb.md)\n\n2/day each: [Entangle](compendium/spells/entangle-xphb.md),\
    \ [Thunderwave](compendium/spells/thunderwave-xphb.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The druid makes two attacks, using Vine Staff or Verdant Wisp in any combination."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+5|noform|text(+5), reach 5 ft. Hit: dice:1d8+3|noform|avg|text(7)\
    \ (1d8 + 3) Bludgeoning damage plus dice:1d4|noform|avg|text(2) (1d4) Poison\
    \ damage."
  "name": "Vine Staff"
- "desc": "Ranged Attack: dice:1d20+5|noform|text(+5), range 90 ft. Hit: dice:3d6|noform|avg|text(10)\
    \ (3d6) Radiant damage."
  "name": "Verdant Wisp"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Druid.webp"
```
^statblock

## Environment

any