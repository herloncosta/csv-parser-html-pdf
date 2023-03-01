import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export class Reader {
  async read(filepath) {
    const path = this.resolve(filepath)

    try {
      return await readFile(path, 'utf8')
    } catch (err) {
      throw new Error(err)
    }
  }

  resolve(filepath) {
    const path = filepath.split('/')
    return resolve(...path)
  }
}
