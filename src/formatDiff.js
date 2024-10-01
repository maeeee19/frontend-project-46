import jsonFormatter from './JSON.js';
import stylishFormatter from './styl.js';
import plainFormatter from './plain.js';

export default (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormatter(diffTree);
    case 'plain':
      return plainFormatter(diffTree);
    case 'json':
      return jsonFormatter(diffTree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};