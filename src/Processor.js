export class Processor {
  static process(data) {
    const rows = data.split('\r\n')
    return rows.map((row) => row.split(','))
  }
}
