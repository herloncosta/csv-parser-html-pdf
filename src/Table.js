export class Table {
  #header
  #rows

  constructor(rows) {
    this.#header = rows[0]
    rows.shift()
    this.#rows = rows
  }

  get header() {
    return this.#header
  }

  get rows() {
    return this.#rows
  }

  get rowsCount() {
    return this.#rows.length
  }

  get columnsCount() {
    return this.#header.length
  }
}
