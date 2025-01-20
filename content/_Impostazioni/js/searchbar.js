class SearchBar {
    constructor() {
        this.filter = "";
        this.data = null;
        this.referenceEl = null
    }

    setDataAndEl(data, el) {
        this.data = data
        this.referenceEl = el
    }

    getData(){
        return this.data
    }

    filterAndRender() {
        this.filter = this.referenceEl.value
        console.log(customJS.SearchBar.filter)
        console.log(this.data)
        C
    }

    createSearchBar(el) {
        el.addEventListener('change', this.filterAndRender)
    }
}   