import { resolve } from 'node:path'

import { Reader } from './Reader.js'
import { Processor } from './Processor.js'
import { Table } from './Table.js'
import { HtmlParser } from './HtmlParser.js'
import { Writer } from './Writer.js'
import { PDFWriter } from './PDFWriter.js'

const outputHTML = resolve('public/index.html')
const outputPDF = resolve(`pdfs/${Date.now()}.pdf`)

const reader = new Reader()

async function main() {
  const data = await reader.read('src/resources/dados.csv')
  const rows = Processor.process(data)

  const table = new Table(rows)
  const html = await HtmlParser.parse(table)

  await Writer.write(outputHTML, html)
  PDFWriter.write(outputPDF, html)
}

main()
