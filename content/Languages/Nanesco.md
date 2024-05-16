## Grammatica
-en = genitivo sassone
-t = plurale
articoli e generi non esistenti

## Lessico

```dataviewjs

	const {SearchBar} = await cJS()
	
	let input = this.container.createEl('input');
	let p = this.container.createEl('p');
	
	const data = await dv.io.csv("dbs/nanesco.csv");

	dv.table(["Comune", "Nanesco", "Note"], data.map(r => [r.comune, r.nanesco, r.note]));

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
				}
			}
			clearTable()
			dv.table(["Comune", "Nanesco", "Note"], rows);

	}
	input.addEventListener('change',renderTable);
	
```

