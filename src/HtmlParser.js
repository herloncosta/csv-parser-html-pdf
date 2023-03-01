import { renderFile } from 'ejs'
import { resolve } from 'node:path'

export class HtmlParser {
  static async parse(table) {
    try {
      const root = resolve('src', 'views', 'index.ejs')
      const options = {
        headers: table.header,
        rows: table.rows,
      }
      return await renderFile(root, options)
    } catch (err) {
      console.error(err)
    }
  }
}
