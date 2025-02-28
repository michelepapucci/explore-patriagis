---
obsidianUIMode: preview
cssclasses: json5e-note
tags:
- ttrpg-cli/compendium/src/5e/xphb
aliases: ["Chapter 7: Spells"]
---
# Chapter 7: Spells
*Source: Player's Handbook (2024), p. 235* 

![Archmages of Greyhawk—Jall...](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/book/XPHB/181-08-001.jallarzi-mordenkainen-bigby.webp#center "Archmages of Greyhawk—Jallarzi, Mordenkainen, and Bigby—prepare their magic as they open a gate to another plane")

This chapter gives rules for casting spells. It also includes "descriptions" of common spells in the worlds of Dungeons & Dragons. Those spells are used by many class features, magic items, and monsters.

## Gaining Spells

Before you can cast a spell, you must have the spell prepared in your mind or have access to the spell from a magic item, such as a [Spell Scroll](compendium/items/spell-scroll-xdmg.md). Your features specify which spells you have access to, if any; whether you always have certain spells prepared; and whether you can change the list of spells you have prepared.

### Preparing Spells

If you have a list of level 1+ spells you prepare, your spellcasting feature specifies when you can change the list and the number of spells you can change, as summarized in the Spell Preparation by Class table.

![Preparing Spells; Spell Preparation by Class](compendium/tables/preparing-spells-spell-preparation-by-class-xphb.md)

Most spellcasting monsters don't change their lists of prepared spells, but the DM is free to alter them.

### Always-Prepared Spells

Certain features might give you a spell that you always have prepared. If you also have a list of prepared spells that you can change, a spell that you always have prepared doesn't count against the number of spells on that list.

> [!note] Casting in Armor
> 
> You must have training with any armor you are wearing to cast spells while wearing it. You are otherwise too hampered by the armor for spellcasting.
^casting-in-armor

## Casting Spells

Each "spell description" has a series of entries that provide the details needed to cast the spell. The following sections explain each of those entries, which follow a spell's name.

### Spell Level

Every spell has a level from 0 to 9, which is indicated in a spell's description. A spell's level is an indicator of how powerful it is. Cantrips—simple spells that can be cast almost by rote—are level 0. The rules for each spellcasting class say when its members gain access to spells of certain levels.

#### Spell Slots

Spellcasting is taxing, so a spellcaster can cast only a limited number of level 1+ spells before resting. Spell slots are the main way a spellcaster's magical potential is represented. Each spellcasting class gives its members a limited number of spell slots of certain spell levels. For example, a level 3 Wizard has four level 1 spell slots and two level 2 slots.

When you cast a spell, you expend a slot of that spell's level or higher, effectively "filling" a slot with the spell. Imagine a spell slot is a groove of a certain size—small for a level 1 slot and larger for a higher-level spell. A level 1 spell fits into a slot of any size, but a level 2 spell fits only into a slot that's at least level 2. So when a level 3 Wizard casts [Magic Missile](compendium/spells/magic-missile-xphb.md), a level 1 spell, that Wizard spends one of four level 1 slots and has three remaining.

Finishing a [Long Rest](rules/variant-rules/long-rest-xphb.md) restores any expended spell slots.

#### Casting without Slots

There are several ways to cast a spell without expending a spell slot:

- **Cantrips.** A cantrip is cast without a spell slot.  
- **Rituals.** Certain spells have the Ritual tag in the Casting Time entry. Such a spell can be cast following the normal rules for spellcasting, or it can be cast as a Ritual. The Ritual version of a spell takes 10 minutes longer to cast than normal, but it doesn't expend a spell slot. To cast a spell as a Ritual, a spellcaster must have it prepared.  
- **Special Abilities.** Some characters and monsters have special abilities that allow them to cast specific spells without a spell slot. This casting is usually limited in another way, such as being able to cast the spell a limited number of times per day.  
- **Magic Items.** [Spell Scrolls](compendium/items/spell-scroll-xdmg.md) and some other magic items contain spells that can be cast without a spell slot. The description of such an item specifies how many times a spell can be cast from it.  

#### Using a Higher-Level Spell Slot

When a spellcaster casts a spell using a slot that is of a higher level than the spell, the spell takes on the higher level for that casting. For instance, if a Wizard casts [Magic Missile](compendium/spells/magic-missile-xphb.md) using a level 2 slot, that *Magic Missile* is level 2. Effectively, the spell expands to fill the slot it is put into.

Some spells, such as [Magic Missile](compendium/spells/magic-missile-xphb.md) and [Cure Wounds](compendium/spells/cure-wounds-xphb.md), have more powerful effects when cast at a higher level, as detailed in a spell's description.

### School of Magic

Each spell belongs to a school of magic. The schools are listed in the Schools of Magic table. These categories help describe spells but have no rules of their own, although some other rules refer to them.

![School of Magic; Schools of Magic](compendium/tables/school-of-magic-schools-of-magic-xphb.md)

### Class Spell Lists

If a spell is on a class's spell list, the class's name appears in parentheses after the spell's school of magic. Some features add a spell to a character's spell list even if the character isn't a member of a class in the parentheses.

### Casting Time

Most spells require the [Magic](rules/actions.md#Magic) action to cast, but some spells require a Bonus Action, a Reaction, or 1 minute or more. A spell's Casting Time entry specifies which of those is required.

#### One Spell with a Spell Slot per Turn

On a turn, you can expend only one spell slot to cast a spell. This rule means you can't, for example, cast a spell with a spell slot using the [Magic](rules/actions.md#Magic) action and another one using a Bonus Action on the same turn.

#### Reaction and Bonus Action Triggers

A spell that has a casting time of a Reaction is cast in response to a trigger that is defined in the spell's Casting Time entry. Some spells that have a casting time of a Bonus Action are also cast in response to a trigger defined in the spell.

#### Longer Casting Times

Certain spells—including a spell cast as a [Ritual](rules/variant-rules/ritual-xphb.md)—require more time to cast: minutes or even hours. While you cast a spell with a casting time of 1 minute or more, you must take the [Magic](rules/actions.md#Magic) action on each of your turns, and you must maintain [Concentration](rules/conditions.md#Concentration) while you do so. If your Concentration is broken, the spell fails, but you don't expend a spell slot. To cast the spell again, you must start over.

### Range

A spell's range indicates how far from the spellcaster the spell's effect can originate, and the spell's description specifies which part of the effect is limited by the range.

A range usually takes one of the following forms:

- **Distance.** The range is expressed in feet.  
- **Touch.** The spell's effect originates on something the spellcaster must touch, as defined in the spell.  
- **Self.** The spell is cast on the spellcaster or emanates from them, as specified in the spell.  

If a spell has movable effects, they aren't restricted by its range unless the spell's description says otherwise.

### Components

![An aasimar Wizard uses a c...](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/book/XPHB/182-08-002.aasimar-wizard.webp#center "An aasimar Wizard uses a crystal material component to focus the magic of Cone of Cold")

A spell's components are physical requirements the spellcaster must meet to cast the spell. Each spell's description indicates whether it requires Verbal (V), Somatic (S), or Material (M) components. If the spellcaster can't provide one or more of a spell's components, the spellcaster can't cast the spell.

#### Verbal (V)

A Verbal component is the chanting of esoteric words that sound like nonsense to the uninitiated. The words must be uttered in a normal speaking voice. The words themselves aren't the source of the spell's power; rather, the particular combination of sounds, with specific pitch and resonance, sets the threads of magic in motion. Thus, a creature who is gagged or in an area of magical silence can't cast a spell with a Verbal component.

> [!note] Creating Verbal Components
> 
> If you'd like to say a spell's Verbal component, you may make up the words. However you make them, the goal is to create something that's easy to say and that doesn't mean anything in the real world. Consider this method: take the name of the spell, keep only one instance of each of its letters, and rearrange the remaining letters into words. For example, remove the second *l* from [Fireball](compendium/spells/fireball-xphb.md) and rearrange the remaining letters to create *Ber Fila* or*Fel Bira*.
^creating-verbal-components

#### Somatic (S)

A Somatic component is a forceful gesticulation or an intricate set of gestures. A spellcaster must use at least one of their hands to perform these movements.

#### Material (M)

A Material component is a particular material used in a spell's casting, as specified in parentheses in the Components entry. These materials aren't consumed by the spell unless the spell's description states otherwise. The spellcaster must have a hand free to access them, but it can be the same hand used to perform Somatic components, if any.

If a spell doesn't consume its materials and doesn't specify a cost for them, a spellcaster can use a [Component Pouch](compendium/items/component-pouch-xphb.md) (see "chapter 6") instead of providing the materials specified in the spell, or the spellcaster can substitute a Spellcasting Focus if the caster has a feature that allows that substitution. To use a Component Pouch, you must have a hand free to reach into it, and to use a Spellcasting Focus, you must hold it unless its description says otherwise (see "chapter 6" for descriptions).

### Duration

A spell's duration is the length of time the spell persists after it is cast. A duration typically takes one of the following forms:

- **Concentration.** A duration that requires Concentration follows the [Concentration](rules/conditions.md#Concentration) rules.  
- **Instantaneous.** An instantaneous duration means the spell's magic appears only for a moment and then disappears.  
- **Time Span.** A duration that provides a time span specifies how long the spell lasts in rounds, minutes, hours, or the like. For example, a Duration entry might say "1 minute," meaning the spell ends after 1 minute has passed. While a time-span spell that you cast is ongoing, you can dismiss it (no action required) if you don't have the [Incapacitated](rules/conditions.md#Incapacitated) condition.  

### Effects

The effects of a spell are detailed after its duration entry. Those details present exactly what the spell does, which ignores mundane physical laws; any outcomes beyond those effects are under the DM's purview. Whatever the effects, they typically deal with targets, saving throws, attack rolls, or all three, each of which is detailed below.

#### Targets

A typical spell requires the caster to pick one or more targets to be affected by the spell's magic. A spell's description says whether the spell targets creatures, objects, or something else.

##### A Clear Path to the Target

To target something with a spell, a caster must have a clear path to it, so it can't be behind [Cover](rules/variant-rules/cover-xphb.md).

##### Targeting Yourself

If a spell targets a creature of your choice, you can choose yourself unless the creature must be [Hostile [Attitude]](rules/variant-rules/hostile-attitude-xphb.md) or specifically a creature other than you.

##### Areas of Effect

Some spells, such as [Thunderwave](compendium/spells/thunderwave-xphb.md), cover an area called an [area of effect](rules/variant-rules/area-of-effect-xphb.md), which is defined in the "rules glossary". The area determines what the spell targets. The description of a spell specifies whether it has an area of effect, which is typically one of these shapes: [Cone [Area of Effect]](rules/variant-rules/cone-area-of-effect-xphb.md), [Cube [Area of Effect]](rules/variant-rules/cube-area-of-effect-xphb.md), [Cylinder [Area of Effect]](rules/variant-rules/cylinder-area-of-effect-xphb.md), [Emanation [Area of Effect]](rules/variant-rules/emanation-area-of-effect-xphb.md), [Line [Area of Effect]](rules/variant-rules/line-area-of-effect-xphb.md), or [Sphere [Area of Effect]](rules/variant-rules/sphere-area-of-effect-xphb.md).

![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/book/XPHB/183-08-003.areas-of-effect.webp#center)

##### Awareness of Being Targeted

Unless a spell has a perceptible effect, a creature doesn't know it was targeted by the spell. An effect like lightning is obvious, but a more subtle effect, such as an attempt to read thoughts, goes unnoticed unless a spell's description says otherwise.

##### Invalid Targets

If you cast a spell on someone or something that can't be affected by it, nothing happens to that target, but if you used a spell slot to cast the spell, the slot is still expended.

If the spell normally has no effect on a target that succeeds on a saving throw, the invalid target appears to have succeeded on its saving throw, even though it didn't attempt one (giving no hint that the creature is an invalid target). Otherwise, you perceive that the spell did nothing to the target.

#### Saving Throws

Many spells specify that a target makes a saving throw to avoid some or all of a spell's effects. The spell specifies the ability that the target uses for the save and what happens on a success or failure. Here's how to calculate the DC for your spells:

<span class='abilityDc'>**Spell save DC**: 8 + your proficiency bonus + your Spellcasting modifier</span>

#### Attack Rolls

Some spells require the caster to make an attack roll to determine whether the spell hits a target. Here's how to calculate the attack modifier for your spells:

<span class='abilityAttackMod'>**Spell attack modifier**: your proficiency bonus + your Spellcasting modifier</span>

#### Combining Spell Effects

The effects of different spells add together while their durations overlap. In contrast, the effects of the same spell cast multiple times don't combine. Instead, the most potent effect—such as the highest bonus—from those castings applies while their durations overlap. The most recent effect applies if the castings are equally potent and their durations overlap. For example, if two Clerics cast [Bless](compendium/spells/bless-xphb.md) on the same target, that target gains the spell's benefit only once; the target doesn't receive two bonus dice. But if the durations of the spells overlap, the effect continues until the duration of the second *Bless* ends.

> [!note] Identifying an Ongoing Spell
> 
> You can try to identify a non-instantaneous spell by its observable effects if its duration is ongoing. To identify it, you must take the [Study](rules/actions.md#Study) action and succeed on a DC 15 Intelligence ([Arcana](rules/skills.md#Arcana)) check.
^identifying-an-ongoing-spell

## Spell Descriptions

The spells are presented in alphabetical order.

- [Acid Splash](compendium/spells/acid-splash-xphb.md)  
- [Aid](compendium/spells/aid-xphb.md)  
- [Alarm](compendium/spells/alarm-xphb.md)  
- [Alter Self](compendium/spells/alter-self-xphb.md)  
- [Animal Friendship](compendium/spells/animal-friendship-xphb.md)  
- [Animal Messenger](compendium/spells/animal-messenger-xphb.md)  
- [Animal Shapes](compendium/spells/animal-shapes-xphb.md)  
- [Animate Dead](compendium/spells/animate-dead-xphb.md)  
- [Animate Objects](compendium/spells/animate-objects-xphb.md)  
- [Antilife Shell](compendium/spells/antilife-shell-xphb.md)  
- [Antimagic Field](compendium/spells/antimagic-field-xphb.md)  
- [Antipathy/Sympathy](compendium/spells/antipathy-sympathy-xphb.md)  
- [Arcane Eye](compendium/spells/arcane-eye-xphb.md)  
- [Arcane Gate](compendium/spells/arcane-gate-xphb.md)  
- [Arcane Lock](compendium/spells/arcane-lock-xphb.md)  
- [Arcane Vigor](compendium/spells/arcane-vigor-xphb.md)  
- [Armor of Agathys](compendium/spells/armor-of-agathys-xphb.md)  
- [Arms of Hadar](compendium/spells/arms-of-hadar-xphb.md)  
- [Astral Projection](compendium/spells/astral-projection-xphb.md)  
- [Augury](compendium/spells/augury-xphb.md)  
- [Aura of Life](compendium/spells/aura-of-life-xphb.md)  
- [Aura of Purity](compendium/spells/aura-of-purity-xphb.md)  
- [Aura of Vitality](compendium/spells/aura-of-vitality-xphb.md)  
- [Awaken](compendium/spells/awaken-xphb.md)  

- [Bane](compendium/spells/bane-xphb.md)  
- [Banishing Smite](compendium/spells/banishing-smite-xphb.md)  
- [Banishment](compendium/spells/banishment-xphb.md)  
- [Barkskin](compendium/spells/barkskin-xphb.md)  
- [Beacon of Hope](compendium/spells/beacon-of-hope-xphb.md)  
- [Beast Sense](compendium/spells/beast-sense-xphb.md)  
- [Befuddlement](compendium/spells/befuddlement-xphb.md)  
- [Bestow Curse](compendium/spells/bestow-curse-xphb.md)  
- [Bigby's Hand](compendium/spells/bigbys-hand-xphb.md)  
- [Blade Barrier](compendium/spells/blade-barrier-xphb.md)  
- [Blade Ward](compendium/spells/blade-ward-xphb.md)  
- [Bless](compendium/spells/bless-xphb.md)  
- [Blight](compendium/spells/blight-xphb.md)  
- [Blinding Smite](compendium/spells/blinding-smite-xphb.md)  
- [Blindness/Deafness](compendium/spells/blindness-deafness-xphb.md)  
- [Blink](compendium/spells/blink-xphb.md)  
- [Blur](compendium/spells/blur-xphb.md)  
- [Burning Hands](compendium/spells/burning-hands-xphb.md)  

- [Call Lightning](compendium/spells/call-lightning-xphb.md)  
- [Calm Emotions](compendium/spells/calm-emotions-xphb.md)  
- [Chain Lightning](compendium/spells/chain-lightning-xphb.md)  
- [Charm Monster](compendium/spells/charm-monster-xphb.md)  
- [Charm Person](compendium/spells/charm-person-xphb.md)  
- [Chill Touch](compendium/spells/chill-touch-xphb.md)  
- [Chromatic Orb](compendium/spells/chromatic-orb-xphb.md)  
- [Circle of Death](compendium/spells/circle-of-death-xphb.md)  
- [Circle of Power](compendium/spells/circle-of-power-xphb.md)  
- [Clairvoyance](compendium/spells/clairvoyance-xphb.md)  
- [Clone](compendium/spells/clone-xphb.md)  
- [Cloud of Daggers](compendium/spells/cloud-of-daggers-xphb.md)  
- [Cloudkill](compendium/spells/cloudkill-xphb.md)  
- [Color Spray](compendium/spells/color-spray-xphb.md)  
- [Command](compendium/spells/command-xphb.md)  
- [Commune](compendium/spells/commune-xphb.md)  
- [Commune with Nature](compendium/spells/commune-with-nature-xphb.md)  
- [Compelled Duel](compendium/spells/compelled-duel-xphb.md)  
- [Comprehend Languages](compendium/spells/comprehend-languages-xphb.md)  
- [Compulsion](compendium/spells/compulsion-xphb.md)  
- [Cone of Cold](compendium/spells/cone-of-cold-xphb.md)  
- [Confusion](compendium/spells/confusion-xphb.md)  
- [Conjure Animals](compendium/spells/conjure-animals-xphb.md)  
- [Conjure Barrage](compendium/spells/conjure-barrage-xphb.md)  
- [Conjure Celestial](compendium/spells/conjure-celestial-xphb.md)  
- [Conjure Elemental](compendium/spells/conjure-elemental-xphb.md)  
- [Conjure Fey](compendium/spells/conjure-fey-xphb.md)  
- [Conjure Minor Elementals](compendium/spells/conjure-minor-elementals-xphb.md)  
- [Conjure Volley](compendium/spells/conjure-volley-xphb.md)  
- [Conjure Woodland Beings](compendium/spells/conjure-woodland-beings-xphb.md)  
- [Contact Other Plane](compendium/spells/contact-other-plane-xphb.md)  
- [Contagion](compendium/spells/contagion-xphb.md)  
- [Contingency](compendium/spells/contingency-xphb.md)  
- [Continual Flame](compendium/spells/continual-flame-xphb.md)  
- [Control Water](compendium/spells/control-water-xphb.md)  
- [Control Weather](compendium/spells/control-weather-xphb.md)  
- [Cordon of Arrows](compendium/spells/cordon-of-arrows-xphb.md)  
- [Counterspell](compendium/spells/counterspell-xphb.md)  
- [Create Food and Water](compendium/spells/create-food-and-water-xphb.md)  
- [Create or Destroy Water](compendium/spells/create-or-destroy-water-xphb.md)  
- [Create Undead](compendium/spells/create-undead-xphb.md)  
- [Creation](compendium/spells/creation-xphb.md)  
- [Crown of Madness](compendium/spells/crown-of-madness-xphb.md)  
- [Crusader's Mantle](compendium/spells/crusaders-mantle-xphb.md)  
- [Cure Wounds](compendium/spells/cure-wounds-xphb.md)  

- [Dancing Lights](compendium/spells/dancing-lights-xphb.md)  
- [Darkness](compendium/spells/darkness-xphb.md)  
- [Darkvision](compendium/spells/darkvision-xphb.md)  
- [Daylight](compendium/spells/daylight-xphb.md)  
- [Death Ward](compendium/spells/death-ward-xphb.md)  
- [Delayed Blast Fireball](compendium/spells/delayed-blast-fireball-xphb.md)  
- [Demiplane](compendium/spells/demiplane-xphb.md)  
- [Destructive Wave](compendium/spells/destructive-wave-xphb.md)  
- [Detect Evil and Good](compendium/spells/detect-evil-and-good-xphb.md)  
- [Detect Magic](compendium/spells/detect-magic-xphb.md)  
- [Detect Poison and Disease](compendium/spells/detect-poison-and-disease-xphb.md)  
- [Detect Thoughts](compendium/spells/detect-thoughts-xphb.md)  
- [Dimension Door](compendium/spells/dimension-door-xphb.md)  
- [Disguise Self](compendium/spells/disguise-self-xphb.md)  
- [Disintegrate](compendium/spells/disintegrate-xphb.md)  
- [Dispel Evil and Good](compendium/spells/dispel-evil-and-good-xphb.md)  
- [Dispel Magic](compendium/spells/dispel-magic-xphb.md)  
- [Dissonant Whispers](compendium/spells/dissonant-whispers-xphb.md)  
- [Divination](compendium/spells/divination-xphb.md)  
- [Divine Favor](compendium/spells/divine-favor-xphb.md)  
- [Divine Smite](compendium/spells/divine-smite-xphb.md)  
- [Divine Word](compendium/spells/divine-word-xphb.md)  
- [Dominate Beast](compendium/spells/dominate-beast-xphb.md)  
- [Dominate Monster](compendium/spells/dominate-monster-xphb.md)  
- [Dominate Person](compendium/spells/dominate-person-xphb.md)  
- [Dragon's Breath](compendium/spells/dragons-breath-xphb.md)  
- [Drawmij's Instant Summons](compendium/spells/drawmijs-instant-summons-xphb.md)  
- [Dream](compendium/spells/dream-xphb.md)  
- [Druidcraft](compendium/spells/druidcraft-xphb.md)  

- [Earthquake](compendium/spells/earthquake-xphb.md)  
- [Eldritch Blast](compendium/spells/eldritch-blast-xphb.md)  
- [Elemental Weapon](compendium/spells/elemental-weapon-xphb.md)  
- [Elementalism](compendium/spells/elementalism-xphb.md)  
- [Enhance Ability](compendium/spells/enhance-ability-xphb.md)  
- [Enlarge/Reduce](compendium/spells/enlarge-reduce-xphb.md)  
- [Ensnaring Strike](compendium/spells/ensnaring-strike-xphb.md)  
- [Entangle](compendium/spells/entangle-xphb.md)  
- [Enthrall](compendium/spells/enthrall-xphb.md)  
- [Etherealness](compendium/spells/etherealness-xphb.md)  
- [Evard's Black Tentacles](compendium/spells/evards-black-tentacles-xphb.md)  
- [Expeditious Retreat](compendium/spells/expeditious-retreat-xphb.md)  
- [Eyebite](compendium/spells/eyebite-xphb.md)  

- [Fabricate](compendium/spells/fabricate-xphb.md)  
- [Faerie Fire](compendium/spells/faerie-fire-xphb.md)  
- [False Life](compendium/spells/false-life-xphb.md)  
- [Fear](compendium/spells/fear-xphb.md)  
- [Feather Fall](compendium/spells/feather-fall-xphb.md)  
- [Feign Death](compendium/spells/feign-death-xphb.md)  
- [Find Familiar](compendium/spells/find-familiar-xphb.md)  
- [Find Steed](compendium/spells/find-steed-xphb.md)  
- [Find the Path](compendium/spells/find-the-path-xphb.md)  
- [Find Traps](compendium/spells/find-traps-xphb.md)  
- [Finger of Death](compendium/spells/finger-of-death-xphb.md)  
- [Fire Bolt](compendium/spells/fire-bolt-xphb.md)  
- [Fire Shield](compendium/spells/fire-shield-xphb.md)  
- [Fire Storm](compendium/spells/fire-storm-xphb.md)  
- [Fireball](compendium/spells/fireball-xphb.md)  
- [Flame Blade](compendium/spells/flame-blade-xphb.md)  
- [Flame Strike](compendium/spells/flame-strike-xphb.md)  
- [Flaming Sphere](compendium/spells/flaming-sphere-xphb.md)  
- [Flesh to Stone](compendium/spells/flesh-to-stone-xphb.md)  
- [Fly](compendium/spells/fly-xphb.md)  
- [Fog Cloud](compendium/spells/fog-cloud-xphb.md)  
- [Forbiddance](compendium/spells/forbiddance-xphb.md)  
- [Forcecage](compendium/spells/forcecage-xphb.md)  
- [Foresight](compendium/spells/foresight-xphb.md)  
- [Fount of Moonlight](compendium/spells/fount-of-moonlight-xphb.md)  
- [Freedom of Movement](compendium/spells/freedom-of-movement-xphb.md)  
- [Friends](compendium/spells/friends-xphb.md)  

- [Gaseous Form](compendium/spells/gaseous-form-xphb.md)  
- [Gate](compendium/spells/gate-xphb.md)  
- [Geas](compendium/spells/geas-xphb.md)  
- [Gentle Repose](compendium/spells/gentle-repose-xphb.md)  
- [Giant Insect](compendium/spells/giant-insect-xphb.md)  
- [Glibness](compendium/spells/glibness-xphb.md)  
- [Globe of Invulnerability](compendium/spells/globe-of-invulnerability-xphb.md)  
- [Glyph of Warding](compendium/spells/glyph-of-warding-xphb.md)  
- [Goodberry](compendium/spells/goodberry-xphb.md)  
- [Grasping Vine](compendium/spells/grasping-vine-xphb.md)  
- [Grease](compendium/spells/grease-xphb.md)  
- [Greater Invisibility](compendium/spells/greater-invisibility-xphb.md)  
- [Greater Restoration](compendium/spells/greater-restoration-xphb.md)  
- [Guardian of Faith](compendium/spells/guardian-of-faith-xphb.md)  
- [Guards and Wards](compendium/spells/guards-and-wards-xphb.md)  
- [Guidance](compendium/spells/guidance-xphb.md)  
- [Guiding Bolt](compendium/spells/guiding-bolt-xphb.md)  
- [Gust of Wind](compendium/spells/gust-of-wind-xphb.md)  

- [Hail of Thorns](compendium/spells/hail-of-thorns-xphb.md)  
- [Hallow](compendium/spells/hallow-xphb.md)  
- [Hallucinatory Terrain](compendium/spells/hallucinatory-terrain-xphb.md)  
- [Harm](compendium/spells/harm-xphb.md)  
- [Haste](compendium/spells/haste-xphb.md)  
- [Heal](compendium/spells/heal-xphb.md)  
- [Healing Word](compendium/spells/healing-word-xphb.md)  
- [Heat Metal](compendium/spells/heat-metal-xphb.md)  
- [Hellish Rebuke](compendium/spells/hellish-rebuke-xphb.md)  
- [Heroes' Feast](compendium/spells/heroes-feast-xphb.md)  
- [Heroism](compendium/spells/heroism-xphb.md)  
- [Hex](compendium/spells/hex-xphb.md)  
- [Hold Monster](compendium/spells/hold-monster-xphb.md)  
- [Hold Person](compendium/spells/hold-person-xphb.md)  
- [Holy Aura](compendium/spells/holy-aura-xphb.md)  
- [Hunger of Hadar](compendium/spells/hunger-of-hadar-xphb.md)  
- [Hunter's Mark](compendium/spells/hunters-mark-xphb.md)  
- [Hypnotic Pattern](compendium/spells/hypnotic-pattern-xphb.md)  

- [Ice Knife](compendium/spells/ice-knife-xphb.md)  
- [Ice Storm](compendium/spells/ice-storm-xphb.md)  
- [Identify](compendium/spells/identify-xphb.md)  
- [Illusory Script](compendium/spells/illusory-script-xphb.md)  
- [Imprisonment](compendium/spells/imprisonment-xphb.md)  
- [Incendiary Cloud](compendium/spells/incendiary-cloud-xphb.md)  
- [Inflict Wounds](compendium/spells/inflict-wounds-xphb.md)  
- [Insect Plague](compendium/spells/insect-plague-xphb.md)  
- [Invisibility](compendium/spells/invisibility-xphb.md)  

- [Jallarzi's Storm of Radiance](compendium/spells/jallarzis-storm-of-radiance-xphb.md)  
- [Jump](compendium/spells/jump-xphb.md)  

- [Knock](compendium/spells/knock-xphb.md)  

- [Legend Lore](compendium/spells/legend-lore-xphb.md)  
- [Leomund's Secret Chest](compendium/spells/leomunds-secret-chest-xphb.md)  
- [Leomund's Tiny Hut](compendium/spells/leomunds-tiny-hut-xphb.md)  
- [Lesser Restoration](compendium/spells/lesser-restoration-xphb.md)  
- [Levitate](compendium/spells/levitate-xphb.md)  
- [Light](compendium/spells/light-xphb.md)  
- [Lightning Arrow](compendium/spells/lightning-arrow-xphb.md)  
- [Lightning Bolt](compendium/spells/lightning-bolt-xphb.md)  
- [Locate Animals or Plants](compendium/spells/locate-animals-or-plants-xphb.md)  
- [Locate Creature](compendium/spells/locate-creature-xphb.md)  
- [Locate Object](compendium/spells/locate-object-xphb.md)  
- [Longstrider](compendium/spells/longstrider-xphb.md)  

- [Mage Armor](compendium/spells/mage-armor-xphb.md)  
- [Mage Hand](compendium/spells/mage-hand-xphb.md)  
- [Magic Circle](compendium/spells/magic-circle-xphb.md)  
- [Magic Jar](compendium/spells/magic-jar-xphb.md)  
- [Magic Missile](compendium/spells/magic-missile-xphb.md)  
- [Magic Mouth](compendium/spells/magic-mouth-xphb.md)  
- [Magic Weapon](compendium/spells/magic-weapon-xphb.md)  
- [Major Image](compendium/spells/major-image-xphb.md)  
- [Mass Cure Wounds](compendium/spells/mass-cure-wounds-xphb.md)  
- [Mass Heal](compendium/spells/mass-heal-xphb.md)  
- [Mass Healing Word](compendium/spells/mass-healing-word-xphb.md)  
- [Mass Suggestion](compendium/spells/mass-suggestion-xphb.md)  
- [Maze](compendium/spells/maze-xphb.md)  
- [Meld into Stone](compendium/spells/meld-into-stone-xphb.md)  
- [Melf's Acid Arrow](compendium/spells/melfs-acid-arrow-xphb.md)  
- [Mending](compendium/spells/mending-xphb.md)  
- [Message](compendium/spells/message-xphb.md)  
- [Meteor Swarm](compendium/spells/meteor-swarm-xphb.md)  
- [Mind Blank](compendium/spells/mind-blank-xphb.md)  
- [Mind Sliver](compendium/spells/mind-sliver-xphb.md)  
- [Mind Spike](compendium/spells/mind-spike-xphb.md)  
- [Minor Illusion](compendium/spells/minor-illusion-xphb.md)  
- [Mirage Arcane](compendium/spells/mirage-arcane-xphb.md)  
- [Mirror Image](compendium/spells/mirror-image-xphb.md)  
- [Mislead](compendium/spells/mislead-xphb.md)  
- [Misty Step](compendium/spells/misty-step-xphb.md)  
- [Modify Memory](compendium/spells/modify-memory-xphb.md)  
- [Moonbeam](compendium/spells/moonbeam-xphb.md)  
- [Mordenkainen's Faithful Hound](compendium/spells/mordenkainens-faithful-hound-xphb.md)  
- [Mordenkainen's Magnificent Mansion](compendium/spells/mordenkainens-magnificent-mansion-xphb.md)  
- [Mordenkainen's Private Sanctum](compendium/spells/mordenkainens-private-sanctum-xphb.md)  
- [Mordenkainen's Sword](compendium/spells/mordenkainens-sword-xphb.md)  
- [Move Earth](compendium/spells/move-earth-xphb.md)  

- [Nondetection](compendium/spells/nondetection-xphb.md)  
- [Nystul's Magic Aura](compendium/spells/nystuls-magic-aura-xphb.md)  

- [Otiluke's Freezing Sphere](compendium/spells/otilukes-freezing-sphere-xphb.md)  
- [Otiluke's Resilient Sphere](compendium/spells/otilukes-resilient-sphere-xphb.md)  
- [Otto's Irresistible Dance](compendium/spells/ottos-irresistible-dance-xphb.md)  

- [Pass without Trace](compendium/spells/pass-without-trace-xphb.md)  
- [Passwall](compendium/spells/passwall-xphb.md)  
- [Phantasmal Force](compendium/spells/phantasmal-force-xphb.md)  
- [Phantasmal Killer](compendium/spells/phantasmal-killer-xphb.md)  
- [Phantom Steed](compendium/spells/phantom-steed-xphb.md)  
- [Planar Ally](compendium/spells/planar-ally-xphb.md)  
- [Planar Binding](compendium/spells/planar-binding-xphb.md)  
- [Plane Shift](compendium/spells/plane-shift-xphb.md)  
- [Plant Growth](compendium/spells/plant-growth-xphb.md)  
- [Poison Spray](compendium/spells/poison-spray-xphb.md)  
- [Polymorph](compendium/spells/polymorph-xphb.md)  
- [Power Word Fortify](compendium/spells/power-word-fortify-xphb.md)  
- [Power Word Heal](compendium/spells/power-word-heal-xphb.md)  
- [Power Word Kill](compendium/spells/power-word-kill-xphb.md)  
- [Power Word Stun](compendium/spells/power-word-stun-xphb.md)  
- [Prayer of Healing](compendium/spells/prayer-of-healing-xphb.md)  
- [Prestidigitation](compendium/spells/prestidigitation-xphb.md)  
- [Prismatic Spray](compendium/spells/prismatic-spray-xphb.md)  
- [Prismatic Wall](compendium/spells/prismatic-wall-xphb.md)  
- [Produce Flame](compendium/spells/produce-flame-xphb.md)  
- [Programmed Illusion](compendium/spells/programmed-illusion-xphb.md)  
- [Project Image](compendium/spells/project-image-xphb.md)  
- [Protection from Energy](compendium/spells/protection-from-energy-xphb.md)  
- [Protection from Evil and Good](compendium/spells/protection-from-evil-and-good-xphb.md)  
- [Protection from Poison](compendium/spells/protection-from-poison-xphb.md)  
- [Purify Food and Drink](compendium/spells/purify-food-and-drink-xphb.md)  

- [Raise Dead](compendium/spells/raise-dead-xphb.md)  
- [Rary's Telepathic Bond](compendium/spells/rarys-telepathic-bond-xphb.md)  
- [Ray of Enfeeblement](compendium/spells/ray-of-enfeeblement-xphb.md)  
- [Ray of Frost](compendium/spells/ray-of-frost-xphb.md)  
- [Ray of Sickness](compendium/spells/ray-of-sickness-xphb.md)  
- [Regenerate](compendium/spells/regenerate-xphb.md)  
- [Reincarnate](compendium/spells/reincarnate-xphb.md)  
- [Remove Curse](compendium/spells/remove-curse-xphb.md)  
- [Resistance](compendium/spells/resistance-xphb.md)  
- [Resurrection](compendium/spells/resurrection-xphb.md)  
- [Reverse Gravity](compendium/spells/reverse-gravity-xphb.md)  
- [Revivify](compendium/spells/revivify-xphb.md)  
- [Rope Trick](compendium/spells/rope-trick-xphb.md)  

- [Sacred Flame](compendium/spells/sacred-flame-xphb.md)  
- [Sanctuary](compendium/spells/sanctuary-xphb.md)  
- [Scorching Ray](compendium/spells/scorching-ray-xphb.md)  
- [Scrying](compendium/spells/scrying-xphb.md)  
- [Searing Smite](compendium/spells/searing-smite-xphb.md)  
- [See Invisibility](compendium/spells/see-invisibility-xphb.md)  
- [Seeming](compendium/spells/seeming-xphb.md)  
- [Sending](compendium/spells/sending-xphb.md)  
- [Sequester](compendium/spells/sequester-xphb.md)  
- [Shapechange](compendium/spells/shapechange-xphb.md)  
- [Shatter](compendium/spells/shatter-xphb.md)  
- [Shield](compendium/spells/shield-xphb.md)  
- [Shield of Faith](compendium/spells/shield-of-faith-xphb.md)  
- [Shillelagh](compendium/spells/shillelagh-xphb.md)  
- [Shining Smite](compendium/spells/shining-smite-xphb.md)  
- [Shocking Grasp](compendium/spells/shocking-grasp-xphb.md)  
- [Silence](compendium/spells/silence-xphb.md)  
- [Silent Image](compendium/spells/silent-image-xphb.md)  
- [Simulacrum](compendium/spells/simulacrum-xphb.md)  
- [Sleep](compendium/spells/sleep-xphb.md)  
- [Sleet Storm](compendium/spells/sleet-storm-xphb.md)  
- [Slow](compendium/spells/slow-xphb.md)  
- [Sorcerous Burst](compendium/spells/sorcerous-burst-xphb.md)  
- [Spare the Dying](compendium/spells/spare-the-dying-xphb.md)  
- [Speak with Animals](compendium/spells/speak-with-animals-xphb.md)  
- [Speak with Dead](compendium/spells/speak-with-dead-xphb.md)  
- [Speak with Plants](compendium/spells/speak-with-plants-xphb.md)  
- [Spider Climb](compendium/spells/spider-climb-xphb.md)  
- [Spike Growth](compendium/spells/spike-growth-xphb.md)  
- [Spirit Guardians](compendium/spells/spirit-guardians-xphb.md)  
- [Spiritual Weapon](compendium/spells/spiritual-weapon-xphb.md)  
- [Staggering Smite](compendium/spells/staggering-smite-xphb.md)  
- [Starry Wisp](compendium/spells/starry-wisp-xphb.md)  
- [Steel Wind Strike](compendium/spells/steel-wind-strike-xphb.md)  
- [Stinking Cloud](compendium/spells/stinking-cloud-xphb.md)  
- [Stone Shape](compendium/spells/stone-shape-xphb.md)  
- [Stoneskin](compendium/spells/stoneskin-xphb.md)  
- [Storm of Vengeance](compendium/spells/storm-of-vengeance-xphb.md)  
- [Suggestion](compendium/spells/suggestion-xphb.md)  
- [Summon Aberration](compendium/spells/summon-aberration-xphb.md)  
- [Summon Beast](compendium/spells/summon-beast-xphb.md)  
- [Summon Celestial](compendium/spells/summon-celestial-xphb.md)  
- [Summon Construct](compendium/spells/summon-construct-xphb.md)  
- [Summon Dragon](compendium/spells/summon-dragon-xphb.md)  
- [Summon Elemental](compendium/spells/summon-elemental-xphb.md)  
- [Summon Fey](compendium/spells/summon-fey-xphb.md)  
- [Summon Fiend](compendium/spells/summon-fiend-xphb.md)  
- [Summon Undead](compendium/spells/summon-undead-xphb.md)  
- [Sunbeam](compendium/spells/sunbeam-xphb.md)  
- [Sunburst](compendium/spells/sunburst-xphb.md)  
- [Swift Quiver](compendium/spells/swift-quiver-xphb.md)  
- [Symbol](compendium/spells/symbol-xphb.md)  
- [Synaptic Static](compendium/spells/synaptic-static-xphb.md)  

- [Tasha's Bubbling Cauldron](compendium/spells/tashas-bubbling-cauldron-xphb.md)  
- [Tasha's Hideous Laughter](compendium/spells/tashas-hideous-laughter-xphb.md)  
- [Telekinesis](compendium/spells/telekinesis-xphb.md)  
- [Telepathy](compendium/spells/telepathy-xphb.md)  
- [Teleport](compendium/spells/teleport-xphb.md)  
- [Teleportation Circle](compendium/spells/teleportation-circle-xphb.md)  
- [Tenser's Floating Disk](compendium/spells/tensers-floating-disk-xphb.md)  
- [Thaumaturgy](compendium/spells/thaumaturgy-xphb.md)  
- [Thorn Whip](compendium/spells/thorn-whip-xphb.md)  
- [Thunderclap](compendium/spells/thunderclap-xphb.md)  
- [Thunderous Smite](compendium/spells/thunderous-smite-xphb.md)  
- [Thunderwave](compendium/spells/thunderwave-xphb.md)  
- [Time Stop](compendium/spells/time-stop-xphb.md)  
- [Toll the Dead](compendium/spells/toll-the-dead-xphb.md)  
- [Tongues](compendium/spells/tongues-xphb.md)  
- [Transport via Plants](compendium/spells/transport-via-plants-xphb.md)  
- [Tree Stride](compendium/spells/tree-stride-xphb.md)  
- [True Polymorph](compendium/spells/true-polymorph-xphb.md)  
- [True Resurrection](compendium/spells/true-resurrection-xphb.md)  
- [True Seeing](compendium/spells/true-seeing-xphb.md)  
- [True Strike](compendium/spells/true-strike-xphb.md)  
- [Tsunami](compendium/spells/tsunami-xphb.md)  

- [Unseen Servant](compendium/spells/unseen-servant-xphb.md)  

- [Vampiric Touch](compendium/spells/vampiric-touch-xphb.md)  
- [Vicious Mockery](compendium/spells/vicious-mockery-xphb.md)  
- [Vitriolic Sphere](compendium/spells/vitriolic-sphere-xphb.md)  

- [Wall of Fire](compendium/spells/wall-of-fire-xphb.md)  
- [Wall of Force](compendium/spells/wall-of-force-xphb.md)  
- [Wall of Ice](compendium/spells/wall-of-ice-xphb.md)  
- [Wall of Stone](compendium/spells/wall-of-stone-xphb.md)  
- [Wall of Thorns](compendium/spells/wall-of-thorns-xphb.md)  
- [Warding Bond](compendium/spells/warding-bond-xphb.md)  
- [Water Breathing](compendium/spells/water-breathing-xphb.md)  
- [Water Walk](compendium/spells/water-walk-xphb.md)  
- [Web](compendium/spells/web-xphb.md)  
- [Weird](compendium/spells/weird-xphb.md)  
- [Wind Walk](compendium/spells/wind-walk-xphb.md)  
- [Wind Wall](compendium/spells/wind-wall-xphb.md)  
- [Wish](compendium/spells/wish-xphb.md)  
- [Witch Bolt](compendium/spells/witch-bolt-xphb.md)  
- [Word of Radiance](compendium/spells/word-of-radiance-xphb.md)  
- [Word of Recall](compendium/spells/word-of-recall-xphb.md)  
- [Wrathful Smite](compendium/spells/wrathful-smite-xphb.md)  

- [Yolande's Regal Presence](compendium/spells/yolandes-regal-presence-xphb.md)  

- [Zone of Truth](compendium/spells/zone-of-truth-xphb.md)