import { create } from 'html-pdf'

export class PDFWriter {
  static write(filename, html) {
    try {
      create(html, {}).toFile(filename, (err) => err)
    } catch (err) {
      console.error(err)
    }
  }
}
