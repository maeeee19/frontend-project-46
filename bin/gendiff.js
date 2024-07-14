#!/usr/bin/env node

import { program } from 'commander';
import process from 'process'; 

program
  .version('1.0.0') 
  .option('-v', 'output the version number')
  .option('-h', 'output usage information') 
  .parse(process.argv);

if (program.help) {
  console.log('  Usage: gendiff [options] <filepath1> <filepath2>');
  console.log('  Compares two configuration files and shows a difference.');
  console.log('');
  console.log('  Options:');
  console.log('    -V, --version        output the version number');
  console.log('    -f, --format [type]  output format');
  console.log('    -h, --help           output usage information');
}
