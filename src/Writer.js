import { writeFile } from 'node:fs/promises'

export class Writer {
  static async write(filename, data) {
    try {
      await writeFile(filename, data)
      return
    } catch (err) {
      console.error(err)
    }
  }
}
