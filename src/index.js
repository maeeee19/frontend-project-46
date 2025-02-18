import parsers from './parsers.js';
import formatDiff from './formatDiff.js';
import buildTree from './tree.js';

export default (pathFile1, pathFile2, formatName = 'stylish') => {
  const dataFile1 = parsers(pathFile1);
  const dataFile2 = parsers(pathFile2);
  const diff = buildTree(dataFile1, dataFile2);
  return formatDiff(diff, formatName);
};
