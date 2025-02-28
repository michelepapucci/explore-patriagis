---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Green Hag"]
---
# [Green Hag](compendium/bestiary/fey/green-hag-xmm.md)
*Source: Monster Manual (2024) p. 156*  

## Green Hag

*Foul Witch of the Wicked Wild*

- **Habitat.** Forest, Hill, Swamp  
- **Treasure.** Arcana  

Green hags work bitter magic to foul all that is beautiful and pure. Whether alone or in covens of other hags, these ancient witches call on eerie forces, spreading corruption and plotting doom for those who earn their ire. Green hags are adept deceivers, and they use illusions to cloak themselves in unassuming forms, hoping to tempt innocents into peril. These hags often spirit their victims back to surreal lairs where they hold captives prisoner or cook them into monstrous meals.

Green hags frequently know strange magic or forgotten secrets, such as the weaknesses of villains, the locations of lost treasures, or the ways to break curses. They might trade such knowledge for rare magic or symbolic treasures. Roll on or choose a result from the Green Hag Bargains table to inspire what a green hag charges for its secrets.

**Green Hag Bargains**

`dice: [](green-hag-xmm.md#^green-hag-bargains)`

| dice: 1d6 | A Green Hag Trades Its Knowledge For... |
|-----------|-----------------------------------------|
| 1 | A bargainer's memories of a loved one. |
| 2 | The cauldron of a rival hag. |
| 3 | A favor to be redeemed when the hag wishes. |
| 4 | A flower from a hidden Feywild garden. |
| 5 | A gift given freely by a yugoloth. |
| 6 | A vial filled with a ruler's tears. |
^green-hag-bargains

```statblock
"name": "Green Hag (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "14"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "3"
"traits":
- "desc": "While within 30 feet of at least two hag allies, the hag can cast one of\
    \ the following spells, requiring no Material components, using the spell's normal\
    \ casting time, and using Intelligence as the spellcasting ability (spell save\
    \ DC 11): [Augury](compendium/spells/augury-xphb.md), [Find Familiar](compendium/spells/find-familiar-xphb.md),\
    \ [Identify](compendium/spells/identify-xphb.md), [Locate Object](compendium/spells/locate-object-xphb.md),\
    \ [Scrying](compendium/spells/scrying-xphb.md), or [Unseen Servant](compendium/spells/unseen-servant-xphb.md).\
    \ The hag must finish a [Long Rest](rules/variant-rules/long-rest-xphb.md) before\
    \ using this trait to cast that spell again.\n"
  "name": "Coven Magic"
- "desc": "The hag casts one of the following spells, requiring no Material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 12, dice:1d20+4|noform|text(+4)\
    \ to hit with spell attacks):\n\nAt will: [Dancing Lights](compendium/spells/dancing-lights-xphb.md),\
    \ [Disguise Self](compendium/spells/disguise-self-xphb.md) (24-hour duration),\
    \ [Invisibility](compendium/spells/invisibility-xphb.md) (self only, and the hag\
    \ leaves no tracks while Invisible), [Minor Illusion](compendium/spells/minor-illusion-xphb.md),\
    \ [Ray of Sickness](compendium/spells/ray-of-sickness-xphb.md) (level 3 version)"
  "name": "Spellcasting"
- "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears\
    \ the sounds can tell they are imitations only with a successful DC 14 Wisdom\
    \ ([Insight](rules/skills.md#Insight)) check."
  "name": "Mimicry"
"actions":
- "desc": "The hag makes two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Attack: dice:1d20+6|noform|text(+6), reach 5 ft. Hit: dice:1d8+4|noform|avg|text(8)\
    \ (1d8 + 4) Slashing damage plus dice:1d6|noform|avg|text(3) (1d6) Poison\
    \ damage."
  "name": "Claw"
"source":
- "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Green%20Hag.webp"
```
^statblock

## Environment

forest, hill, swamp