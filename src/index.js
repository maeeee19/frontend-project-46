import path from 'path';
import { readFileSync } from 'fs';
import parsers from './parsers.js';
import formatDiff from './formatDiff.js';
import buildTree from './tree.js';
import require from 'requirejs';

const process = require('node:process');
const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);
const getData = (filepath) => parsers(readFileSync(filepath, 'utf-8'), getTypeFile(filepath));
const buildFullPath = (filepath) => path.join(process.cwd(), filepath);

export default (pathFile1, pathFile2, formatName = 'stylish') => {
  const dataFile1 = getData(buildFullPath(pathFile1));
  const dataFile2 = getData(buildFullPath(pathFile2));
  const diff = buildTree(dataFile1, dataFile2);
  return formatDiff(diff, formatName);
};