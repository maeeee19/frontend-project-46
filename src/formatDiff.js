import formatters from './formatters/index.js';

export default (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return formatters.stylishFormatter(diffTree);
    case 'plain':
      return formatters.plainFormatter(diffTree);
    case 'json':
      return formatters.jsonFormatter(diffTree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
