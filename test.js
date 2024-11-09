import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../index.js';
import jest from 'jest';

const getFixturePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '..', '__fixtures__', filename);
};

const data = [
  {
    name: 'gendiffJSON',
    file1: 'file1.json',
    file2: 'file2.json',
    format: 'stylish',
    txt: 'stylish.text.txt',
  }
];

data.forEach(({
  name, file1, file2, format, txt,
}) => jest.test(`${name}`, () => {
  jest.expect(
    genDiff(getFixturePath(file1), getFixturePath(file2), format),
  ).toEqual(fs.readFileSync(getFixturePath(txt), 'utf-8'));
}));