#!/usr/bin/env node
'use strict'

const chalk = require('chalk')
const boxen = require('boxen')

const output = '            ' + chalk.bold.white.bgCyan('    Luke Storry     ') +
  '\n' + '            ' + chalk.white.bgCyan(' Software Developer ')
  + '\n' + '\n' + '               ' + chalk.cyan('https://lkst.uk')
  + '\n'
  + '\n' + chalk.white.bold('     GitHub: ') + chalk.gray('https://github.com/') + chalk.green('lukestorry')
  + '\n' + chalk.white.bold('    Twitter: ') + chalk.gray('https://twitter.com/') + chalk.cyan('lukestorry')
  + '\n' + chalk.white.bold('   LinkedIn: ') + chalk.gray('https://linkedin.com/in/') + chalk.blue('lukestorry')
  + '\n' + chalk.white.bold('  this card: ') + chalk.red('npx luke')

console.log(chalk.cyan(boxen(output, { borderStyle: 'double', padding: 1, margin: 1, backgroundColor: 'black' })))
