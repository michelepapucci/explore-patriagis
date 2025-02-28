---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Merfolk Skirmisher"]
---
# [Merfolk Skirmisher](compendium/bestiary/elemental/merfolk-skirmisher-xmm.md)
*Source: Monster Manual (2024) p. 209*  

Merfolk skirmishers defend their homes from aquatic monsters and invaders from the surface.

## Merfolk

*Protectors and Explorers of the Seas*

- **Habitat.** Coastal, Underwater  
- **Treasure.** Individual  

Beneath the waves dwell merfolk, mysterious creatures that merge the features of humans and sea creatures. Some are curious about land dwellers, while others view them with suspicion.

```statblock
"name": "Merfolk Skirmisher (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "14"
- !!int "12"
"speed": "10 ft., swim 40 ft."
"senses": "passive Perception 12"
"languages": "Common, Primordial (Aquan)"
"cr": "1/8"
"traits":
- "desc": "The merfolk can breathe air and water."
  "name": "Amphibious"
"actions":
- "desc": "Melee or Ranged Attack: dice:1d20+2|noform|text(+2), reach 5 ft. or\
    \ range 20/60 ft. Hit: dice:1d6|noform|avg|text(3) (1d6) Piercing damage\
    \ plus dice:1d4|noform|avg|text(2) (1d4) Cold damage. If the target is a creature,\
    \ its [Speed](rules/variant-rules/speed-xphb.md) decreases by 10 feet until the\
    \ end of its next turn. Hit or Miss: The spear magically returns to the merfolk's\
    \ hand immediately after a ranged attack."
  "name": "Ocean Spear"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Merfolk%20Skirmisher.webp"
```
^statblock

## Environment

coastal, underwater