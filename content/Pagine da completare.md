Una lista di pagine a cui lavorare. 
## Pagine Vuote
```dataview 
LIST
FROM !"Adventures"
WHERE file.size = 0
```

## Pagine da Terminare
```dataview 
LIST
FROM !"Adventures" and #WIP 
```

