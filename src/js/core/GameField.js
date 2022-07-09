export default class GameField {
  constructor(rowCount, columnCount, CellClass) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.CellClass = CellClass;
    this.field = null;

    this.init();
  }

  checkFieldBoundary({ column, row }) {
    if (
      row >= this.field.length ||
      column >= this.field[row].length ||
      column < 0 ||
      row < 0
    ) {
      throw new Error('out of field bound');
    }
  }

  init() {
    this.field = Array(this.rowCount)
      .fill(0).map((rowCount, row) => Array(this.columnCount)
      .fill(0).map((rowCount, column) => new this.CellClass({ row, column })));
  }
}
