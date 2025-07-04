#!/usr/bin/env node

import { Command } from 'commander'
import require from 'requirejs'
import genDiff from '../src/index.js'

const process = require('node:process')

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format: "stylish", "plain" or "json"', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format))
  })

program.parse(process.argv)
