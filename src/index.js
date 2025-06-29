import fs from 'fs'
import path from 'path'
import process from 'process'
import parse from './parsers.js'
import formatDiff from './formatDiff.js'
import buildTree from './tree.js'

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath)

const extractFileFormat = (filepath) => path.extname(filepath).slice(1)

const getData = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8')

export default (pathFile1, pathFile2, formatName = 'stylish') => {
  const dataFile1 = getData(pathFile1)
  const dataFile2 = getData(pathFile2)
  const format1 = extractFileFormat(pathFile1)
  const format2 = extractFileFormat(pathFile2)

  const parsedDataFile1 = parse(dataFile1, format1)
  const parsedDataFile2 = parse(dataFile2, format2)

  const diff = buildTree(parsedDataFile1, parsedDataFile2)
  return formatDiff(diff, formatName)
}
