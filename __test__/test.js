import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const getFixturePath = (filename, dir) => {
  const __filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(__filename);

<<<<<<< HEAD
 return path.join(dirname, '..', dir ? `__fixtures__/${dir}` : '__fixtures__', filename);
};

const file1Data = ['file1.json', 'file1.yaml', 'file1.yml']
const file2Data = ['file2.json', 'file2.yaml', 'file2.yml']
const formats = ['stylish', 'plain', 'json']
=======
  return path.join(dirname, '..', dir ? `__fixtures__/${dir}` : '__fixtures__', filename);
};

const file1Data = ['file1.json', 'file1.yaml', 'file1.yml'];
const file2Data = ['file2.json', 'file2.yaml', 'file2.yml'];
const formats = ['stylish', 'plain', 'json'];
const types = ['flat', 'deep'];
>>>>>>> 7ec56c45578ae1adb895f16d1ff9463ff5183f77

const expectTest = (file1, file2, format) => {
  expect(
<<<<<<< HEAD
      genDiff(getFixturePath(file1), getFixturePath(file2), format),
    ).toEqual(fs.readFileSync(getFixturePath(`${format}-result.txt`), 'utf-8'));
}
=======
    genDiff(getFixturePath(file1, type), getFixturePath(file2, type), format),
  ).toEqual(fs.readFileSync(getFixturePath(`${format}-${type}-result.txt`), 'utf-8'));
};
>>>>>>> 7ec56c45578ae1adb895f16d1ff9463ff5183f77

file1Data.forEach((file1) => {
  file2Data.forEach((file2) => {
    formats.forEach((format) => {
<<<<<<< HEAD
      test(`equal ${file1} with ${file2} in ${format} format`, () => {
        expectTest(file1, file2, format);
      });
    });
  });
});
=======
      types.forEach((type) => {
        test(`${type} equal ${file1} with ${file2} in ${format} format`, () => {
          expectTest(file1, file2, format, type);
        });
      });
    });
  });
});
>>>>>>> 7ec56c45578ae1adb895f16d1ff9463ff5183f77
