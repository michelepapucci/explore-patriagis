## Grammatica
-en = genitivo sassone
-t = plurale
articoli e generi non esistenti

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

