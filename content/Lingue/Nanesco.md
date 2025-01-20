---
aliases:
  - nanesco
---
La grammatica è ispirata principalmente al finlandese, così come molti dei lemmi. Altri arrivano da varie fonti tra cui Tolkien, altri ancora sono del tutto inventati.
L'idea è creare una lingua agglutinante, che suoni dura e decisa. 

## Grammatica
-en = genitivo sassone
-t = plurale
articoli e generi non esistenti

## Presente
### Verbi che finiscono in -aa
| Persona | Verbo        | Comune          |
|---------|--------------|-----------------|
| mino    | loyta**n**   | Io trovo        |
| sina    | loyta**t**   | Tu trovi        |
| han     | loyta**u**   | Egli/Ella Trova |
| me      | loyta**mme** | Noi Troviamo    |
| te      | loyta**tte** | Voi Trovate     |
| he      | loyta**vat** | Essi Trovano    

## Lessico
Mostra le prime 10 parole in ordine alfabetico in base al risultato.

```dataviewjs

	const {SearchBar} = await cJS()
	
	let input = this.container.createEl('input');
	
	const data = await dv.io.csv("dbs/nanesco.csv");

	let rows = data.map(r => [r.comune, r.nanesco, r.note])

	rows = rows.slice(0, 30)
	
	dv.table(["Comune", "Nanesco", "Note"], rows);

	function clearTable() {
		document.querySelectorAll('.table-view-table').forEach(e => e.parentNode.remove());
		document.querySelectorAll('h1').forEach(e => e.remove());
	}

	const renderTable = () => {
		let filter = input.value
			let rows = [];
			
			for(const item of data.values) {
				if (item.comune.startsWith(filter) || filter == "") {
					console.log(item)
					rows.push([item.comune, item.nanesco, item.note]);
					if (rows.length >= 10) {
						break;
					}
				}
			}
			clearTable()
			dv.table(["Comune", "Nanesco", "Note"], rows);

	}
	
	input.addEventListener('change',renderTable);
	
```

